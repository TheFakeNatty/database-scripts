use('Unsorted_Grouped');

console.log("Starting the operations:"); 

const startTime = new Date();

var myList = db.getCollectionNames();

myList.forEach(function(collection){
    db.getCollection(collection).aggregate(
        {
            $match:
            {
                "ID" : collection,
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
                "ID" : collection,
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
                "ID" : collection,
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
                "ID" : collection,
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
                "ID" : collection,
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
                "ID" : collection,
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
                "ID" : collection,
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
