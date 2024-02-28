use('Sorted_Grouped');

console.log("Starting the operations:"); 

const startTime = new Date();

var myList = db.getCollectionNames();

myList.forEach(function(entry) {
    db.getCollection(entry).drop()
});

const endTime = new Date();

const elapsedTime = endTime - startTime;

console.log(elapsedTime);