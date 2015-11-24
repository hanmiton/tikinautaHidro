
/*efectos del formulario*/
$(document).ready(function(){
  $('#comenzar').click(function(){  
    $("#formulario").hide("slow");
    $("#fondo").css("visibility", "visible");
    $("#fondo").fadeTo(1000, 1);
    $("#menu").css("visibility", "visible");
    $("#menu").fadeTo(1000, 1);
    });
});


/*efectos de la primera pantalla*/
$(document).ready(function(){
  $('#img8').click(function(){  
    $("#img8, #img9").hide("slow");
  	});
});

/*cambio pantalla 1*/
	$(document).ready(function(){
		$('#Escena1').click(function(){
			/*Ocultar escenas excepto la 2*/	
			$('body').css('background-image', 'url(../img/fondo1.png)');
			$("#fondo2").hide("slow");
			$("#fondo3").hide("slow");
			$("#fondo4").hide("slow");
			$("#fondo5").hide("slow");
			$("#fondo6").hide("slow");
			$("#fondo").css("visibility", "visible");
	    	$("#fondo").fadeTo(1000,1); 
	    	$("#menu").show("slow");  
		});
	});


/*cambio pantalla 2*/
	$(document).ready(function(){
		$('#Escena2').click(function(){
			/*Ocultar escenas excepto la 2*/
			$('body').css('background-image', 'url(../img/fondo2.png)');	
			$("#fondo").hide("slow");
			$("#fondo3").hide("slow");
			$("#fondo4").hide("slow");
			$("#fondo5").hide("slow");
			$("#fondo6").hide("slow");
			$("#fondo2").css("visibility", "visible");
	    	$("#fondo2").fadeTo(1000,1); 
	    	$("#menu").show("slow");  
		});
	});

/*cambio pantalla 3*/
	$(document).ready(function(){
		$('#Escena3').click(function(){
			/*Ocultar escenas excepto la 2*/	
			$('body').css('background-image', 'url(../img/fondo3.png)');
			$("#fondo").hide("slow");
			$("#fondo2").hide("slow");
			$("#fondo4").hide("slow");
			$("#fondo5").hide("slow");
			$("#fondo6").hide("slow");
			$("#fondo3").css("visibility", "visible");
	    	$("#fondo3").fadeTo(1000,1);   
	    	$("#menu").show("slow");  
		});
	});