//................if dentro de otro if 

//var precio=prompt("precio")

//if(precio >=100){
    
    
    //var condescuento= precio - (precio*10/100) ;
    //alert("Q" + precio + "tiene un 10% de descuento total a pagar Q" + condescuento)
    
    
    
    
//}else{
//    alert("precio comleto")
//}

var user = prompt("Usuario:")

if(user == "jefuentes"){
    
    var password = prompt("Contraseña")
    
    if(password == "gatitos123"){
        alert("hola " + user)
    }else{
        alert("Contraseña incorrecta")
    }
}else{
    alert("Usuario no encontrado")
}