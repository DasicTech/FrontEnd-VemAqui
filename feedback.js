document
  .getElementById("formulario_feedback")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var texto = document.getElementById("text").value;

    var feedback = {
      texto: texto,
    };

    fetch("http://localhost:8080/api/v1/feedback/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedback),
    })
      .then(function (response) {
        if (response.ok) {
          var urlDestino = "pesquisa.html";
          alert("Feedback Enviado!");
          window.location.href = urlDestino;
        } else {
          alert("Erro ao enviar Feedback.");
        }
      })
      .catch(function (error) {
        console.error("Error: ", error);
        alert("Erro");
      });
  });
