// Select the database to use.
use('Test-Data');

// Add this to queries to show the execution time: explain("executionStats")
// Insert a few documents into the sales collection.
// db.getCollection('IoT_Devices').find()

// Average Temperature for DeviceID 8001
/* db.getCollection('IoT_Devices').aggregate([
    // Find all of the sales that occurred in 2014.
    { $match: { ID: '8001' } },
    // Group the total sales for each product.
    { $group: { _id: "$ID", Testing: { $: "$TMP" } } }
  ]);

  */


console.log("Starting the operations:"); 

const startTime = new Date();

var settmp = db.getCollection('IoT_Devices').aggregate(
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
      into: 'IoT_Devices',
      whenMatched: "merge",
      whenNotMatched: "discard"
    }
  }
);

console.log(settmp);

var setopt = db.getCollection('IoT_Devices').aggregate(
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
      into: 'IoT_Devices',
      whenMatched: "merge",
      whenNotMatched: "discard"
    }
  }
);
console.log(setopt);

var sethdt = db.getCollection('IoT_Devices').aggregate(
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
      into: 'IoT_Devices',
      whenMatched: "merge",
      whenNotMatched: "discard"
    }
  }
);

console.log(sethdt);

var setbat = db.getCollection('IoT_Devices').aggregate(
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
      into: 'IoT_Devices',
      whenMatched: "merge",
      whenNotMatched: "discard"
    }
  }
);

console.log(setbat);

db.getCollection('IoT_Devices').aggregate(
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
      into: 'IoT_Devices',
      whenMatched: "merge",
      whenNotMatched: "discard"
    }
  }
);

db.getCollection('IoT_Devices').aggregate(
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
      into: 'IoT_Devices',
      whenMatched: "merge",
      whenNotMatched: "discard"
    }
  }
);

const endTime = new Date();

const elapsedTime = endTime - startTime;

console.log(elapsedTime);






  