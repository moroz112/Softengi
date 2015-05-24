/**
 * Created by amoroz-prom on 12.05.15.
 */

document.addEventListener('DOMContentLoaded', function () {

var newProduct = document.getElementById('button'),
    inputId = document.getElementById('id'),
    inputName = document.getElementById('name'),
    inputPrice = document.getElementById('price'),
    inputQuantity = document.getElementById('quantity'),
    updateRecordBlock = document.getElementById('update-record'),
    updateRecordButton = document.getElementById('update');
    ;
    function checkProductField(inputIdValue,inputNameValue,inputPriceValue,inputQuantityValue){
            var regId = /^\d{1,3}$/i;
            var regQuantity = /^\d+$/i;
            var regName = /^\w+[^0-9](\b\w+$|$)/i;
            var regPrice = /^\d+($|.\d$)/i;
            return (regId.test(inputIdValue) && regName.test(inputNameValue) &&
            regPrice.test(inputPriceValue) && regQuantity.test(inputQuantityValue));
    };
    function createRecord(productIdValue,productNameValue,productPriceValue,productQuantityValue){
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
        var deleteButtons = document.getElementsByClassName('delete');
        var updateButtons = document.getElementsByClassName('update');
        var updateRecordButtons = document.getElementsByClassName('update-record');
        for(var k=0;k<updateRecordButtons.length;k++){
            var upRecordButton = updateRecordButtons[k];
            upRecordButton.addEventListener('click', function(){
                var idNew = document.getElementById('idNew');
                var nameNew = document.getElementById('nameNew');
                var priceNew = document.getElementById('priceNew');
                var quantityNew = document.getElementById('quantityNew');
                if(checkProductField(idNew.value,nameNew.value,priceNew.value,quantityNew.value))
                    updateRecord(
                        {id:idNew.value, name:nameNew.value,price:priceNew.value,quantity:quantityNew.value,
                            id:parseInt(this.parentNode.parentNode.firstChild.textContent)});
            });

        }
        for(var j = 0; j<updateButtons.length;j++) {
            var upButton = updateButtons[j];
            upButton.addEventListener('click', function(){
                updateRecordBlock.className = 'show';
            });
        }
        for(var i =0;i<deleteButtons.length;i++) {
            var delButton = deleteButtons[i];
            delButton.addEventListener('click',function(){
                deleteProduct(parseInt(this.parentNode.parentNode.firstChild.textContent));
            });
        }
    };

    var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    var IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;


    const computers = [
        {id: 234, name: 'dell', price: '2256', quantity:'12'},
        {id: 345, name: 'asus', price:'1123', quantity: '15'}
    ];
    function connectDB(f) {
        var request = indexedDB.open('Computers',4);
        request.onerror = function(e) {
            console.log('error');
        };
        request.onsuccess = function(e) {
            console.log('Success');
            f(request.result);
        };
        request.onupgradeneeded = function(event) {
            var db = event.target.result;
            var objectStore = db.createObjectStore('computer', {keyPath: 'id'});
            objectStore.createIndex('name', 'name', {unique: true});

            for(var i in computers){
                console.log(computers[i]);
                objectStore.add(computers[i]);
            }
            console.log("DB open");
            connectDB(f);
        }
    };
    function getAllData() {
        connectDB(function(db){
            var objectStore = db.transaction('computer').objectStore('computer');
            objectStore.openCursor().onsuccess = function(event) {
                var cursor = event.target.result;
                if (cursor) {
                    createRecord(cursor.value.id,cursor.value.name,cursor.value.price,cursor.value.quantity);
                    cursor.continue();
                }
            }
        });
    };
    function addNewProduct() {
        connectDB(function(db){
            var newProductAdd = {id:inputId.value,name:inputName.value,price: inputPrice.value, quantity: inputQuantity.value};
            var objectStore = db.transaction(['computer'],'readwrite').objectStore('computer');
            if(checkProductField(inputId.value,inputName.value,inputPrice.value,inputQuantity.value)) {
                objectStore.add(newProductAdd);
            } else {
                console.log('NOT VALID');
            }

        });
    }
    ;
    function deleteProduct(product) {
        connectDB(function(db){
            var objectStore = db.transaction(['computer'], 'readwrite').objectStore("computer").delete(product);
            objectStore.onsuccess = function(event) {
                console.log('SUCCESS product delete')
            };
            objectStore.onerror = function() {
                console.log('ERROR product delete');
            }
        });

    }
    function updateRecord(object) {
        connectDB(function(db) {
            var objectStore = db.transaction(['computer'], 'readwrite').objectStore("computer").put(object);
            objectStore.onsuccess = function () {
                console.log('success update');
            }
        });
    }
    newProduct.addEventListener('click',addNewProduct);
    getAllData();
;
});
