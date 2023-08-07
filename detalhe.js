document.addEventListener("DOMContentLoaded", function () {
  var urlParams = new URLSearchParams(window.location.search);
  var estabelecimentoId = urlParams.get("id");

  if (estabelecimentoId) {
    fetch("http://localhost:8080/api/v1/estabelecimentos/" + estabelecimentoId)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Erro por causa da API.");
        }
        return response.json();
      })
      .then(function (estabelecimento) {
        var detalhesContent = document.getElementById("detalhes-content");

        var nome = document.createElement("h2");
        nome.textContent = estabelecimento.nome;

        var endereco = document.createElement("p");
        endereco.textContent = "ENDEREÇO: " + estabelecimento.endereco;

        var descricao = document.createElement("p");
        descricao.textContent = "DESCRIÇÃO: " + estabelecimento.descricao;

        var telefone = document.createElement("p");
        telefone.textContent = "TELEFONE: " + estabelecimento.telefone;

        var email = document.createElement("p");
        email.textContent = "EMAIL: " + estabelecimento.email;

        var horario = document.createElement("p");
        horario.textContent =
          " HORÁRIO: " +
          estabelecimento.hora_abertura +
          " - " +
          estabelecimento.hora_fechamento;

        var vaga = document.createElement("button");
        vaga.textContent = "VAGA";
        var localizacao = document.createElement("button");
        localizacao.textContent = "LOCAL";
        localizacao.addEventListener("click", function () {
          window.open(
            "https://www.google.com/maps/search/" + estabelecimento.endereco
          );
        });
        var linkDetalhes = document.createElement("a");
        linkDetalhes.textContent = "VER MAIS";
        linkDetalhes.addEventListener("click", function () {
          window.location.href = "detalhe.html?id=" + estabelecimento.id;
        });

        detalhesContent.appendChild(nome);
        detalhesContent.appendChild(endereco);
        detalhesContent.appendChild(descricao);
        detalhesContent.appendChild(email);
        detalhesContent.appendChild(telefone);
        detalhesContent.appendChild(horario);
        detalhesContent.appendChild(vaga);
        detalhesContent.appendChild(localizacao);
      })
      .catch(function (error) {
        console.error("Erro:", error);
        alert("Erro.");
      });
  }
});
