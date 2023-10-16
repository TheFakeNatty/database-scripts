// Select the database to use.
use('Test-Data');

var collection_id = "IoT_Devices"

console.log("Starting the operations:"); 

const startTime = new Date();

var settmp = db.getCollection(collection_id).aggregate(
  {
    $match: 
    {
      TMP: { $exists: true },
      TMP: {$regex:  /^\d+\.\d+$/ } 
    }
  },
  { 
    $set: {
      "TMP": {
        $cond: {
          if: { $eq:["$TMP", null] },
          then: null,
          else: {$toDouble: "$TMP"}
        }
      }
    }
  },
  {
    $merge: 
    {
      into: collection_id,
      whenMatched: "merge",
      whenNotMatched: "discard"
    }
  }
);

console.log(settmp);

var setopt = db.getCollection(collection_id).aggregate(
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
      into: collection_id,
      whenMatched: "merge",
      whenNotMatched: "discard"
    }
  }
);
console.log(setopt);

var sethdt = db.getCollection(collection_id).aggregate(
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
      into: collection_id,
      whenMatched: "merge",
      whenNotMatched: "discard"
    }
  }
);

console.log(sethdt);

var setbat = db.getCollection(collection_id).aggregate(
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
      into: collection_id,
      whenMatched: "merge",
      whenNotMatched: "discard"
    }
  }
);

console.log(setbat);

db.getCollection(collection_id).aggregate(
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
      into: collection_id,
      whenMatched: "merge",
      whenNotMatched: "discard"
    }
  }
);

db.getCollection(collection_id).aggregate(
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
      into: collection_id,
      whenMatched: "merge",
      whenNotMatched: "discard"
    }
  }
);

const endTime = new Date();

const elapsedTime = endTime - startTime;

console.log(elapsedTime);






  