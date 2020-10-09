var logado = false;

if(localStorage.getItem("acesso") == "true" ){

    logado = true;
}

if(logado != true){

    alert("Email não autenticado!");
    window.location.href = "login.html"
}

function sair(){

    localStorage.clear("acesso");
    window.location.href = "login.html"
}

