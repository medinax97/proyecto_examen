	
	//Función para cargar los radio buttons
			function init(){
				$.getJSON('http://192.168.137.95/respuesta2.php', function(data){
					console.log(JSON.stringify(data));
					var datos;
					
					
					for (var i = 0; i < data.length; i++) {						
							$("form").append("<p><strong> "+ data[i].pregunta+"</strong></p> <br>");

							$("form").append("<input type='radio' name='a"+data[i].id+"' id='a"+data[i].id+"' value='"+data[i].a+"'>"+data[i].a+"<br> <br>");

							$("form").append("<input type='radio' name='a"+data[i].id+"' id='b"+data[i].id+"' value='"+data[i].b+"'>"+data[i].b+"<br><br>");
							$("form").append("<input type='radio' name='a"+data[i].id+"' id='c"+data[i].id+"' value='"+data[i].c+"'>"+data[i].c+"<br><br>");													
					}

				
								
				});			
			}	


	//Función para verificar las preguntas correctas
	function procesamiento_preguntas(){
			$.getJSON('http://192.168.137.95/respuesta2.php', function(data){
				var contador=0;
				var aciertos=[];
				

				for (var i = 0; i < data.length; i++) {
					if (data[i].correcta == $("input[name='a" + data[i].id + "']:checked").val()){
						contador=contador+2;
						aciertos[i] = data[i].correcta;
				}
				
				}	

				alert("El resultado del test es: " +contador);window.location.href='index.html';

			});



}
