function handleFunction() {
    var emailRecebido = document.getElementById("inputEmail").value;
    if( emailRecebido == "" 
        || emailRecebido.indexOf('@') ==-1  ){
        //alert(`Email inválido`);
        document.getElementById("cad_sus").style.display = "none";
        document.getElementById("cad_sus2").style.display = "";
	}else{
        //alert(`Email: ${emailRecebido} Cadastrado com sucesso!`);
        console.log(emailRecebido);
        document.getElementById("cad_sus").style.display = "";
        document.getElementById("cad_sus2").style.display = "none";
        localStorage.setItem('email_cadastro', JSON.stringify(emailRecebido));
    }
}