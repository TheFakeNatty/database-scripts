use('Test-Data');

console.log("Starting the operations:"); 

const startTime = new Date();
var collection_id = 'IoT_Devices'

db.getCollection(collection_id).deleteMany({"metadata.ID": "8005"});
db.getCollection(collection_id).deleteMany({"metadata.ID": "8006"});
db.getCollection(collection_id).deleteMany({"metadata.ID": "8007"});
db.getCollection(collection_id).deleteMany({"metadata.ID": "8008"});


const endTime = new Date();

const elapsedTime = endTime - startTime;

console.log(elapsedTime);