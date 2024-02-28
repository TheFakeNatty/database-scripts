use('Sorted_Grouped');

console.log("Starting the operations:"); 

const startTime = new Date();

var myList = db.getCollectionNames();

console.log(myList);

var oldID = '8006';

var newID = '8600'

// Ths is just the metadata, the collection name is going to remain the same unless you repush the data

db.getCollection(oldID).updateMany(
    { "metadata.ID": oldID },
    { $set: { "metadata.ID": newID}}
);

db.createCollection(newID, {
    timeseries: { 
        timeField: 'TIME',
        metaField: 'metadata'
    }
});

db.getCollection(oldID).find().forEach(function(doc){
    db.newID.insert(doc);
});

// Printing out the stop time for the run to console. 

const endTime = new Date();

const elapsedTime = endTime - startTime;

console.log(elapsedTime);