use('Sorted_Grouped');

console.log("Starting the operations:"); 

const startTime = new Date();

var collectionID = '8004';

db.getCollection(collectionID).aggregate([
    {
        $match: {
            "metadata.ID": {$exists: true}
        }
    },
    {
        $project:{
            _id: "$metadata.ID",
            OPT: "$OPT",
            TMP: "$TMP",
            BAT: "$BAT",
            HDT: "$HDT",
            BAR: "$BAR",
            HDH: "$HDH"
        }
    },
    {
        $group: {
            _id: "$_id",
            avgTMP: { $avg: "$TMP" },
            avgOPT: { $avg: "$OPT" },
            avgBAT: { $avg: "$BAT" },
            avgHDT: { $avg: "$HDT" },
            avgBAR: { $avg: "$BAR" },
            avgHDH: { $avg: "$HDH" }
        }
    },
    {
        $project: {
            _id: "$_id",
            avgTMP: "$avgTMP",
            avgOPT: "$avgOPT",
            avgBAT: "$avgBAT",
            avgHDT: "$avgHDT",
            avgBAR: "$avgBAR",
            avgHDH: "$avgHDH"
        }
    },
    {
        $merge:
        {
        into: "metrics",
        whenMatched:"merge",
        whenNotMatched: "insert"
        }
    }
]);



// Printing out the stop time for the run to console. 

const endTime = new Date();

const elapsedTime = endTime - startTime;

console.log(elapsedTime);