use('Sorted_Grouped');

console.log("Starting the operations:"); 

const startTime = new Date();

var myList = db.getCollectionNames();

myList.forEach(function(entry) {
    if(["8018", "8017", "8016", "8015", "8014"].includes(entry)){
        db.getCollection(entry).drop()
    }
    
});

const endTime = new Date();

const elapsedTime = endTime - startTime;

console.log(elapsedTime);