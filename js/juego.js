var perso=0;
/*var principal*/
var seleccionado="";
		var nom="";
		var heroe="";
		var ataque=0;
		var defensa=0;
		var daño=0;
		var vida=0;
		var rutasfondo=['guerrero','clerigo','valkiria'];
		
var contadorMon=0;
var puerta1abierta=0;
var puerta2abierta=0;
var puerta3abierta=0;
/*-------*/
/*var canvas*/
var cwidth = 400;
  var cheight = 300;
  var dicex = 50;
  var dicey = 50;
  var dicewidth = 100;
  var diceheight = 100;
  var dotrad = 6;
  var ctx;
  var dx;
  var dy;
  var ch1;
  var cd1;
  var ch2;
  var cd2;
  var ch3;
  var cd3;
/*--------*/
/*var level1*/
var y = 300;
var x = 0;
var y_orco1 = 150;
var x_orco1 = 300;
var y_orco2 = 450;
var x_orco2 = 800;
var y_goblin1 = 150;
var x_goblin1 = 800;
var y_goblin2 = 450;
var x_goblin2 = 300;
var x_moneda1 =	1050;
var y_moneda1 = 0;
var x_moneda2 =	1050;
var y_moneda2 = 600;
var x_moneda3 =	250;
var y_moneda3 = 300;
var x_moneda4 =	850;
var y_moneda4 = 300;
var x_llave1 = 550;
var y_llave1 = 300;	
var llaveObtenida = 0;
var x_puerta1 = 1100;
var y_puerta1 = 300;
var x_corazon1 = 0;
var y_corazon1 = 0;
/*-----*/
/*var level2*/
var y_nivel2 = 300;
var x_nivel2 = 0;
var y_orco4 = 300;
var x_orco4 = 300;
var y_orco5 = 600;
var x_orco5 = 800;
var y_goblin3 = 300;
var x_goblin3 = 1050;
var y_goblin4 = 600;
var x_goblin4 = 300;
var y_goblin5 = 300;
var x_goblin5 = 800;
var x_llave1 = 550;
var y_llave1 = 600;
var x_puerta2 = 1100;
var y_puerta2 = 600;
var x_moneda5 =	100;
var y_moneda5 = 0;
var x_moneda6 =	1000;
var y_moneda6 = 0;
var x_moneda7 =	300;
var y_moneda7 = 450;
var x_moneda8 =	800;
var y_moneda8 = 450;
var x_corazon2 = 0;
var y_corazon2 = 0;
/*---------*/
/*var level3*/
var y_nivel3 = 300;
var x_nivel3 = 0;
var x_llave3 = 600;
var y_llave3 = 300;
var x_puerta3 = 1100;
var y_puerta3 = 0;
var x_moneda9 =	950;
var y_moneda9 = 0;
var x_moneda10 = 300;
var y_moneda10 = 300;
var x_moneda11 = 750;
var y_moneda11 = 300;
var x_moneda12 = 1100;
var y_moneda12 = 600;
var y_orco6 = 0;
var x_orco6 = 600;
var y_orco7 = 300;
var x_orco7 = 1050;
var y_goblin6 = 300;
var x_goblin6 = 500;
var y_goblin7 = 600;
var x_goblin7 = 950;
var y_fantasma = 300;
var x_fantasma = 650;
var x_corazon3 = 0;
var y_corazon3 = 0;
/*-----------*/
/*Variables Pelea*/
/*orcos*/
var ataqueorco1=10;
var ataqueorco2=10;
var ataqueorco4=10;
var ataqueorco5=10;
var ataqueorco6=10;
var ataqueorco7=10;
var defensaorco1=12;
var defensaorco2=12;
var defensaorco4=12;
var defensaorco5=12;
var defensaorco6=12;
var defensaorco7=12;
var vidaorco1=20;
var vidaorco2=20;
var vidaorco4=20;
var vidaorco5=20;
var vidaorco6=20;
var vidaorco7=20;
var dañoorco1=10;
var dañoorco2=10;
var dañoorco4=10;
var dañoorco5=10;
var dañoorco6=10;
var dañoorco7=10;
/*goblins*/
var ataquegoblin1=5;
var ataquegoblin2=5;
var ataquegoblin3=5;
var ataquegoblin4=5;
var ataquegoblin5=5;
var ataquegoblin6=5;
var ataquegoblin7=5;
var defensagoblin1=10;
var defensagoblin2=10;
var defensagoblin3=10;
var defensagoblin4=10;
var defensagoblin5=10;
var defensagoblin6=10;
var defensagoblin7=10;
var vidagoblin1=10;
var vidagoblin2=10;
var vidagoblin3=10;
var vidagoblin4=10;
var vidagoblin5=10;
var vidagoblin6=10;
var vidagoblin7=10;
var dañogoblin1=5;
var dañogoblin2=5;
var dañogoblin3=5;
var dañogoblin4=5;
var dañogoblin5=5;
var dañogoblin6=5;
var dañogoblin7=5;
/*fantasma*/
var ataquefantasma1=15;
var defensafantasma1=15;
var vidafantasma1=30;
var dañofantasma1=15;
/*--------*/

