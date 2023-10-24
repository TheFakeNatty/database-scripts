use('Unsorted');

console.log("Starting the operations:"); 

const startTime = new Date();
var collection_id = 'IoT_Devices'

db.getCollection(collection_id).deleteMany({"ID": "8013"});
db.getCollection(collection_id).deleteMany({"ID": "8014"});
db.getCollection(collection_id).deleteMany({"ID": "8015"});
db.getCollection(collection_id).deleteMany({"ID": "8016"});
db.getCollection(collection_id).deleteMany({"ID": "8017"});
db.getCollection(collection_id).deleteMany({"ID": "8018"});
db.getCollection(collection_id).deleteMany({"ID": "8019"});

const endTime = new Date();

const elapsedTime = endTime - startTime;

console.log(elapsedTime);