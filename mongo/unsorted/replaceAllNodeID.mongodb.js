use('Test-Data');

console.log("Starting the operations:"); 

const startTime = new Date();

var collection_id = 'IoT_Devices'

db.getCollection(collection_id).updateMany(
    { "ID": "8001" },
    { $set: { "ID": "8100" } }
  );
db.getCollection(collection_id).updateMany(
  { "ID": "8002" },
  { $set: { "ID": "8200" } }
);
db.getCollection(collection_id).updateMany(
  { "ID": "8003" },
  { $set: { "ID": "8300" } }
);
db.getCollection(collection_id).updateMany(
  { "ID": "8004" },
  { $set: { "ID": "8400" } }
);
db.getCollection(collection_id).updateMany(
    { "ID": "8005" },
    { $set: { "ID": "8500" } }
  );
db.getCollection(collection_id).updateMany(
  { "ID": "8006" },
  { $set: { "ID": "8600" } }
);
db.getCollection(collection_id).updateMany(
  { "ID": "8007" },
  { $set: { "ID": "8700" } }
);
db.getCollection(collection_id).updateMany(
  { "ID": "8008" },
  { $set: { "ID": "8800" } }
);
db.getCollection(collection_id).updateMany(
    { "ID": "8010" },
    { $set: { "ID": "8110" } }
  );
db.getCollection(collection_id).updateMany(
  { "ID": "8011" },
  { $set: { "ID": "80011" } }
);
db.getCollection(collection_id).updateMany(
  { "ID": "8012" },
  { $set: { "ID": "83001" } }
);
db.getCollection(collection_id).updateMany(
  { "ID": "8013" },
  { $set: { "ID": "822400" } }
);
db.getCollection(collection_id).updateMany(
    { "ID": "8014" },
    { $set: { "ID": "8101240" } }
  );
db.getCollection(collection_id).updateMany(
  { "ID": "8015" },
  { $set: { "ID": "82552300" } }
);
db.getCollection(collection_id).updateMany(
  { "ID": "8016" },
  { $set: { "ID": "8323400" } }
);
db.getCollection(collection_id).updateMany(
  { "ID": "8017" },
  { $set: { "ID": "8412300" } }
);
db.getCollection(collection_id).updateMany(
    { "ID": "8018" },
    { $set: { "ID": "84123300" } }
  );
  db.getCollection(collection_id).updateMany(
    { "ID": "8019" },
    { $set: { "ID": "8412301230" } }
  );


const endTime = new Date();

const elapsedTime = endTime - startTime;

console.log(elapsedTime);