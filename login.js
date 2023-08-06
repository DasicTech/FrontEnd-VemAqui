document
  .getElementById("formulario_usuario_login")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter os valores do formulário
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    // Criar o objeto de credenciais
    var credenciais = {
      email: email,
      senha: senha,
    };

    // Enviar o objeto de credenciais via fetch para a API do backend para autenticação
    fetch("http://localhost:8080/ap1/v1/usuarios/login/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(credenciais),
    })
      .then(function (response) {
        if (response.ok) {
          var redirectUrl = "anuncios_cadastrados.html";
          alert("Login realizado com sucesso!");
          window.location.href = redirectUrl;
        } else {
          throw new Error(
            "E-mail ou senha inválidos. Por favor, tente novamente."
          );
        }
      })

      .catch(function (error) {
        console.error("Erro na requisição:", error);
        alert("Senha ou Email digitado errado");
      });
  });
  document.getElementById("formulario_usuario_login").addEventListener("submit")
Event.preventDefault(); //Impede o envio de formulario

//Obter os valores do formulario 
var email = document.getElementById("email").value;
var senha = document.getElementById("senha").value;

// Aqui faz a autenticação com back-end como está fazendo
//Suponho que a autenticação foi bem sucedida e você tem o nome do login
var nomelogin = "nome_do_login";

//Armazenar o nome de login no sessionstore
sessionStorage.getItem("nomelogin");

//Redirecionar para a página  de  destino após  o login
var redirectUrl = "anuncios_cadastrados.html";
window.location.href = redirectUrl;
