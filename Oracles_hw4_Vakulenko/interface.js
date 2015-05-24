function drawCars(){
    getCars(function(cars){
        var i,carsHtml = "";
        if(typeof cars !== "object") return false;

        for(i = 0; i < cars.length; i++){
            //console.log(i);
            carsHtml += '<div>' +
            '<input type="text" value="' + cars[i].id + '" disabled="disabled">' +
            '<input type="text" value="' + cars[i].make + '">' +
            '<input type="text" value="' + cars[i].model + '">' +
            '<input type="number" value="' + cars[i].year + '">' +
            '<span onclick="del(this.parentElement)">✘</span>' +
            '<span onclick="save(this.parentElement)">✔</span>' +
            '</div>';
        }

        carsHtml += '<div>' +
        '<input type="text" placeholder="➜" disabled="disabled">' +
        '<input type="text" placeholder="make">' +
        '<input type="text" placeholder="model">' +
        '<input type="number" placeholder="year">' +
        '<span onclick="add(this.parentElement)">✔</span>' +
        '</div>';

        document.getElementById("carlist").innerHTML = carsHtml;

        document.getElementById("loader").className = "";
    });
}

function save(row){
    var id,make,model,year;

    if(validate(row)) {

        id = parseInt(row.childNodes[0].value);
        make = row.childNodes[1].value;
        model = row.childNodes[2].value;
        year = parseInt(row.childNodes[3].value);

        document.getElementById("loader").className = "show";

        updateCar(id, make, model, year, drawCars);
    }
}

function add(row){
    var make, model, year;

    if(validate(row)) {

        make = row.childNodes[1].value;
        model = row.childNodes[2].value;
        year = parseInt(row.childNodes[3].value);

        document.getElementById("loader").className = "show";

        addCar(make, model, year, drawCars);
    }
}

function del(row){
    var id = parseInt(row.childNodes[0].value);

    if(confirm("Dlete this car?")){
        document.getElementById("loader").className = "show";
        delCar(id, drawCars);
    }

}

function validate(row){
    var toReturn = true,
        i;

    for(i=0; i<row.childNodes.length; i++){
        row.childNodes[i].className = "";
    }

    //validate make
    if( !( /^[a-z]{2,}$/im.test(row.childNodes[1].value) ) ){
        row.childNodes[1].className = "invalid";
        toReturn = false;
    }

    //validate model
    if( !( /^[a-z0-9- ]+$/im.test(row.childNodes[2].value) ) ){
        row.childNodes[2].className = "invalid";
        toReturn = false;
    }

    //validate year
    if( !( /^(19|20)\d{2}$/im.test(row.childNodes[3].value) ) || parseInt(row.childNodes[3].value) > (new Date().getFullYear()) ){
        row.childNodes[3].className = "invalid";
        toReturn = false;
    }

    return toReturn;
}