var socket = io();/*cliente*/

var datos = function(elemt,elemt1,elemt2,elemt3,elemt4,elemt5,elemt6,elemt7,elemt8){ //se crea la funcion la cual solo se activa al oprmir el boton enviar
	var obtn  = document.getElementsByName(elemt);	//las diferentes variables obtn tienen la funcion de llamar al valor de los diferentes elementos de pagina.html
	var obtn1 = document.getElementsByName(elemt1);
	var obtn2 = document.getElementsByName(elemt2);
	var obtn3 = document.getElementsByName(elemt3);
	var obtn4 = document.getElementsByName(elemt4);
	var obtn5 = document.getElementsByName(elemt5);
	var obtn6 = document.getElementsByName(elemt6);
	var obtn7 = document.getElementsByName(elemt7);
	var obtn8 = document.getElementsByName(elemt8);
	
	var primero=obtn[0].value; //las variables primero y segundo son variables para manejar de forma mas sencilla el dato obtenido por .value
	var segundo=obtn1[0].value;	
	var tercero=obtn2[0].value;
	var cuarto=obtn3[0].value;
	var quinto=obtn4[0].value;
	var sexto=obtn5[0].value;
	var septimo=obtn6[0].value;
	var octavo=obtn7[0].value;
	var noveno=obtn8[0].value;

	
	socket.emit('datos',{//se emite el mendaje "datos" el cual contiene las variables primero y segundo
         primero,segundo,tercero,cuarto,quinto,sexto,septimo,octavo,noveno
	});

	alert(primero);
	alert(segundo);
	alert(tercero);
	alert(cuarto);
	alert(quinto);
	alert(sexto);
	alert(septimo);
	alert(octavo);
	alert(noveno);
	alert("La descripcion del medicamento fue agregada");	
}	   
socket.on('serverMsg',function(data){//al resivir el mensaje "serverMsg" se procede a evaluar el estado que ha enviado la clase medicamento.js

       if(data.succ==false){
       	alert("EL MEDICAMENTO SE INSERTO EN NUESTRA BASE DE DATOS");       	
       }
});
	 