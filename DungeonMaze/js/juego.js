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
    if (x == x_orco1 && y == y_orco1) {
        $("#orco1").css({'background-image': 'url(http://profile.ak.fbcdn.net/hprofile-ak-snc4/261133_139054042840031_3050851_q.jpg)'});
        clearInterval(interval_id);
        $('#orco1').fadeOut('slow', function() {
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
		y_orco1 = y_orco1 - 50;
        if (y_orco1 < 0) y_orco1 = 0;
        $("#orco1").css({ "top": y_orco1 + "px"});
		y_orco2 = y_orco2 - 50;
        if (y_orco2 < 0) y_orco2 = 0;
        $("#orco2").css({ "top": y_orco2 + "px"});
		y_goblin1 = y_goblin1 - 50;
        if (y_goblin1 < 0) y_goblin1 = 0;
        $("#goblin1").css({ "top": y_goblin1 + "px"});
		y_goblin2 = y_goblin2 - 50;
        if (y_goblin2 < 0) y_goblin2 = 0;
        $("#goblin2").css({ "top": y_goblin2 + "px"});
}
function abajoOrco(){
		y_orco1 = y_orco1 + 50;
        if (y_orco1 > 550) y_orco1 = 600;
        $("#orco1").css({ "top": y_orco1 + "px"});
		y_orco2 = y_orco2 + 50;
        if (y_orco2 > 550) y_orco2 = 600;
        $("#orco2").css({ "top": y_orco2 + "px"});
		y_goblin1 = y_goblin1 + 50;
        if (y_goblin1 > 550) y_goblin1 = 600;
        $("#goblin1").css({ "top": y_goblin1 + "px"});
		y_goblin2 = y_goblin2 + 50;
        if (y_goblin2 > 550) y_goblin2 = 600;
        $("#goblin2").css({ "top": y_goblin2 + "px"});
}
function derechaOrco(){
		x_orco1 = x_orco1 + 50;
        if (x_orco1 > 1050) x_orco1 = 1100;        
        $("#orco1").css({ "left": x_orco1 + "px"});
		x_orco2 = x_orco2 + 50;
        if (x_orco2 > 1050) x_orco2 = 1100;        
        $("#orco2").css({ "left": x_orco2 + "px"});
		x_goblin1 = x_goblin1 + 50;
        if (x_goblin1 > 1050) x_goblin1 = 1100;        
        $("#goblin1").css({ "left": x_goblin1 + "px"});
		x_goblin2 = x_goblin2 + 50;
        if (x_goblin2 > 1050) x_goblin2 = 1100;
        $("#goblin2").css({ "left": x_goblin2 + "px"});
}
function izquierdaOrco(){
		x_orco1 = x_orco1 - 50;
        if (x_orco1 < 0) x_orco1 = 0;
        $("#orco1").css({ "left": x_orco1 + "px"});
		x_orco2 = x_orco2 - 50;
        if (x_orco2 < 0) x_orco2 = 0;
        $("#orco2").css({ "left": x_orco2 + "px"});
		x_goblin1 = x_goblin1 - 50;
        if (x_goblin1 < 0) x_goblin1 = 0;
        $("#goblin1").css({ "left": x_goblin1 + "px"});
		x_goblin2 = x_goblin2 - 50;
        if (x_goblin2 < 0) x_goblin2 = 0;
        $("#goblin2").css({ "left": x_goblin2 + "px"});
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