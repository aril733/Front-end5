// ====================== PAGINA 1 ==========================

document.querySelector("#btnBuscar").addEventListener("click", () => {
  const painel = document.querySelector("#resultado");
  painel.innerHTML = "Carregando...";

  let cep = document.querySelector("#cep").value || "";
  cep = cep.replace(/\D/g, "");

  if (cep.length !== 8) {
    painel.innerHTML = "Digite um CEP válido (8 números).";
    return;
  }

  fetch("https://viacep.com.br/ws/" + cep + "/json/")
    .then(r => r.json())
    .then(js => {
      if (js.erro) {
        painel.innerHTML = "CEP não encontrado.";
        return;
      }

      painel.innerHTML =
        "<b>Logradouro:</b> " + js.logradouro + "<br>" +
        "<b>Bairro:</b> " + js.bairro + "<br>" +
        "<b>Cidade:</b> " + js.localidade + "<br>" +
        "<b>Estado:</b> " + js.uf + "<br>";
    })
    .catch(() => {
      painel.innerHTML = "Erro ao acessar API.";
    });
});


// ====================== PAGINA 2 ==========================

async function starWars() {
  try {
    const r = await fetch("https://swapi.dev/api/people/1/");
    const js = await r.json();
    document.querySelector("#swapi").innerHTML +=
      "<p><b>Nome:</b> " + js.name + "</p>";
  } catch {
    document.querySelector("#swapi").innerHTML += "Erro ao carregar.";
  }
}

async function fipe() {
  try {
    const r = await fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas");
    const js = await r.json();
    document.querySelector("#fipe").innerHTML +=
      "<p><b>Marca exemplo:</b> " + js[0].nome + "</p>";
  } catch {
    document.querySelector("#fipe").innerHTML += "Erro ao carregar.";
  }
}

async function jsonph() {
  try {
    const r = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const js = await r.json();
    document.querySelector("#jsonplaceholder").innerHTML +=
      "<p><b>Título:</b> " + js.title + "</p>";
  } catch {
    document.querySelector("#jsonplaceholder").innerHTML += "Erro ao carregar.";
  }
}

starWars();
fipe();
jsonph();
