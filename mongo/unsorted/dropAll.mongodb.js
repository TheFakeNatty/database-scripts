use('Unsorted');

console.log("Starting the operations:"); 

const startTime = new Date();
var collection_id = 'IoT_Devices'

db.getCollection(collection_id).drop();

const endTime = new Date();

const elapsedTime = endTime - startTime;

console.log(elapsedTime);