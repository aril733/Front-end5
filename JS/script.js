function mostrarPagina(pagina) {
  document.getElementById("pagina1").style.display = "none";
  document.getElementById("pagina2").style.display = "none";
  document.getElementById(pagina).style.display = "block";
}

/* -------- PÁGINA 1 - FORM API ---------- */

document.getElementById("form-api").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const respostaDiv = document.getElementById("resposta-api");

  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ nome, email })
    });

    if (!resp.ok) throw new Error("Erro na API");

    const data = await resp.json();

    respostaDiv.innerHTML = `
      <h3>Resposta da API:</h3>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;

  } catch (erro) {
    respostaDiv.innerHTML = "<p style='color:red'>Falha ao enviar dados.</p>";
  }
});


/* --------- PÁGINA 2 - 3 APIS ------------ */

async function buscarFipe() {
  try {
    const resp = await fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas");
    if (!resp.ok) throw new Error("Erro API FIPE");
    const data = await resp.json();

    document.getElementById("fipe").innerHTML =
      `<p>Primeira marca encontrada: <strong>${data[0].nome}</strong></p>`;

  } catch {
    document.getElementById("fipe").innerHTML = "Erro ao carregar FIPE.";
  }
}

async function buscarUsuario() {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!resp.ok) throw new Error("Erro usuário");
    const data = await resp.json();

    document.getElementById("usuario").innerHTML =
      `<p>Nome: <strong>${data.name}</strong></p> 
       <p>Email: ${data.email}</p>`;
  } catch {
    document.getElementById("usuario").innerHTML = "Erro ao carregar usuário.";
  }
}

async function buscarStarWars() {
  try {
    const resp = await fetch("https://swapi.dev/api/planets/1/");
    if (!resp.ok) throw new Error("Erro SWAPI");
    const data = await resp.json();

    document.getElementById("swapi").innerHTML =
      `<p>Planeta: <strong>${data.name}</strong></p> 
       <p>Clima: ${data.climate}</p>`;
  } catch {
    document.getElementById("swapi").innerHTML = "Erro ao carregar SWAPI.";
  }
}

