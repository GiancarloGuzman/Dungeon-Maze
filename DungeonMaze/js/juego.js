var y = 300;
var x = 0;
var y_orco = 100;
var x_orco = 300;
/*var interval_id = setInterval(function() { cambiarPosicionOrco(); },3000);*/

function cambiarPosicionOrco() {
    var aleatorio = Math.floor(Math.random()*4);
    if(aleatorio==0){
	arribaOrco();
	}
	else if(aleatorio==1){
	abajoOrco();
	}
	else if(aleatorio==2){
	derechaOrco();
	}
	else if(aleatorio==3){
	izquierdaOrco();
	}
	
}

$(document).ready(function () {
    cambiarPosicionOrco();
});

function detectarColision() {
    if (x == x_orco && y == y_orco) {
        $("#trollface").css({'background-image': 'url(http://profile.ak.fbcdn.net/hprofile-ak-snc4/261133_139054042840031_3050851_q.jpg)'});
        clearInterval(interval_id);
        $('#trollface').fadeOut('slow', function() {
    // Animation complete.
      });
    }
}

function arribaUser(){
		y = y - 50;
        if (y < 0) y = 0;
        $("#pedobear").css({ "top": y + "px"});
}
function abajoUser(){
		y = y + 50;
        if (y > 550) y = 600;
        $("#pedobear").css({ "top": y + "px"});
}
function derechaUser(){
		x = x + 50;
        if (x > 1050) x = 1100;        
        $("#pedobear").css({ "left": x + "px"});
}
function izquierdaUser(){
		x = x - 50;
        if (x < 0) x = 0;
        $("#pedobear").css({ "left": x + "px"});
}
function arribaOrco(){
		y_orco = y_orco - 50;
        if (y_orco < 0) y_orco = 0;
        $("#trollface").css({ "top": y_orco + "px"});
}
function abajoOrco(){
		y_orco = y_orco + 50;
        if (y_orco > 550) y_orco = 600;
        $("#trollface").css({ "top": y_orco + "px"});
}
function derechaOrco(){
		x_orco = x_orco + 50;
        if (x_orco > 1050) x_orco = 1100;        
        $("#trollface").css({ "left": x_orco + "px"});
}
function izquierdaOrco(){
		x_orco = x_orco - 50;
        if (x_orco < 0) x_orco = 0;
        $("#trollface").css({ "left": x_orco + "px"});
}

$("body").keypress(function(e) {
    if (e.which == 115) {
        //DOWN - S
        abajoUser();
		cambiarPosicionOrco();
      
    }
    if (e.which == 119) {
        //UP - W
		arribaUser();
		cambiarPosicionOrco();
    }
    if (e.which == 100) {
        //RIGHT - D
        derechaUser();
		cambiarPosicionOrco();
    }
    if (e.which == 97) {
        //LEFT - A
        izquierdaUser();
		cambiarPosicionOrco();
    }
    detectarColision();
});