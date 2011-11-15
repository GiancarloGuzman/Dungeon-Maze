var y = 300;
var x = 0;
var y_orco = 150;
var x_orco = 150;
var y_orco1 = 250;
var x_orco1 = 250;
var y_orco2 = 350;
var x_orco2 = 350;

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
		y_orco1 = y_orco1 - 50;
        if (y_orco1 < 0) y_orco1 = 0;
        $("#trollface1").css({ "top": y_orco1 + "px"});
		y_orco2 = y_orco2 - 50;
        if (y_orco2 < 0) y_orco2 = 0;
        $("#trollface2").css({ "top": y_orco2 + "px"});
}
function abajoOrco(){
		y_orco = y_orco + 50;
        if (y_orco > 550) y_orco = 600;
        $("#trollface").css({ "top": y_orco + "px"});
		y_orco1 = y_orco1 + 50;
        if (y_orco1 > 550) y_orco1 = 600;
        $("#trollface1").css({ "top": y_orco1 + "px"});
		y_orco2 = y_orco2 + 50;
        if (y_orco2 > 550) y_orco2 = 600;
        $("#trollface2").css({ "top": y_orco2 + "px"});
}
function derechaOrco(){
		x_orco = x_orco + 50;
        if (x_orco > 1050) x_orco = 1100;        
        $("#trollface").css({ "left": x_orco + "px"});
		x_orco1 = x_orco1 + 50;
        if (x_orco1 > 1050) x_orco1 = 1100;        
        $("#trollface1").css({ "left": x_orco1 + "px"});
		x_orco2 = x_orco2 + 50;
        if (x_orco2 > 1050) x_orco2 = 1100;        
        $("#trollface2").css({ "left": x_orco2 + "px"});
}
function izquierdaOrco(){
		x_orco = x_orco - 50;
        if (x_orco < 0) x_orco = 0;
        $("#trollface").css({ "left": x_orco + "px"});
		x_orco1 = x_orco1 - 50;
        if (x_orco1 < 0) x_orco1 = 0;
        $("#trollface1").css({ "left": x_orco1 + "px"});
		x_orco2 = x_orco2 - 50;
        if (x_orco2 < 0) x_orco2 = 0;
        $("#trollface2").css({ "left": x_orco2 + "px"});
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