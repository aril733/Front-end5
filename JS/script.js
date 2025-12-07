    /* ===============================
   PÁGINA 1 — VIA CEP (formulário)
   =============================== */

const btnBuscar = document.querySelector("#btnBuscar");
if (btnBuscar) {
    btnBuscar.addEventListener("click", () => {
        const painel = document.querySelector("#resultado");
        painel.innerHTML = "Carregando...";

        let cep = document.querySelector("#cep").value;
        cep = cep.replace(/\D/g, "");

        if (cep.length !== 8) {
            painel.innerHTML = "CEP inválido. Digite 8 números.";
            return;
        }

        const url = "https://viacep.com.br/ws/" + cep + "/json/";

        fetch(url)
            .then(resp => resp.json())
            .then(js => {
                if (js.erro) {
                    painel.innerHTML = "CEP não encontrado.";
                    return;
                }

                painel.innerHTML =
                    "CEP: " + js.cep + "<br>" +
                    "Logradouro: " + js.logradouro + "<br>" +
                    "Bairro: " + js.bairro + "<br>" +
                    "Cidade: " + js.localidade + "<br>" +
                    "UF: " + js.uf;
            })
            .catch(() => {
                painel.innerHTML = "Erro ao consultar API.";
            });
    });
}



/* =================================
   PÁGINA 2 — API 1 ViaCEP exemplo
   ================================= */

const btnApi1 = document.querySelector("#btnApi1");
if (btnApi1) {
    btnApi1.addEventListener("click", () => {
        const out = document.querySelector("#api1");
        out.innerHTML = "Carregando...";

        fetch("https://viacep.com.br/ws/01001000/json/")
            .then(r => r.json())
            .then(js => {
                out.innerHTML =
                    "CEP: " + js.cep + "<br>" +
                    "Cidade: " + js.localidade + "<br>" +
                    "UF: " + js.uf;
            })
            .catch(() => {
                out.innerHTML = "Erro ao carregar ViaCEP";
            });
    });
}



/* =================================
   PÁGINA 2 — API 2 FIPE (async/await)
   ================================= */

const btnApi2 = document.querySelector("#btnApi2");
if (btnApi2) {
    btnApi2.addEventListener("click", async () => {
        const out = document.querySelector("#api2");
        out.innerHTML = "Carregando...";

        const url = "https://parallelum.com.br/fipe/api/v1/carros/marcas";

        try {
            let r = await fetch(url);
            let lista = await r.json();

            out.innerHTML = `
                ${lista[0].nome}<br>
                ${lista[1].nome}<br>
                ${lista[2].nome}
            `;
        } catch {
            out.innerHTML = "Erro ao consultar FIPE";
        }
    });
}



/* =================================
   PÁGINA 2 — API 3 SWAPI
   ================================= */

const btnApi3 = document.querySelector("#btnApi3");
if (btnApi3) {
    btnApi3.addEventListener("click", () => {
        const out = document.querySelector("#api3");
        out.innerHTML = "Carregando...";

        fetch("https://swapi.dev/api/people/1/")
            .then(r => r.json())
            .then(js => {
                out.innerHTML =
                    "Nome: " + js.name + "<br>" +
                    "Altura: " + js.height + "<br>" +
                    "Gênero: " + js.gender;
            })
            .catch(() => {
                out.innerHTML = "Erro ao consultar SWAPI";
            });
    });
}
