// ============================ PAGINA 1 (ViaCEP) ============================

const btnBuscar = document.querySelector("#btnBuscar");

if (btnBuscar) {
  btnBuscar.addEventListener("click", () => {
    const painel = document.querySelector("#resultado");
    painel.innerHTML = "Carregando...";

    let cep = document.querySelector("#cep").value || "";
    cep = cep.replace(/\D/g, "");

    if (cep.length !== 8) {
      painel.innerHTML = "CEP inválido. Digite 8 números.";
      return;
    }

    const url = "https://viacep.com.br/ws/" + cep + "/json/";

    fetch(url)
      .then(r => r.json())
      .then(js => {
        if (js.erro) {
          painel.innerHTML = "CEP não encontrado.";
          return;
        }

        painel.innerHTML =
          "<h3>Resultado</h3>" +
          "Logradouro: " + js.logradouro + "<br>" +
          "Bairro: " + js.bairro + "<br>" +
          "Cidade: " + js.localidade + "<br>" +
          "Estado: " + js.uf + "<br>";
      })
      .catch(() => {
        painel.innerHTML = "Erro ao consultar API.";
      });
  });
}


// ============================ PAGINA 2 ============================

// SWAPI
async function carregaStarWars() {
  try {
    const resp = await fetch("https://swapi.dev/api/people/1/");
    const dados = await resp.json();
    document.querySelector("#swapi").innerHTML +=
      "<p><b>Nome:</b> " + dados.name + "</p>";
  } catch {
    document.querySelector("#swapi").innerHTML +=
      "<p>Erro ao carregar API Star Wars.</p>";
  }
}

// FIPE
async function carregaFipe() {
  try {
    const resp = await fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas");
    const dados = await resp.json();
    document.querySelector("#fipe").innerHTML +=
      "<p><b>Exemplo de marca:</b> " + dados[0].nome + "</p>";
  } catch {
    document.querySelector("#fipe").innerHTML +=
      "<p>Erro ao carregar API FIPE.</p>";
  }
}

// JSONPlaceholder
async function carregaJSONPH() {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const dados = await resp.json();
    document.querySelector("#jsonplaceholder").innerHTML +=
      "<p><b>Título:</b> " + dados.title + "</p>";
  } catch {
    document.querySelector("#jsonplaceholder").innerHTML +=
      "<p>Erro ao carregar JSONPlaceholder.</p>";
  }
}

carregaStarWars();
carregaFipe();
carregaJSONPH();
