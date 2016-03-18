$("#btnSaludar").click(function(){
	var texto = $(".Nombre").val();

	if(texto != ""){
		alert($(".Nombre").val());
	}else{
		alert("Ingresa algo forro!");
	}
});