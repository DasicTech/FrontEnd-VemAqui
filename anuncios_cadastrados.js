document.getElementById("formulario_estabelecimento").addEventListener("submit", function (event) {
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
    fetch("http://localhost:8080/api/v1/estabelecimentos",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    })
        .then(function (response) {
            if (response.ok) {
                alert("Anúncio criado com sucesso!");
                window.location.href = "pesquisa.html"; // Redirecionar para a página de anúncios criados
            } else {
                alert("Erro ao criar o anúncio.");
            }
        })
        .catch(function (error) {
            console.error("Erro na requisição:", error);
            alert("Erro na requisição. Verifique o console para mais detalhes.");
        });

        fetch("http://localhost:8080/api/v1/stabelecimentos",{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    })
        .then(function (response) {
            if (response.ok) {
                alert("Anúncio deletado com sucesso!");
                window.location.href = "pesquisa.html"; // Redirecionar para a página de anúncios criados
            } else {
                alert("Erro ao criar ao deletar anúncio.");
            }
        })
        .catch(function (error) {
            console.error("Erro na requisição:", error);
            alert("Erro na requisição. Verifique o console para mais detalhes.");
        });
        fetch("http://localhost:8080/api/v1/estabelecimentos",{
        method: "UPDATE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    })
        .then(function (response) {
            if (response.ok) {
                alert("Anúncio atualizado com sucesso!");
                window.location.href = "pesquisa.html"; // Redirecionar para a página de anúncios criados
            } else {
                alert("Erro ao criar ao atualizar anúncio.");
            }
        })
        .catch(function (error) {
            console.error("Erro na requisição:", error);
            alert("Erro na requisição. Verifique o console para mais detalhes.");
        });
        
});

