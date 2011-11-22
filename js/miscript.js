$(document).ready(function(){
		$('#formulario').corner();
		$('#guerrero').corner();
		$('#valkiria').corner();
		$('#clerigo').corner();
		$('#datos').corner();
		var seleccionado="";
		var nom="";
		var heroe="";
		var ataque="";
		var defensa="";
		var daño="";
		var vida="";
		var rutasfondo=['guerrero','clerigo','valkiria'];

		$('#razas li img').mouseover(function()
		{
			
			var index=0;
			
			if(seleccionado==this.id){
				$('body').css('background-image','none');
				seleccionado="";
				$('#'+this.id).css('border','none');
			}else{
				$('#razas li img').click(function(){
				switch(this.id){
				case 'guerrero':
				index=0;
				heroe="Guerrero";
				ataque="10";
				defensa="14";
				daño="15";
				vida="100";
				e=document.getElementById("datos");
				e.innerHTML="Heroe: "+heroe+ "<br/>" +"Ataque: "+ataque+"<br/>" +"Defensa: "+defensa+"<br/>" +"Daño: "+daño+"<br/>" +"Vida: "+vida;
				
				break;
				case 'clerigo':
				index=1;
				heroe="Clerigo";
				ataque="5";
				defensa="16";
				daño="5";
				vida="150";
				e=document.getElementById("datos");
				e.innerHTML="Heroe: "+heroe+ "<br/>" +"Ataque: "+ataque+"<br/>" +"Defensa: "+defensa+"<br/>" +"Daño: "+daño+"<br/>" +"Vida: "+vida;
				break;
				
				case 'valkiria': 
				index=2;
				heroe="Valkiria";
				ataque="10";
				defensa="12";
				daño="20";
				vida="50";
				e=document.getElementById("datos");
				e.innerHTML="Heroe: "+heroe+ "<br/>" +"Ataque: "+ataque+"<br/>" +"Defensa: "+defensa+"<br/>" +"Daño: "+daño+"<br/>" +"Vida: "+vida;
				break;
				}
			seleccionado=this.id;

			$('#guerrero').css('border','none');
			$('#valkiria').css('border','none');
			$('#clerigo').css('border','none');

			$('#formulario').show();
			$('#'+rutasfondo[index]).css('border','3px solid red');
			$("#datos").css("display","block");
		 });
		 }
		});
		$('#razas li img').mouseout(function()
		{
			$('#datos').css('display','none');
			$('#guerrero').css('border','none');
			$('#valkiria').css('border','none');
			$('#clerigo').css('border','none');
			$('#formulario').show();
			$('#'+rutasfondo[index]).css('border','none');
		});
		$('#registrar').click(function()
		{
			nom= document.getElementById("name").value;
			alert('Bienvenido '+heroe+' '+nom+' puede comenzar el juego');
			/*e=document.getElementById("datos");*/
			/*e.innerHTML="Bienvenido: "+nom+"<br />"+Heroe: "+heroe+ "<br/>" +"Ataque: "+ataque+"<br/>" +"Defensa: "+defensa+"<br/>" +"Daño: "+daño+"<br/>" +"Vida: "+vida;*/
		});
		$('#jugar').click(function()
		{
			$("#level3").css("display", "block");
			$("#inicio").css("display", "none");
		});
		$('#prueba').click(function()
		{
			alert('hola: '+nom);
		});

	});