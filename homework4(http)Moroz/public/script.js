function Product() {
}
Product.prototype.updateData = function(method,id,name,price,quantity,idUpdate) {
  var deferer = Q.defer();
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
            deferer.resolve(result);
        },
        error: function(result) {
            deferer.reject(result);
        }
    });
    return deferer.promise;
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
Product.prototype.checkValue = function checkProductField(inputIdValue,inputNameValue,inputPriceValue,inputQuantityValue){
    var regId = /^\d{1,3}$/i;
    var regQuantity = /^\d+$/i;
    var regName = /^\w+[^0-9](\b\w+$|$)/i;
    var regPrice = /^\d+($|.\d$)/i;
    return (regId.test(inputIdValue) && regName.test(inputNameValue) &&
    regPrice.test(inputPriceValue) && regQuantity.test(inputQuantityValue));
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
            deferer.resolve(result)
        },
        error: function(result) {
            deferer.reject(result)
        }
    });
    return deferer.promise;
};
Product.prototype.deleteData = function(method,id){
    var deferer = Q.defer();
    $.ajax({
        url:"delete",
        method: method,
        data: {
            id:id
        },
        success: function(result) {
            deferer.resolve(result);
        },
        error: function(result) {
            deferer.reject(result);
        }

    });
    return deferer.promise;
};
Product.prototype.tryModule = (function(){
   var basket = [];
    return {
        addItem: function(item) {
            basket.push(item);
        },
        getItemLength: function() {
            alert(basket.length);
        }
    }
}());


$(function(){
    var product = new Product();
    product.tryModule.addItem('2');
    var select = product.selectData('POST');
    select.then(function(result){
        console.log('select success result',JSON.parse(result));
        var result = JSON.parse(result);
        for(var i=0;i<result.length;i++) {
            console.log(result[i].id);
            product.drawFunc(result[i].id,result[i].name,result[i].price,result[i].quantity);
        }
    }).done();

    var productInfo = $('#products');
    productInfo.on('click','.update-record',function(){
        var idNew = document.getElementById('idNew');
        var nameNew = document.getElementById('nameNew');
        var priceNew = document.getElementById('priceNew');
        var quantityNew = document.getElementById('quantityNew');
        console.log('sending id',this.parentNode.parentNode.firstChild.textContent);
        var updateProd = product.updateData('POST',
            idNew.value,nameNew.value,priceNew.value,quantityNew.value,this.parentNode.parentNode.firstChild.textContent);
        updateProd.then(function(result){
            console.log('update very success',result);
        }).done();
        console.log('update-record front end');
    });

    productInfo.on('click','.update',function(){
        $('#update-record').addClass('show');
        console.log('update front end');
    });

    productInfo.on('click','.delete',function(){
        var deleteProduct =  product.deleteData('POST',this.parentNode.parentNode.firstChild.textContent);
        deleteProduct.then(function(result){
            console.log('delete front-end',result);
        }).done();
    });

    $('#button').on('click',function(){
        var data = $(this).parent().children();
        var arg = [];
        for(var i=0;i<data.length-1; i++) {
            arg.push(data[i].value);
        }
        console.log(arg);
        if(product.checkValue(arg[0],arg[1],arg[2],arg[3])) {
            var insert = product.insertData('POST', arg);
            insert.then(function(result){
                console.log('insert success',result);
            }).done();
        } else {
            console.log('NOT VALID');
        }
    });

    var updateButtons = document.getElementsByClassName('update');
    console.log(updateButtons);
});
