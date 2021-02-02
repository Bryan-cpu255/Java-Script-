var titulo= document.getElementById(saludo);
function cambiarColor (){
    titulo.classListremove("saludo");
    tiutlo.classListadd("nuevaClase")
    
};


var caja_html=document.getElementById(´caja´);

function funcionCaja (){
    caja_html.classList.remove("estilo_1");
    caja_html.classList.add("estilo_2");
};

/*-------------------------------------------*/

var btn_html= document.getElementById(´boton´);

titulo.addEventListener(´click´, cambiarColor);


Jossue Emmanuel Fuentes 8:43 AM
var titulo = document.getElementById('saludo');

function cambiarColor (){
    titulo.classList.remove("saludo");
    titulo.classList.add("nuevaClase")
};


var caja_html = document.getElementById('caja');


function funcionCaja (){
    
    caja_html.classList.remove("estilo_1");
    caja_html.classList.add("estilo_2");
} 

/*-------------------------*/

var btn_html = document.getElementById('boton');

titulo.addEventListener('click', cambiarColor);

btn_html.addEventListener('click', funcion);