'use strict'
var contador= 0;
function anadir(){
    var x = document.getElementById("entrada").value;
    if(x.length <= 0){
    }else{
        localStorage.setItem(x,x);
        location.reload();  
    }

}

var ul = document.getElementById('lista-compra');
    for(var i in localStorage){
        if(typeof localStorage[i] =='string'){
            var li= document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);
        }
    }
