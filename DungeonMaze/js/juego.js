var y = 0;
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

$("body").keypress(function(e) {
    if (e.which == 115) {
        //DOWN - S
        y = y + 5;
        if (y > 370) y = 370;
        $("#pedobear").css({ "top": y + "px"});
      
    }
    if (e.which == 119) {
        //UP - W
        y = y - 5;
        if (y < 0) y = 0;
        $("#pedobear").css({ "top": y + "px"});
    }
    if (e.which == 100) {
        //RIGHT - D
        x = x + 5;
        if (x > 410) x = 410;        
        $("#pedobear").css({ "left": x + "px"});
    }
    if (e.which == 97) {
        //LEFT - A
        x = x - 5;
        if (x < 0) x = 0;
        $("#pedobear").css({ "left": x + "px"});
    }
    detectarColision();
});