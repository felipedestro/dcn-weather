<h1 align="center"> DNC Weather </h1>

<p align="center">
Projeto tem como finalidade resposta ao desafio 02, da versão de 2024, da escola DNC <br/>
</p>

<p align="center">
  <a href="#funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#consumindo-api">Consumos de API</a>&nbsp;&nbsp;&nbsp;
  
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<p align="center">
  <img alt="projeto e-commerce" src=".github/dncWeather.png" width="100%">
</p>

## Tecnologias

<p align="left">
  <img src='https://cdn.worldvectorlogo.com/logos/javascript-1.svg' width="36.9px"/> 
  <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png' width="42px"/> 
  <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-256.png' width="42px"/> 
</p>

## Estrutura do projeto

- `./script/` - Contém todos os scripts de execução da página

- `./index.html` - Todo o site em uma única página

## Consumindo API

Através do consumo de duas API conseguimos setar a localidade pelo CEP e a atual temperatura.

```js
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
```

```js
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
```

<p align="center">
  Feito por Felipe Destro 👋 <a href="https://github.com/felipedestro">Conheça meus projetos!</a>
</p>
