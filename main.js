function getCoordinatesFromAddress(address) {
  return new Promise((resolve, reject) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const latitude = results[0].geometry.location.lat();
        const longitude = results[0].geometry.location.lng();
        resolve({ latitude, longitude });
      } else {
        reject(new Error("Erro ao obter as coordenadas do endereço."));
      }
    });
  });
}

// Função para lidar com o envio do formulário
function handleFormSubmit(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const tipoEstabelecimento = document.getElementById(
    "tipoEstabelecimento"
  ).value;
  const descricao = document.getElementById("descricao").value;
  const endereco = document.getElementById("endereco").value;

  // Obtém as coordenadas do endereço usando a API do Google Maps
  getCoordinatesFromAddress(endereco)
    .then(({ latitude, longitude }) => {
      // Salva os dados ou envia para o servidor
      console.log("Nome:", nome);
      console.log("Email:", email);
      console.log("Telefone:", telefone);
      console.log("Tipo de Estabelecimento:", tipoEstabelecimento);
      console.log("Descrição:", descricao);
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);

      // Redireciona para o mapa com as coordenadas
      const mapDiv = document.getElementById("map");
      mapDiv.innerHTML = ""; // Limpa o conteúdo anterior, se houver

      const map = new google.maps.Map(mapDiv, {
        center: { lat: latitude, lng: longitude },
        zoom: 15,
      });

      const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
      });
    })
    .catch((error) => {
      console.error(error);
      // Tratar erro, se necessário
    });
}

// Adiciona um ouvinte de evento ao formulário para lidar com o envio
document
  .getElementById("cadastroForm")
  .addEventListener("submit", handleFormSubmit);
