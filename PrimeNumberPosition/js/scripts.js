var mostrar = function(){
	var rangod = parseInt(document.getElementById("rango").value);
	var mostrad = parseInt(document.getElementById("numero").value);
    var contador = 1;

    	for(var numero = 2; numero < rangod; numero++){
 			for(var a = 2; a < numero ; a++){
 				if ((numero % 2 == 0) || (numero % a == 0)){
	    		break;
	    		}else if(((numero-1) == a) && (numero % a != 0)){
	    		contador++;
	    		break;
	    		}

    		}

		 	if(contador == mostrad){
		 		var spac = document.getElementById("spac");
		 		var br1 = document.createElement("br");
				spac.appendChild(br1);
				var br2 = document.createElement("br");
				spac.appendChild(br2);
		 		document.getElementById("resultado").value = numero;
		 		document.getElementById("btresultado").style.display="none";	
		 		document.getElementsByTagName("label")[2].style.display="block";
		 		document.getElementById("resultado").style.display="block";	
		 		document.getElementById("borrar").style.display="block";	
		 		break;
		    }

 		}

 		if(document.getElementById("resultado").value == ""){
 		 	if((document.getElementById("numero").value == "") && (document.getElementById("rango").value == "")){
 		 		alert('Completa los campos!')

 		 	}else if(document.getElementById("rango").value == ""){
 		 		alert('Por favor ingresa un rango valido o mas grande!')
 		 		document.getElementById("btresultado").style.display="none";	
				document.getElementById("borrar").style.display="block";	
 		 	}else{
 		 		alert('Por favor ingresa una posicion valida o cambia el rango!') 		 		
 		 		document.getElementById("btresultado").style.display="none";	
				document.getElementById("borrar").style.display="block";	
 		 	}
 		}						
};

var limpiar = function(){
	document.getElementById("rango").value = "";
	document.getElementById("numero").value = "";
	document.getElementsByTagName("label")[2].style.display="none";
	document.getElementById("resultado").style.display="none";	
	document.getElementById("btresultado").style.display="block";	
	document.getElementById("borrar").style.display="none";
	location.reload();	
} ;