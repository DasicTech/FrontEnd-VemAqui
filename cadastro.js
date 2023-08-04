document
  .getElementById("formulario_usuario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter os valores do formulário
    var nome = document.getElementById("text").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;
    var telefone = document.getElementById("tel").value;

    // Criar o objeto de usuário
    var usuario = {
      nome: nome,
      email: email,
      senha: senha,
      telefone: telefone,
    };

    // Enviar o objeto de usuário via fetch para a API do backend
    fetch("http://localhost:8080/ap1/v1/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then(function (response) {
        if (response.ok) {
          var urlDestino = "login.html";
          alert("Cadastro criado com sucesso!");
          window.location.href = urlDestino;
        } else {
          alert("Erro ao criar o Cadastro.");
        }
      })
      .catch(function (error) {
        console.error("Erro na requisição:", error);
        alert("Erro na requisição. Verifique o console para mais detalhes.");
      });
  });
