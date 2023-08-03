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
          var redirectUrl = "pesquisa.html";
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
