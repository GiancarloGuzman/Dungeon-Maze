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
        $("#pedobear2").css({ "top": y_nivel2 + "px"});
}
function abajoUser2(){
		y_nivel2 = y_nivel2 + 50;
        if (y_nivel2 > 550) y_nivel2 = 600;
        $("#pedobear2").css({ "top": y_nivel2 + "px"});
}
function derechaUser2(){
		x_nivel2 = x_nivel2 + 50;
        if (x_nivel2 > 1050) x_nivel2 = 1100;
        $("#pedobear2").css({ "left": x_nivel2 + "px"});
}
function izquierdaUser2(){
		x_nivel2 = x_nivel2 - 50;
        if (x_nivel2 < 0) x_nivel2 = 0;
        $("#pedobear2").css({ "left": x_nivel2 + "px"});
}
$("body").keypress(function(e) {
    if (e.which == 115) {
        //DOWN - S
        abajoUser2();
    }
    if (e.which == 119) {
        //UP - W
		arribaUser2();
    }
    if (e.which == 100) {
        //RIGHT - D
        derechaUser2();
    }
    if (e.which == 97) {
        //LEFT - A
        izquierdaUser2();
    }
	moverAntVar();
});
