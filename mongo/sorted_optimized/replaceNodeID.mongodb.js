use('Sorted_Optimized');

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
db.getCollection(collection_id).updateMany(
  { "metadata.ID": "8005" },
  { $set: { "metadata.ID": "8500" } }
);
db.getCollection(collection_id).updateMany(
  { "metadata.ID": "8006" },
  { $set: { "metadata.ID": "8600" } }
);
db.getCollection(collection_id).updateMany(
  { "metadata.ID": "8007" },
  { $set: { "metadata.ID": "8700" } }
);
db.getCollection(collection_id).updateMany(
  { "metadata.ID": "8008" },
  { $set: { "metadata.ID": "8800" } }
);
db.getCollection(collection_id).updateMany(
  { "metadata.ID": "8010" },
  { $set: { "metadata.ID": "81000" } }
);
db.getCollection(collection_id).updateMany(
  { "metadata.ID": "8011" },
  { $set: { "metadata.ID": "8110" } }
);
db.getCollection(collection_id).updateMany(
  { "metadata.ID": "8012" },
  { $set: { "metadata.ID": "8120" } }
);
db.getCollection(collection_id).updateMany(
  { "metadata.ID": "8013" },
  { $set: { "metadata.ID": "81300" } }
);
db.getCollection(collection_id).updateMany(
  { "metadata.ID": "8014" },
  { $set: { "metadata.ID": "81400" } }
);
db.getCollection(collection_id).updateMany(
  { "metadata.ID": "8015" },
  { $set: { "metadata.ID": "81500" } }
);
db.getCollection(collection_id).updateMany(
  { "metadata.ID": "8016" },
  { $set: { "metadata.ID": "81600" } }
);
db.getCollection(collection_id).updateMany(
  { "metadata.ID": "8017" },
  { $set: { "metadata.ID": "81700" } }
);
db.getCollection(collection_id).updateMany(
  { "metadata.ID": "8018" },
  { $set: { "metadata.ID": "81800" } }
);
db.getCollection(collection_id).updateMany(
  { "metadata.ID": "8019" },
  { $set: { "metadata.ID": "81900" } }
);




const endTime = new Date();

const elapsedTime = endTime - startTime;

console.log(elapsedTime);