var cadNome = [];
var cadEmail = [];
var cadSenha1 = [];
var cadConfSenha1 = [];

function cadastrar(){

    var vNome = document.getElementById("nome2").value;
    var vEmail = document.getElementById("email2").value;
    var vSenha = document.getElementById("senha2").value;
    var vConfSenha = document.getElementById("confSenha2").value;

    cadNome.push(vNome);
    cadEmail.push(vEmail);
    cadSenha1.push(vSenha);
    cadConfSenha1.push(vConfSenha);

    document.getElementById("nome2").value = "";
    document.getElementById("email2").value = "";
    document.getElementById("senha2").value = "";
    document.getElementById("confSenha2").value = "";

}

function logar(){

    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    // if(email.value == "admin@admin.com" && senha.value == "1234"){

    //     localStorage.setItem("acesso", true);
    //     alert("Email autenticado!");
    //     window.location.href = "index.html";
    // }else{

    //     alert("Email ou senha invalidos!");
    //     document.getElementById("email").value = "";
    //     document.getElementById("senha").value = "";
    // }

    var valEmail;
    var valSenha;

    for(let i=0; i < cadEmail.length; i++){

        if(email.value == cadEmail[i] && senha.value == cadSenha1[i]){
            valEmail = true;
            valSenha = true;
            break;
        }else{
            valEmail = false;
            valSenha = false;
        }
    }

        if(valEmail == true && valSenha == true){

            localStorage.setItem("acesso", true);
            alert("Email autenticado!");
            window.location.href = "index.html";
        }else{
    
            alert("Email ou senha invalidos!");
            document.getElementById("email").value = "";
            document.getElementById("senha").value = "";
        }

    }



function listaCadastro(){

    for(let i=0; i < cadEmail.length; i++){

        //console.log(cadEmail[i] +" "+ cadSenha1[i] +" "+ cadConfSenha1[i]);
        console.log(idNome + " " + idEmial);
    }

}