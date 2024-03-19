use('Test-Data');

var collection = "IoT_Devices"

use('Test-Data');

var uniqueKey = db.getCollection(collection).distinct("metadata.ID")

console.log(uniqueKey)