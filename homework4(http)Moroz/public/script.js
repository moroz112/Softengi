function Product() {
}
Product.prototype.updateData = function(method,id,name,price,quantity,idUpdate) {
  //var deferer = Q.defer();
    $.ajax({
        url: "update",
        method:method,
        data: {
            id: id,
            name: name,
            price: price,
            quantity: quantity,
            idUpdate: idUpdate
        },
        success: function(result) {
            console.log('success update result',result);
        },
        error: function(result) {
            console.log('error update result', result);
        }
    })
};
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
Product.prototype.drawFunc = function(productIdValue,productNameValue,productPriceValue,productQuantityValue){
    var products = document.getElementById('products'),
        fragment = document.createDocumentFragment(),
        productInfo = document.createElement('tr'),
        productName = document.createElement('td'),
        productQuantity = document.createElement('td'),
        productId = document.createElement('td'),
        productPrice = document.createElement('td'),
        productDelete = document.createElement('td'),
        productUpdate = document.createElement('td'),
        productUpdateCurrentRecord = document.createElement('td');

    productId.innerHTML = productIdValue;
    productName.innerHTML = productNameValue;
    productPrice.innerHTML = productPriceValue;
    productQuantity.innerHTML = productQuantityValue;
    productDelete.innerHTML = '<input type="button" class="delete" value="Delete product">';
    productUpdate.innerHTML = '<input type="button" class="update" value="show updating form">';
    productUpdateCurrentRecord.innerHTML = '<input type="button" class="update-record" value="Update this record">';
    productInfo.appendChild(productId);
    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productQuantity);
    productInfo.appendChild(productDelete);
    productInfo.appendChild(productUpdate);
    productInfo.appendChild(productUpdateCurrentRecord);
    fragment.appendChild(productInfo);
    products.appendChild(fragment);
};
Product.prototype.selectData = function(method) {
    var deferer = Q.defer();
    $.ajax({
        url: 'select',
        method: method,
        success: function(result) {
            //var s = JSON.parse(result);
            deferer.resolve(result)
        },
        error: function(result) {
            deferer.reject('select error',result)
        }
    });
    return deferer.promise;
};
Product.prototype.deleteData = function(method,id){
    $.ajax({
        url:"delete",
        method: method,
        data: {
            id:id
        },
        success: function(result) {
            console.log('delete success',result);
        },
        error: function(result) {
            console.log('delete error',result);
        }

    });
};
var product = new Product();
var select = product.selectData('POST');
select.then(function(result){
    console.log('select success result',JSON.parse(result));
    var result = JSON.parse(result);
    for(var i=0;i<result.length;i++) {
        console.log(result[i].id);
        product.drawFunc(result[i].id,result[i].name,result[i].price,result[i].quantity);
    }
}).done();


$(function(){
    var productInfo = $('#products');
    productInfo.on('click','.update-record',function(){
        var idNew = document.getElementById('idNew');
        var nameNew = document.getElementById('nameNew');
        var priceNew = document.getElementById('priceNew');
        var quantityNew = document.getElementById('quantityNew');
        console.log('sending id',this.parentNode.parentNode.firstChild.textContent);
        product.updateData('POST',
            idNew.value,nameNew.value,priceNew.value,quantityNew.value,this.parentNode.parentNode.firstChild.textContent);
        console.log('update-record front end');
    });
    productInfo.on('click','.update',function(){
        $('#update-record').addClass('show');
        console.log('update front end');

    });
    productInfo.on('click','.delete',function(){
        product.deleteData('POST',this.parentNode.parentNode.firstChild.textContent);
        console.log('delete front-end');
    });
    $('#button').on('click',function(){
        var data = $(this).parent().children();

        var arg = [];
        for(var i=0;i<data.length-1; i++) {
            arg.push(data[i].value);
        }
        var insert = product.insertData('POST',arg);
        insert.then(function(result){
            console.log('insert success',result);
        }).done();
    });
    var updateButtons = document.getElementsByClassName('update');
    console.log(updateButtons);
});
