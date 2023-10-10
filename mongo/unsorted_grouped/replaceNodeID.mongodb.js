use('Test-Data');

console.log("Starting the operations:"); 

const startTime = new Date();

var myList = db.getCollectionNames();

myList.forEach(function(entry) {
    if (entry == '8400'){
        db.getCollection(entry).updateMany(
            {"ID": {$exists:true} },
            {$set: {"ID": "8004"} }
        );
        db['8400'].renameCollection('8004');
    }
    if (entry == '8300'){
        db.getCollection(entry).updateMany(
            {"ID": {$exists:true} },
            {$set: {"ID": "8003"} }
        );
        db['8300'].renameCollection('8003');
    }
    if (entry == '8005'){
        db.getCollection(entry).updateMany(
            {"ID": {$exists:true} },
            {$set: {"ID": "8500"} }
        );
        db['8005'].renameCollection('8500');
    }
    if (entry == '8006'){
        db.getCollection(entry).updateMany(
            {"ID": {$exists:true} },
            {$set: {"ID": "8600"} }
        );
        db['8006'].renameCollection('8600');
    }
});

const endTime = new Date();

const elapsedTime = endTime - startTime;

console.log(elapsedTime);