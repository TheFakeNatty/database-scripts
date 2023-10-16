use('Test-Data');

console.log("Starting the operations:"); 

const startTime = new Date();

var collection_id = 'IoT_Devices'

db.getCollection(collection_id).updateMany(
    { "metadata.ID": "8001" },
    { $set: { "metadata.ID": "8100" } }
  );
  db.getCollection(collection_id).updateMany(
    { "metadata.ID": "8002" },
    { $set: { "metadata.ID": "8200" } }
  );
  db.getCollection(collection_id).updateMany(
    { "metadata.ID": "8003" },
    { $set: { "metadata.ID": "8300" } }
  );
  db.getCollection(collection_id).updateMany(
    { "metadata.ID": "8004" },
    { $set: { "metadata.ID": "8400" } }
  );


const endTime = new Date();

const elapsedTime = endTime - startTime;

console.log(elapsedTime);