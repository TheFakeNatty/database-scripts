use('Test-Data');

console.log("Starting the operations:"); 

const startTime = new Date();

var myList = db.getCollectionNames();

myList.forEach(function(entry) {
    if(["8014","8015","8016","8017","8018","8019"].includes(entry)){
        db.getCollection(entry).drop()
    }
    
});

const endTime = new Date();

const elapsedTime = endTime - startTime;

console.log(elapsedTime);