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

var startDate = convertDate(new Date("2017-05-01"));

var endDate = convertDate(new Date("2022-05-01"));

let tempDate = startDate;

use('Sorted_Grouped_Optimized');

var myList = db.getCollectionNames();

// While loop iterates over every month by incrementing the month by one per loop.
while( tempDate <= endDate){

    // Loop through all the collections of devices
    myList.forEach(function(collection){
        var keyName = collection + '_' + tempDate;
        var resultSet= db.getCollection(collection).aggregate([
            {
                $match: {
                    "metadata.ID": collection,
                    TIME: { $exists: true },
                    TIME: { $gte: new Date(tempDate), $lt: new Date(addOneMonth(tempDate)) }
                },
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
                maxTMP: { $max: "$TMP" },
                minTMP: { $min: "$TMP" },
                avgOPT: { $avg: "$OPT" },
                maxOPT: { $max: "$OPT" },
                minOPT: { $min: "$OPT" },
                avgBAT: { $avg: "$BAT" },
                maxBAT: { $max: "$BAT" },
                minBAT: { $min: "$BAT" },
                avgHDT: { $avg: "$HDT" },
                maxHDT: { $max: "$HDT" },
                minHDT: { $min: "$HDT" },
                avgBAR: { $avg: "$BAR" },
                maxBAR: { $max: "$BAR" },
                minBAR: { $min: "$BAR" },
                avgHDH: { $avg: "$HDH" },
                maxHDH: { $max: "$HDH" },
                minHDH: { $min: "$HDH" }
            }
            },
            {
                $project: {
                    _id: "$_id",
                    avgTMP : "$avgTMP",
                    maxTMP: "$maxTMP",
                    minTMP: "$minTMP",
                    avgOPT : "$avgOPT",
                    maxOPT: "$maxOPT",
                    minOPT: "$minOPT",
                    avgBAT : "$avgBAT",
                    maxBAT: "$maxBAT",
                    minBAT: "$minBAT",
                    avgHDT : "$avgHDT",
                    maxHDT: "$maxHDT",
                    minHDT: "$minHDT",
                    avgBAR : "$avgBAR",
                    maxBAR: "$maxBAR",
                    minBAR: "$minBAR",
                    avgHDH : "$avgHDH",
                    maxHDH: "$maxHDH",
                    minHDH: "$minHDH",
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
                        [collection + ".TMP"]: { avgTMP: doc.avgTMP, maxTMP: doc.maxTMP, minTMP: doc.minTMP },
                        [collection + ".OPT"]: { avgOPT: doc.avgOPT, maxOPT: doc.maxOPT, minOPT: doc.minOPT },
                        [collection + ".BAT"]: { avgBAT: doc.avgBAT, maxBAT: doc.maxBAT, minBAT: doc.minBAT },
                        [collection + ".HDT"]: { avgHDT: doc.avgHDT, maxHDT: doc.maxHDT, minHDT: doc.minHDT },
                        [collection + ".BAR"]: { avgBAR: doc.avgBAR, maxBAR: doc.maxBAR, minBAR: doc.minBAR },
                        [collection + ".HDH"]: { avgHDH: doc.avgHDH, maxHDH: doc.maxHDH, minHDH: doc.minHDH },

                    }
                }
            )
        });
    });
    tempDate = addOneMonth(tempDate);
}

const endTime = new Date();

const elapsedTime = endTime - startTime;

console.log(elapsedTime);
        