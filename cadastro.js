document.getElementById("formulario_usuario").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter os valores do formulário
    var text = document.getElementById("text").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var endereco = document.getElementById("endereco").value;

    // Criar o objeto de anúncio
    var usuario = {
        nome: text,
        email: email,
        senha: password,
        endereco: endereco
    };

    // Enviar o objeto de anúncio via fetch para a API
    fetch("http://localhost:8080/api/v1/usuarios/",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    })
        .then(function (response) {
            if (response.ok) {
                alert("Cadastro criado com sucesso!");
            } else {
                alert("Erro ao criar o Cadastro.");
            }
        })
        .catch(function (error) {
            console.error("Erro na requisição:", error);
            alert("Erro na requisição. Verifique o console para mais detalhes.");
        });
});