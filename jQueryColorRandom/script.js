$(function(){
    'use strict'
    function aleatorio(){
        return Math.random();
    } 
    if( aleatorio()<= 0.5){
        $('p').hover(function(){
            $("p").css("cursor", "not-allowed");
        })
    }else{
        $('p').hover(function(){
            $("p").css("cursor", "pointer");
        })
        $('p').click(function(){
            $("p").css("color", '#'+(0x1000000+(aleatorio())*0xffffff).toString(16).substr(1,6));
        })
    }
});
