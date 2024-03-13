use('Test-Data');

console.log("Starting the operations:"); 

const startTime = new Date();

db.getCollection('IoT_Devices').aggregate([
    {
        $match: {
            "metadata.ID": '8001'
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