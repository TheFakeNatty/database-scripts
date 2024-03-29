// Select the database to use.
use('Sorted_Grouped');

console.log("Starting the operations:"); 

const startTime = new Date();

var myList = db.getCollectionNames();

myList.forEach(function(entry) {
  if (entry == 'main'){
    ;
  }
  else if ((entry.includes('system.'))){
    console.log(entry);
  }
  else {
    var settmp = db.getCollection(entry).aggregate(
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
        $merge: 
        {
          into: entry,
          whenMatched: "merge",
          whenNotMatched: "discard"
        }
      }
    );
    
    console.log(settmp);
    
    var setopt = db.getCollection(entry).aggregate(
      {
        $match: 
        {
          OPT: { $exists: true },
          OPT: {$regex:  /^\d+\.\d+$/ } 
        }
      },
      { 
        $set: {
          "OPT": {
            $cond: {
              if: { $eq:["$OPT", null] },
              then: null,
              else: {$toDouble: "$OPT"}
            }
          }
        }
      },
      {
        $merge: 
        {
          into: entry,
          whenMatched: "merge",
          whenNotMatched: "discard"
        }
      }
    );
    console.log(setopt);
    
    var sethdt = db.getCollection(entry).aggregate(
      {
        $match: 
        {
          HDT: { $exists: true },
          HDT: {$regex:  /^\d+\.\d+$/ } 
        }
      },
      { 
        $set: {
          "HDT": {
            $cond: {
              if: { $eq:["$HDT", null] },
              then: null,
              else: {$toDouble: "$HDT"}
            }
          }
        }
      },
      {
        $merge: 
        {
          into: entry,
          whenMatched: "merge",
          whenNotMatched: "discard"
        }
      }
    );
    
    console.log(sethdt);
    
    var setbat = db.getCollection(entry).aggregate(
      {
        $match: 
        {
          BAT: { $exists: true },
          BAT: {$regex:  /^\d+\.\d+$/ } 
        }
      },
      { 
        $set: {
          "BAT": {
            $cond: {
              if: { $eq:["$BAT", null] },
              then: null,
              else: {$toDouble: "$BAT"}
            }
          }
        }
      },
      {
        $merge: 
        {
          into: entry,
          whenMatched: "merge",
          whenNotMatched: "discard"
        }
      }
    );
    
    console.log(setbat);
    
    db.getCollection(entry).aggregate(
      {
        $match: 
        {
          BAR: { $exists: true },
          BAR: {$regex:  /^\d+\.\d+$/ } 
        }
      },
      { 
        $set: {
          "BAR": {
            $cond: {
              if: { $eq:["$BAR", null] },
              then: null,
              else: {$toDouble: "$BAR"}
            }
          }
        }
      },
      {
        $merge: 
        {
          into: entry,
          whenMatched: "merge",
          whenNotMatched: "discard"
        }
      }
    );
    
    db.getCollection(entry).aggregate(
      {
        $match: 
        {
          HDH: { $exists: true },
          HDH: {$regex:  /^\d+\.\d+$/ } 
        }
      },
      { 
        $set: {
          "HDH": {
            $cond: {
              if: { $eq:["$HDH", null] },
              then: null,
              else: {$toDouble: "$HDH"}
            }
          }
        }
      },
      {
        $merge: 
        {
          into: entry,
          whenMatched: "merge",
          whenNotMatched: "discard"
        }
      }
    );
  };
});

const endTime = new Date();

const elapsedTime = endTime - startTime;

console.log(elapsedTime);
