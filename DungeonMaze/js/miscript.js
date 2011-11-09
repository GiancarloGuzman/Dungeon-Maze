
	$(document).ready(function(){
		$('#formulario').corner();
		$('#guerrero').corner();
		$('#valkiria').corner();
		$('#clerigo').corner();
		var seleccionado="";
		var rutasfondo=['guerrero','clerigo','valkiria'];
		
		$('#razas li img').click(function(){
			var index=0;
			if(seleccionado==this.id){
				$('body').css('background-image','none');
				seleccionado="";
				
				$('#'+this.id).css('border','none');
			}else{
				switch(this.id){
				case 'clerigo':index=1;
				break;
				case 'valkiria': index=2; 		
				break;
				default:index=0;
				}
			seleccionado=this.id;
		
			$('#guerrero').css('border','none');
			$('#valkiria').css('border','none');
			$('#clerigo').css('border','none');
		
			$('#formulario').show();
			$('#'+rutasfondo[index]).css('border','3px solid red');
		 }
    });
	
	
		
	});
	
	
	
	