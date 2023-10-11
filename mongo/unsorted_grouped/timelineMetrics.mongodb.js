use('Test-Data');

console.log("Starting the operations:"); 

const startTime = new Date();

var myList = db.getCollectionNames();

db.getCollection('8001').aggregate(
    {
      $match: 
      {
        TIME: { $exists: true }
      }
    },
    { 
      $set: {
        "TIME": {
          $cond: {
            if: { $eq:["$TIME", null] },
            then: null,
            else: {$dateFromString:{
                dateString: "$TIME"
            }}
          }
        }
      }
    },
    {
      $merge: 
      {
        into: '8001',
        whenMatched: "merge",
        whenNotMatched: "discard"
      }
    }
  );
  