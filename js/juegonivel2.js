var y_nivel2 = 300;
var x_nivel2 = 0;
var y_orco3 = 0;
var x_orco3 = 550;
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
var x_puerta = 1100;
var y_puerta = 600;
var x_moneda5 =	100;
var y_moneda5 = 0;
var x_moneda6 =	1000;
var y_moneda6 = 0;
var x_moneda7 =	300;
var y_moneda7 = 450;
var x_moneda8 =	800;
var y_moneda8 = 450;

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
        $("#pedobear2").css({ "left": x_nivel2 + "px"});
}
function arribaOrco3(){
		y_orco3 = y_orco3 - 50;
		if (y_orco3 < 0) y_orco3 = 0;
		if (y_orco3 == 50 && x_orco3 >= 0 && x_orco3 < 350) y_orco3 = 100;
		if (y_orco3 == 50 && x_orco3 >= 400 && x_orco3 < 750) y_orco3 = 100;
		if (y_orco3 == 50 && x_orco3 >= 800 && x_orco3 < 1150) y_orco3 = 100;
		if (y_orco3 == 200 && x_orco3 >= 250 && x_orco3 < 500) y_orco3 = 250;
		if (y_orco3 == 200 && x_orco3 >= 650 && x_orco3 < 900) y_orco3 = 250;
		if (y_orco3 == 350 && x_orco3 >= 250 && x_orco3 < 500) y_orco3 = 400;
		if (y_orco3 == 350 && x_orco3 >= 650 && x_orco3 < 900) y_orco3 = 400;
		if (y_orco3 == 500 && x_orco3 >= 250 && x_orco3 < 500) y_orco3 = 550;
		if (y_orco3 == 500 && x_orco3 >= 650 && x_orco3 < 900) y_orco3 = 550;
        $("#orco3").css({ "top": y_orco3 + "px"});
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
        $("#goblin5").css({ "top": y_goblin5 + "px"});
}
function abajoOrco3(){
		y_orco3 = y_orco3 + 50;
		if (y_orco3 > 550) y_orco3 = 600;
		if (y_orco3 == 50 && x_orco3 >= 0 && x_orco3 < 350) y_orco3 = 0;
		if (y_orco3 == 50 && x_orco3 >= 400 && x_orco3 < 750) y_orco3 = 0;
		if (y_orco3 == 50 && x_orco3 >= 800 && x_orco3 < 1150) y_orco3 = 0;
		if (y_orco3 == 200 && x_orco3 >= 250 && x_orco3 < 500) y_orco3 = 150;
		if (y_orco3 == 200 && x_orco3 >= 650 && x_orco3 < 900) y_orco3 = 150;
		if (y_orco3 == 350 && x_orco3 >= 250 && x_orco3 < 500) y_orco3 = 300;
		if (y_orco3 == 350 && x_orco3 >= 650 && x_orco3 < 900) y_orco3 = 300;
		if (y_orco3 == 500 && x_orco3 >= 250 && x_orco3 < 500) y_orco3 = 450;
		if (y_orco3 == 500 && x_orco3 >= 650 && x_orco3 < 900) y_orco3 = 450;
		if (y_orco3 == 150 && x_orco3 >= 100 && x_orco3 < 150) y_orco3 = 100;
		if (y_orco3 == 150 && x_orco3 >= 1000 && x_orco3 < 1050) y_orco3 = 100;
        $("#orco3").css({ "top": y_orco3 + "px"});
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
        $("#goblin5").css({ "top": y_goblin5 + "px"});
}
function derechaOrco3(){
		x_orco3 = x_orco3 + 50;
        if (x_orco3 > 1050) x_orco3 = 1100;
		if (x_orco3 == 100 && y_orco3 > 100 && y_orco3 < 650) x_orco3 = 50;
		if (x_orco3 == 1000 && y_orco3 > 100 && y_orco3 < 650) x_orco3 = 950;
		if (x_orco3 == 250 && y_orco3 > 150 && y_orco3 < 250) x_orco3 = 200;
		if (x_orco3 == 250 && y_orco3 > 300 && y_orco3 < 400) x_orco3 = 200;
		if (x_orco3 == 250 && y_orco3 > 450 && y_orco3 < 550) x_orco3 = 200;
		if (x_orco3 == 650 && y_orco3 > 150 && y_orco3 < 250) x_orco3 = 600;
		if (x_orco3 == 650 && y_orco3 > 300 && y_orco3 < 400) x_orco3 = 600;
		if (x_orco3 == 650 && y_orco3 > 450 && y_orco3 < 550) x_orco3 = 600;
		if (x_orco3 == 400 && y_orco3 > 0 && y_orco3 < 100) x_orco3 = 350;
		if (x_orco3 == 800 && y_orco3 > 0 && y_orco3 < 100) x_orco3 = 750;	
        $("#orco3").css({ "left": x_orco3 + "px"});
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
        $("#goblin5").css({ "left": x_goblin5 + "px"});
}
function izquierdaOrco3(){
		x_orco3 = x_orco3 - 50;
		if (x_orco3 < 0) x_orco3 = 0;
		if (x_orco3 == 100 && y_orco3 > 100 && y_orco3 < 650) x_orco3 = 150;
		if (x_orco3 == 1000 && y_orco3 > 100 && y_orco3 < 650) x_orco3 = 1050;
		if (x_orco3 == 450 && y_orco3 > 150 && y_orco3 < 250) x_orco3 = 500;
		if (x_orco3 == 450 && y_orco3 > 300 && y_orco3 < 400) x_orco3 = 500;
		if (x_orco3 == 450 && y_orco3 > 450 && y_orco3 < 550) x_orco3 = 500;
		if (x_orco3 == 850 && y_orco3 > 150 && y_orco3 < 250) x_orco3 = 900;
		if (x_orco3 == 850 && y_orco3 > 300 && y_orco3 < 400) x_orco3 = 900;
		if (x_orco3 == 850 && y_orco3 > 450 && y_orco3 < 550) x_orco3 = 900;
		if (x_orco3 == 300 && y_orco3 > 0 && y_orco3 < 100) x_orco3 = 350;
		if (x_orco3 == 700 && y_orco3 > 0 && y_orco3 < 100) x_orco3 = 750;
        $("#orco3").css({ "left": x_orco3 + "px"});
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
        $("#goblin5").css({ "left": x_goblin5 + "px"});
}
function movimientoOrco3(){
		if(y_nivel2 > y_orco3){
			abajoOrco3();
		}
		else if(y_nivel2 < y_orco3){
			arribaOrco3();
		}
		else if(y_nivel2 == y_orco3){
			if( x_nivel2 > x_orco3 ){
				derechaOrco3();
			}
			else if( x_nivel2 < x_orco3 ){
				izquierdaOrco3();
			}
		}
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