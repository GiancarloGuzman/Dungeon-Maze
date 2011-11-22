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

function detectarLlave3() {
    if (x_nivel3 == x_llave3 && y_nivel3 == y_llave3) {
		llaveObtenida = 3;
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
        $("#goblin7").css({ "left": x_goblin7 + "px"});
}
function arribaFantasma(){
		y_fantasma = y_fantasma - 50;
        if (y_fantasma < 0) y_fantasma = 0;
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
