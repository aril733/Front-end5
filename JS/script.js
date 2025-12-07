// ================= SWITCH ENTRE PÁGINAS =====================

const pag1 = document.querySelector("#pagina1");
const pag2 = document.querySelector("#pagina2");

document.querySelector("#linkPag1").addEventListener("click", () => {
  pag1.classList.remove("hidden");
  pag1.classList.add("visible");
  pag2.classList.add("hidden");
  pag2.classList.remove("visible");
});

document.querySelector("#linkPag2").addEventListener("click", () => {
  pag2.classList.remove("hidden");
  pag2.classList.add("visible");
  pag1.classList.add("hidden");
  pag1.classList.remove("visible");
});

// ====================== PAGINA 1 (CEP) ==========================

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
        "<b>Estado:</b> " + js.uf + "<br>" +
        "<b>DDD:</b> " + js.ddd + "<br>" +
        "<b>CEP:</b> " + js.cep + "<br>";
    })
    .catch(() => {
      painel.innerHTML = "Erro ao acessar API.";
    });
});

// ====================== PAGINA 2 (APIs) ==========================

async function starWars() {
  try {
    const r = await fetch("https://swapi.dev/api/people/1/");
    const js = await r.json();
    document.querySelector("#swapi").innerHTML +=
      "<p><b>Nome:</b> " + js.name + "</p>" +
      "<p><b>Ano de nascimento:</b> " + js.birth_year + "</p>" +
      "<p><b>Altura:</b> " + js.height + " cm</p>" +
      "<p><b>Peso:</b> " + js.mass + " kg</p>";
  } catch {
    document.querySelector("#swapi").innerHTML += "Erro ao carregar.";
  }
}

async function fipe() {
  try {
    const r = await fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas");
    const js = await r.json();
    document.querySelector("#fipe").innerHTML +=
      "<p><b>1ª Marca:</b> " + js[0].nome + "</p>" +
      "<p><b>2ª Marca:</b> " + js[1].nome + "</p>" +
      "<p><b>Total de marcas:</b> " + js.length + "</p>";
  } catch {
    document.querySelector("#fipe").innerHTML += "Erro ao carregar.";
  }
}

async function jsonph() {
  try {
    const r = await fetch("https://jsonplaceholder.typicode.com/posts/3");
    const js = await r.json();
    document.querySelector("#jsonplaceholder").innerHTML +=
      "<p><b>ID do Post:</b> " + js.id + "</p>" +
      "<p><b>Título:</b> " + js.title + "</p>" +
      "<p><b>Conteúdo:</b> " + js.body + "</p>";
  } catch {
    document.querySelector("#jsonplaceholder").innerHTML += "Erro ao carregar.";
  }
}

starWars();
fipe();
jsonph();
