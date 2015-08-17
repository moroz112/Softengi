$(function(){

    var userCookie = getCookie('user');


    function drawProducts(vouteSummary,vouteDescription,vouteKeys){
        var products = document.getElementById('products'),
            fragment = document.createDocumentFragment(),
            productInfo = document.createElement('tr'),
            vouteKey = document.createElement('td'),
            vouteDes = document.createElement('td'),
            vouteSum = document.createElement('td'),
            vouteDelete = document.createElement('td'),
            vouteUpdate = document.createElement('td'),
            vouteCertine = document.createElement('td');


        vouteSum.innerHTML = vouteSummary;
        vouteDes.innerHTML = vouteDescription;
        vouteKey.innerHTML = vouteKeys;
        vouteDelete.innerHTML = '<input type="button" class="delete" value="Delete my voute">';
        vouteUpdate.innerHTML = '<input type="button" class="set" value="set my voutes for this">';
        vouteCertine.innerHTML = '<input type="button" class="get-certaine-voute-result" value="get result for certaine key">';
        productInfo.appendChild(vouteKey);
        productInfo.appendChild(vouteDes);
        productInfo.appendChild(vouteSum);
        productInfo.appendChild(vouteDelete);
        productInfo.appendChild(vouteUpdate);
        productInfo.appendChild(vouteCertine);
        fragment.appendChild(productInfo);
        products.appendChild(fragment);
    };


    function checkAutintification(cockie) {
        if (cockie == 'undefined') {
            alert("you have to log in");
            return false;
        }
    }

    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function setVoices(title,description) {
        console.log('now i create new voute');
        checkAutintification(userCookie);
        console.log('user',userCookie);
        $.ajaxSetup({
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Basic ' + userCookie);
            }
        });
        $.ajax({
            url:"http://hackaton.netvertise/wp-json/issue",
            method: 'POST',
            data: {
                "title":title,
                "description":description
            },
            success: function(result) {
                console.log(result);
            },
            error: function(error) {
              console.log("error",error);
            }
        });
    };

    function getVoutings() {
        console.log('now i get all voutes in table');
        console.log(userCookie);
        checkAutintification(userCookie);
        $.ajaxSetup({
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Basic ' + userCookie);
            }
        });
        $.ajax({
            url:"http://hackaton.netvertise/wp-json/issue",
            method: 'GET',
            success: function(result) {
                console.log(result);
                for(var i = 0; i<result.issues.length; i++) {
                    drawProducts(result.issues[i].fields.summary,result.issues[i].fields.description, result.issues[i].key);
                }
            },
            error: function(error) {
                console.log("error",error);
            }
        });
    };
    function autorization() {
        console.log('autorization');
        var login = $('.login').val();
        var password = $('.password').val();
        var user = window.btoa(login + ":" + password);
        console.log(user);
        document.cookie = "user=" + user;
    }
    function setMyVoices(vouteKey) {
        console.log('now my voices is setting');
        checkAutintification(userCookie);
        $.ajaxSetup({
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Basic ' + userCookie);
            }
        });
        $.ajax({
            url: "http://hackaton.netvertise/wp-json/vote/" + vouteKey,
            method: "POST",
            success: function(result) {
                console.log(result);
            },
            error: function(error) {
              console.log(error);
            }
        })
    }
    function deleteMyVoices(vouteKey) {
        checkAutintification(userCookie);
        $.ajaxSetup({
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Basic ' + userCookie);
            }
        });
        $.ajax({
            url: "http://hackaton.netvertise/wp-json/vote/" + vouteKey,
            method: "DELETE",
            success: function(result) {
                console.log(result);
            },
            error: function(error) {
                console.log(error);
            }
        })
    }
    function setCertineVoute(vouteKey) {
        console.log('all result for certaine voutes in console.. TAKE IT!!');
        checkAutintification(userCookie);
        $.ajaxSetup({
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Basic ' + userCookie);
            }
        });
        $.ajax({
            url: "http://hackaton.netvertise/wp-json/issue/" + vouteKey,
            method: "GET",
            success: function(result) {
                console.log('result for current voutes',result);
            },
            error: function(error) {
              console.log(error);
            }
        })
    }
    $('.create-vouting').on('click',function(){
        var title = $('.title-voute').val();
        var description = $('.description-voute').val();
        console.log(title);
        console.log(description);
        setVoices(title,description);
    });
    $('.get-all-voutes').on('click',getVoutings);
    $('.autorization').on('click',autorization);
    var voutes = $('#products');
    voutes.on('click','.set',function(){
       console.log(this.parentNode.parentNode.firstChild.textContent);
        setMyVoices(this.parentNode.parentNode.firstChild.textContent);
    });
    voutes.on('click','.delete', function(){
       deleteMyVoices(this.parentNode.parentNode.firstChild.textContent);
    });
    voutes.on('click','.get-certaine-voute-result',function(){
       setCertineVoute(this.parentNode.parentNode.firstChild.textContent);
    });

});
