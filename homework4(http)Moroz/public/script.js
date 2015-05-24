function Product() {
}
Product.prototype.insertData = function(method) {
    this.action = "insert";
    var deferer = Q.defer();
    $.ajax({
        url: "insert",
        method: method,
        data: {
            id:16,
            title:'okdd'
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
var insert = product.insertData('POST');


$(function(){
    $('#button').on('click',function(){
        insert.then(function(result){
            console.log(result);
        }).done();
    });
});