/*Principal*/
$(document).ready(function(){
		$('#formulario').corner();
		$('#guerrero').corner();
		$('#valkiria').corner();
		$('#clerigo').corner();
		$('#datos').corner();

		$('#razas li img').mouseover(function()
		{
			
			var index=0;
			
			if(seleccionado==this.id){
				$('body').css('background-image','none');
				seleccionado="";
				$('#'+this.id).css('border','none');
			}else{
				$('#razas li img').click(function(){
				switch(this.id){
				case 'guerrero':
				index=0;
				heroe="Guerrero";
				ataque=10;
				defensa=14;
				daño=15;
				vida=100;
				$("#pedobear").css({'background-image': 'url(img/ikepequeño.jpg)'});
				$("#pedobear2").css({'background-image': 'url(img/ikepequeño.jpg)'});
				$("#pedobear3").css({'background-image': 'url(img/ikepequeño.jpg)'});
				e=document.getElementById("datos");
				e.innerHTML="Heroe: "+heroe+ "<br/>" +"Ataque: "+ataque+"<br/>" +"Defensa: "+defensa+"<br/>" +"Daño: "+daño+"<br/>" +"Vida: "+vida;
				
				break;
				case 'clerigo':
				index=1;
				heroe="Clerigo";
				ataque=5;
				defensa=16;
				daño=5;
				vida=150;
				$("#pedobear").css({'background-image': 'url(img/clerigopequeño.jpg)'});
				$("#pedobear2").css({'background-image': 'url(img/clerigopequeño.jpg)'});
				$("#pedobear3").css({'background-image': 'url(img/clerigopequeño.jpg)'});
				e=document.getElementById("datos");
				e.innerHTML="Heroe: "+heroe+ "<br/>" +"Ataque: "+ataque+"<br/>" +"Defensa: "+defensa+"<br/>" +"Daño: "+daño+"<br/>" +"Vida: "+vida;
				break;
				
				case 'valkiria': 
				index=2;
				heroe="Valkiria";
				ataque=10;
				defensa=12;
				daño=20;
				vida=50;
				$("#pedobear").css({'background-image': 'url(img/valkiriapequeña.jpg)'});
				$("#pedobear2").css({'background-image': 'url(img/valkiriapequeña.jpg)'});
				$("#pedobear3").css({'background-image': 'url(img/valkiriapequeña.jpg)'});
				e=document.getElementById("datos");
				e.innerHTML="Heroe: "+heroe+ "<br/>" +"Ataque: "+ataque+"<br/>" +"Defensa: "+defensa+"<br/>" +"Daño: "+daño+"<br/>" +"Vida: "+vida;
				break;
				}
			seleccionado=this.id;

			$('#guerrero').css('border','none');
			$('#valkiria').css('border','none');
			$('#clerigo').css('border','none');

			$('#formulario').show();
			$("#datos").css("display","block");
		 });
		 }
		});
		$('#razas li img').mouseout(function()
		{
			$('#datos').css('display','none');
			$('#guerrero').css('border','none');
			$('#valkiria').css('border','none');
			$('#clerigo').css('border','none');
			$('#formulario').show();
		});
		$('#registrar').click(function()
		{
			
			nom= document.getElementById("name").value;
			if(vida==0)
			{
				alert('Eliga personaje');
			}
			if(nom=="")
			{
				alert('Ingrese Nombre')
			}
			else{
			perso=1;
			alert('Bienvenido '+heroe+' '+nom+' puede comenzar el juego');}
		});
		$('#jugar').click(function()
		{
			nom= document.getElementById("name").value;
		
			if(perso==0)
			{
				alert('Cree personaje para comenzar el juego');
			}
			else{
			$("#level1").css("display", "block");
			$("#inicio").css("display", "none");
			$("#tusdatos").css("display","block");
			mostrarTodosDatos();
			}
		});
		
		
function mostrarTodosDatos()
{
		e=document.getElementById("tusdatos");
		e.innerHTML="Heroe: "+heroe+ "<br/>" +"Ataque: "+ataque+"<br/>" +"Defensa: "+defensa+"<br/>" +"Daño: "+daño+"<br/>" +"Vida: "+vida + "<br/>" + "Monedas: " + contadorMon;
}
	
/*-------------*/
/*Level1*/
$('#prueba').click(function()
		{
		alert('hika'+vida);
		});
function detectarLlave() {
    if (x ==550 && y == 300) {
		llaveObtenida = 1;
		puerta1abierta=1;
        $("#puerta1").css({'background-image': 'url(img/puerta.jpg)'});
		$("#llave1").css('display','none');}
}
function detectarCorazon1() {
    if (x == x_corazon1 && y == y_corazon1) {
		vida = vida + 100;
		x_corazon1=0;
		y_corazon1=600;
		mostrarTodosDatos();
		var d = document.getElementById("corazon1");
		var p=d.parentNode;
		p.removeChild(d);
	}
}
function detectarCorazon2() {
    if (x_nivel2 == x_corazon2 && y_nivel2 == y_corazon2) {
		vida = vida + 100;
		x_corazon2=0;
		y_corazon2=600;
		mostrarTodosDatos();
		var d = document.getElementById("corazon2");
		var p=d.parentNode;
		p.removeChild(d);
	}
}
function detectarCorazon3() {
    if (x_nivel3 == x_corazon3 && y_nivel3 == y_corazon3) {
		vida = vida + 100;
		x_corazon3=0;
		y_corazon3=600;
		mostrarTodosDatos();
		var d = document.getElementById("corazon3");
		var p=d.parentNode;
		p.removeChild(d);
	}
}
function contadorMonedasNivel1(){
	if (x == x_moneda1 && y == y_moneda1) {
		contadorMon=contadorMon+25;
		x_moneda1=0;
		y_moneda1=600;
		mostrarTodosDatos();
		var d = document.getElementById("moneda1");
		var p=d.parentNode;
		p.removeChild(d);
	}
	else if (x == x_moneda2 && y == y_moneda2) {
		contadorMon=contadorMon+25;
		x_moneda2=0;
		y_moneda2=600;
		mostrarTodosDatos();
		var d = document.getElementById("moneda2");
		var p=d.parentNode;
		p.removeChild(d);
	}
	else if (x == x_moneda3 && y == y_moneda3) {
		contadorMon=contadorMon+25;
		x_moneda3=0;
		y_moneda3=600;
		mostrarTodosDatos();
		var d = document.getElementById("moneda3");
		var p=d.parentNode;
		p.removeChild(d);
	}
	else if (x == x_moneda4 && y == y_moneda4) {
		contadorMon=contadorMon+25;
		x_moneda4=0;
		y_moneda4=600;
		mostrarTodosDatos();
		var d = document.getElementById("moneda4");
		var p=d.parentNode;
		p.removeChild(d);
	}
}

$('#arriba1').click(function(){
	arribaUser(); 
	movimientoOrco1(); 
	movimientoOrco2(); 
	movimientoGoblin1(); 
	movimientoGoblin2();
	detectarLlave(); 
	salir(); 
	detectarColision();
	contadorMonedasNivel1();
	mostrarTodosDatos();
	detectarCorazon1();
});
$('#abajo1').click(function(){
	abajoUser(); 
	movimientoOrco1(); 
	movimientoOrco2(); 
	movimientoGoblin1(); 
	movimientoGoblin2();
	detectarLlave(); 
	salir(); 
	detectarColision();
	contadorMonedasNivel1();
	mostrarTodosDatos();
	detectarCorazon1();
});
$('#izquierda1').click(function(){
	izquierdaUser(); 
	movimientoOrco1(); 
	movimientoOrco2(); 
	movimientoGoblin1(); 
	movimientoGoblin2();
	detectarLlave(); 
	salir(); 
	detectarColision();
	contadorMonedasNivel1();
	mostrarTodosDatos();
	detectarCorazon1();
});
$('#derecha1').click(function(){
	derechaUser(); 
	movimientoOrco1(); 
	movimientoOrco2(); 
	movimientoGoblin1(); 
	movimientoGoblin2();
	detectarLlave(); 
	salir(); 
	detectarColision();
	contadorMonedasNivel1();
	mostrarTodosDatos();
	detectarCorazon1();
});
$('#da1').click(function(){
	throwdice();
	ataque=ataque+ch+cd;
	mostrarTodosDatos();
	if (x == x_orco1 && y == y_orco1) {
		ataqueorco1=ataqueorco1+ch+cd;
		if (ataque > defensaorco1){
			vidaorco1=vidaorco1-daño;
		}
		else
			vidaorco1=vidaorco1;
		if (ataqueorco1 > defensa){
			vida=vida-dañoorco1;
		}
		else
			vida=vida;
    }
	if (x == x_orco2 && y == y_orco2) {
		ataqueorco2=ataqueorco2+ch+cd;
		if (ataque > defensaorco2){
			vidaorco2=vidaorco2-daño;
		}
		else
			vidaorco2=vidaorco2;
		if (ataqueorco2 > defensa){
			vida=vida-dañoorco2;
		}
		else
			vida=vida;
    }
	if (x == x_goblin1 && y == y_goblin1) {
		ataquegoblin1=ataquegoblin1+ch+cd;
		if (ataque > defensagoblin1){
			vidagoblin1=vidagoblin1-daño;
		}
		else
			vidagoblin1=vidagoblin1;
		if (ataquegoblin1 > defensa){
			vida=vida-dañogoblin1;
		}
		else
			vida=vida;
    }
	if (x == x_goblin2 && y == y_goblin2) {
		ataquegoblin2=ataquegoblin2+ch+cd;
		if (ataque > defensagoblin2){
			vidagoblin2=vidagoblin2-daño;
		}
		else
			vidagoblin2=vidagoblin2;
		if (ataquegoblin2 > defensa){
			vida=vida-dañogoblin2;
		}
		else
			vida=vida;
    }
	ataque=ataque-ch-cd;
	actualizarDatos();
	actualizarDatosEnemigo();
	detectarganador();	
})
function actualizarDatos(){
	e=document.getElementById("vidahumano");
	e.innerHTML="Vida Personaje: "+vida;
}
function actualizarDatos2(){
	e=document.getElementById("vidahumano2");
	e.innerHTML="Vida Personaje: "+vida;
}
function actualizarDatos3(){
	e=document.getElementById("vidahumano3");
	e.innerHTML="Vida Personaje: "+vida;
}	
function actualizarDatosEnemigo(){
	if (x == x_orco1 && y == y_orco1){
	e=document.getElementById("vidaenemigo");
	e.innerHTML="Vida Enemigo: "+vidaorco1;
	}
	else if (x == x_orco2 && y == y_orco2){
	e=document.getElementById("vidaenemigo");
	e.innerHTML="Vida Enemigo: "+vidaorco2;
	}
	else if (x == x_goblin1 && y == y_goblin1){
	e=document.getElementById("vidaenemigo");
	e.innerHTML="Vida Enemigo: "+vidagoblin1;
	}
	else if (x == x_goblin2 && y == y_goblin2){
	e=document.getElementById("vidaenemigo");
	e.innerHTML="Vida Enemigo: "+vidagoblin2;
	}
}
function detectarganador(){
	if(vida<=0){
		$("#pelea").css('display','none');
		$("#level1").css('display','block');
		alert('Usted ah perdido');
	}
	if (x == x_orco1 && y == y_orco1) {
		if(vidaorco1<=0){
		$("#pelea").css('display','none');
		$("#level1").css('display','block');
		$("#orco1").css('display','none');
		alert('Usted ha vencido');
		x_orco1=0;
		y_orco1=600;
		}	
	}
	if (x == x_orco2 && y == y_orco2) {
		if(vidaorco2<=0){
		$("#pelea").css('display','none');
		$("#level1").css('display','block');
		$("#orco2").css('display','none');
		alert('Usted ha vencido');
		x_orco2=0;
		y_orco2=600;
		}	
	}
	if (x == x_goblin1 && y == y_goblin1) {
		if(vidagoblin1<=0){
		$("#pelea").css('display','none');
		$("#level1").css('display','block');
		$("#goblin1").css('display','none');
		alert('Usted ha vencido');
		x_goblin1=0;
		y_goblin1=600;
		}	
	}
	if (x == x_goblin2 && y == y_goblin2) {
		if(vidagoblin2<=0){
		$("#pelea").css('display','none');
		$("#level1").css('display','block');
		$("#goblin2").css('display','none');
		alert('Usted ha vencido');
		x_goblin2=0;
		y_goblin2=600;
		}	
	}
}
function detectarColision() {
    if (x == x_orco1 && y == y_orco1) {
		pelea();
		actualizarDatos();
		actualizarDatosEnemigo();
		mostrarTodosDatos();
    }
	else if (x == x_orco2 && y == y_orco2) {
		pelea();
		actualizarDatos();
		actualizarDatosEnemigo();
		mostrarTodosDatos();		
	}
	else if (x == x_goblin1 && y == y_goblin1) {
       	pelea();
		actualizarDatos();
		actualizarDatosEnemigo();        
		mostrarTodosDatos();
    }
	else if (x == x_goblin2 && y == y_goblin2) {
       	pelea();
		actualizarDatos();
		actualizarDatosEnemigo();
		mostrarTodosDatos();
    }
}

function pelea()
{
		$("#pelea").css('display','block');
		$("#level1").css('display','none');	
}
function salir()
{
	if(y == 300 && x == 1100){
		
		if(puerta1abierta==0){
		alert('Tiene que conseguir la llave para pasar');
		}
		else if(puerta1abierta==1){
		$("#level1").fadeOut('slow', function() {
			$("#level1").css("display", "none");
		});
		$("#level2").fadeIn('slow', function() {
			$("#level2").css("display", "block");
		});
		}
	}
}


function arribaUser(){
		y = y - 50;
        if (y < 0) y = 0;
		if (y == 50 && x > 150 && x < 950) y = 100;
		if (y == 550 && x > 150 && x < 950) y = 600;
		if (y == 450 && x > 150 && x < 250) y = 500;
		if (y == 450 && x > 850 && x < 950) y = 500;
        $("#pedobear").css({ "top": y + "px"});
}
function abajoUser(){
		y = y + 50;
        if (y > 550) y = 600;
		if (y == 50 && x > 150 && x < 950) y = 0;
		if (y == 550 && x > 150 && x < 950) y = 500;
		if (y == 150 && x > 150 && x < 250) y = 100;
		if (y == 150 && x > 850 && x < 950) y = 100;
		if (y == 600 && x >= 0 && x < 50) y = 550;
        $("#pedobear").css({ "top": y + "px"});
}
function derechaUser(){
		x = x + 50;
        if (x > 1050) x = 1100;
		if (x == 200 && y > 0 && y < 100) x = 150;
		if (x == 200 && y > 500 && y < 600) x = 150;
		if (x == 200 && y > 100 && y < 500) x = 150;
		if (x == 900 && y > 100 && y < 500) x = 850;
        $("#pedobear").css({ "left": x + "px"});
}
function izquierdaUser(){
		x = x - 50;
        if (x < 0) x = 0;
		if (x == 900 && y > 0 && y < 100) x = 950;
		if (x == 900 && y > 500 && y < 600) x = 950;
		if (x == 200 && y > 100 && y < 500) x = 250;
		if (x == 900 && y > 100 && y < 500) x = 950;
		if (x == 0 && y > 550 && y < 650) x = 50;
        $("#pedobear").css({ "left": x + "px"});
}
function arribaOrco1(){
		y_orco1 = y_orco1 - 50;
        if (y_orco1 == 50 && x_orco1 > 150 && x_orco1 < 950) y_orco1 = 100;
		if (y_orco1 == 550 && x_orco1 > 150 && x_orco1 < 950) y_orco1 = 600;
		if (y_orco1 == 450 && x_orco1 > 150 && x_orco1 < 250) y_orco1 = 500;
		if (y_orco1 == 450 && x_orco1 > 850 && x_orco1 < 950) y_orco1 = 500;
		if (y_orco1 == 550 && x_orco1 >= 0 && x_orco1 < 50) y_orco1 = 600;
        $("#orco1").css({ "top": y_orco1 + "px"});
}
function arribaOrco2(){		
		y_orco2 = y_orco2 - 50;
        if (y_orco2 == 50 && x_orco2 > 150 && x_orco2 < 950) y_orco2 = 100;
		if (y_orco2 == 550 && x_orco2 > 150 && x_orco2 < 950) y_orco2 = 600;
		if (y_orco2 == 450 && x_orco2 > 150 && x_orco2 < 250) y_orco2 = 500;
		if (y_orco2 == 450 && x_orco2 > 850 && x_orco2 < 950) y_orco2 = 500;
		if (y_orco2 == 550 && x_orco2 >= 0 && x_orco2 < 50) y_orco2 = 600;
        $("#orco2").css({ "top": y_orco2 + "px"});
}
function arribaGoblin1(){		
		y_goblin1 = y_goblin1 - 50;
        if (y_goblin1 == 50 && x_goblin1 > 150 && x_goblin1 < 950) y_goblin1 = 100;
		if (y_goblin1 == 550 && x_goblin1 > 150 && x_goblin1 < 950) y_goblin1 = 600;
		if (y_goblin1 == 450 && x_goblin1 > 150 && x_goblin1 < 250) y_goblin1 = 500;
		if (y_goblin1 == 450 && x_goblin1 > 850 && x_goblin1 < 950) y_goblin1 = 500;
		if (y_goblin1 == 550 && x_goblin1 >= 0 && x_goblin1 < 50) y_goblin1 = 600;
        $("#goblin1").css({ "top": y_goblin1 + "px"});
}
function arribaGoblin2(){		
		y_goblin2 = y_goblin2 - 50;
        if (y_goblin2 == 50 && x_goblin2 > 150 && x_goblin2 < 950) y_goblin2 = 100;
		if (y_goblin2 == 550 && x_goblin2 > 150 && x_goblin2 < 950) y_goblin2 = 600;
		if (y_goblin2 == 450 && x_goblin2 > 150 && x_goblin2 < 250) y_goblin2 = 500;
		if (y_goblin2 == 450 && x_goblin2 > 850 && x_goblin2 < 950) y_goblin2 = 500;
		if (y_goblin2 == 550 && x_goblin2 >= 0 && x_goblin2 < 50) y_goblin2 = 600;
        $("#goblin2").css({ "top": y_goblin2 + "px"});		
}
function abajoOrco1(){
		y_orco1 = y_orco1 + 50;
        if (y_orco1 == 50 && x_orco1 > 150 && x_orco1 < 950) y_orco1 = 0;
		if (y_orco1 == 550 && x_orco1 > 150 && x_orco1 < 950) y_orco1 = 500;
		if (y_orco1 == 150 && x_orco1 > 150 && x_orco1 < 250) y_orco1 = 100;
		if (y_orco1 == 150 && x_orco1 > 850 && x_orco1 < 950) y_orco1 = 100;
		if (y_orco1 == 600 && x_orco1 >= 0 && x_orco1 < 50) y_orco1 = 550;
        $("#orco1").css({ "top": y_orco1 + "px"});
}		
function abajoOrco2(){
		y_orco2 = y_orco2 + 50;
        if (y_orco2 == 50 && x_orco2 > 150 && x_orco2 < 950) y_orco2 = 0;
		if (y_orco2 == 550 && x_orco2 > 150 && x_orco2 < 950) y_orco2 = 500;
		if (y_orco2 == 150 && x_orco2 > 150 && x_orco2 < 250) y_orco2 = 100;
		if (y_orco2 == 150 && x_orco2 > 850 && x_orco2 < 950) y_orco2 = 100;
		if (y_orco2 == 600 && x_orco2 >= 0 && x_orco2 < 50) y_orco2 = 550;
        $("#orco2").css({ "top": y_orco2 + "px"});
}
function abajoGoblin1(){		
		y_goblin1 = y_goblin1 + 50;
        if (y_goblin1 == 50 && x_goblin1 > 150 && x_goblin1 < 950) y_goblin1 = 0;
		if (y_goblin1 == 550 && x_goblin1 > 150 && x_goblin1 < 950) y_goblin1 = 500;
		if (y_goblin1 == 150 && x_goblin1 > 150 && x_goblin1 < 250) y_goblin1 = 100;
		if (y_goblin1 == 150 && x_goblin1 > 850 && x_goblin1 < 950) y_goblin1 = 100;
		if (y_goblin1 == 600 && x_goblin1 >= 0 && x_goblin1 < 50) y_goblin1 = 550;
        $("#goblin1").css({ "top": y_goblin1 + "px"});
}
function abajoGoblin2(){
		y_goblin2 = y_goblin2 + 50;
        if (y_goblin2 == 50 && x_goblin2 > 150 && x_goblin2 < 950) y_goblin2 = 0;
		if (y_goblin2 == 550 && x_goblin2 > 150 && x_goblin2 < 950) y_goblin2 = 500;
		if (y_goblin2 == 150 && x_goblin2 > 150 && x_goblin2 < 250) y_goblin2 = 100;
		if (y_goblin2 == 150 && x_goblin2 > 850 && x_goblin2 < 950) y_goblin2 = 100;
		if (y_goblin2 == 600 && x_goblin2 >= 0 && x_goblin2 < 50) y_goblin2 = 550;
        $("#goblin2").css({ "top": y_goblin2 + "px"});		
}
function derechaOrco1(){
		x_orco1 = x_orco1 + 50;
        if (x_orco1 > 1050) x_orco1 = 1100;
		if (x_orco1 == 200 && y_orco1 > 0 && y_orco1 < 100) x_orco1 = 150;
		if (x_orco1 == 200 && y_orco1 > 500 && y_orco1 < 600) x_orco1 = 150;
		if (x_orco1 == 200 && y_orco1 > 100 && y_orco1 < 500) x_orco1 = 150;
		if (x_orco1 == 900 && y_orco1 > 100 && y_orco1 < 500) x_orco1 = 850;
		if (x_orco1 == 50 && y_orco1 > 550 && y_orco1 < 650) x_orco1 = 0;
        $("#orco1").css({ "left": x_orco1 + "px"});
}
function derechaOrco2(){		
		x_orco2 = x_orco2 + 50;
        if (x_orco2 > 1050) x_orco2 = 1100;
		if (x_orco2 == 200 && y_orco2 > 0 && y_orco2 < 100) x_orco2 = 150;
		if (x_orco2 == 200 && y_orco2 > 500 && y_orco2 < 600) x_orco2 = 150;
		if (x_orco2 == 200 && y_orco2 > 100 && y_orco2 < 500) x_orco2 = 150;
		if (x_orco2 == 900 && y_orco2 > 100 && y_orco2 < 500) x_orco2 = 850;
		if (x_orco2 == 50 && y_orco2 > 550 && y_orco2 < 650) x_orco2 = 0;
        $("#orco2").css({ "left": x_orco2 + "px"});
}
function derechaGoblin1(){		
		x_goblin1 = x_goblin1 + 50;
        if (x_goblin1 > 1050) x_goblin1 = 1100;
		if (x_goblin1 == 200 && y_goblin1 > 0 && y_goblin1 < 100) x_goblin1 = 150;
		if (x_goblin1 == 200 && y_goblin1 > 500 && y_goblin1 < 600) x_goblin1 = 150;
		if (x_goblin1 == 200 && y_goblin1 > 100 && y_goblin1 < 500) x_goblin1 = 150;
		if (x_goblin1 == 900 && y_goblin1 > 100 && y_goblin1 < 500) x_goblin1 = 850;
		if (x_goblin1 == 50 && y_goblin1 > 550 && y_goblin1 < 650) x_goblin1 = 0;
        $("#goblin1").css({ "left": x_goblin1 + "px"});
}
function derechaGoblin2(){		
		x_goblin2 = x_goblin2 + 50;
        if (x_goblin2 > 1050) x_goblin2 = 1100;
		if (x_goblin2 == 200 && y_goblin2 > 0 && y_goblin2 < 100) x_goblin2 = 150;
		if (x_goblin2 == 200 && y_goblin2 > 500 && y_goblin2 < 600) x_goblin2 = 150;
		if (x_goblin2 == 200 && y_goblin2 > 100 && y_goblin2 < 500) x_goblin2 = 150;
		if (x_goblin2 == 900 && y_goblin2 > 100 && y_goblin2 < 500) x_goblin2 = 850;
		if (x_goblin2 == 50 && y_goblin2 > 550 && y_goblin2 < 650) x_goblin2 = 0;
        $("#goblin2").css({ "left": x_goblin2 + "px"});
}
function izquierdaOrco1(){
		x_orco1 = x_orco1 - 50;
        if (x_orco1 < 0) x_orco1 = 0;
		if (x_orco1 == 900 && y_orco1 > 0 && y_orco1 < 100) x_orco1 = 950;
		if (x_orco1 == 900 && y_orco1 > 500 && y_orco1 < 600) x_orco1 = 950;
		if (x_orco1 == 200 && y_orco1 > 100 && y_orco1 < 500) x_orco1 = 250;
		if (x_orco1 == 900 && y_orco1 > 100 && y_orco1 < 500) x_orco1 = 950;
		if (x_orco1 == 0 && y_orco1 > 550 && y_orco1 < 650) x_orco1 = 50;
        $("#orco1").css({ "left": x_orco1 + "px"});
}
function izquierdaOrco2(){		
		x_orco2 = x_orco2 - 50;
        if (x_orco2 < 0) x_orco2 = 0;
		if (x_orco2 == 900 && y_orco2 > 0 && y_orco2 < 100) x_orco2 = 950;
		if (x_orco2 == 900 && y_orco2 > 500 && y_orco2 < 600) x_orco2 = 950;
		if (x_orco2 == 200 && y_orco2 > 100 && y_orco2 < 500) x_orco2 = 250;
		if (x_orco2 == 900 && y_orco2 > 100 && y_orco2 < 500) x_orco2 = 950;
		if (x_orco2 == 0 && y_orco2 > 550 && y_orco2 < 650) x_orco2 = 50;
        $("#orco2").css({ "left": x_orco2 + "px"});
}
function izquierdaGoblin1(){
		x_goblin1 = x_goblin1 - 50;
        if (x_goblin1 < 0) x_goblin1 = 0;
		if (x_goblin1 == 900 && y_goblin1 > 0 && y_goblin1 < 100) x_goblin1 = 950;
		if (x_goblin1 == 900 && y_goblin1 > 500 && y_goblin1 < 600) x_goblin1 = 950;
		if (x_goblin1 == 200 && y_goblin1 > 100 && y_goblin1 < 500) x_goblin1 = 250;
		if (x_goblin1 == 900 && y_goblin1 > 100 && y_goblin1 < 500) x_goblin1 = 950;
		if (x_goblin1 == 0 && y_goblin1 > 550 && y_goblin1 < 650) x_goblin1 = 50;
        $("#goblin1").css({ "left": x_goblin1 + "px"});
}
function izquierdaGoblin2(){		
		x_goblin2 = x_goblin2 - 50;
        if (x_goblin2 < 0) x_goblin2 = 0;
		if (x_goblin2 == 900 && y_goblin2 > 0 && y_goblin2 < 100) x_goblin2 = 950;
		if (x_goblin2 == 900 && y_goblin2 > 500 && y_goblin2 < 600) x_goblin2 = 950;
		if (x_goblin2 == 200 && y_goblin2 > 100 && y_goblin2 < 500) x_goblin2 = 250;
		if (x_goblin2 == 900 && y_goblin2 > 100 && y_goblin2 < 500) x_goblin2 = 950;
		if (x_goblin2 == 0 && y_goblin2 > 550 && y_goblin2 < 650) x_goblin2 = 50;
        $("#goblin2").css({ "left": x_goblin2 + "px"});		
}
function movimientoOrco1(){
		if(y > y_orco1){
			abajoOrco1();
		}
		else if(y < y_orco1){
			arribaOrco1();
		}
		else if(y == y_orco1){
			if( x > x_orco1 ){
				derechaOrco1();
			}
			else if( x < x_orco1 ){
				izquierdaOrco1();
			}
		}
}
function movimientoOrco2(){
		if(y > y_orco2){
			abajoOrco2();
		}
		else if(y < y_orco2){
			arribaOrco2();
		}
		else if(y == y_orco2){
			if( x > x_orco2 ){
				derechaOrco2();
			}
			else if( x < x_orco2 ){
				izquierdaOrco2();
			}
		}
}
function movimientoGoblin1(){
		if(y > y_goblin1){
			abajoGoblin1();
		}
		else if(y < y_goblin1){
			arribaGoblin1();
		}
		else if(y == y_goblin1){
			if( x > x_goblin1 ){
				derechaGoblin1();
			}
			else if( x < x_goblin1 ){
				izquierdaGoblin1();
			}
		}
}
function movimientoGoblin2(){
		if(y > y_goblin2){
			abajoGoblin2();
		}
		else if(y < y_goblin2){
			arribaGoblin2();
		}
		else if(y == y_goblin2){
			if( x > x_goblin2 ){
				derechaGoblin2();
			}
			else if( x < x_goblin2 ){
				izquierdaGoblin2();
			}
		}
}
/*----------------------------------*/
/*level2*/
function contadorMonedasNivel2(){
	if (x_nivel2 == x_moneda5 && y_nivel2 == y_moneda5) {
		contadorMon=contadorMon+25;
		x_moneda5=0;
		y_moneda5=600;
		mostrarTodosDatos();
		var d = document.getElementById("moneda5");
		var p=d.parentNode;
		p.removeChild(d);
	}
	else if (x_nivel2 == x_moneda6 && y_nivel2 == y_moneda6) {
		contadorMon=contadorMon+25;
		x_moneda6=0;
		y_moneda6=600;
		mostrarTodosDatos();
		var d = document.getElementById("moneda6");
		var p=d.parentNode;
		p.removeChild(d);
	}
	else if (x_nivel2 == x_moneda7 && y_nivel2 == y_moneda7) {
		contadorMon=contadorMon+25;
		x_moneda7=0;
		y_moneda7=600;
		mostrarTodosDatos();
		var d = document.getElementById("moneda7");
		var p=d.parentNode;
		p.removeChild(d);
	}
	else if (x_nivel2 == x_moneda8 && y_nivel2 == y_moneda8) {
		contadorMon=contadorMon+25;
		x_moneda8=0;
		y_moneda8=600;
		mostrarTodosDatos();
		var d = document.getElementById("moneda8");
		var p=d.parentNode;
		p.removeChild(d);
	}
}
$('#arriba2').click(function(){
	arribaUser2(); 
	movimientoOrco4(); 
	movimientoOrco5(); 
	movimientoGoblin3(); 
	movimientoGoblin4();
	movimientoGoblin5();
	detectarLlave2(); 
	salir2(); 
	detectarColision2();
	contadorMonedasNivel2();
	mostrarTodosDatos();
	detectarCorazon2();
});
$('#abajo2').click(function(){
	abajoUser2(); 
	movimientoOrco4(); 
	movimientoOrco5(); 
	movimientoGoblin3(); 
	movimientoGoblin4();
	movimientoGoblin5();
	detectarLlave2(); 
	salir2(); 
	detectarColision2();
	contadorMonedasNivel2();
	mostrarTodosDatos();
	detectarCorazon2();
});
$('#izquierda2').click(function(){
	izquierdaUser2(); 
	movimientoOrco4(); 
	movimientoOrco5(); 
	movimientoGoblin3(); 
	movimientoGoblin4();
	movimientoGoblin5();
	detectarLlave2(); 
	salir2(); 
	detectarColision2();
	contadorMonedasNivel2();
	mostrarTodosDatos();
	detectarCorazon2();
});
$('#derecha2').click(function(){
	derechaUser2(); 
	movimientoOrco4(); 
	movimientoOrco5(); 
	movimientoGoblin3(); 
	movimientoGoblin4();
	movimientoGoblin5();
	detectarLlave2(); 
	salir2(); 
	detectarColision2();
	contadorMonedasNivel2();
	mostrarTodosDatos();
	detectarCorazon2();
});
$('#da2').click(function(){
	throwdice2();
	ataque=ataque+ch+cd;
	mostrarTodosDatos();
	if (x_nivel2 == x_orco4 && y_nivel2 == y_orco4) {
		ataqueorco4=ataqueorco4+ch+cd;
		if (ataque > defensaorco4){
			vidaorco4=vidaorco4-daño;
		}
		else
			vidaorco4=vidaorco4;
		if (ataqueorco4 > defensa){
			vida=vida-dañoorco4;
		}
		else
			vida=vida;
    }
	if (x_nivel2 == x_orco5 && y_nivel2 == y_orco5) {
		ataqueorco5=ataqueorco5+ch+cd;
		if (ataque > defensaorco5){
			vidaorco5=vidaorco5-daño;
		}
		else
			vidaorco5=vidaorco5;
		if (ataqueorco5 > defensa){
			vida=vida-dañoorco5;
		}
		else
			vida=vida;
    }
	if (x_nivel2 == x_goblin3 && y_nivel2 == y_goblin3) {
		ataquegoblin3=ataquegoblin3+ch+cd;
		if (ataque > defensagoblin3){
			vidagoblin3=vidagoblin3-daño;
		}
		else
			vidagoblin3=vidagoblin3;
		if (ataquegoblin3 > defensa){
			vida=vida-dañogoblin3;
		}
		else
			vida=vida;
    }
	if (x_nivel2 == x_goblin4 && y_nivel2 == y_goblin4) {
		ataquegoblin4=ataquegoblin4+ch+cd;
		if (ataque > defensagoblin4){
			vidagoblin4=vidagoblin4-daño;
		}
		else
			vidagoblin4=vidagoblin4;
		if (ataquegoblin4 > defensa){
			vida=vida-dañogoblin4;
		}
		else
			vida=vida;
    }
	if (x_nivel2 == x_goblin5 && y_nivel2 == y_goblin5) {
		ataquegoblin5=ataquegoblin5+ch+cd;
		if (ataque > defensagoblin5){
			vidagoblin5=vidagoblin5-daño;
		}
		else
			vidagoblin5=vidagoblin5;
		if (ataquegoblin5 > defensa){
			vida=vida-dañogoblin5;
		}
		else
			vida=vida;
    }
	ataque=ataque-ch-cd;
	actualizarDatos2();
	actualizarDatosEnemigo2();
	detectarganador2();	
})

function detectarganador2(){
	if(vida<=0){
		$("#pelea2").css('display','none');
		$("#level2").css('display','block');
		alert('Usted ah perdido');
	}
	if (x_nivel2 == x_orco4 && y_nivel2 == y_orco4) {
		if(vidaorco4<=0){
		$("#pelea2").css('display','none');
		$("#level2").css('display','block');
		$("#orco4").css('display','none');
		alert('Usted ha vencido');
		x_orco4=0;
		y_orco4=600;
		}	
	}
	if (x_nivel2 == x_orco5 && y_nivel2 == y_orco5) {
		if(vidaorco5<=0){
		$("#pelea2").css('display','none');
		$("#level2").css('display','block');
		$("#orco5").css('display','none');
		alert('Usted ha vencido');
		x_orco5=0;
		y_orco5=600;
		}	
	}
	if (x_nivel2 == x_goblin3 && y_nivel2 == y_goblin3) {
		if(vidagoblin3<=0){
		$("#pelea2").css('display','none');
		$("#level2").css('display','block');
		$("#goblin3").css('display','none');
		alert('Usted ha vencido');
		x_goblin3=0;
		y_goblin3=600;
		}	
	}
	if (x_nivel2 == x_goblin4 && y_nivel2 == y_goblin4) {
		if(vidagoblin4<=0){
		$("#pelea2").css('display','none');
		$("#level2").css('display','block');
		$("#goblin4").css('display','none');
		alert('Usted ha vencido');
		x_goblin4=0;
		y_goblin4=600;
		}	
	}
	if (x_nivel2 == x_goblin5 && y_nivel2 == y_goblin5) {
		if(vidagoblin5<=0){
		$("#pelea2").css('display','none');
		$("#level2").css('display','block');
		$("#goblin5").css('display','none');
		alert('Usted ha vencido');
		x_goblin5=0;
		y_goblin5=600;
		}	
	}
}
function detectarganador3(){
	if(vida<=0){
		$("#pelea3").css('display','none');
		$("#level3").css('display','block');
		alert('Usted ah perdido');
	}
	if (x_nivel3 == x_orco6 && y_nivel3 == y_orco6) {
		if(vidaorco6<=0){
		$("#pelea3").css('display','none');
		$("#level3").css('display','block');
		$("#orco6").css('display','none');
		alert('Usted ha vencido');
		x_orco6=0;
		y_orco6=600;
		}	
	}
	if (x_nivel3 == x_orco7 && y_nivel3 == y_orco7) {
		if(vidaorco7<=0){
		$("#pelea3").css('display','none');
		$("#level3").css('display','block');
		$("#orco7").css('display','none');
		alert('Usted ha vencido');
		x_orco7=0;
		y_orco7=600;
		}	
	}
	if (x_nivel3 == x_goblin6 && y_nivel3 == y_goblin6) {
		if(vidagoblin6<=0){
		$("#pelea3").css('display','none');
		$("#level3").css('display','block');
		$("#goblin6").css('display','none');
		alert('Usted ha vencido');
		x_goblin6=0;
		y_goblin6=600;
		}	
	}
	if (x_nivel3 == x_goblin7 && y_nivel3 == y_goblin7) {
		if(vidagoblin7<=0){
		$("#pelea3").css('display','none');
		$("#level3").css('display','block');
		$("#goblin7").css('display','none');
		alert('Usted ha vencido');
		x_goblin7=0;
		y_goblin7=600;
		}	
	}
	if (x_nivel3 == x_fantasma && y_nivel3 == y_fantasma) {
		if(vidafantasma1<=0){
		$("#pelea3").css('display','none');
		$("#level3").css('display','block');
		$("#fantasma").css('display','none');
		alert('Usted ha vencido');
		x_fantasma=0;
		y_fantasma=600;
		}	
	}
}
function arribaUser2(){
		y_nivel2 = y_nivel2 - 50;
        if (y_nivel2 < 0) y_nivel2 = 0;
		if (y_nivel2 == 50 && x_nivel2 >= 0 && x_nivel2 < 350) y_nivel2 = 100;
		if (y_nivel2 == 50 && x_nivel2 >= 400 && x_nivel2 < 750) y_nivel2 = 100;
		if (y_nivel2 == 50 && x_nivel2 >= 800 && x_nivel2 < 1150) y_nivel2 = 100;
		if (y_nivel2 == 200 && x_nivel2 >= 250 && x_nivel2 < 500) y_nivel2 = 250;
		if (y_nivel2 == 200 && x_nivel2 >= 650 && x_nivel2 < 900) y_nivel2 = 250;
		if (y_nivel2 == 350 && x_nivel2 >= 250 && x_nivel2 < 500) y_nivel2 = 400;
		if (y_nivel2 == 350 && x_nivel2 >= 650 && x_nivel2 < 900) y_nivel2 = 400;
		if (y_nivel2 == 500 && x_nivel2 >= 250 && x_nivel2 < 500) y_nivel2 = 550;
		if (y_nivel2 == 500 && x_nivel2 >= 650 && x_nivel2 < 900) y_nivel2 = 550;
        $("#pedobear2").css({ "top": y_nivel2 + "px"});
}
function abajoUser2(){
		y_nivel2 = y_nivel2 + 50;
        if (y_nivel2 > 550) y_nivel2 = 600;
		if (y_nivel2 == 50 && x_nivel2 >= 0 && x_nivel2 < 350) y_nivel2 = 0;
		if (y_nivel2 == 50 && x_nivel2 >= 400 && x_nivel2 < 750) y_nivel2 = 0;
		if (y_nivel2 == 50 && x_nivel2 >= 800 && x_nivel2 < 1150) y_nivel2 = 0;
		if (y_nivel2 == 200 && x_nivel2 >= 250 && x_nivel2 < 500) y_nivel2 = 150;
		if (y_nivel2 == 200 && x_nivel2 >= 650 && x_nivel2 < 900) y_nivel2 = 150;
		if (y_nivel2 == 350 && x_nivel2 >= 250 && x_nivel2 < 500) y_nivel2 = 300;
		if (y_nivel2 == 350 && x_nivel2 >= 650 && x_nivel2 < 900) y_nivel2 = 300;
		if (y_nivel2 == 500 && x_nivel2 >= 250 && x_nivel2 < 500) y_nivel2 = 450;
		if (y_nivel2 == 500 && x_nivel2 >= 650 && x_nivel2 < 900) y_nivel2 = 450;
		if (y_nivel2 == 150 && x_nivel2 >= 100 && x_nivel2 < 150) y_nivel2 = 100;
		if (y_nivel2 == 150 && x_nivel2 >= 1000 && x_nivel2 < 1050) y_nivel2 = 100;
		if (y_nivel2 == 600 && x_nivel2 >= 0 && x_nivel2 < 50) y_nivel2 = 550;
        $("#pedobear2").css({ "top": y_nivel2 + "px"});
}
function derechaUser2(){
		x_nivel2 = x_nivel2 + 50;
        if (x_nivel2 > 1050) x_nivel2 = 1100;
		if (x_nivel2 == 100 && y_nivel2 > 100 && y_nivel2 < 650) x_nivel2 = 50;
		if (x_nivel2 == 1000 && y_nivel2 > 100 && y_nivel2 < 650) x_nivel2 = 950;
		if (x_nivel2 == 250 && y_nivel2 > 150 && y_nivel2 < 250) x_nivel2 = 200;
		if (x_nivel2 == 250 && y_nivel2 > 300 && y_nivel2 < 400) x_nivel2 = 200;
		if (x_nivel2 == 250 && y_nivel2 > 450 && y_nivel2 < 550) x_nivel2 = 200;
		if (x_nivel2 == 650 && y_nivel2 > 150 && y_nivel2 < 250) x_nivel2 = 600;
		if (x_nivel2 == 650 && y_nivel2 > 300 && y_nivel2 < 400) x_nivel2 = 600;
		if (x_nivel2 == 650 && y_nivel2 > 450 && y_nivel2 < 550) x_nivel2 = 600;
		if (x_nivel2 == 400 && y_nivel2 > 0 && y_nivel2 < 100) x_nivel2 = 350;
		if (x_nivel2 == 800 && y_nivel2 > 0 && y_nivel2 < 100) x_nivel2 = 750;
        $("#pedobear2").css({ "left": x_nivel2 + "px"});
}
function izquierdaUser2(){
		x_nivel2 = x_nivel2 - 50;
        if (x_nivel2 < 0) x_nivel2 = 0;
		if (x_nivel2 == 100 && y_nivel2 > 100 && y_nivel2 < 650) x_nivel2 = 150;
		if (x_nivel2 == 1000 && y_nivel2 > 100 && y_nivel2 < 650) x_nivel2 = 1050;
		if (x_nivel2 == 450 && y_nivel2 > 150 && y_nivel2 < 250) x_nivel2 = 500;
		if (x_nivel2 == 450 && y_nivel2 > 300 && y_nivel2 < 400) x_nivel2 = 500;
		if (x_nivel2 == 450 && y_nivel2 > 450 && y_nivel2 < 550) x_nivel2 = 500;
		if (x_nivel2 == 850 && y_nivel2 > 150 && y_nivel2 < 250) x_nivel2 = 900;
		if (x_nivel2 == 850 && y_nivel2 > 300 && y_nivel2 < 400) x_nivel2 = 900;
		if (x_nivel2 == 850 && y_nivel2 > 450 && y_nivel2 < 550) x_nivel2 = 900;
		if (x_nivel2 == 300 && y_nivel2 > 0 && y_nivel2 < 100) x_nivel2 = 350;
		if (x_nivel2 == 700 && y_nivel2 > 0 && y_nivel2 < 100) x_nivel2 = 750;
		if (x_nivel2 == 0 && y_nivel2 > 550 && y_nivel2 < 650) x_nivel2 = 50;
        $("#pedobear2").css({ "left": x_nivel2 + "px"});
}
function detectarLlave2() {
    if (x_nivel2 ==550 && y_nivel2 == 600) {
		llaveObtenida = 1;
		puerta2abierta=1;
        $("#puerta2").css({'background-image': 'url(img/puerta.jpg)'});
		$("#llave2").css('display','none');}
}

function detectarColision2() {
    
	if (x_nivel2 == x_orco4 && y_nivel2 == y_orco4) {
		pelea2();
		actualizarDatos2();
		actualizarDatosEnemigo2();
	}
	else if (x_nivel2 == x_orco5 && y_nivel2 == y_orco5) {
		pelea2();
		actualizarDatos2();
		actualizarDatosEnemigo2();
	}
	else if (x_nivel2 == x_goblin3 && y_nivel2 == y_goblin3) {
       	pelea2();
		actualizarDatos2();
		actualizarDatosEnemigo2();
    }
	else if (x_nivel2 == x_goblin4 && y_nivel2 == y_goblin4) {
		pelea2();
		actualizarDatos2();
		actualizarDatosEnemigo2();
    }
	else if(x_nivel2 == x_goblin5 && y_nivel2 == y_goblin5) {
       	pelea2();
		actualizarDatos2();
		actualizarDatosEnemigo2();
    }
}
function actualizarDatosEnemigo2(){
	if (x_nivel2 == x_orco4 && y_nivel2 == y_orco4){
	e=document.getElementById("vidaenemigo2");
	e.innerHTML="Vida Enemigo: "+vidaorco4;
	}
	else if (x_nivel2 == x_orco5 && y_nivel2 == y_orco5){
	e=document.getElementById("vidaenemigo2");
	e.innerHTML="Vida Enemigo: "+vidaorco5;
	}
	else if (x_nivel2 == x_goblin3 && y_nivel2 == y_goblin3){
	e=document.getElementById("vidaenemigo2");
	e.innerHTML="Vida Enemigo: "+vidagoblin3;
	}
	else if (x_nivel2 == x_goblin4 && y_nivel2 == y_goblin4){
	e=document.getElementById("vidaenemigo2");
	e.innerHTML="Vida Enemigo: "+vidagoblin4;
	}
	else if (x_nivel2 == x_goblin5 && y_nivel2 == y_goblin5){
	e=document.getElementById("vidaenemigo2");
	e.innerHTML="Vida Enemigo: "+vidagoblin5;
	}
}
function actualizarDatosEnemigo3(){
	if (x_nivel3 == x_orco6 && y_nivel3 == y_orco6){
	e=document.getElementById("vidaenemigo3");
	e.innerHTML="Vida Enemigo: "+vidaorco6;
	}
	else if (x_nivel3 == x_orco7 && y_nivel3 == y_orco7){
	e=document.getElementById("vidaenemigo3");
	e.innerHTML="Vida Enemigo: "+vidaorco7;
	}
	else if (x_nivel3 == x_goblin6 && y_nivel3 == y_goblin6){
	e=document.getElementById("vidaenemigo3");
	e.innerHTML="Vida Enemigo: "+vidagoblin6;
	}
	else if (x_nivel3 == x_goblin7 && y_nivel3 == y_goblin7){
	e=document.getElementById("vidaenemigo3");
	e.innerHTML="Vida Enemigo: "+vidagoblin7;
	}
	else if (x_nivel3 == x_fantasma && y_nivel3 == y_fantasma){
	e=document.getElementById("vidaenemigo3");
	e.innerHTML="Vida Enemigo: "+vidafantasma1;
	}
}
function pelea2()
{
		$("#pelea2").css('display','block');
		$("#level2").css('display','none');
	
}
function salir2()
{
	if(y_nivel2 == 600 && x_nivel2 == 1100){
		
		if(puerta2abierta==0){
		alert('Tiene que conseguir la llave para pasar');
		}
		else if(puerta2abierta==1){
		$("#level2").fadeOut('slow', function() {
			$("#level2").css("display", "none");
		});
		$("#level3").fadeIn('slow', function() {
			$("#level3").css("display", "block");
		});}
		}
}

function arribaOrco4(){
		y_orco4 = y_orco4 - 50;
		if (y_orco4 < 0) y_orco4 = 0;
		if (y_orco4 == 50 && x_orco4 >= 0 && x_orco4 < 350) y_orco4 = 100;
		if (y_orco4 == 50 && x_orco4 >= 400 && x_orco4 < 750) y_orco4 = 100;
		if (y_orco4 == 50 && x_orco4 >= 800 && x_orco4 < 1150) y_orco4 = 100;
		if (y_orco4 == 200 && x_orco4 >= 250 && x_orco4 < 500) y_orco4 = 250;
		if (y_orco4 == 200 && x_orco4 >= 650 && x_orco4 < 900) y_orco4 = 250;
		if (y_orco4 == 350 && x_orco4 >= 250 && x_orco4 < 500) y_orco4 = 400;
		if (y_orco4 == 350 && x_orco4 >= 650 && x_orco4 < 900) y_orco4 = 400;
		if (y_orco4 == 500 && x_orco4 >= 250 && x_orco4 < 500) y_orco4 = 550;
		if (y_orco4 == 500 && x_orco4 >= 650 && x_orco4 < 900) y_orco4 = 550;
		if (y_orco4 == 550 && x_orco4 >= 0 && x_orco4 < 50) y_orco4 = 600;
        $("#orco4").css({ "top": y_orco4 + "px"});
}
function arribaOrco5(){
		y_orco5 = y_orco5 - 50;
		if (y_orco5 < 0) y_orco5 = 0;
		if (y_orco5 == 50 && x_orco5 >= 0 && x_orco5 < 350) y_orco5 = 100;
		if (y_orco5 == 50 && x_orco5 >= 400 && x_orco5 < 750) y_orco5 = 100;
		if (y_orco5 == 50 && x_orco5 >= 800 && x_orco5 < 1150) y_orco5 = 100;
		if (y_orco5 == 200 && x_orco5 >= 250 && x_orco5 < 500) y_orco5 = 250;
		if (y_orco5 == 200 && x_orco5 >= 650 && x_orco5 < 900) y_orco5 = 250;
		if (y_orco5 == 350 && x_orco5 >= 250 && x_orco5 < 500) y_orco5 = 400;
		if (y_orco5 == 350 && x_orco5 >= 650 && x_orco5 < 900) y_orco5 = 400;
		if (y_orco5 == 500 && x_orco5 >= 250 && x_orco5 < 500) y_orco5 = 550;
		if (y_orco5 == 500 && x_orco5 >= 650 && x_orco5 < 900) y_orco5 = 550;
		if (y_orco5 == 550 && x_orco5 >= 0 && x_orco5 < 50) y_orco5 = 600;
        $("#orco5").css({ "top": y_orco5 + "px"});
}
function arribaGoblin3(){
		y_goblin3 = y_goblin3 - 50;
		if (y_goblin3 < 0) y_goblin3 = 0;
		if (y_goblin3 == 50 && x_goblin3 >= 0 && x_goblin3 < 350) y_goblin3 = 100;
		if (y_goblin3 == 50 && x_goblin3 >= 400 && x_goblin3 < 750) y_goblin3 = 100;
		if (y_goblin3 == 50 && x_goblin3 >= 800 && x_goblin3 < 1150) y_goblin3 = 100;
		if (y_goblin3 == 200 && x_goblin3 >= 250 && x_goblin3 < 500) y_goblin3 = 250;
		if (y_goblin3 == 200 && x_goblin3 >= 650 && x_goblin3 < 900) y_goblin3 = 250;
		if (y_goblin3 == 350 && x_goblin3 >= 250 && x_goblin3 < 500) y_goblin3 = 400;
		if (y_goblin3 == 350 && x_goblin3 >= 650 && x_goblin3 < 900) y_goblin3 = 400;
		if (y_goblin3 == 500 && x_goblin3 >= 250 && x_goblin3 < 500) y_goblin3 = 550;
		if (y_goblin3 == 500 && x_goblin3 >= 650 && x_goblin3 < 900) y_goblin3 = 550;
		if (y_goblin3 == 550 && x_goblin3 >= 0 && x_goblin3 < 50) y_goblin3 = 600;
        $("#goblin3").css({ "top": y_goblin3 + "px"});
}
function arribaGoblin4(){
		y_goblin4 = y_goblin4 - 50;
		if (y_goblin4 < 0) y_goblin4 = 0;
		if (y_goblin4 == 50 && x_goblin4 >= 0 && x_goblin4 < 350) y_goblin4 = 100;
		if (y_goblin4 == 50 && x_goblin4 >= 400 && x_goblin4 < 750) y_goblin4 = 100;
		if (y_goblin4 == 50 && x_goblin4 >= 800 && x_goblin4 < 1150) y_goblin4 = 100;
		if (y_goblin4 == 200 && x_goblin4 >= 250 && x_goblin4 < 500) y_goblin4 = 250;
		if (y_goblin4 == 200 && x_goblin4 >= 650 && x_goblin4 < 900) y_goblin4 = 250;
		if (y_goblin4 == 350 && x_goblin4 >= 250 && x_goblin4 < 500) y_goblin4 = 400;
		if (y_goblin4 == 350 && x_goblin4 >= 650 && x_goblin4 < 900) y_goblin4 = 400;
		if (y_goblin4 == 500 && x_goblin4 >= 250 && x_goblin4 < 500) y_goblin4 = 550;
		if (y_goblin4 == 500 && x_goblin4 >= 650 && x_goblin4 < 900) y_goblin4 = 550;
		if (y_goblin4 == 550 && x_goblin4 >= 0 && x_goblin4 < 50) y_goblin4 = 600;
        $("#goblin4").css({ "top": y_goblin4 + "px"});
}
function arribaGoblin5(){
		y_goblin5 = y_goblin5 - 50;
		if (y_goblin5 < 0) y_goblin5 = 0;
		if (y_goblin5 == 50 && x_goblin5 >= 0 && x_goblin5 < 350) y_goblin5 = 100;
		if (y_goblin5 == 50 && x_goblin5 >= 400 && x_goblin5 < 750) y_goblin5 = 100;
		if (y_goblin5 == 50 && x_goblin5 >= 800 && x_goblin5 < 1150) y_goblin5 = 100;
		if (y_goblin5 == 200 && x_goblin5 >= 250 && x_goblin5 < 500) y_goblin5 = 250;
		if (y_goblin5 == 200 && x_goblin5 >= 650 && x_goblin5 < 900) y_goblin5 = 250;
		if (y_goblin5 == 350 && x_goblin5 >= 250 && x_goblin5 < 500) y_goblin5 = 400;
		if (y_goblin5 == 350 && x_goblin5 >= 650 && x_goblin5 < 900) y_goblin5 = 400;
		if (y_goblin5 == 500 && x_goblin5 >= 250 && x_goblin5 < 500) y_goblin5 = 550;
		if (y_goblin5 == 500 && x_goblin5 >= 650 && x_goblin5 < 900) y_goblin5 = 550;
		if (y_goblin5 == 550 && x_goblin5 >= 0 && x_goblin5 < 50) y_goblin5 = 600;
        $("#goblin5").css({ "top": y_goblin5 + "px"});
}

function abajoOrco4(){
		y_orco4 = y_orco4 + 50;
		if (y_orco4 > 550) y_orco4 = 600;
		if (y_orco4 == 50 && x_orco4 >= 0 && x_orco4 < 350) y_orco4 = 0;
		if (y_orco4 == 50 && x_orco4 >= 400 && x_orco4 < 750) y_orco4 = 0;
		if (y_orco4 == 50 && x_orco4 >= 800 && x_orco4 < 1150) y_orco4 = 0;
		if (y_orco4 == 200 && x_orco4 >= 250 && x_orco4 < 500) y_orco4 = 150;
		if (y_orco4 == 200 && x_orco4 >= 650 && x_orco4 < 900) y_orco4 = 150;
		if (y_orco4 == 350 && x_orco4 >= 250 && x_orco4 < 500) y_orco4 = 300;
		if (y_orco4 == 350 && x_orco4 >= 650 && x_orco4 < 900) y_orco4 = 300;
		if (y_orco4 == 500 && x_orco4 >= 250 && x_orco4 < 500) y_orco4 = 450;
		if (y_orco4 == 500 && x_orco4 >= 650 && x_orco4 < 900) y_orco4 = 450;
		if (y_orco4 == 150 && x_orco4 >= 100 && x_orco4 < 150) y_orco4 = 100;
		if (y_orco4 == 150 && x_orco4 >= 1000 && x_orco4 < 1050) y_orco4 = 100;
		if (y_orco4 == 600 && x_orco4 >= 0 && x_orco4 < 50) y_orco4 = 550;
        $("#orco4").css({ "top": y_orco4 + "px"});
}
function abajoOrco5(){
		y_orco5 = y_orco5 + 50;
		if (y_orco5 > 550) y_orco5 = 600;
		if (y_orco5 == 50 && x_orco5 >= 0 && x_orco5 < 350) y_orco5 = 0;
		if (y_orco5 == 50 && x_orco5 >= 400 && x_orco5 < 750) y_orco5 = 0;
		if (y_orco5 == 50 && x_orco5 >= 800 && x_orco5 < 1150) y_orco5 = 0;
		if (y_orco5 == 200 && x_orco5 >= 250 && x_orco5 < 500) y_orco5 = 150;
		if (y_orco5 == 200 && x_orco5 >= 650 && x_orco5 < 900) y_orco5 = 150;
		if (y_orco5 == 350 && x_orco5 >= 250 && x_orco5 < 500) y_orco5 = 300;
		if (y_orco5 == 350 && x_orco5 >= 650 && x_orco5 < 900) y_orco5 = 300;
		if (y_orco5 == 500 && x_orco5 >= 250 && x_orco5 < 500) y_orco5 = 450;
		if (y_orco5 == 500 && x_orco5 >= 650 && x_orco5 < 900) y_orco5 = 450;
		if (y_orco5 == 150 && x_orco5 >= 100 && x_orco5 < 150) y_orco5 = 100;
		if (y_orco5 == 150 && x_orco5 >= 1000 && x_orco5 < 1050) y_orco5 = 100;
		if (y_orco5 == 600 && x_orco5 >= 0 && x_orco5 < 50) y_orco5 = 550;
        $("#orco5").css({ "top": y_orco5 + "px"});
}
function abajoGoblin3(){
		y_goblin3 = y_goblin3 + 50;
		if (y_goblin3 > 550) y_goblin3 = 600;
		if (y_goblin3 == 50 && x_goblin3 >= 0 && x_goblin3 < 350) y_goblin3 = 0;
		if (y_goblin3 == 50 && x_goblin3 >= 400 && x_goblin3 < 750) y_goblin3 = 0;
		if (y_goblin3 == 50 && x_goblin3 >= 800 && x_goblin3 < 1150) y_goblin3 = 0;
		if (y_goblin3 == 200 && x_goblin3 >= 250 && x_goblin3 < 500) y_goblin3 = 150;
		if (y_goblin3 == 200 && x_goblin3 >= 650 && x_goblin3 < 900) y_goblin3 = 150;
		if (y_goblin3 == 350 && x_goblin3 >= 250 && x_goblin3 < 500) y_goblin3 = 300;
		if (y_goblin3 == 350 && x_goblin3 >= 650 && x_goblin3 < 900) y_goblin3 = 300;
		if (y_goblin3 == 500 && x_goblin3 >= 250 && x_goblin3 < 500) y_goblin3 = 450;
		if (y_goblin3 == 500 && x_goblin3 >= 650 && x_goblin3 < 900) y_goblin3 = 450;
		if (y_goblin3 == 150 && x_goblin3 >= 100 && x_goblin3 < 150) y_goblin3 = 100;
		if (y_goblin3 == 150 && x_goblin3 >= 1000 && x_goblin3 < 1050) y_goblin3 = 100;
		if (y_goblin3 == 600 && x_goblin3 >= 0 && x_goblin3 < 50) y_goblin3 = 550;
        $("#goblin3").css({ "top": y_goblin3 + "px"});
}
function abajoGoblin4(){
		y_goblin4 = y_goblin4 + 50;
		if (y_goblin4 > 550) y_goblin4 = 600;
		if (y_goblin4 == 50 && x_goblin4 >= 0 && x_goblin4 < 350) y_goblin4 = 0;
		if (y_goblin4 == 50 && x_goblin4 >= 400 && x_goblin4 < 750) y_goblin4 = 0;
		if (y_goblin4 == 50 && x_goblin4 >= 800 && x_goblin4 < 1150) y_goblin4 = 0;
		if (y_goblin4 == 200 && x_goblin4 >= 250 && x_goblin4 < 500) y_goblin4 = 150;
		if (y_goblin4 == 200 && x_goblin4 >= 650 && x_goblin4 < 900) y_goblin4 = 150;
		if (y_goblin4 == 350 && x_goblin4 >= 250 && x_goblin4 < 500) y_goblin4 = 300;
		if (y_goblin4 == 350 && x_goblin4 >= 650 && x_goblin4 < 900) y_goblin4 = 300;
		if (y_goblin4 == 500 && x_goblin4 >= 250 && x_goblin4 < 500) y_goblin4 = 450;
		if (y_goblin4 == 500 && x_goblin4 >= 650 && x_goblin4 < 900) y_goblin4 = 450;
		if (y_goblin4 == 150 && x_goblin4 >= 100 && x_goblin4 < 150) y_goblin4 = 100;
		if (y_goblin4 == 150 && x_goblin4 >= 1000 && x_goblin4 < 1050) y_goblin4 = 100;
		if (y_goblin4 == 600 && x_goblin4 >= 0 && x_goblin4 < 50) y_goblin4 = 550;
        $("#goblin4").css({ "top": y_goblin4 + "px"});
}
function abajoGoblin5(){
		y_goblin5 = y_goblin5 + 50;
		if (y_goblin5 > 550) y_goblin5 = 600;
		if (y_goblin5 == 50 && x_goblin5 >= 0 && x_goblin5 < 350) y_goblin5 = 0;
		if (y_goblin5 == 50 && x_goblin5 >= 400 && x_goblin5 < 750) y_goblin5 = 0;
		if (y_goblin5 == 50 && x_goblin5 >= 800 && x_goblin5 < 1150) y_goblin5 = 0;
		if (y_goblin5 == 200 && x_goblin5 >= 250 && x_goblin5 < 500) y_goblin5 = 150;
		if (y_goblin5 == 200 && x_goblin5 >= 650 && x_goblin5 < 900) y_goblin5 = 150;
		if (y_goblin5 == 350 && x_goblin5 >= 250 && x_goblin5 < 500) y_goblin5 = 300;
		if (y_goblin5 == 350 && x_goblin5 >= 650 && x_goblin5 < 900) y_goblin5 = 300;
		if (y_goblin5 == 500 && x_goblin5 >= 250 && x_goblin5 < 500) y_goblin5 = 450;
		if (y_goblin5 == 500 && x_goblin5 >= 650 && x_goblin5 < 900) y_goblin5 = 450;
		if (y_goblin5 == 150 && x_goblin5 >= 100 && x_goblin5 < 150) y_goblin5 = 100;
		if (y_goblin5 == 150 && x_goblin5 >= 1000 && x_goblin5 < 1050) y_goblin5 = 100;
		if (y_goblin5 == 600 && x_goblin5 >= 0 && x_goblin5 < 50) y_goblin5 = 550;
        $("#goblin5").css({ "top": y_goblin5 + "px"});
}

function derechaOrco4(){
		x_orco4 = x_orco4 + 50;
        if (x_orco4 > 1050) x_orco4 = 1100;
		if (x_orco4 == 100 && y_orco4 > 100 && y_orco4 < 650) x_orco4 = 50;
		if (x_orco4 == 1000 && y_orco4 > 100 && y_orco4 < 650) x_orco4 = 950;
		if (x_orco4 == 250 && y_orco4 > 150 && y_orco4 < 250) x_orco4 = 200;
		if (x_orco4 == 250 && y_orco4 > 300 && y_orco4 < 400) x_orco4 = 200;
		if (x_orco4 == 250 && y_orco4 > 450 && y_orco4 < 550) x_orco4 = 200;
		if (x_orco4 == 650 && y_orco4 > 150 && y_orco4 < 250) x_orco4 = 600;
		if (x_orco4 == 650 && y_orco4 > 300 && y_orco4 < 400) x_orco4 = 600;
		if (x_orco4 == 650 && y_orco4 > 450 && y_orco4 < 550) x_orco4 = 600;
		if (x_orco4 == 400 && y_orco4 > 0 && y_orco4 < 100) x_orco4 = 350;
		if (x_orco4 == 800 && y_orco4 > 0 && y_orco4 < 100) x_orco4 = 750;
		if (x_orco4 == 50 && y_orco4 > 550 && y_orco4 < 650) x_orco4 = 0;
        $("#orco4").css({ "left": x_orco4 + "px"});
}
function derechaOrco5(){
		x_orco5 = x_orco5 + 50;
        if (x_orco5 > 1050) x_orco5 = 1100;
		if (x_orco5 == 100 && y_orco5 > 100 && y_orco5 < 650) x_orco5 = 50;
		if (x_orco5 == 1000 && y_orco5 > 100 && y_orco5 < 650) x_orco5 = 950;
		if (x_orco5 == 250 && y_orco5 > 150 && y_orco5 < 250) x_orco5 = 200;
		if (x_orco5 == 250 && y_orco5 > 300 && y_orco5 < 400) x_orco5 = 200;
		if (x_orco5 == 250 && y_orco5 > 450 && y_orco5 < 550) x_orco5 = 200;
		if (x_orco5 == 650 && y_orco5 > 150 && y_orco5 < 250) x_orco5 = 600;
		if (x_orco5 == 650 && y_orco5 > 300 && y_orco5 < 400) x_orco5 = 600;
		if (x_orco5 == 650 && y_orco5 > 450 && y_orco5 < 550) x_orco5 = 600;
		if (x_orco5 == 400 && y_orco5 > 0 && y_orco5 < 100) x_orco5 = 350;
		if (x_orco5 == 800 && y_orco5 > 0 && y_orco5 < 100) x_orco5 = 750;
		if (x_orco5 == 50 && y_orco5 > 550 && y_orco5 < 650) x_orco5 = 0;
        $("#orco5").css({ "left": x_orco5 + "px"});
}
function derechaGoblin3(){
		x_goblin3 = x_goblin3 + 50;
        if (x_goblin3 > 1050) x_goblin3 = 1100;
		if (x_goblin3 == 100 && y_goblin3 > 100 && y_goblin3 < 650) x_goblin3 = 50;
		if (x_goblin3 == 1000 && y_goblin3 > 100 && y_goblin3 < 650) x_goblin3 = 950;
		if (x_goblin3 == 250 && y_goblin3 > 150 && y_goblin3 < 250) x_goblin3 = 200;
		if (x_goblin3 == 250 && y_goblin3 > 300 && y_goblin3 < 400) x_goblin3 = 200;
		if (x_goblin3 == 250 && y_goblin3 > 450 && y_goblin3 < 550) x_goblin3 = 200;
		if (x_goblin3 == 650 && y_goblin3 > 150 && y_goblin3 < 250) x_goblin3 = 600;
		if (x_goblin3 == 650 && y_goblin3 > 300 && y_goblin3 < 400) x_goblin3 = 600;
		if (x_goblin3 == 650 && y_goblin3 > 450 && y_goblin3 < 550) x_goblin3 = 600;
		if (x_goblin3 == 400 && y_goblin3 > 0 && y_goblin3 < 100) x_goblin3 = 350;
		if (x_goblin3 == 800 && y_goblin3 > 0 && y_goblin3 < 100) x_goblin3 = 750;
		if (x_goblin3 == 50 && y_goblin3 > 550 && y_goblin3 < 650) x_goblin3 = 0;		
        $("#goblin3").css({ "left": x_goblin3 + "px"});
}
function derechaGoblin4(){
		x_goblin4 = x_goblin4 + 50;
        if (x_goblin4 > 1050) x_goblin4 = 1100;
		if (x_goblin4 == 100 && y_goblin4 > 100 && y_goblin4 < 650) x_goblin4 = 50;
		if (x_goblin4 == 1000 && y_goblin4 > 100 && y_goblin4 < 650) x_goblin4 = 950;
		if (x_goblin4 == 250 && y_goblin4 > 150 && y_goblin4 < 250) x_goblin4 = 200;
		if (x_goblin4 == 250 && y_goblin4 > 300 && y_goblin4 < 400) x_goblin4 = 200;
		if (x_goblin4 == 250 && y_goblin4 > 450 && y_goblin4 < 550) x_goblin4 = 200;
		if (x_goblin4 == 650 && y_goblin4 > 150 && y_goblin4 < 250) x_goblin4 = 600;
		if (x_goblin4 == 650 && y_goblin4 > 300 && y_goblin4 < 400) x_goblin4 = 600;
		if (x_goblin4 == 650 && y_goblin4 > 450 && y_goblin4 < 550) x_goblin4 = 600;
		if (x_goblin4 == 400 && y_goblin4 > 0 && y_goblin4 < 100) x_goblin4 = 350;
		if (x_goblin4 == 800 && y_goblin4 > 0 && y_goblin4 < 100) x_goblin4 = 750;
		if (x_goblin4 == 50 && y_goblin4 > 550 && y_goblin4 < 650) x_goblin4 = 0;	
        $("#goblin4").css({ "left": x_goblin4 + "px"});
}
function derechaGoblin5(){
		x_goblin5 = x_goblin5 + 50;
        if (x_goblin5 > 1050) x_goblin5 = 1100;
		if (x_goblin5 == 100 && y_goblin5 > 100 && y_goblin5 < 650) x_goblin5 = 50;
		if (x_goblin5 == 1000 && y_goblin5 > 100 && y_goblin5 < 650) x_goblin5 = 950;
		if (x_goblin5 == 250 && y_goblin5 > 150 && y_goblin5 < 250) x_goblin5 = 200;
		if (x_goblin5 == 250 && y_goblin5 > 300 && y_goblin5 < 400) x_goblin5 = 200;
		if (x_goblin5 == 250 && y_goblin5 > 450 && y_goblin5 < 550) x_goblin5 = 200;
		if (x_goblin5 == 650 && y_goblin5 > 150 && y_goblin5 < 250) x_goblin5 = 600;
		if (x_goblin5 == 650 && y_goblin5 > 300 && y_goblin5 < 400) x_goblin5 = 600;
		if (x_goblin5 == 650 && y_goblin5 > 450 && y_goblin5 < 550) x_goblin5 = 600;
		if (x_goblin5 == 400 && y_goblin5 > 0 && y_goblin5 < 100) x_goblin5 = 350;
		if (x_goblin5 == 800 && y_goblin5 > 0 && y_goblin5 < 100) x_goblin5 = 750;
		if (x_goblin5 == 50 && y_goblin5 > 550 && y_goblin5 < 650) x_goblin5 = 0;
        $("#goblin5").css({ "left": x_goblin5 + "px"});
}

function izquierdaOrco4(){
		x_orco4 = x_orco4 - 50;
		if (x_orco4 < 0) x_orco4 = 0;
		if (x_orco4 == 100 && y_orco4 > 100 && y_orco4 < 650) x_orco4 = 150;
		if (x_orco4 == 1000 && y_orco4 > 100 && y_orco4 < 650) x_orco4 = 1050;
		if (x_orco4 == 450 && y_orco4 > 150 && y_orco4 < 250) x_orco4 = 500;
		if (x_orco4 == 450 && y_orco4 > 300 && y_orco4 < 400) x_orco4 = 500;
		if (x_orco4 == 450 && y_orco4 > 450 && y_orco4 < 550) x_orco4 = 500;
		if (x_orco4 == 850 && y_orco4 > 150 && y_orco4 < 250) x_orco4 = 900;
		if (x_orco4 == 850 && y_orco4 > 300 && y_orco4 < 400) x_orco4 = 900;
		if (x_orco4 == 850 && y_orco4 > 450 && y_orco4 < 550) x_orco4 = 900;
		if (x_orco4 == 300 && y_orco4 > 0 && y_orco4 < 100) x_orco4 = 350;
		if (x_orco4 == 700 && y_orco4 > 0 && y_orco4 < 100) x_orco4 = 750;
		if (x_orco4 == 0 && y_orco4 > 550 && y_orco4 < 650) x_orco4 = 50;
        $("#orco4").css({ "left": x_orco4 + "px"});
}
function izquierdaOrco5(){
		x_orco5 = x_orco5 - 50;
		if (x_orco5 < 0) x_orco5 = 0;
		if (x_orco5 == 100 && y_orco5 > 100 && y_orco5 < 650) x_orco5 = 150;
		if (x_orco5 == 1000 && y_orco5 > 100 && y_orco5 < 650) x_orco5 = 1050;
		if (x_orco5 == 450 && y_orco5 > 150 && y_orco5 < 250) x_orco5 = 500;
		if (x_orco5 == 450 && y_orco5 > 300 && y_orco5 < 400) x_orco5 = 500;
		if (x_orco5 == 450 && y_orco5 > 450 && y_orco5 < 550) x_orco5 = 500;
		if (x_orco5 == 850 && y_orco5 > 150 && y_orco5 < 250) x_orco5 = 900;
		if (x_orco5 == 850 && y_orco5 > 300 && y_orco5 < 400) x_orco5 = 900;
		if (x_orco5 == 850 && y_orco5 > 450 && y_orco5 < 550) x_orco5 = 900;
		if (x_orco5 == 300 && y_orco5 > 0 && y_orco5 < 100) x_orco5 = 350;
		if (x_orco5 == 700 && y_orco5 > 0 && y_orco5 < 100) x_orco5 = 750;
		if (x_orco5 == 0 && y_orco5 > 550 && y_orco5 < 650) x_orco5 = 50;
        $("#orco5").css({ "left": x_orco5 + "px"});
}
function izquierdaGoblin3(){
		x_goblin3 = x_goblin3 - 50;
		if (x_goblin3 < 0) x_goblin3 = 0;
		if (x_goblin3 == 100 && y_goblin3 > 100 && y_goblin3 < 650) x_goblin3 = 150;
		if (x_goblin3 == 1000 && y_goblin3 > 100 && y_goblin3 < 650) x_goblin3 = 1050;
		if (x_goblin3 == 450 && y_goblin3 > 150 && y_goblin3 < 250) x_goblin3 = 500;
		if (x_goblin3 == 450 && y_goblin3 > 300 && y_goblin3 < 400) x_goblin3 = 500;
		if (x_goblin3 == 450 && y_goblin3 > 450 && y_goblin3 < 550) x_goblin3 = 500;
		if (x_goblin3 == 850 && y_goblin3 > 150 && y_goblin3 < 250) x_goblin3 = 900;
		if (x_goblin3 == 850 && y_goblin3 > 300 && y_goblin3 < 400) x_goblin3 = 900;
		if (x_goblin3 == 850 && y_goblin3 > 450 && y_goblin3 < 550) x_goblin3 = 900;
		if (x_goblin3 == 300 && y_goblin3 > 0 && y_goblin3 < 100) x_goblin3 = 350;
		if (x_goblin3 == 700 && y_goblin3 > 0 && y_goblin3 < 100) x_goblin3 = 750;
		if (x_goblin3 == 0 && y_goblin3 > 550 && y_goblin3 < 650) x_goblin3 = 50;
        $("#goblin3").css({ "left": x_goblin3 + "px"});
}
function izquierdaGoblin4(){
		x_goblin4 = x_goblin4 - 50;
		if (x_goblin4 < 0) x_goblin4 = 0;
		if (x_goblin4 == 100 && y_goblin4 > 100 && y_goblin4 < 650) x_goblin4 = 150;
		if (x_goblin4 == 1000 && y_goblin4 > 100 && y_goblin4 < 650) x_goblin4 = 1050;
		if (x_goblin4 == 450 && y_goblin4 > 150 && y_goblin4 < 250) x_goblin4 = 500;
		if (x_goblin4 == 450 && y_goblin4 > 300 && y_goblin4 < 400) x_goblin4 = 500;
		if (x_goblin4 == 450 && y_goblin4 > 450 && y_goblin4 < 550) x_goblin4 = 500;
		if (x_goblin4 == 850 && y_goblin4 > 150 && y_goblin4 < 250) x_goblin4 = 900;
		if (x_goblin4 == 850 && y_goblin4 > 300 && y_goblin4 < 400) x_goblin4 = 900;
		if (x_goblin4 == 850 && y_goblin4 > 450 && y_goblin4 < 550) x_goblin4 = 900;
		if (x_goblin4 == 300 && y_goblin4 > 0 && y_goblin4 < 100) x_goblin4 = 350;
		if (x_goblin4 == 700 && y_goblin4 > 0 && y_goblin4 < 100) x_goblin4 = 750;
		if (x_goblin4 == 0 && y_goblin4 > 550 && y_goblin4 < 650) x_goblin4 = 50;
        $("#goblin4").css({ "left": x_goblin4 + "px"});
}
function izquierdaGoblin5(){
		x_goblin5 = x_goblin5 - 50;
		if (x_goblin5 < 0) x_goblin5 = 0;
		if (x_goblin5 == 100 && y_goblin5 > 100 && y_goblin5 < 650) x_goblin5 = 150;
		if (x_goblin5 == 1000 && y_goblin5 > 100 && y_goblin5 < 650) x_goblin5 = 1050;
		if (x_goblin5 == 450 && y_goblin5 > 150 && y_goblin5 < 250) x_goblin5 = 500;
		if (x_goblin5 == 450 && y_goblin5 > 300 && y_goblin5 < 400) x_goblin5 = 500;
		if (x_goblin5 == 450 && y_goblin5 > 450 && y_goblin5 < 550) x_goblin5 = 500;
		if (x_goblin5 == 850 && y_goblin5 > 150 && y_goblin5 < 250) x_goblin5 = 900;
		if (x_goblin5 == 850 && y_goblin5 > 300 && y_goblin5 < 400) x_goblin5 = 900;
		if (x_goblin5 == 850 && y_goblin5 > 450 && y_goblin5 < 550) x_goblin5 = 900;
		if (x_goblin5 == 300 && y_goblin5 > 0 && y_goblin5 < 100) x_goblin5 = 350;
		if (x_goblin5 == 700 && y_goblin5 > 0 && y_goblin5 < 100) x_goblin5 = 750;
		if (x_goblin5 == 0 && y_goblin5 > 550 && y_goblin5 < 650) x_goblin5 = 50;
        $("#goblin5").css({ "left": x_goblin5 + "px"});
}
function movimientoOrco4(){
		if(y_nivel2 > y_orco4){
			abajoOrco4();
		}
		else if(y_nivel2 < y_orco4){
			arribaOrco4();
		}
		else if(y_nivel2 == y_orco4){
			if( x_nivel2 > x_orco4 ){
				derechaOrco4();
			}
			else if( x_nivel2 < x_orco4 ){
				izquierdaOrco4();
			}
		}
}
function movimientoOrco5(){
		if(y_nivel2 > y_orco5){
			abajoOrco5();
		}
		else if(y_nivel2 < y_orco5){
			arribaOrco5();
		}
		else if(y_nivel2 == y_orco5){
			if( x_nivel2 > x_orco5 ){
				derechaOrco5();
			}
			else if( x_nivel2 < x_orco5 ){
				izquierdaOrco5();
			}
		}
}
function movimientoGoblin3(){
		if(y_nivel2 > y_goblin3){
			abajoGoblin3();
		}
		else if(y_nivel2 < y_goblin3){
			arribaGoblin3();
		}
		else if(y_nivel2 == y_goblin3){
			if( x_nivel2 > x_goblin3 ){
				derechaGoblin3();
			}
			else if( x_nivel2 < x_goblin3 ){
				izquierdaGoblin3();
			}
		}
}
function movimientoGoblin4(){
		if(y_nivel2 > y_goblin4){
			abajoGoblin4();
		}
		else if(y_nivel2 < y_goblin4){
			arribaGoblin4();
		}
		else if(y_nivel2 == y_goblin4){
			if( x_nivel2 > x_goblin4 ){
				derechaGoblin4();
			}
			else if( x_nivel2 < x_goblin4 ){
				izquierdaGoblin4();
			}
		}
}
function movimientoGoblin5(){
		if(y_nivel2 > y_goblin5){
			abajoGoblin5();
		}
		else if(y_nivel2 < y_goblin5){
			arribaGoblin5();
		}
		else if(y_nivel2 == y_goblin5){
			if( x_nivel2 > x_goblin5 ){
				derechaGoblin5();
			}
			else if( x_nivel2 < x_goblin5 ){
				izquierdaGoblin5();
			}
		}
}
/*-----*/
/*level3*/
function contadorMonedasNivel3(){
	if (x_nivel3 == x_moneda9 && y_nivel3 == y_moneda9) {
		contadorMon=contadorMon+25;
		x_moneda9=0;
		y_moneda9=600;
		mostrarTodosDatos();
		var d = document.getElementById("moneda9");
		var p=d.parentNode;
		p.removeChild(d);
	}
	else if (x_nivel3 == x_moneda10 && y_nivel3 == y_moneda10) {
		contadorMon=contadorMon+25;
		x_moneda10=0;
		y_moneda10=600;
		mostrarTodosDatos();
		var d = document.getElementById("moneda10");
		var p=d.parentNode;
		p.removeChild(d);
	}
	else if (x_nivel3 == x_moneda11 && y_nivel3 == y_moneda11) {
		contadorMon=contadorMon+25;
		x_moneda11=0;
		y_moneda11=600;
		mostrarTodosDatos();
		var d = document.getElementById("moneda11");
		var p=d.parentNode;
		p.removeChild(d);
	}
	else if (x_nivel3 == x_moneda12 && y_nivel3 == y_moneda12) {
		contadorMon=contadorMon+25;
		x_moneda12=0;
		y_moneda12=600;
		mostrarTodosDatos();
		var d = document.getElementById("moneda12");
		var p=d.parentNode;
		p.removeChild(d);
	}
}
$('#arriba3').click(function(){
	arribaUser3(); 
	movimientoOrco6(); 
	movimientoOrco7(); 
	movimientoGoblin6(); 
	movimientoGoblin7();
	movimientoFantasma();
	detectarLlave3(); 
	salir3(); 
	detectarColision3();
	contadorMonedasNivel3();
	mostrarTodosDatos();
	detectarCorazon3();
});
$('#abajo3').click(function(){
	abajoUser3(); 
	movimientoOrco6(); 
	movimientoOrco7(); 
	movimientoGoblin6(); 
	movimientoGoblin7();
	movimientoFantasma();
	detectarLlave3(); 
	salir3();
	detectarColision3();
	contadorMonedasNivel3();
	mostrarTodosDatos();
	detectarCorazon3();
});
$('#izquierda3').click(function(){
	izquierdaUser3(); 
	movimientoOrco6(); 
	movimientoOrco7(); 
	movimientoGoblin6(); 
	movimientoGoblin7();
	movimientoFantasma();
	detectarLlave3(); 
	salir3(); 
	detectarColision3();
	contadorMonedasNivel3();
	mostrarTodosDatos();
	detectarCorazon3();
});
$('#derecha3').click(function(){
	derechaUser3(); 
	movimientoOrco6(); 
	movimientoOrco7(); 
	movimientoGoblin6(); 
	movimientoGoblin7();
	movimientoFantasma();
	detectarLlave3(); 
	salir3(); 
	detectarColision3();
	contadorMonedasNivel3();
	mostrarTodosDatos();
	detectarCorazon3();
});
$('#da3').click(function(){
	throwdice3();
	ataque=ataque+ch+cd;
	mostrarTodosDatos();
	if (x_nivel3 == x_orco6 && y_nivel3 == y_orco6) {
		ataqueorco6=ataqueorco6+ch+cd;
		if (ataque > defensaorco6){
			vidaorco6=vidaorco6-daño;
		}
		else
			vidaorco6=vidaorco6;
		if (ataqueorco6 > defensa){
			vida=vida-dañoorco6;
		}
		else
			vida=vida;
    }
	if (x_nivel3 == x_orco7 && y_nivel3 == y_orco7) {
		ataqueorco7=ataqueorco7+ch+cd;
		if (ataque > defensaorco7){
			vidaorco7=vidaorco7-daño;
		}
		else
			vidaorco7=vidaorco7;
		if (ataqueorco7 > defensa){
			vida=vida-dañoorco7;
		}
		else
			vida=vida;
    }
	if (x_nivel3 == x_goblin6 && y_nivel3 == y_goblin6) {
		ataquegoblin6=ataquegoblin6+ch+cd;
		if (ataque > defensagoblin6){
			vidagoblin6=vidagoblin6-daño;
		}
		else
			vidagoblin6=vidagoblin6;
		if (ataquegoblin6 > defensa){
			vida=vida-dañogoblin6;
		}
		else
			vida=vida;
    }
	if (x_nivel3 == x_goblin7 && y_nivel3 == y_goblin7) {
		ataquegoblin7=ataquegoblin7+ch+cd;
		if (ataque > defensagoblin7){
			vidagoblin7=vidagoblin7-daño;
		}
		else
			vidagoblin7=vidagoblin7;
		if (ataquegoblin7 > defensa){
			vida=vida-dañogoblin7;
		}
		else
			vida=vida;
    }
	if (x_nivel3 == x_fantasma && y_nivel3 == y_fantasma) {
		ataquefantasma1=ataquefantasma1+ch+cd;
		if (ataque > defensafantasma1){
			vidafantasma1=vidafantasma1-daño;
		}
		else
			vidafantasma1=vidafantasma1;
		if (ataquefantasma1 > defensa){
			vida=vida-dañofantasma1;
		}
		else
			vida=vida;
    }
	ataque=ataque-ch-cd;
	actualizarDatos3();
	actualizarDatosEnemigo3();
	detectarganador3();	
})
function detectarLlave3() {
    if (x_nivel3 == x_llave3 && y_nivel3 == y_llave3) {
		llaveObtenida = 3;
		puerta3abierta=1;
        $("#puerta3").css({'background-image': 'url(img/puerta.jpg)'});
		$("#llave3").css('display','none');}
}

function arribaUser3(){
		y_nivel3 = y_nivel3 - 50;
        if (y_nivel3 < 0) y_nivel3 = 0;
		if (y_nivel3 == 50 && x_nivel3 >=150 && x_nivel3 < 1000) y_nivel3 = 100;
		if (y_nivel3 == 550 && x_nivel3 >=250 && x_nivel3 < 1150) y_nivel3 = 600;
		if (y_nivel3 == 550 && x_nivel3 >=100 && x_nivel3 < 150) y_nivel3 = 600;
		if (y_nivel3 == 450 && x_nivel3 >=250 && x_nivel3 < 300) y_nivel3 = 500;
		if (y_nivel3 == 450 && x_nivel3 >=400 && x_nivel3 < 450) y_nivel3 = 500;
		if (y_nivel3 == 450 && x_nivel3 >=550 && x_nivel3 < 600) y_nivel3 = 500;
		if (y_nivel3 == 450 && x_nivel3 >=700 && x_nivel3 < 750) y_nivel3 = 500;
		if (y_nivel3 == 450 && x_nivel3 >=850 && x_nivel3 < 900) y_nivel3 = 500;
		if (y_nivel3 == 450 && x_nivel3 >=1000 && x_nivel3 < 1050) y_nivel3 = 500;
        $("#pedobear3").css({ "top": y_nivel3 + "px"});
}
function abajoUser3(){
		y_nivel3 = y_nivel3 + 50;
        if (y_nivel3 > 550) y_nivel3 = 600;
		if (y_nivel3 == 150 && x_nivel3 >=250 && x_nivel3 < 300) y_nivel3 = 100;
		if (y_nivel3 == 150 && x_nivel3 >=400 && x_nivel3 < 450) y_nivel3 = 100;
		if (y_nivel3 == 150 && x_nivel3 >=550 && x_nivel3 < 600) y_nivel3 = 100;
		if (y_nivel3 == 150 && x_nivel3 >=700 && x_nivel3 < 750) y_nivel3 = 100;
		if (y_nivel3 == 150 && x_nivel3 >=850 && x_nivel3 < 900) y_nivel3 = 100;
		if (y_nivel3 == 50 && x_nivel3 >=100 && x_nivel3 < 1000) y_nivel3 = 0;
		if (y_nivel3 == 550 && x_nivel3 >=250 && x_nivel3 < 1150) y_nivel3 = 500;
		if (y_nivel3 == 600 && x_nivel3 >= 0 && x_nivel3 < 50) y_nivel3 = 550;
        $("#pedobear3").css({ "top": y_nivel3 + "px"});
}
function derechaUser3(){
		x_nivel3 = x_nivel3 + 50;
        if (x_nivel3 > 1050) x_nivel3 = 1100;
		if (x_nivel3 == 100 && y_nivel3 > 0 && y_nivel3 < 600) x_nivel3 = 50;
		if (x_nivel3 == 250 && y_nivel3 > 500 && y_nivel3 < 600) x_nivel3 = 200;
		if (x_nivel3 == 250 && y_nivel3 > 100 && y_nivel3 < 500) x_nivel3 = 200;
		if (x_nivel3 == 400 && y_nivel3 > 100 && y_nivel3 < 500) x_nivel3 = 350;
		if (x_nivel3 == 550 && y_nivel3 > 100 && y_nivel3 < 500) x_nivel3 = 500;
		if (x_nivel3 == 700 && y_nivel3 > 100 && y_nivel3 < 500) x_nivel3 = 650;
		if (x_nivel3 == 850 && y_nivel3 > 100 && y_nivel3 < 500) x_nivel3 = 800;
		if (x_nivel3 == 1000 && y_nivel3 >= 0 && y_nivel3 < 500) x_nivel3 = 950;
        $("#pedobear3").css({ "left": x_nivel3 + "px"});
}
function izquierdaUser3(){
		x_nivel3 = x_nivel3 - 50;
        if (x_nivel3 < 0) x_nivel3 = 0;
		if (x_nivel3 == 250 && y_nivel3 > 100 && y_nivel3 < 500) x_nivel3 = 300;
		if (x_nivel3 == 400 && y_nivel3 > 100 && y_nivel3 < 500) x_nivel3 = 450;
		if (x_nivel3 == 550 && y_nivel3 > 100 && y_nivel3 < 500) x_nivel3 = 600;
		if (x_nivel3 == 700 && y_nivel3 > 100 && y_nivel3 < 500) x_nivel3 = 750;
		if (x_nivel3 == 850 && y_nivel3 > 100 && y_nivel3 < 500) x_nivel3 = 900;
		if (x_nivel3 == 100 && y_nivel3 > 0 && y_nivel3 < 600) x_nivel3 = 150;
		if (x_nivel3 == 1000 && y_nivel3 >= 0 && y_nivel3 < 500) x_nivel3 = 1050;
		if (x_nivel3 == 0 && y_nivel3 > 550 && y_nivel3 < 650) x_nivel3 = 50;
        $("#pedobear3").css({ "left": x_nivel3 + "px"});
}
function arribaOrco6(){
		y_orco6 = y_orco6 - 50;
        if (y_orco6 < 0) y_orco6 = 0;
		if (y_orco6 == 50 && x_orco6 >=150 && x_orco6 < 1000) y_orco6 = 100;
		if (y_orco6 == 550 && x_orco6 >=250 && x_orco6 < 1150) y_orco6 = 600;
		if (y_orco6 == 550 && x_orco6 >=100 && x_orco6 < 150) y_orco6 = 600;
		if (y_orco6 == 450 && x_orco6 >=250 && x_orco6 < 300) y_orco6 = 500;
		if (y_orco6 == 450 && x_orco6 >=400 && x_orco6 < 450) y_orco6 = 500;
		if (y_orco6 == 450 && x_orco6 >=550 && x_orco6 < 600) y_orco6 = 500;
		if (y_orco6 == 450 && x_orco6 >=700 && x_orco6 < 750) y_orco6 = 500;
		if (y_orco6 == 450 && x_orco6 >=850 && x_orco6 < 900) y_orco6 = 500;
		if (y_orco6 == 450 && x_orco6 >=1000 && x_orco6 < 1050) y_orco6 = 500;
		if (y_orco6 == 550 && x_orco6 >= 0 && x_orco6 < 50) y_orco6 = 600;
        $("#orco6").css({ "top": y_orco6 + "px"});
}
function arribaOrco7(){
		y_orco7 = y_orco7 - 50;
        if (y_orco7 < 0) y_orco7 = 0;
		if (y_orco7 == 50 && x_orco7 >=150 && x_orco7 < 1000) y_orco7 = 100;
		if (y_orco7 == 550 && x_orco7 >=250 && x_orco7 < 1150) y_orco7 = 600;
		if (y_orco7 == 550 && x_orco7 >=100 && x_orco7 < 150) y_orco7 = 600;
		if (y_orco7 == 450 && x_orco7 >=250 && x_orco7 < 300) y_orco7 = 500;
		if (y_orco7 == 450 && x_orco7 >=400 && x_orco7 < 450) y_orco7 = 500;
		if (y_orco7 == 450 && x_orco7 >=550 && x_orco7 < 600) y_orco7 = 500;
		if (y_orco7 == 450 && x_orco7 >=700 && x_orco7 < 750) y_orco7 = 500;
		if (y_orco7 == 450 && x_orco7 >=850 && x_orco7 < 900) y_orco7 = 500;
		if (y_orco7 == 450 && x_orco7 >=1000 && x_orco7 < 1050) y_orco7 = 500;
		if (y_orco7 == 550 && x_orco7 >= 0 && x_orco7 < 50) y_orco7 = 600;
        $("#orco7").css({ "top": y_orco7 + "px"});
}
function arribaGoblin6(){
		y_goblin6 = y_goblin6 - 50;
        if (y_goblin6 < 0) y_goblin6 = 0;
		if (y_goblin6 == 50 && x_goblin6 >=150 && x_goblin6 < 1000) y_goblin6 = 100;
		if (y_goblin6 == 550 && x_goblin6 >=250 && x_goblin6 < 1150) y_goblin6 = 600;
		if (y_goblin6 == 550 && x_goblin6 >=100 && x_goblin6 < 150) y_goblin6 = 600;
		if (y_goblin6 == 450 && x_goblin6 >=250 && x_goblin6 < 300) y_goblin6 = 500;
		if (y_goblin6 == 450 && x_goblin6 >=400 && x_goblin6 < 450) y_goblin6 = 500;
		if (y_goblin6 == 450 && x_goblin6 >=550 && x_goblin6 < 600) y_goblin6 = 500;
		if (y_goblin6 == 450 && x_goblin6 >=700 && x_goblin6 < 750) y_goblin6 = 500;
		if (y_goblin6 == 450 && x_goblin6 >=850 && x_goblin6 < 900) y_goblin6 = 500;
		if (y_goblin6 == 450 && x_goblin6 >=1000 && x_goblin6 < 1050) y_goblin6 = 500;
		if (y_goblin6 == 550 && x_goblin6 >= 0 && x_goblin6 < 50) y_goblin6 = 600;
        $("#goblin6").css({ "top": y_goblin6 + "px"});
}
function arribaGoblin7(){
		y_goblin7 = y_goblin7 - 50;
        if (y_goblin7 < 0) y_goblin7 = 0;
		if (y_goblin7 == 50 && x_goblin7 >=150 && x_goblin7 < 1000) y_goblin7 = 100;
		if (y_goblin7 == 550 && x_goblin7 >=250 && x_goblin7 < 1150) y_goblin7 = 600;
		if (y_goblin7 == 550 && x_goblin7 >=100 && x_goblin7 < 150) y_goblin7 = 600;
		if (y_goblin7 == 450 && x_goblin7 >=250 && x_goblin7 < 300) y_goblin7 = 500;
		if (y_goblin7 == 450 && x_goblin7 >=400 && x_goblin7 < 450) y_goblin7 = 500;
		if (y_goblin7 == 450 && x_goblin7 >=550 && x_goblin7 < 600) y_goblin7 = 500;
		if (y_goblin7 == 450 && x_goblin7 >=700 && x_goblin7 < 750) y_goblin7 = 500;
		if (y_goblin7 == 450 && x_goblin7 >=850 && x_goblin7 < 900) y_goblin7 = 500;
		if (y_goblin7 == 450 && x_goblin7 >=1000 && x_goblin7 < 1050) y_goblin7 = 500;
		if (y_goblin7 == 550 && x_goblin7 >= 0 && x_goblin7 < 50) y_goblin7 = 600;
        $("#goblin7").css({ "top": y_goblin7 + "px"});
}
function abajoOrco6(){
		y_orco6 = y_orco6 + 50;
        if (y_orco6 > 550) y_orco6 = 600;
		if (y_orco6 == 150 && x_orco6 >=250 && x_orco6 < 300) y_orco6 = 100;
		if (y_orco6 == 150 && x_orco6 >=400 && x_orco6 < 450) y_orco6 = 100;
		if (y_orco6 == 150 && x_orco6 >=550 && x_orco6 < 600) y_orco6 = 100;
		if (y_orco6 == 150 && x_orco6 >=700 && x_orco6 < 750) y_orco6 = 100;
		if (y_orco6 == 150 && x_orco6 >=850 && x_orco6 < 900) y_orco6 = 100;
		if (y_orco6 == 50 && x_orco6 >=100 && x_orco6 < 1000) y_orco6 = 0;
		if (y_orco6 == 550 && x_orco6 >=250 && x_orco6 < 1150) y_orco6 = 500;
		if (y_orco6 == 600 && x_orco6 >= 0 && x_orco6 < 50) y_orco6 = 550;
        $("#orco6").css({ "top": y_orco6 + "px"});
}
function abajoOrco7(){
		y_orco7 = y_orco7 + 50;
        if (y_orco7 > 550) y_orco7 = 600;
		if (y_orco7 == 150 && x_orco7 >=250 && x_orco7 < 300) y_orco7 = 100;
		if (y_orco7 == 150 && x_orco7 >=400 && x_orco7 < 450) y_orco7 = 100;
		if (y_orco7 == 150 && x_orco7 >=550 && x_orco7 < 600) y_orco7 = 100;
		if (y_orco7 == 150 && x_orco7 >=700 && x_orco7 < 750) y_orco7 = 100;
		if (y_orco7 == 150 && x_orco7 >=850 && x_orco7 < 900) y_orco7 = 100;
		if (y_orco7 == 50 && x_orco7 >=100 && x_orco7 < 1000) y_orco7 = 0;
		if (y_orco7 == 550 && x_orco7 >=250 && x_orco7 < 1150) y_orco7 = 500;
		if (y_orco7 == 600 && x_orco7 >= 0 && x_orco7 < 50) y_orco7 = 550;
        $("#orco7").css({ "top": y_orco7 + "px"});
}
function abajoGoblin6(){
		y_goblin6 = y_goblin6 + 50;
        if (y_goblin6 > 550) y_goblin6 = 600;
		if (y_goblin6 == 150 && x_goblin6 >=250 && x_goblin6 < 300) y_goblin6 = 100;
		if (y_goblin6 == 150 && x_goblin6 >=400 && x_goblin6 < 450) y_goblin6 = 100;
		if (y_goblin6 == 150 && x_goblin6 >=550 && x_goblin6 < 600) y_goblin6 = 100;
		if (y_goblin6 == 150 && x_goblin6 >=700 && x_goblin6 < 750) y_goblin6 = 100;
		if (y_goblin6 == 150 && x_goblin6 >=850 && x_goblin6 < 900) y_goblin6 = 100;
		if (y_goblin6 == 50 && x_goblin6 >=100 && x_goblin6 < 1000) y_goblin6 = 0;
		if (y_goblin6 == 550 && x_goblin6 >=250 && x_goblin6 < 1150) y_goblin6 = 500;
		if (y_goblin6 == 600 && x_goblin6 >= 0 && x_goblin6 < 50) y_goblin6 = 550;
        $("#goblin6").css({ "top": y_goblin6 + "px"});
}
function abajoGoblin7(){
		y_goblin7 = y_goblin7 + 50;
        if (y_goblin7 > 550) y_goblin7 = 600;
		if (y_goblin7 == 150 && x_goblin7 >=250 && x_goblin7 < 300) y_goblin7 = 100;
		if (y_goblin7 == 150 && x_goblin7 >=400 && x_goblin7 < 450) y_goblin7 = 100;
		if (y_goblin7 == 150 && x_goblin7 >=550 && x_goblin7 < 600) y_goblin7 = 100;
		if (y_goblin7 == 150 && x_goblin7 >=700 && x_goblin7 < 750) y_goblin7 = 100;
		if (y_goblin7 == 150 && x_goblin7 >=850 && x_goblin7 < 900) y_goblin7 = 100;
		if (y_goblin7 == 50 && x_goblin7 >=100 && x_goblin7 < 1000) y_goblin7 = 0;
		if (y_goblin7 == 550 && x_goblin7 >=250 && x_goblin7 < 1150) y_goblin7 = 500;
		if (y_goblin7 == 600 && x_goblin7 >= 0 && x_goblin7 < 50) y_goblin7 = 550;
        $("#goblin7").css({ "top": y_goblin7 + "px"});
}
function derechaOrco6(){
		x_orco6 = x_orco6 + 50;
        if (x_orco6 > 1050) x_orco6 = 1100;
		if (x_orco6 == 100 && y_orco6 > 0 && y_orco6 < 600) x_orco6 = 50;
		if (x_orco6 == 250 && y_orco6 > 500 && y_orco6 < 600) x_orco6 = 200;
		if (x_orco6 == 250 && y_orco6 > 100 && y_orco6 < 500) x_orco6 = 200;
		if (x_orco6 == 400 && y_orco6 > 100 && y_orco6 < 500) x_orco6 = 350;
		if (x_orco6 == 550 && y_orco6 > 100 && y_orco6 < 500) x_orco6 = 500;
		if (x_orco6 == 700 && y_orco6 > 100 && y_orco6 < 500) x_orco6 = 650;
		if (x_orco6 == 850 && y_orco6 > 100 && y_orco6 < 500) x_orco6 = 800;
		if (x_orco6 == 1000 && y_orco6 >= 0 && y_orco6 < 500) x_orco6 = 950;
		if (x_orco6 == 50 && y_orco6 > 550 && y_orco6 < 650) x_orco6 = 0;
        $("#orco6").css({ "left": x_orco6 + "px"});
}
function derechaOrco7(){
		x_orco7 = x_orco7 + 50;
        if (x_orco7 > 1050) x_orco7 = 1100;
		if (x_orco7 == 100 && y_orco7 > 0 && y_orco7 < 600) x_orco7 = 50;
		if (x_orco7 == 250 && y_orco7 > 500 && y_orco7 < 600) x_orco7 = 200;
		if (x_orco7 == 250 && y_orco7 > 100 && y_orco7 < 500) x_orco7 = 200;
		if (x_orco7 == 400 && y_orco7 > 100 && y_orco7 < 500) x_orco7 = 350;
		if (x_orco7 == 550 && y_orco7 > 100 && y_orco7 < 500) x_orco7 = 500;
		if (x_orco7 == 700 && y_orco7 > 100 && y_orco7 < 500) x_orco7 = 650;
		if (x_orco7 == 850 && y_orco7 > 100 && y_orco7 < 500) x_orco7 = 800;
		if (x_orco7 == 1000 && y_orco7 >= 0 && y_orco7 < 500) x_orco7 = 950;
		if (x_orco7 == 50 && y_orco7 > 550 && y_orco7 < 650) x_orco7 = 0;
        $("#orco7").css({ "left": x_orco7 + "px"});
}
function derechaGoblin6(){
		x_goblin6 = x_goblin6 + 50;
        if (x_goblin6 > 1050) x_goblin6 = 1100;
		if (x_goblin6 == 100 && y_goblin6 > 0 && y_goblin6 < 600) x_goblin6 = 50;
		if (x_goblin6 == 250 && y_goblin6 > 500 && y_goblin6 < 600) x_goblin6 = 200;
		if (x_goblin6 == 250 && y_goblin6 > 100 && y_goblin6 < 500) x_goblin6 = 200;
		if (x_goblin6 == 400 && y_goblin6 > 100 && y_goblin6 < 500) x_goblin6 = 350;
		if (x_goblin6 == 550 && y_goblin6 > 100 && y_goblin6 < 500) x_goblin6 = 500;
		if (x_goblin6 == 700 && y_goblin6 > 100 && y_goblin6 < 500) x_goblin6 = 650;
		if (x_goblin6 == 850 && y_goblin6 > 100 && y_goblin6 < 500) x_goblin6 = 800;
		if (x_goblin6 == 1000 && y_goblin6 >= 0 && y_goblin6 < 500) x_goblin6 = 950;
		if (x_goblin6 == 50 && y_goblin6 > 550 && y_goblin6 < 650) x_goblin6 = 0;
        $("#goblin6").css({ "left": x_goblin6 + "px"});
}
function derechaGoblin7(){
		x_goblin7 = x_goblin7 + 50;
        if (x_goblin7 > 1050) x_goblin7 = 1100;
		if (x_goblin7 == 100 && y_goblin7 > 0 && y_goblin7 < 600) x_goblin7 = 50;
		if (x_goblin7 == 250 && y_goblin7 > 500 && y_goblin7 < 600) x_goblin7 = 200;
		if (x_goblin7 == 250 && y_goblin7 > 100 && y_goblin7 < 500) x_goblin7 = 200;
		if (x_goblin7 == 400 && y_goblin7 > 100 && y_goblin7 < 500) x_goblin7 = 350;
		if (x_goblin7 == 550 && y_goblin7 > 100 && y_goblin7 < 500) x_goblin7 = 500;
		if (x_goblin7 == 700 && y_goblin7 > 100 && y_goblin7 < 500) x_goblin7 = 650;
		if (x_goblin7 == 850 && y_goblin7 > 100 && y_goblin7 < 500) x_goblin7 = 800;
		if (x_goblin7 == 1000 && y_goblin7 >= 0 && y_goblin7 < 500) x_goblin7 = 950;
		if (x_goblin7 == 50 && y_goblin7 > 550 && y_goblin7 < 650) x_goblin7 = 0;
        $("#goblin7").css({ "left": x_goblin7 + "px"});
}
function izquierdaOrco6(){
		x_orco6 = x_orco6 - 50;
        if (x_orco6 < 0) x_orco6 = 0;
		if (x_orco6 == 250 && y_orco6 > 100 && y_orco6 < 500) x_orco6 = 300;
		if (x_orco6 == 400 && y_orco6 > 100 && y_orco6 < 500) x_orco6 = 450;
		if (x_orco6 == 550 && y_orco6 > 100 && y_orco6 < 500) x_orco6 = 600;
		if (x_orco6 == 700 && y_orco6 > 100 && y_orco6 < 500) x_orco6 = 750;
		if (x_orco6 == 850 && y_orco6 > 100 && y_orco6 < 500) x_orco6 = 900;
		if (x_orco6 == 100 && y_orco6 > 0 && y_orco6 < 600) x_orco6 = 150;
		if (x_orco6 == 1000 && y_orco6 >= 0 && y_orco6 < 500) x_orco6 = 1050;
		if (x_orco6 == 0 && y_orco6 > 550 && y_orco6 < 650) x_orco6 = 50;
        $("#orco6").css({ "left": x_orco6 + "px"});
}
function izquierdaOrco7(){
		x_orco7 = x_orco7 - 50;
        if (x_orco7 < 0) x_orco7 = 0;
		if (x_orco7 == 250 && y_orco7 > 100 && y_orco7 < 500) x_orco7 = 300;
		if (x_orco7 == 400 && y_orco7 > 100 && y_orco7 < 500) x_orco7 = 450;
		if (x_orco7 == 550 && y_orco7 > 100 && y_orco7 < 500) x_orco7 = 600;
		if (x_orco7 == 700 && y_orco7 > 100 && y_orco7 < 500) x_orco7 = 750;
		if (x_orco7 == 850 && y_orco7 > 100 && y_orco7 < 500) x_orco7 = 900;
		if (x_orco7 == 100 && y_orco7 > 0 && y_orco7 < 600) x_orco7 = 150;
		if (x_orco7 == 1000 && y_orco7 >= 0 && y_orco7 < 500) x_orco7 = 1050;
		if (x_orco7 == 0 && y_orco7 > 550 && y_orco7 < 650) x_orco7 = 50;
        $("#orco7").css({ "left": x_orco7 + "px"});
}
function izquierdaGoblin6(){
		x_goblin6 = x_goblin6 - 50;
        if (x_goblin6 < 0) x_goblin6 = 0;
		if (x_goblin6 == 250 && y_goblin6 > 100 && y_goblin6 < 500) x_goblin6 = 300;
		if (x_goblin6 == 400 && y_goblin6 > 100 && y_goblin6 < 500) x_goblin6 = 450;
		if (x_goblin6 == 550 && y_goblin6 > 100 && y_goblin6 < 500) x_goblin6 = 600;
		if (x_goblin6 == 700 && y_goblin6 > 100 && y_goblin6 < 500) x_goblin6 = 750;
		if (x_goblin6 == 850 && y_goblin6 > 100 && y_goblin6 < 500) x_goblin6 = 900;
		if (x_goblin6 == 100 && y_goblin6 > 0 && y_goblin6 < 600) x_goblin6 = 150;
		if (x_goblin6 == 1000 && y_goblin6 >= 0 && y_goblin6 < 500) x_goblin6 = 1050;
		if (x_goblin6 == 0 && y_goblin6 > 550 && y_goblin6 < 650) x_goblin6 = 50;
        $("#goblin6").css({ "left": x_goblin6 + "px"});
}
function izquierdaGoblin7(){
		x_goblin7 = x_goblin7 - 50;
        if (x_goblin7 < 0) x_goblin7 = 0;
		if (x_goblin7 == 250 && y_goblin7 > 100 && y_goblin7 < 500) x_goblin7 = 300;
		if (x_goblin7 == 400 && y_goblin7 > 100 && y_goblin7 < 500) x_goblin7 = 450;
		if (x_goblin7 == 550 && y_goblin7 > 100 && y_goblin7 < 500) x_goblin7 = 600;
		if (x_goblin7 == 700 && y_goblin7 > 100 && y_goblin7 < 500) x_goblin7 = 750;
		if (x_goblin7 == 850 && y_goblin7 > 100 && y_goblin7 < 500) x_goblin7 = 900;
		if (x_goblin7 == 100 && y_goblin7 > 0 && y_goblin7 < 600) x_goblin7 = 150;
		if (x_goblin7 == 1000 && y_goblin7 >= 0 && y_goblin7 < 500) x_goblin7 = 1050;
		if (x_goblin7 == 0 && y_goblin7 > 550 && y_goblin7 < 650) x_goblin7 = 50;
        $("#goblin7").css({ "left": x_goblin7 + "px"});
}
function arribaFantasma(){
		y_fantasma = y_fantasma - 50;
        if (y_fantasma < 0) y_fantasma = 0;
		if (y_fantasma == 550 && x_fantasma >= 0 && x_fantasma < 50) y_fantasma = 600;
        $("#fantasma").css({ "top": y_fantasma + "px"});
}
function abajoFantasma(){
		y_fantasma = y_fantasma + 50;
        if (y_fantasma > 550) y_fantasma = 600;
        $("#fantasma").css({ "top": y_fantasma + "px"});
}
function derechaFantasma(){
		x_fantasma = x_fantasma + 50;
        if (x_fantasma > 1050) x_fantasma = 1100;
		if (x_fantasma == 50 && y_fantasma > 550 && y_fantasma < 650) x_fantasma = 0;
        $("#fantasma").css({ "left": x_fantasma + "px"});
}
function izquierdaFantasma(){
		x_fantasma = x_fantasma - 50;
        if (x_fantasma < 0) x_fantasma = 0;
        $("#fantasma").css({ "left": x_fantasma + "px"});
}
function movimientoOrco6(){
		if(y_nivel3 > y_orco6){
			abajoOrco6();
		}
		else if(y_nivel3 < y_orco6){
			arribaOrco6();
		}
		else if(y_nivel3 == y_orco6){
			if( x_nivel3 > x_orco6 ){
				derechaOrco6();
			}
			else if( x_nivel3 < x_orco6 ){
				izquierdaOrco6();
			}
		}
}
function movimientoOrco7(){
		if(y_nivel3 > y_orco7){
			abajoOrco7();
		}
		else if(y_nivel3 < y_orco7){
			arribaOrco7();
		}
		else if(y_nivel3 == y_orco7){
			if( x_nivel3 > x_orco7 ){
				derechaOrco7();
			}
			else if( x_nivel3 < x_orco7 ){
				izquierdaOrco7();
			}
		}
}
function movimientoGoblin6(){
		if(y_nivel3 > y_goblin6){
			abajoGoblin6();
		}
		else if(y_nivel3 < y_goblin6){
			arribaGoblin6();
		}
		else if(y_nivel3 == y_goblin6){
			if( x_nivel3 > x_goblin6 ){
				derechaGoblin6();
			}
			else if( x_nivel3 < x_goblin6 ){
				izquierdaGoblin6();
			}
		}
}
function movimientoGoblin7(){
		if(y_nivel3 > y_goblin7){
			abajoGoblin7();
		}
		else if(y_nivel3 < y_goblin7){
			arribaGoblin7();
		}
		else if(y_nivel3 == y_goblin7){
			if( x_nivel3 > x_goblin7 ){
				derechaGoblin7();
			}
			else if( x_nivel3 < x_goblin7 ){
				izquierdaGoblin7();
			}
		}
}
function movimientoFantasma(){
		if(y_nivel3 > y_fantasma){
			abajoFantasma();
		}
		else if(y_nivel3 < y_fantasma){
			arribaFantasma();
		}
		else if(y_nivel3 == y_fantasma){
			if( x_nivel3 > x_fantasma ){
				derechaFantasma();
			}
			else if( x_nivel3 < x_fantasma ){
				izquierdaFantasma();
			}
		}
}
function detectarColision3() {
    
	if (x_nivel3 == x_orco6 && y_nivel2 == y_orco6) {
		pelea3();
		actualizarDatos3();
		actualizarDatosEnemigo3();
	}
	else if (x_nivel3 == x_orco7 && y_nivel3 == y_orco7) {
		pelea3();
		actualizarDatos3();
		actualizarDatosEnemigo3();
	}
	else if (x_nivel3 == x_goblin6 && y_nivel3 == y_goblin6) {
       	pelea3();
		actualizarDatos3();
		actualizarDatosEnemigo3();
    }
	else if (x_nivel3 == x_goblin7 && y_nivel3 == y_goblin7) {
       	pelea3();
		actualizarDatos3();
		actualizarDatosEnemigo3();
    }
	else if(x_nivel3 == x_fantasma && y_nivel3 == y_fantasma) {
       	pelea3();
		actualizarDatos3();
		actualizarDatosEnemigo3();
    }
}
function pelea3()
{
		$("#pelea3").css('display','block');
		$("#level3").css('display','none');
	
}
function salir3()
{
	if(y_nivel3 == 0 && x_nivel3 == 1100){
	
		if(puerta3abierta==0){
		alert('Tiene que conseguir la llave para pasar');
		}
		else if(puerta3abierta==1){
		$("#level3").fadeOut('slow', function() {
			$("#level3").css("display", "none");
		});
		$("#gameover").fadeIn('slow', function() {
			$("#gameover").css("display", "block");
		});
		}
	}
}
/*--------*/
/*dados canvas*/
function throwdice(){
    ch = 1+Math.floor(Math.random()*5);
	cd = 1+Math.floor(Math.random()*5);
    dx = dicex;
    dy = dicey;    
    drawface(ch);
    dx = (dicex + 150);
    drawface(cd);
	alert(' '+ch+' '+cd);
  }
  function throwdice2(){
    ch = 1+Math.floor(Math.random()*5);
	cd = 1+Math.floor(Math.random()*5);
    dx = dicex;
    dy = dicey;    
    drawface2(ch);
    dx = (dicex + 150);
    drawface2(cd);
	alert(' '+ch+' '+cd);
  }
  function throwdice3(){
    ch = 1+Math.floor(Math.random()*5);
	cd = 1+Math.floor(Math.random()*5);
    dx = dicex;
    dy = dicey;    
    drawface3(ch);
    dx = (dicex + 150);
    drawface3(cd);
	alert(' '+ch+' '+cd);
  }
  function drawface2(n,n2) {
    ctx = document.getElementById('canvas2').getContext('2d');
    ctx.lineWidth = 5;
    ctx.clearRect(dx, dy,dicewidth, diceheight);
    ctx.strokeRect(dx, dy,dicewidth, diceheight);
    var dotx;
    var doty;
    ctx.fillStyle = "#009966";
      switch(n){
        case 1: 
          draw1();
          break;
        case 2: 
          draw2();
          break;
        case 3: 
          draw2();
          draw1();
          break;  
        case 4: 
          draw4();
          break;
        case 5: 
          draw4();
          draw1();
          break;
        case 6: 
          draw4();
          draw2mid();
          break;                 
      }switch(n2){
        case 1: 
          draw1();
          break;
        case 2: 
          draw2();
          break;
        case 3: 
          draw2();
          draw1();
          break;  
        case 4: 
          draw4();
          break;
        case 5: 
          draw4();
          draw1();
          break;
        case 6: 
          draw4();
          draw2mid();
          break;                 
      }
	  
  
  }
  function drawface3(n,n2) {
    ctx = document.getElementById('canvas3').getContext('2d');
    ctx.lineWidth = 5;
    ctx.clearRect(dx, dy,dicewidth, diceheight);
    ctx.strokeRect(dx, dy,dicewidth, diceheight);
    var dotx;
    var doty;
    ctx.fillStyle = "#009966";
      switch(n){
        case 1: 
          draw1();
          break;
        case 2: 
          draw2();
          break;
        case 3: 
          draw2();
          draw1();
          break;  
        case 4: 
          draw4();
          break;
        case 5: 
          draw4();
          draw1();
          break;
        case 6: 
          draw4();
          draw2mid();
          break;                 
      }switch(n2){
        case 1: 
          draw1();
          break;
        case 2: 
          draw2();
          break;
        case 3: 
          draw2();
          draw1();
          break;  
        case 4: 
          draw4();
          break;
        case 5: 
          draw4();
          draw1();
          break;
        case 6: 
          draw4();
          draw2mid();
          break;                 
      }
	  
  
  }
  function drawface(n,n2) {
    ctx = document.getElementById('canvas').getContext('2d');
    ctx.lineWidth = 5;
    ctx.clearRect(dx, dy,dicewidth, diceheight);
    ctx.strokeRect(dx, dy,dicewidth, diceheight);
    var dotx;
    var doty;
    ctx.fillStyle = "#009966";
      switch(n){
        case 1: 
          draw1();
          break;
        case 2: 
          draw2();
          break;
        case 3: 
          draw2();
          draw1();
          break;  
        case 4: 
          draw4();
          break;
        case 5: 
          draw4();
          draw1();
          break;
        case 6: 
          draw4();
          draw2mid();
          break;                 
      }switch(n2){
        case 1: 
          draw1();
          break;
        case 2: 
          draw2();
          break;
        case 3: 
          draw2();
          draw1();
          break;  
        case 4: 
          draw4();
          break;
        case 5: 
          draw4();
          draw1();
          break;
        case 6: 
          draw4();
          draw2mid();
          break;                 
      }
	  
  
  }
  
  
  function draw1(){
    var dotx;
    var doty;
    ctx.beginPath();
    dotx = dx + .5*dicewidth;
    doty = dy + .5*diceheight;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
  }
  
  function draw2(){
    var dotx;
    var doty;
    ctx.beginPath();
    dotx = dx + 3*dotrad;
    doty = dy + 3*dotrad;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    dotx = dx + dicewidth-3*dotrad;
    doty = dy + diceheight-3*dotrad;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
    
  }
  
  function draw4(){
    var dotx;
    var doty;
    ctx.beginPath();
    dotx = dx + 3*dotrad;
    doty = dy + 3*dotrad;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    dotx = dx + dicewidth-3*dotrad;
    doty = dy + diceheight-3*dotrad;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    dotx = dx + 3*dotrad;
    doty = dy + diceheight-3*dotrad;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    dotx = dx + dicewidth-3*dotrad;
    doty = dy + 3*dotrad;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
  }
  
  function draw2mid(){
    var dotx;
    var doty;
    ctx.beginPath();
    dotx = dx + 3*dotrad;
    doty = dy + .5*diceheight;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    dotx = dx + dicewidth-3*dotrad;
    doty = dy + .5*diceheight;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
  }
  });
/*-----------*/