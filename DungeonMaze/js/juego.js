var y = 300;
var x = 0;
var y_troll = 100;
var x_troll = 300;
/*var interval_id = setInterval(function() { cambiarPosicionTroll(); },3000);*/

function cambiarPosicionTroll() {
    x_troll = Math.floor(Math.random()*83) * 5;
    y_troll = Math.floor(Math.random()*75) * 5;
    $("#trollface").css({ "top": y_troll + "px"});
    $("#trollface").css({ "left": x_troll + "px"});
}

$(document).ready(function () {
    cambiarPosicionTroll();
});

function detectarColision() {
    if (x == x_troll && y == y_troll) {
        $("#trollface").css({'background-image': 'url(http://profile.ak.fbcdn.net/hprofile-ak-snc4/261133_139054042840031_3050851_q.jpg)'});
        clearInterval(interval_id);
        $('#trollface').fadeOut('slow', function() {
    // Animation complete.
      });
    }
}

function arriba(){
    	y = y - 50;
        if (y < 0) y = 0;
        $("#pedobear").css({ "top": y + "px"});
}
function abajo(){
		y = y + 50;
        if (y > 550) y = 600;
        $("#pedobear").css({ "top": y + "px"});
}
function derecha(){
		x = x + 50;
        if (x > 1150) x = 1200;        
        $("#pedobear").css({ "left": x + "px"});
}
function izquierda(){
		x = x - 50;
        if (x < 0) x = 0;
        $("#pedobear").css({ "left": x + "px"});
}

$("body").keypress(function(e) {
    if (e.which == 115) {
        //DOWN - S
        abajo();
		cambiarPosicionTroll();
      
    }
    if (e.which == 119) {
        //UP - W
		arriba();
		cambiarPosicionTroll();
    }
    if (e.which == 100) {
        //RIGHT - D
        derecha();
		cambiarPosicionTroll();
    }
    if (e.which == 97) {
        //LEFT - A
        izquierda();
		cambiarPosicionTroll();
    }
    detectarColision();
});