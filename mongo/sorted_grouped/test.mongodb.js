use('Test-Data');

db.createCollection(
    "8002_new", {
        timeseries:{
            timeField: "TIME",
            metaField: "metadata"
        }
    }
)

db.getCollection('8002').aggregate(
    {
    $match: 
    {
        "metadata.TMP": { $exists: true },
        "metadata.TMP": {$regex:  /^\d+\.\d+$/ } 
    }
    },
    { 
    $set: {
        "metadata.TMP": {
        $cond: {
            if: { $eq:["$metadata.TMP", null] },
            then: null,
            else: {$toDouble: "$metadata.TMP"}
        }
        }
    }
    },
    {
        $out: "8002_new"
    }
);
