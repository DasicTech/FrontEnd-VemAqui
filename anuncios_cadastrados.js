document
  .getElementById("formulario_estabelecimento")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var nome = document.getElementById("comercio").value;
    var email = document.getElementById("email").value;
    var descricao = document.getElementById("descricao").value;
    var endereco = document.getElementById("endereco").value;
    var telefone = document.getElementById("tel").value;
    var hora_abertura = document.getElementById("horario-abertura").value;
    var hora_fechamento = document.getElementById("horario-fechamento").value;

    var estabelecimentos = {
      nome: nome,
      email: email,
      descricao: descricao,
      endereco: endereco,
      telefone: telefone,
      hora_abertura: hora_abertura,
      hora_fechamento: hora_fechamento,
    };

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
          window.location.href = "pesquisa.html";
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
