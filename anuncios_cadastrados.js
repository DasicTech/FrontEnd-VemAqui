document
  .getElementById("formulario_estabelecimento")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter os valores do formulário
    var nome = document.getElementById("comercio").value;
    var email = document.getElementById("email").value;
    var descricao = document.getElementById("descricao").value;
    var endereco = document.getElementById("endereco").value;
    var telefone = document.getElementById("tel").value;
    var horarioAbertura = document.getElementById("horario-abertura").value;
    var horarioFechamento = document.getElementById("horario-fechamento").value;

    // Criar o objeto de anúncio
    var estabelecimentos = {
      nome: nome,
      email: email,
      descricao: descricao,
      endereco: endereco,
      telefone: telefone,
      horarioAbertura: horarioAbertura,
      horarioFechamento: horarioFechamento,
    };

    // Enviar o objeto de anúncio via fetch para a API
    fetch("http://localhost:8080/api/v1/estabelecimentos/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(estabelecimentos),
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

       /* fetch("http://localhost:8080/api/v1/estabelecimentos/form",{
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
        fetch("http://localhost:8080/api/v1/estabelecimentos/form",{
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
        });*/
        
});




