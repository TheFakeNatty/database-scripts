use('Sorted_Optimized');

console.log("Starting the operations:"); 

const startTime = new Date();

db.getCollection('IoT_Devices').aggregate([
    {
        $match: {
            "metadata.ID": {$exists: true}
        }
    },
    {
        $project:{
            _id: "$metadata.ID",
            OPT: {$ifNull: ["$reading.OPT", null] },
            TMP: {$ifNull: ["$reading.TMP", null] },
            BAT: {$ifNull: ["$reading.BAT", null] },
            HDT: {$ifNull: ["$reading.HDT", null] },
            BAR: {$ifNull: ["$reading.BAR", null] },
            HDH: {$ifNull: ["$reading.HDH", null] }
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