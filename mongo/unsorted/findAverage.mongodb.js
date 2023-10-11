use('Unsorted');

console.log("Starting the operations:"); 

const startTime = new Date();

var collection = 'IoT_Devices';

var uniqueID = db.getCollection(collection).distinct("ID");

uniqueID.forEach(function(ID){
    db.getCollection(collection).aggregate(
        {
            $match:
            {
                "ID" : ID,
                TMP : {$exists: true}
            }
        },
        {
            $group: {
                _id: "$ID",
                avgTMP: {$avg: "$TMP"}

            }
        },
        {
            $merge: 
            {
            into: "metrics",
            whenMatched: "merge",
            whenNotMatched: "insert"
            }
        }
    );
    db.getCollection(collection).aggregate(
        {
            $match:
            {
                "ID" : ID,
                BAT : {$exists: true}
            }
        },
        {
            $group: {
                _id: "$ID",
                avgBAT: {$avg: "$BAT"}

            }
        },
        {
            $merge: 
            {
            into: "metrics",
            whenMatched: "merge",
            whenNotMatched: "insert"
            }
        }
    );
    db.getCollection(collection).aggregate(
        {
            $match:
            {
                "ID" : ID,
                OPT : {$exists: true}
            }
        },
        {
            $group: {
                _id: "$ID",
                avgOPT: {$avg: "$OPT"}

            }
        },
        {
            $merge: 
            {
            into: "metrics",
            whenMatched: "merge",
            whenNotMatched: "insert"
            }
        }
    );
    db.getCollection(collection).aggregate(
        {
            $match:
            {
                "ID" : ID,
                HDT : {$exists: true}
            }
        },
        {
            $group: {
                _id: "$ID",
                avgHDT: {$avg: "$HDT"}

            }
        },
        {
            $merge: 
            {
            into: "metrics",
            whenMatched: "merge",
            whenNotMatched: "insert"
            }
        }
    );
    db.getCollection(collection).aggregate(
        {
            $match:
            {
                "ID" : ID,
                BAR : {$exists: true}
            }
        },
        {
            $group: {
                _id: "$ID",
                avgBAR: {$avg: "$BAR"}

            }
        },
        {
            $merge: 
            {
            into: "metrics",
            whenMatched: "merge",
            whenNotMatched: "insert"
            }
        }
    );
    db.getCollection(collection).aggregate(
        {
            $match:
            {
                "ID" : ID,
                HDH : {$exists: true}
            }
        },
        {
            $group: {
                _id: "$ID",
                avgHDH: {$avg: "$HDH"}

            }
        },
        {
            $merge: 
            {
            into: "metrics",
            whenMatched: "merge",
            whenNotMatched: "insert"
            }
        }
    );
    db.getCollection(collection).aggregate(
        {
            $match:
            {
                "ID" : ID,
                BAT : {$exists: true}
            }
        },
        {
            $group: {
                _id: "$ID",
                avgBAT: {$avg: "$BAT"}

            }
        },
        {
            $merge: 
            {
            into: "metrics",
            whenMatched: "merge",
            whenNotMatched: "insert"
            }
        }
    );
});



const endTime = new Date();

const elapsedTime = endTime - startTime;

console.log(elapsedTime);


// Printing out the stop time for the run to console. 
