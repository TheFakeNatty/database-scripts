//Converting the Date Object to a String Format
const convertDate = (convertDate) => {
    var convertYear = convertDate.getFullYear();
    var convertMonth = String(convertDate.getMonth() + 1).padStart(2, '0');
    var convertDay = String(convertDate.getDate()).padStart(2, '0');
    var dateString = `${convertYear}-${convertMonth}-${convertDay}`;
    return dateString
}

// Function to add a month to iterate over 
const addOneMonth = (inputDate) => {
    const date = new Date(inputDate);
    date.setMonth(date.getMonth() + 1);
  
    // Format the new date as "YYYY-MM-DD"
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const newDate = `${year}-${month}-${day}`;
  
    return newDate;
}

console.log("Starting the operations:"); 

const startTime = new Date();

use('Unsorted');

var collection = "IoT_Devices"

var startDate = convertDate(new Date("2017-05-01"));

var endDate = convertDate(new Date("2022-05-01"));

let tempDate = startDate;

var uniqueKey = db.getCollection(collection).distinct("ID")

// While loop iterates over every month by incrementing the month by one per loop.
while( tempDate <= endDate){

    // Loop through all the collections of devices
    uniqueKey.forEach(function(deviceID){
        var keyName = deviceID + '_' + tempDate;
        
        //Calculating the TMP Metrics
        var resultSet = db.getCollection("IoT_Devices").aggregate([
            {
            $match: {
                ID: deviceID,
                TMP: { $exists: true },
                TIME: { $exists: true },
                TIME: { $gte: new ISODate(tempDate), $lt: new ISODate(addOneMonth(tempDate)) }
            }
            },
            {
            $group: {
                _id: "$ID",
                avgTMP: { $avg: "$TMP" },
                maxTMP: { $max: "$TMP" },
                minTMP: { $min: "$TMP" }
            }
            },
            {
                $project: {
                    _id: "$_id",
                    DeviceID : deviceID,
                    avgTMP : "$avgTMP",
                    maxTMP: "$maxTMP",
                    minTMP: "$minTMP"
                }
            }
        ]);
        
        //Updating the entry with the aggregate information.
        resultSet.forEach(function(doc){
            var objectID = "Monthly-" + tempDate
    
            if (!(db.getCollection('metrics').findOne({_id: objectID}))){
                db.getCollection('metrics').insertOne({_id: objectID})
            }
            db.getCollection('metrics').updateOne(
                {
                    _id: objectID
                }, 
                {
                    $set: {
                        [deviceID + ".TMP"]: { avgTMP: doc.avgTMP, maxTMP: doc.maxTMP, minTMP: doc.minTMP }
                    }
                }
            )
        });

        var resultSet = db.getCollection("IoT_Devices").aggregate([
            {
            $match: {
                ID: deviceID,
                BAR: { $exists: true },
                BAR: {$type: "double"},
                TIME: { $exists: true },
                TIME: { $gte: new ISODate(tempDate), $lt: new ISODate(addOneMonth(tempDate)) }
            }
            },
            {
            $group: {
                _id: "$ID",
                avgBAR: { $avg: "$BAR" },
                maxBAR: { $max: "$BAR" },
                minBAR: { $min: "$BAR" }
            }
            },
            {
                $project: {
                    _id: "$_id",
                    DeviceID : deviceID,
                    avgBAR : "$avgBAR",
                    maxBAR: "$maxBAR",
                    minBAR: "$minBAR"
                }
            }
        ]);
    
        resultSet.forEach(function(doc){
            var objectID = "Monthly-" + tempDate
    
            if (!(db.getCollection('metrics').findOne({_id: objectID}))){
                db.getCollection('metrics').insertOne({_id: objectID})
            }
            db.getCollection('metrics').updateOne(
                {
                    _id: objectID
                }, 
                {
                    $set: {
                        [deviceID + ".BAR"]: { avgBAR: doc.avgBAR, maxBAR: doc.maxBAR, minBAR: doc.minBAR }
                    }
                }
            )
        });

        //Setting the HDT Values
        var resultSet = db.getCollection("IoT_Devices").aggregate([
            {
            $match: {
                ID: deviceID,
                HDT: { $exists: true },
                HDT: {$type: "double"},
                TIME: { $exists: true },
                TIME: { $gte: new ISODate(tempDate), $lt: new ISODate(addOneMonth(tempDate)) }
            }
            },
            {
            $group: {
                _id: "$ID",
                avgHDT: { $avg: "$HDT" },
                maxHDT: { $max: "$HDT" },
                minHDT: { $min: "$HDT" }
            }
            },
            {
                $project: {
                    _id: "$_id",
                    DeviceID : deviceID,
                    avgHDT : "$avgHDT",
                    maxHDT: "$maxHDT",
                    minHDT: "$minHDT"
                }
            }
        ]);
    
        resultSet.forEach(function(doc){
            var objectID = "Monthly-" + tempDate
    
            if (!(db.getCollection('metrics').findOne({_id: objectID}))){
                db.getCollection('metrics').insertOne({_id: objectID})
            }
            db.getCollection('metrics').updateOne(
                {
                    _id: objectID
                }, 
                {
                    $set: {
                        [deviceID + ".HDT"]: { avgHDT: doc.avgHDT, maxHDT: doc.maxHDT, minHDT: doc.minHDT }
                    }
                }
            )
        });
        //Setting the HDH Values
        var resultSet = db.getCollection("IoT_Devices").aggregate([
            {
            $match: {
                ID: deviceID,
                HDH: { $exists: true },
                HDH: {$type: "double"},
                TIME: { $exists: true },
                TIME: { $gte: new ISODate(tempDate), $lt: new ISODate(addOneMonth(tempDate)) }
            }
            },
            {
            $group: {
                _id: "$ID",
                avgHDH: { $avg: "$HDH" },
                maxHDH: { $max: "$HDH" },
                minHDH: { $min: "$HDH" }
            }
            },
            {
                $project: {
                    _id: "$_id",
                    DeviceID : deviceID,
                    avgHDH : "$avgHDH",
                    maxHDH: "$maxHDH",
                    minHDH: "$minHDH"
                }
            }
        ]);
    
        resultSet.forEach(function(doc){
            var objectID = "Monthly-" + tempDate
    
            if (!(db.getCollection('metrics').findOne({_id: objectID}))){
                db.getCollection('metrics').insertOne({_id: objectID})
            }
            db.getCollection('metrics').updateOne(
                {
                    _id: objectID
                }, 
                {
                    $set: {
                        [deviceID + ".HDH"]: { avgHDH: doc.avgHDH, maxHDH: doc.maxHDH, minHDH: doc.minHDH }
                    }
                }
            )
        });
        //Setting the OPT Values
        var resultSet = db.getCollection("IoT_Devices").aggregate([
            {
            $match: {
                ID: deviceID,
                OPT: { $exists: true },
                OPT: {$type: "double"},
                TIME: { $exists: true },
                TIME: { $gte: new ISODate(tempDate), $lt: new ISODate(addOneMonth(tempDate)) }
            }
            },
            {
            $group: {
                _id: "$ID",
                avgOPT: { $avg: "$OPT" },
                maxOPT: { $max: "$OPT" },
                minOPT: { $min: "$OPT" }
            }
            },
            {
                $project: {
                    _id: "$_id",
                    DeviceID : deviceID,
                    avgOPT : "$avgOPT",
                    maxOPT: "$maxOPT",
                    minOPT: "$minOPT"
                }
            }
        ]);
    
        resultSet.forEach(function(doc){
            var objectID = "Monthly-" + tempDate
    
            if (!(db.getCollection('metrics').findOne({_id: objectID}))){
                db.getCollection('metrics').insertOne({_id: objectID})
            }
            db.getCollection('metrics').updateOne(
                {
                    _id: objectID
                }, 
                {
                    $set: {
                        [deviceID + ".OPT"]: { avgOPT: doc.avgOPT, maxOPT: doc.maxOPT, minOPT: doc.minOPT }
                    }
                }
            )
        });
        //Setting the BAT Values
        var resultSet = db.getCollection("IoT_Devices").aggregate([
            {
            $match: {
                ID: deviceID,
                BAT: { $exists: true },
                BAT: {$type: "double"},
                TIME: { $exists: true },
                TIME: { $gte: new ISODate(tempDate), $lt: new ISODate(addOneMonth(tempDate)) }
            }
            },
            {
            $group: {
                _id: "$ID",
                avgBAT: { $avg: "$BAT" },
                maxBAT: { $max: "$BAT" },
                minBAT: { $min: "$BAT" }
            }
            },
            {
                $project: {
                    _id: "$_id",
                    DeviceID : deviceID,
                    avgBAT : "$avgBAT",
                    maxBAT: "$maxBAT",
                    minBAT: "$minBAT"
                }
            }
        ]);
    
        resultSet.forEach(function(doc){
            var objectID = "Monthly-" + tempDate
    
            if (!(db.getCollection('metrics').findOne({_id: objectID}))){
                db.getCollection('metrics').insertOne({_id: objectID})
            }
            db.getCollection('metrics').updateOne(
                {
                    _id: objectID
                }, 
                {
                    $set: {
                        [deviceID + ".BAT"]: { avgBAT: doc.avgBAT, maxBAT: doc.maxBAT, minBAT: doc.minBAT }
                    }
                }
            )
        });
    });

    tempDate = addOneMonth(tempDate);
}

// Printing out the stop time for the run to console. 

const endTime = new Date();

const elapsedTime = endTime - startTime;

console.log(elapsedTime);
