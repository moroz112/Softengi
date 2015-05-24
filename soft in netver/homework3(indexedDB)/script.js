/**
 * Created by amoroz-prom on 12.05.15.
 */
document.addEventListener('DOMContentLoaded', function () {
    createRecord(233,'dildo',300,10);
});
function createRecord(productIdValue,productNameValue,productPriceValue,productQuantityValue){
    var products = document.getElementById('products'),
        fragment = document.createDocumentFragment(),
        productInfo = document.createElement('tr'),
        productName = document.createElement('td'),
        productQuantity = document.createElement('td'),
        productId = document.createElement('td'),
        productPrice = document.createElement('td');

    productId.innerHTML = productIdValue;
    productName.innerHTML = productNameValue;
    productPrice.innerHTML = productPriceValue;
    productQuantity.innerHTML = productQuantityValue;
    productInfo.appendChild(productId);
    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productQuantity);
    fragment.appendChild(productInfo);
    products.appendChild(fragment);

}