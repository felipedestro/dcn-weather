async function setPrev(latitude, longitude) {
  const temp = document.getElementById("temp");

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`
    );
    const data = await response.json();

    if (!data.erro) {
      temp.innerText = `Previsão do tempo de acordo com a região: ${data.current.temperature_2m} °C`;
    }
  } catch {
    console.log("Error");
  }
}

async function setCEP(cep) {
  const longadouro = document.getElementById("dataLogradouro");
  const bairro = document.getElementById("dataBairro");
  const uf = document.getElementById("dataUF");

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (!data.erro) {
      longadouro.innerText = data.logradouro;
      bairro.innerText = data.bairro;
      uf.innerText = data.uf;
    }
  } catch {
    console.log("Error");
  }
}

let dateForm = document.getElementById("dateForm");

dateForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cep = document.getElementById("cep").value;
  const latitude = document.getElementById("latitude").value;
  const longitude = document.getElementById("longitude").value;

  if (cep !== "" && latitude !== "" && longitude !== "") {
    setCEP(cep);
    setPrev(latitude, longitude);
  }
});
