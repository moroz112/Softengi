

var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
    HWork = indexedDB.open("hWork", 4),
    dbReady = false;


//-----------------------------------------------------
HWork.onerror = function(e){
    console.log("DB Error!", e);
    throw new Error("DB error. Can not continue!");

};

HWork.onupgradeneeded = function(){
    console.log("First Open");


    if( !HWork.result.objectStoreNames.contains("Cars1") )  //method "contains" for lazy ones))
        HWork.result.createObjectStore( "Cars1", {autoIncrement:true}  );

};

HWork.onsuccess = function(){
    console.log("Success!");
    dbReady = true;

};
//-----------------------------------------------------

function hWorkTransactionCreation(readwrite){  //this function sould be above onsuccess callback
    var transactionType = "readonly";
    if(!dbReady){
        console.log("DB not ready yet");
        return false;
    }
    if(!!readwrite){
        transactionType = "readwrite";
    }

    return HWork.result.transaction(["Cars1"], transactionType).objectStore("Cars1");

}

function addCar(make, model, year, afterAdd){
    var result;

    if( typeof make !== "string" || make === ""){
        alert("make not valid");
        return false;
    }
    if( typeof model !== "string" || model === ""){
        alert("model not valid");
        return false;
    }
    if( typeof year !== "number" || year === 0){
        alert("year not valid");
        return false;
    }


    //var car;
    //car = document.getElementById("car-templ").firstChild;
    //car.getElementsByClassName("make")[0].innerHTML = make;
    //car.getElementsByClassName("model")[0].innerHTML = model;
    //result = hWorkTransactionCreation(1).add(car);
    // :(

    result = hWorkTransactionCreation(1).add({make:make,model:model,year:year});

    result.onerror = function() {
        console.log("Error", this.target.error.name);
        throw new Error("DB error. Can not continue!");
    };

    result.onsuccess = function() {
        if(typeof afterAdd === "function"){
            afterAdd();
        }
        console.log("Did it.");
    };

}

function validateCarIdAndProcess(id, process){
    var result, toReturn = false;
    if(typeof id !== "number"){  //id validation is redundant
        console.log("id not valid");
        return false;
    }

    result = hWorkTransactionCreation().get(id);

    result.onsuccess = function(){
        if(typeof process === "function"){
            process();
        }
        toReturn = true;
    };
    return toReturn; //this is useless

}

function getCars(afterGet){
    var result,cars = [];

    result = hWorkTransactionCreation().openCursor();

    result.onsuccess = function(){
        var objForArray;
        if(!!this.result){
            objForArray = this.result.value;
            objForArray.id = this.result.key;

            cars.push(objForArray);
            this.result.continue();
        } else {
            if(typeof afterGet === "function"){
                afterGet(cars);
            }
            //console.log("End of table");
        }
    };

}

function updateCar(id, make, model, year, afterUpdate){
    if( typeof make !== "string" || make === ""){
        alert("make not valid");
        return false;
    }
    if( typeof model !== "string" || model === ""){
        alert("model not valid");
        return false;
    }
    if( typeof year !== "number" || year === 0){
        alert("year not valid");
        return false;
    }


    validateCarIdAndProcess(id,function(){
        var result;
        result = hWorkTransactionCreation(1).put({make:make,model:model,year:year},id);  //closure FTW ))
        result.onsuccess = function(){
            if(typeof afterUpdate === "function"){
                afterUpdate();
            }
            console.log("Car updated");
        }
    });

}

function delCar(id, afterDel){
    if(typeof id !== "number"){
        console.log("id not valid");
        return false;
    }

    validateCarIdAndProcess(id,function(){
        var result;
        result = hWorkTransactionCreation(1).delete(id);
        result.onsuccess = function(){
            if(typeof afterDel === "function"){
                afterDel();
            }
            console.log("Car deleted");
        }
    });

}
