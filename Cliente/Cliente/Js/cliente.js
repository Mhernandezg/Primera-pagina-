var socket = io();/*cliente*/

var datos = function(elemt,elemt1,elemt2,elemt3){ //se crea la funcion la cual solo se activa al oprmir el boton enviar
	var obtn = document.getElementsByName(elemt);	//las diferentes variables obtn tienen la funcion de llamar al valor de los diferentes elementos de pagina.html
	var obtn1 = document.getElementsByName(elemt1);
	var obtn2 = document.getElementsByName(elemt2);
	var obtn3 = document.getElementsByName(elemt3);
	var primero=obtn[0].value; //las variables primero y segundo son variables para manejar de forma mas sencilla el dato obtenido por .value
	var segundo=obtn1[0].value;	
	var tercero=obtn3[0].value;	
	alert(primero);
	alert(segundo);	
	for (var i=0; i<obtn2.length; i++) 
	{
		if (obtn2[i].checked == true) 
		{ 
			alert(obtn2[i].value);				
		} 
	}

	alert("el paciente "+tercero+" es alergico a: "+primero);

	socket.emit('datos',{//se emite el mendaje "datos" el cual contiene las variables primero y segundo
         primero,segundo
	});	
}	   
socket.on('serverMsg',function(data){//al resivir el mensaje "serverMsg" se procede a evaluar el estado que ha enviado la clase medicamento.js

       if(data.succ==true){
       	alert("EL MEDICAMENTO ESTA EN NUESTRA BASE DE DATOS");       	
       }else{
       	alert("EL MEDICAMENTO NO SE ENCUENTRA EN NUESTRA BASE DE DATOS");
       }
});
	 