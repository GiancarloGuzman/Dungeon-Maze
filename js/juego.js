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
var x_puerta = 1100;
var y_puerta = 300;

function detectarLlave() {
    if (x ==550 && y == 300) {
        $("#puerta").css({'background-image': 'url(img/puerta.jpg)'});
		$("#llave1").css('display','none');}
}

function detectarColision() {
    if (x == x_orco1 && y == y_orco1) {
        $("#orco1").css({'background-image': 'url(http://profile.ak.fbcdn.net/hprofile-ak-snc4/261133_139054042840031_3050851_q.jpg)'});
		/*$("#pelea").css("display","block");
		$("#level1").css('display','none');	
			x_orco1=1150;
			y_orco1=650;*/
		
        clearInterval(interval_id);
        $('#orco1').fadeOut('slow', function() {
      });
    }
	else if (x == x_orco2 && y == y_orco2) {
        $("#orco2").css({'background-image': 'url(http://profile.ak.fbcdn.net/hprofile-ak-snc4/261133_139054042840031_3050851_q.jpg)'});
		$("#pelea").css('display','block');
		$("#level1").css('display','none');
			x_orco2= 1150;
			y_orco2= 650;
	
        clearInterval(interval_id);
        $('#orco2').fadeOut('slow', function() {
      });
    }
	else if (x == x_goblin1 && y == y_goblin1) {
        $("#goblin1").css({'background-image': 'url(http://profile.ak.fbcdn.net/hprofile-ak-snc4/261133_139054042840031_3050851_q.jpg)'});
		/*$("#pelea").css('display','block');
		$("#level1").css('display','none');
			x_goblin1= 1150;
			y_goblin1= 650;*/

        clearInterval(interval_id);
        $('#goblin1').fadeOut('slow', function() {
      });
    }
	else if (x == x_goblin2 && y == y_goblin2) {
        $("#goblin2").css({'background-image': 'url(http://profile.ak.fbcdn.net/hprofile-ak-snc4/261133_139054042840031_3050851_q.jpg)'});
		/*$("#pelea").css("display","block");
		$("#level1").css("display","none");
			x_goblin2= 1150;
			y_goblin2= 650;*/
		
        clearInterval(interval_id);
        $('#goblin2').fadeOut('slow', function() {
      });
    }
}
/*function pelea()
{
	if (x == x_orco1 && y == y_orco1) {
		$("#pelea").css('display','block');
		$("#level1").css('display','none');
	}
	if (x == x_orco2 && y == y_orco2) {
	}
	
}*/
function salir()
{
	if(y == 300 && x == 1100)
	
		$("#level1").fadeOut('slow', function() {
			$("#level1").css("display", "none");
		});
		$("#level2").fadeIn('slow', function() {
			$("#level2").css("display", "block");
		});
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
        $("#pedobear").css({ "left": x + "px"});
}
function arribaOrco1(){
		y_orco1 = y_orco1 - 50;
        if (y_orco1 == 50 && x_orco1 > 150 && x_orco1 < 950) y_orco1 = 100;
		if (y_orco1 == 550 && x_orco1 > 150 && x_orco1 < 950) y_orco1 = 600;
		if (y_orco1 == 450 && x_orco1 > 150 && x_orco1 < 250) y_orco1 = 500;
		if (y_orco1 == 450 && x_orco1 > 850 && x_orco1 < 950) y_orco1 = 500;
        $("#orco1").css({ "top": y_orco1 + "px"});
}
function arribaOrco2(){		
		y_orco2 = y_orco2 - 50;
        if (y_orco2 == 50 && x_orco2 > 150 && x_orco2 < 950) y_orco2 = 100;
		if (y_orco2 == 550 && x_orco2 > 150 && x_orco2 < 950) y_orco2 = 600;
		if (y_orco2 == 450 && x_orco2 > 150 && x_orco2 < 250) y_orco2 = 500;
		if (y_orco2 == 450 && x_orco2 > 850 && x_orco2 < 950) y_orco2 = 500;
        $("#orco2").css({ "top": y_orco2 + "px"});
}
function arribaGoblin1(){		
		y_goblin1 = y_goblin1 - 50;
        if (y_goblin1 == 50 && x_goblin1 > 150 && x_goblin1 < 950) y_goblin1 = 100;
		if (y_goblin1 == 550 && x_goblin1 > 150 && x_goblin1 < 950) y_goblin1 = 600;
		if (y_goblin1 == 450 && x_goblin1 > 150 && x_goblin1 < 250) y_goblin1 = 500;
		if (y_goblin1 == 450 && x_goblin1 > 850 && x_goblin1 < 950) y_goblin1 = 500;
        $("#goblin1").css({ "top": y_goblin1 + "px"});
}
function arribaGoblin2(){		
		y_goblin2 = y_goblin2 - 50;
        if (y_goblin2 == 50 && x_goblin2 > 150 && x_goblin2 < 950) y_goblin2 = 100;
		if (y_goblin2 == 550 && x_goblin2 > 150 && x_goblin2 < 950) y_goblin2 = 600;
		if (y_goblin2 == 450 && x_goblin2 > 150 && x_goblin2 < 250) y_goblin2 = 500;
		if (y_goblin2 == 450 && x_goblin2 > 850 && x_goblin2 < 950) y_goblin2 = 500;
        $("#goblin2").css({ "top": y_goblin2 + "px"});		
}
function abajoOrco1(){
		y_orco1 = y_orco1 + 50;
        if (y_orco1 == 50 && x_orco1 > 150 && x_orco1 < 950) y_orco1 = 0;
		if (y_orco1 == 550 && x_orco1 > 150 && x_orco1 < 950) y_orco1 = 500;
		if (y_orco1 == 150 && x_orco1 > 150 && x_orco1 < 250) y_orco1 = 100;
		if (y_orco1 == 150 && x_orco1 > 850 && x_orco1 < 950) y_orco1 = 100;
        $("#orco1").css({ "top": y_orco1 + "px"});
}		
function abajoOrco2(){
		y_orco2 = y_orco2 + 50;
        if (y_orco2 == 50 && x_orco2 > 150 && x_orco2 < 950) y_orco2 = 0;
		if (y_orco2 == 550 && x_orco2 > 150 && x_orco2 < 950) y_orco2 = 500;
		if (y_orco2 == 150 && x_orco2 > 150 && x_orco2 < 250) y_orco2 = 100;
		if (y_orco2 == 150 && x_orco2 > 850 && x_orco2 < 950) y_orco2 = 100;
        $("#orco2").css({ "top": y_orco2 + "px"});
}
function abajoGoblin1(){		
		y_goblin1 = y_goblin1 + 50;
        if (y_goblin1 == 50 && x_goblin1 > 150 && x_goblin1 < 950) y_goblin1 = 0;
		if (y_goblin1 == 550 && x_goblin1 > 150 && x_goblin1 < 950) y_goblin1 = 500;
		if (y_goblin1 == 150 && x_goblin1 > 150 && x_goblin1 < 250) y_goblin1 = 100;
		if (y_goblin1 == 150 && x_goblin1 > 850 && x_goblin1 < 950) y_goblin1 = 100;
        $("#goblin1").css({ "top": y_goblin1 + "px"});
}
function abajoGoblin2(){
		y_goblin2 = y_goblin2 + 50;
        if (y_goblin2 == 50 && x_goblin2 > 150 && x_goblin2 < 950) y_goblin2 = 0;
		if (y_goblin2 == 550 && x_goblin2 > 150 && x_goblin2 < 950) y_goblin2 = 500;
		if (y_goblin2 == 150 && x_goblin2 > 150 && x_goblin2 < 250) y_goblin2 = 100;
		if (y_goblin2 == 150 && x_goblin2 > 850 && x_goblin2 < 950) y_goblin2 = 100;
        $("#goblin2").css({ "top": y_goblin2 + "px"});		
}
function derechaOrco1(){
		x_orco1 = x_orco1 + 50;
        if (x_orco1 > 1050) x_orco1 = 1100;
		if (x_orco1 == 200 && y_orco1 > 0 && y_orco1 < 100) x_orco1 = 150;
		if (x_orco1 == 200 && y_orco1 > 500 && y_orco1 < 600) x_orco1 = 150;
		if (x_orco1 == 200 && y_orco1 > 100 && y_orco1 < 500) x_orco1 = 150;
		if (x_orco1 == 900 && y_orco1 > 100 && y_orco1 < 500) x_orco1 = 850;
        $("#orco1").css({ "left": x_orco1 + "px"});
}
function derechaOrco2(){		
		x_orco2 = x_orco2 + 50;
        if (x_orco2 > 1050) x_orco2 = 1100;
		if (x_orco2 == 200 && y_orco2 > 0 && y_orco2 < 100) x_orco2 = 150;
		if (x_orco2 == 200 && y_orco2 > 500 && y_orco2 < 600) x_orco2 = 150;
		if (x_orco2 == 200 && y_orco2 > 100 && y_orco2 < 500) x_orco2 = 150;
		if (x_orco2 == 900 && y_orco2 > 100 && y_orco2 < 500) x_orco2 = 850;
        $("#orco2").css({ "left": x_orco2 + "px"});
}
function derechaGoblin1(){		
		x_goblin1 = x_goblin1 + 50;
        if (x_goblin1 > 1050) x_goblin1 = 1100;
		if (x_goblin1 == 200 && y_goblin1 > 0 && y_goblin1 < 100) x_goblin1 = 150;
		if (x_goblin1 == 200 && y_goblin1 > 500 && y_goblin1 < 600) x_goblin1 = 150;
		if (x_goblin1 == 200 && y_goblin1 > 100 && y_goblin1 < 500) x_goblin1 = 150;
		if (x_goblin1 == 900 && y_goblin1 > 100 && y_goblin1 < 500) x_goblin1 = 850;
        $("#goblin1").css({ "left": x_goblin1 + "px"});
}
function derechaGoblin2(){		
		x_goblin2 = x_goblin2 + 50;
        if (x_goblin2 > 1050) x_goblin2 = 1100;
		if (x_goblin2 == 200 && y_goblin2 > 0 && y_goblin2 < 100) x_goblin2 = 150;
		if (x_goblin2 == 200 && y_goblin2 > 500 && y_goblin2 < 600) x_goblin2 = 150;
		if (x_goblin2 == 200 && y_goblin2 > 100 && y_goblin2 < 500) x_goblin2 = 150;
		if (x_goblin2 == 900 && y_goblin2 > 100 && y_goblin2 < 500) x_goblin2 = 850;
        $("#goblin2").css({ "left": x_goblin2 + "px"});
}
function izquierdaOrco1(){
		x_orco1 = x_orco1 - 50;
        if (x_orco1 < 0) x_orco1 = 0;
		if (x_orco1 == 900 && y_orco1 > 0 && y_orco1 < 100) x_orco1 = 950;
		if (x_orco1 == 900 && y_orco1 > 500 && y_orco1 < 600) x_orco1 = 950;
		if (x_orco1 == 200 && y_orco1 > 100 && y_orco1 < 500) x_orco1 = 250;
		if (x_orco1 == 900 && y_orco1 > 100 && y_orco1 < 500) x_orco1 = 950;
        $("#orco1").css({ "left": x_orco1 + "px"});
}
function izquierdaOrco2(){		
		x_orco2 = x_orco2 - 50;
        if (x_orco2 < 0) x_orco2 = 0;
		if (x_orco2 == 900 && y_orco2 > 0 && y_orco2 < 100) x_orco2 = 950;
		if (x_orco2 == 900 && y_orco2 > 500 && y_orco2 < 600) x_orco2 = 950;
		if (x_orco2 == 200 && y_orco2 > 100 && y_orco2 < 500) x_orco2 = 250;
		if (x_orco2 == 900 && y_orco2 > 100 && y_orco2 < 500) x_orco2 = 950;
        $("#orco2").css({ "left": x_orco2 + "px"});
}
function izquierdaGoblin1(){
		x_goblin1 = x_goblin1 - 50;
        if (x_goblin1 < 0) x_goblin1 = 0;
		if (x_goblin1 == 900 && y_goblin1 > 0 && y_goblin1 < 100) x_goblin1 = 950;
		if (x_goblin1 == 900 && y_goblin1 > 500 && y_goblin1 < 600) x_goblin1 = 950;
		if (x_goblin1 == 200 && y_goblin1 > 100 && y_goblin1 < 500) x_goblin1 = 250;
		if (x_goblin1 == 900 && y_goblin1 > 100 && y_goblin1 < 500) x_goblin1 = 950;
        $("#goblin1").css({ "left": x_goblin1 + "px"});
}
function izquierdaGoblin2(){		
		x_goblin2 = x_goblin2 - 50;
        if (x_goblin2 < 0) x_goblin2 = 0;
		if (x_goblin2 == 900 && y_goblin2 > 0 && y_goblin2 < 100) x_goblin2 = 950;
		if (x_goblin2 == 900 && y_goblin2 > 500 && y_goblin2 < 600) x_goblin2 = 950;
		if (x_goblin2 == 200 && y_goblin2 > 100 && y_goblin2 < 500) x_goblin2 = 250;
		if (x_goblin2 == 900 && y_goblin2 > 100 && y_goblin2 < 500) x_goblin2 = 950;
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
$("body").keypress(function(e) {
    if (e.which == 115) {
        //DOWN - S
        abajoUser();
		movimientoOrco1();
		movimientoOrco2();
		movimientoGoblin1();
		movimientoGoblin2();
    }
    if (e.which == 119) {
        //UP - W
		arribaUser();
		movimientoOrco1();
		movimientoOrco2();
		movimientoGoblin1();
		movimientoGoblin2();
    }
    if (e.which == 100) {
        //RIGHT - D
        derechaUser();
		movimientoOrco1();
		movimientoOrco2();
		movimientoGoblin1();
		movimientoGoblin2();
    }
    if (e.which == 97) {
        //LEFT - A
        izquierdaUser();
		movimientoOrco1();
		movimientoOrco2();
		movimientoGoblin1();
		movimientoGoblin2();
    }
	detectarLlave();
	salir();
    detectarColision();
	/*detectarLlave();
	if(llaveObtenida==1)
	{
		("#puerta").css({'background-image': 'url(img/puerta.jpg)'});
		$("#llave1").css('display','none');
	}*/
	
});