use('Unsorted');

var collection = 'IoT_Devices'

var defaultEntries = ["TIME","TMP","BAR","HDT","_id","ID","OPT","HDH","BAT"];

console.log("Starting the operations:"); 

const startTime = new Date();

var someVals = db.getCollection(collection).find({
    $where: function() {
        var defaultEntries = ["TIME","TMP","BAR","HDT","_id","ID","OPT","HDH","BAT"];
        for (var key in this) {
            if (!defaultEntries.includes(key)) {
              return true;
         }
        }
        return false;
    }
});  

var docs = someVals.toArray();

docs.forEach(function(doc){
    var unsetFields = {};
    for (var key in doc) {
        if (!defaultEntries.includes(key)) {
            unsetFields[key] = "";
        }
    }
    
    if (Object.keys(unsetFields).length > 0) {
        db.getCollection(collection).updateOne(
            { _id: doc._id }, // Assuming you have an _id field for each document
            { $unset: unsetFields }
        );
    }
});

// This is how you print it - console.log(JSON.stringify(doc.TMP));

const endTime = new Date();

const elapsedTime = endTime - startTime;

console.log(elapsedTime);