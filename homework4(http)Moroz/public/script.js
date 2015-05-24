function Product() {
}
Product.prototype.insertData = function(method,arr) {
    this.action = "insert";
    var deferer = Q.defer();
    $.ajax({
        url: "insert",
        method: method,
        data:{
            id:arr[0],
            name:arr[1],
            price:arr[2],
            quantity:arr[3]
        },
        success: function(result) {
            deferer.resolve(result);
        },
        error: function(result){
            deferer.reject(result);
        }
    });
    return deferer.promise;
};
Product.prototype.selectData = function(method) {
    var deferer = Q.defer();
    $.ajax({
        url: 'select',
        method: method,
        data:{
            id:10
        },
        success: function(result) {
            //var s = JSON.parse(result);
            deferer.resolve(result)
        },
        error: function(result) {
            deferer.reject(result)
        }
    });
    return deferer.promise;
};
var product = new Product();
var select = product.selectData('POST');
select.then(function(result){
    console.log(result);
}).done();
//var insert = product.insertData('POST');


$(function(){
    $('#button').on('click',function(){
        var data = $(this).parent().children();

        var arg = [];
        for(var i=0;i<data.length-1; i++) {
            arg.push(data[i].value);
        }
        var insert = product.insertData('POST',arg);
        insert.then(function(result){
            console.log(result);
        }).done();
    });
});
