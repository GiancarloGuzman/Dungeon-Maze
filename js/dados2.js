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
  var ch;
  var cd;

  
  function throwdice2(){
    ch = 3;/*1+Math.floor(Math.random()*5);*/
	cd = 6;/*1+Math.floor(Math.random()*5);*/
    dx = dicex;
    dy = dicey;    
    drawface(ch);
    dx = (dicex + 150);
    /*ch = 1+Math.floor(Math.random()*6);
	cd = 1+Math.floor(Math.random()*6);*/
    drawface(cd);
	alert(' '+ch+' '+cd);
	/*if(ch==1 && cd==3)
	{	var d = document.getElementById("orco1");
		var p=d.parentNode;
		p.removeChild(d);	
		$("#pelea").css('display','none');
		$("#level1").css('display','block');
		
	}*/
	
	if(ch==3 && cd==6)
	{	
		$("#pelea2").css('display','none');
		$("#level2").css('display','block');
		
	}
	/*ch=3;
	cd=5;
	if(ch==3 && cd==5)
	{	var d = document.getElementById("goblin1");
		var p=d.parentNode;
		p.removeChild(d);	
		$("#pelea").css('display','none');
		$("#level1").css('display','block');
		
	}
	ch=4;
	cd=6;
	if(ch==4 && cd==6)
	{	var d = document.getElementById("goblin2");
		var p=d.parentNode;
		p.removeChild(d);	
		$("#pelea").css('display','none');
		$("#level1").css('display','block');
		ch=1;
		cd=1;
		
	}*/
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