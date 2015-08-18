$(function(){
   var users = [
      {
         name: 'Sasha',
         login: 'sasha',
         password: '123123'
      },
      {
         name: 'admin',
         login: 'admin',
         password: '321321'
      },
      {
         name: 'Varya',
         login: 'varya',
         password: 'varya'
      }
   ];
   if($.cookie('login')) {
      $('.login').addClass('disable');
      $('.main').removeClass('disable');
   }
 function auth(log,pass) {
    var flag = false;
    for(var i =0;i<users.length;i++) {
       if(log == users[i].login && pass == users[i].password) {
          $.cookie('login', log);
          $('.login').addClass('disable');
          $('.main').removeClass('disable');
          flag = true;
          return;
       }
    }
    if (flag == false) {
       alert('что то не так');
    }
 }
   $('.button').on('click', function(){
      var login = $('.log').val();
      var password = $('.pass').val();
      auth(login,password);
   });
   $('.logout').on('click', function(){
      $('.main').addClass('disable');
      $('.login').removeClass('disable');
      $.removeCookie('login');
   });
});