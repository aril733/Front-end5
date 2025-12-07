// =========================
// PÁGINA 1 — CONSULTA CEP
// =========================

let btnBuscar = document.querySelector('#btnBuscar');
if (btnBuscar) {
    btnBuscar.addEventListener('click', () => {
        let cep = document.querySelector('#cep').value;
        const url = "https://viacep.com.br/ws/" + cep + "/json/";

        fetch(url)
            .then(res => res.json())
            .then(js => {
                document.querySelector('#resultado').innerHTML =
                    `<h2>Resultado:</h2>
                     Logradouro: ${js.logradouro}<br>
                     Bairro: ${js.bairro}<br>
                     Cidade: ${js.localidade}<br>
                     Estado: ${js.uf}`;
            })
            .catch(() => {
                document.querySelector('#resultado').innerHTML = "Erro ao consultar CEP.";
            });
    });
}



// =========================
// PÁGINA 2 — API 1 (ViaCEP)
// =========================

let btnApiCep = document.querySelector('#btnApiCep');
if (btnApiCep) {
    btnApiCep.addEventListener('click', () => {
        fetch("https://viacep.com.br/ws/01001000/json/")
            .then(r => r.json())
            .then(js => {
                document.querySelector('#apiCep').innerHTML =
                    `CEP: ${js.cep}<br>Cidade: ${js.localidade}<br>UF: ${js.uf}`;
            })
            .catch(() => {
                document.querySelector('#apiCep').innerHTML = "Erro ao carregar API ViaCEP.";
            });
    });
}



// =========================
// PÁGINA 2 — API 2 (FIPE)
// =========================

let btnApiFipe = document.querySelector('#btnApiFipe');
if (btnApiFipe) {
    btnApiFipe.addEventListener('click', async () => {

        const url = "https://parallelum.com.br/fipe/api/v1/carros/marcas";
        const painel = document.querySelector('#apiFipe');

        try {
            let r = await fetch(url);
            let marcas = await r.json();

            painel.innerHTML =
                `<b>Primeiras marcas:</b><br>
                 ${marcas[0].nome}<br>
                 ${marcas[1].nome}<br>
                 ${marcas[2].nome}`;
        }
        catch {
            painel.innerHTML = "Erro ao consultar FIPE.";
        }
    });
}



// =========================
// PÁGINA 2 — API 3 (SWAPI)
// =========================

let btnApiSwapi = document.querySelector('#btnApiSwapi');
if (btnApiSwapi) {
    btnApiSwapi.addEventListener('click', () => {
        fetch("https://swapi.dev/api/people/1")
            .then(r => r.json())
            .then(js => {
                document.querySelector('#apiSwapi').innerHTML =
                    `Nome: ${js.name}<br>
                     Altura: ${js.height}<br>
                     Gênero: ${js.gender}`;
            })
            .catch(() => {
                document.querySelector('#apiSwapi').innerHTML = "Erro ao carregar SWAPI.";
            });
    });
}
