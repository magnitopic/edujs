'use strict'

$(function () {
    document.querySelector("h1").style.color = ("blue");
});

var contador = 0;
function anadir() {
    var x = document.getElementById("entrance").value;
    if (x.length <= 0) {
    } else {
        localStorage.setItem(x, x);
        location.reload();
    }
}

var ul = document.getElementById('list');
for (var i in localStorage) {
    if (typeof localStorage[i] == 'string') {
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        document.getElementById("add").click();
    }
});