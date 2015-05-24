/**
 * Created by amoroz-prom on 11.05.15.
 */
document.addEventListener("DOMContentLoaded", function () {
    var content = document.getElementById('comment')

    document.getElementById('clearButton').onclick = clearField;
    document.getElementById('commentButton').onclick = function () {
        addComment(content.value);
        clearField();
    };
    content.oninput = function() {
        content.className = '';
    };
    content.value = localStorage.getItem("comment");
    setInterval(function(){
        localStorage.setItem("comment", content.value);
    }, 5000);
});
function addComment(text) {
    var content = document.getElementById('content');
    var fragment = document.createDocumentFragment();
    var comment = document.createElement('p');
    var cells = document.getElementsByClassName('cell');

    if(isValid()) {

        comment.className = 'cell';
        comment.innerHTML = text;
        fragment.appendChild(comment);
        content.appendChild(fragment);
    }
}
function isValid() {
    var comment = document.getElementById('comment');
    var reg = /^[a-zA-Z0-9]*$/;
    if (reg.test(comment.value)) {
        return true;
    } else {
        comment.classList.add('error');
    }
}
function test(){
    var cells = document.getElementsByTagName('p');
    console.log(cells);
}
function changeColor(color) {
    var cells = document.getElementsByClassName('cell'),
        cellCount, i;
    if (color) {
        cellCount = cells.length;
        for(i = 0; i <cellCount; i++) {
            cells[i].style.color = color;
        }
    }
}
function clearField() {
    var field = document.getElementById('comment');
    field.value = '';
}

/*
  Cookies and local storage
*/

