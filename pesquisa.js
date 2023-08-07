document.addEventListener("DOMContentLoaded", function () {
  // get para o endpoint
  fetch("http://localhost:8080/api/v1/estabelecimentos/vizualizar")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Erro na resposta da API.");
      }
      return response.json();
    })
    .then(function (estabelecimentos) {
      var estabelecimentosList = document.getElementById(
        "estabelecimentos-list"
      );

      estabelecimentos.forEach(function (estabelecimento) {
        var card = document.createElement("div");
        card.classList.add("card");

        var cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        var nome = document.createElement("h3");
        nome.classList.add("card-title");
        nome.textContent = estabelecimento.nome;

        var endereco = document.createElement("p");
        endereco.textContent = "ENDEREÇO: " + estabelecimento.endereco;

        var descricao = document.createElement("p");
        descricao.textContent = "DESCRIÇÃO: " + estabelecimento.descricao;

        var telefone = document.createElement("p");
        telefone.textContent = "TELEFONE: " + estabelecimento.telefone;

        var horario = document.createElement("p");
        horario.textContent =
          "HORÁRIO: " +
          estabelecimento.hora_abertura +
          " - " +
          estabelecimento.hora_fechamento;
        var foto = document.createElement("img");
        foto.src = "/imgs/icone-photo-noire.png";
        foto.width = 200;
        foto.height = 200;

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

        cardContent.appendChild(foto);
        cardContent.appendChild(nome);
        cardContent.appendChild(endereco);
        cardContent.appendChild(descricao);
        cardContent.appendChild(telefone);
        cardContent.appendChild(horario);
        cardContent.appendChild(vaga);
        cardContent.appendChild(localizacao);
        cardContent.appendChild(linkDetalhes);
        card.appendChild(cardContent);
        estabelecimentosList.appendChild(card);
      });
    })
    .catch(function (error) {
      console.error("Error:", error);
      alert("Erro.");
    });
});
