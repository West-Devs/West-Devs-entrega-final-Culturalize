let OBRAS = [
    {
        id: 1,
        url_img: "./content/imgs/03-Obras/01-Obras-Desenho/obra-desenho1.jpg",
        nome: "#Além das Cores",
        artista: "Paulo",
        modalidade: "desenho"
    },
    {
        id: 2,
        url_img: "./content/imgs/03-Obras/01-Obras-Desenho/obra-desenho2.jpg",
        nome: "#Fragmentos da Alma",
        artista: "Pedro",
        modalidade: "desenho"
    },
    {
        id: 3,
        url_img: "./content/imgs/03-Obras/01-Obras-Desenho/obra-desenho3.jpg",
        nome: "#Vozes do Silêncio",
        artista: "Patricia",
        modalidade: "desenho"
    },
    {
        id: 4,
        url_img: "./content/imgs/03-Obras/02-Obras-Pintura/obra-pintura1.jpg",
        nome: "#Sinfonia em Tons Abstratos",
        artista: "Luis",
        modalidade: "pintura"
    },
    {
        id: 5,
        url_img: "./content/imgs/03-Obras/02-Obras-Pintura/obra-pintura2.jpg",
        nome: "#Entre o Céu e a Terra",
        artista: "Rodrigo",
        modalidade: "pintura"
    },
    {
        id: 6,
        url_img: "./content/imgs/03-Obras/02-Obras-Pintura/obra-pintura3.jpg",
        nome: "#A Dança dos Elementos",
        artista: "Daniel",
        modalidade: "pintura"
    },
    {
        id: 7,
        url_img: "./content/imgs/03-Obras/03-Obras-Escultura/obra-escultura1.jpg",
        nome: "#Retratos da Vida",
        artista: "Vilma",
        modalidade: "escultura"
    },
    {
        id: 8,
        url_img: "./content/imgs/03-Obras/03-Obras-Escultura/obra-escultura2.jpg",
        nome: "#Caminhos Entrelaçados",
        artista: "Leonardo",
        modalidade: "escultura"
    },
    {
        id: 9,
        url_img: "./content/imgs/03-Obras/03-Obras-Escultura/obra-escultura3.jpg",
        nome: "#A Essência da Natureza",
        artista: "Ana",
        modalidade: "escultura"
    },
    {
        id: 10,
        url_img: "./content/imgs/03-Obras/04-Obras-Fotografia/obra-fotografia1.jpg",
        nome: "#Pintando Memórias",
        artista: "Luisa",
        modalidade: "fotografia"
    },
    {
        id: 11,
        url_img: "./content/imgs/03-Obras/04-Obras-Fotografia/obra-fotografia2.jpg",
        nome: "#Reflexos da Alma",
        artista: "Carolina",
        modalidade: "fotografia"
    },
    {
        id: 12,
        url_img: "./content/imgs/03-Obras/04-Obras-Fotografia/obra-fotografia3.jpg",
        nome: "#A Jornada da Transformação",
        artista: "Claudio",
        modalidade: "fotografia"
    }
]

let DETALHES_OBRAS = [
    {
        id: 1,
        url_img: "./content/imgs/03-Obras/01-Obras-Desenho/obra-desenho1.jpg",
        nome: "Além das Cores",
        descricao: "A obra é uma composição visual que busca explorar a interação entre elementos opostos. Através do uso de cores vibrantes e contrastantes, linhas curvas e formas geométricas, a obra cria uma dinâmica visual cativante. As diferentes texturas e camadas adicionam profundidade e interesse à obra, convidando o observador a explorar cada detalhe. A obra transmite uma sensação de equilíbrio e harmonia, apesar da presença de contrastes marcantes. É uma representação visual da coexistência e complementaridade entre forças distintas, convidando o espectador a refletir sobre a diversidade e a união presentes no mundo ao nosso redor.",
        artista: "Paulo",
        tecnica: "Aquarela",
        ano: "2013",
        valor: "R$ 300,00",
        obra_id: 1
    },
    {
        id: 2,
        url_img: "./content/imgs/03-Obras/01-Obras-Desenho/obra-desenho2.jpg",
        nome: "Fragmentos da Alma",
        descricao: "A obra é uma composição visual que busca explorar a interação entre elementos opostos. Através do uso de cores vibrantes e contrastantes, linhas curvas e formas geométricas, a obra cria uma dinâmica visual cativante. As diferentes texturas e camadas adicionam profundidade e interesse à obra, convidando o observador a explorar cada detalhe. A obra transmite uma sensação de equilíbrio e harmonia, apesar da presença de contrastes marcantes. É uma representação visual da coexistência e complementaridade entre forças distintas, convidando o espectador a refletir sobre a diversidade e a união presentes no mundo ao nosso redor.",
        artista: "Pedro",
        tecnica: "Aquarela",
        ano: "2013",
        valor: "R$ 300,00",
        obra_id: 2
    },
    {
        id: 3,
        url_img: "./content/imgs/03-Obras/01-Obras-Desenho/obra-desenho3.jpg",
        nome: "Vozes do Silêncio",
        descricao: "A obra é uma composição visual que busca explorar a interação entre elementos opostos. Através do uso de cores vibrantes e contrastantes, linhas curvas e formas geométricas, a obra cria uma dinâmica visual cativante. As diferentes texturas e camadas adicionam profundidade e interesse à obra, convidando o observador a explorar cada detalhe. A obra transmite uma sensação de equilíbrio e harmonia, apesar da presença de contrastes marcantes. É uma representação visual da coexistência e complementaridade entre forças distintas, convidando o espectador a refletir sobre a diversidade e a união presentes no mundo ao nosso redor.",
        artista: "Patricia",
        tecnica: "Aquarela",
        ano: "2013",
        valor: "R$ 300,00",
        obra_id: 3
    },
    {
        id: 4,
        url_img: "./content/imgs/03-Obras/02-Obras-Pintura/obra-pintura1.jpg",
        nome: "Sinfonia em Tons Abstratos",
        descricao: "A obra é uma composição visual que busca explorar a interação entre elementos opostos. Através do uso de cores vibrantes e contrastantes, linhas curvas e formas geométricas, a obra cria uma dinâmica visual cativante. As diferentes texturas e camadas adicionam profundidade e interesse à obra, convidando o observador a explorar cada detalhe. A obra transmite uma sensação de equilíbrio e harmonia, apesar da presença de contrastes marcantes. É uma representação visual da coexistência e complementaridade entre forças distintas, convidando o espectador a refletir sobre a diversidade e a união presentes no mundo ao nosso redor.",
        artista: "Luis",
        tecnica: "Pintura a Óleo",
        ano: "2013",
        valor: "R$ 300,00",
        obra_id: 4
    },
    {
        id: 5,
        url_img: "./content/imgs/03-Obras/02-Obras-Pintura/obra-pintura2.jpg",
        nome: "Entre o Céu e a Terra",
        descricao: "A obra é uma composição visual que busca explorar a interação entre elementos opostos. Através do uso de cores vibrantes e contrastantes, linhas curvas e formas geométricas, a obra cria uma dinâmica visual cativante. As diferentes texturas e camadas adicionam profundidade e interesse à obra, convidando o observador a explorar cada detalhe. A obra transmite uma sensação de equilíbrio e harmonia, apesar da presença de contrastes marcantes. É uma representação visual da coexistência e complementaridade entre forças distintas, convidando o espectador a refletir sobre a diversidade e a união presentes no mundo ao nosso redor.",
        artista: "Rodrigo",
        tecnica: "Pintura a Óleo",
        ano: "2013",
        valor: "R$ 300,00",
        obra_id: 5
    },
    {
        id: 6,
        url_img: "./content/imgs/03-Obras/02-Obras-Pintura/obra-pintura3.jpg",
        nome: "A Dança dos Elementos",
        descricao: "A obra é uma composição visual que busca explorar a interação entre elementos opostos. Através do uso de cores vibrantes e contrastantes, linhas curvas e formas geométricas, a obra cria uma dinâmica visual cativante. As diferentes texturas e camadas adicionam profundidade e interesse à obra, convidando o observador a explorar cada detalhe. A obra transmite uma sensação de equilíbrio e harmonia, apesar da presença de contrastes marcantes. É uma representação visual da coexistência e complementaridade entre forças distintas, convidando o espectador a refletir sobre a diversidade e a união presentes no mundo ao nosso redor.",
        artista: "Daniel",
        tecnica: "Pintura a Óleo",
        ano: "2013",
        valor: "R$ 300,00",
        obra_id: 6,
    },
    {
        id: 7,
        url_img: "./content/imgs/03-Obras/03-Obras-Escultura/obra-escultura1.jpg",
        nome: "Retratos da Vida",
        descricao: "A obra é uma composição visual que busca explorar a interação entre elementos opostos. Através do uso de cores vibrantes e contrastantes, linhas curvas e formas geométricas, a obra cria uma dinâmica visual cativante. As diferentes texturas e camadas adicionam profundidade e interesse à obra, convidando o observador a explorar cada detalhe. A obra transmite uma sensação de equilíbrio e harmonia, apesar da presença de contrastes marcantes. É uma representação visual da coexistência e complementaridade entre forças distintas, convidando o espectador a refletir sobre a diversidade e a união presentes no mundo ao nosso redor.",
        artista: "Vilma",
        tecnica: "Madeira",
        ano: "2013",
        valor: "R$ 300,00",
        obra_id: 7
    },
    {
        id: 8,
        url_img: "./content/imgs/03-Obras/03-Obras-Escultura/obra-escultura2.jpg",
        nome: "Caminhos Entrelaçados",
        descricao: "A obra é uma composição visual que busca explorar a interação entre elementos opostos. Através do uso de cores vibrantes e contrastantes, linhas curvas e formas geométricas, a obra cria uma dinâmica visual cativante. As diferentes texturas e camadas adicionam profundidade e interesse à obra, convidando o observador a explorar cada detalhe. A obra transmite uma sensação de equilíbrio e harmonia, apesar da presença de contrastes marcantes. É uma representação visual da coexistência e complementaridade entre forças distintas, convidando o espectador a refletir sobre a diversidade e a união presentes no mundo ao nosso redor.",
        artista: "Leonardo",
        tecnica: "Madeira",
        ano: "2013",
        valor: "R$ 300,00",
        obra_id: 8
    },
    {
        id: 9,
        url_img: "./content/imgs/03-Obras/03-Obras-Escultura/obra-escultura3.jpg",
        nome: "A Essência da Natureza",
        descricao: "A obra é uma composição visual que busca explorar a interação entre elementos opostos. Através do uso de cores vibrantes e contrastantes, linhas curvas e formas geométricas, a obra cria uma dinâmica visual cativante. As diferentes texturas e camadas adicionam profundidade e interesse à obra, convidando o observador a explorar cada detalhe. A obra transmite uma sensação de equilíbrio e harmonia, apesar da presença de contrastes marcantes. É uma representação visual da coexistência e complementaridade entre forças distintas, convidando o espectador a refletir sobre a diversidade e a união presentes no mundo ao nosso redor.",
        artista: "Ana",
        tecnica: "Madeira",
        ano: "2013",
        valor: "R$ 300,00",
        obra_id: 9
    },
    {
        id: 10,
        url_img: "../content/imgs/03-Obras/04-Obras-Fotografia/obra-fotografia1.jpg",
        nome: "Pintando Memórias",
        descricao: "A obra é uma composição visual que busca explorar a interação entre elementos opostos. Através do uso de cores vibrantes e contrastantes, linhas curvas e formas geométricas, a obra cria uma dinâmica visual cativante. As diferentes texturas e camadas adicionam profundidade e interesse à obra, convidando o observador a explorar cada detalhe. A obra transmite uma sensação de equilíbrio e harmonia, apesar da presença de contrastes marcantes. É uma representação visual da coexistência e complementaridade entre forças distintas, convidando o espectador a refletir sobre a diversidade e a união presentes no mundo ao nosso redor.",
        artista: "Luisa",
        tecnica: "Fotografia",
        ano: "2013",
        valor: "R$ 300,00",
        obra_id: 10
    },
    {
        id: 11,
        url_img: "./content/imgs/03-Obras/04-Obras-Fotografia/obra-fotografia2.jpg",
        nome: "Reflexos da Alma",
        descricao: "A obra é uma composição visual que busca explorar a interação entre elementos opostos. Através do uso de cores vibrantes e contrastantes, linhas curvas e formas geométricas, a obra cria uma dinâmica visual cativante. As diferentes texturas e camadas adicionam profundidade e interesse à obra, convidando o observador a explorar cada detalhe. A obra transmite uma sensação de equilíbrio e harmonia, apesar da presença de contrastes marcantes. É uma representação visual da coexistência e complementaridade entre forças distintas, convidando o espectador a refletir sobre a diversidade e a união presentes no mundo ao nosso redor.",
        artista: "Carolina",
        tecnica: "Fotografia",
        ano: "2013",
        valor: "R$ 300,00",
        obra_id: 11
    },
    {
        id: 12,
        url_img: "./content/imgs/03-Obras/04-Obras-Fotografia/obra-fotografia3.jpg",
        nome: "A Jornada da Transformação",
        descricao: "A obra é uma composição visual que busca explorar a interação entre elementos opostos. Através do uso de cores vibrantes e contrastantes, linhas curvas e formas geométricas, a obra cria uma dinâmica visual cativante. As diferentes texturas e camadas adicionam profundidade e interesse à obra, convidando o observador a explorar cada detalhe. A obra transmite uma sensação de equilíbrio e harmonia, apesar da presença de contrastes marcantes. É uma representação visual da coexistência e complementaridade entre forças distintas, convidando o espectador a refletir sobre a diversidade e a união presentes no mundo ao nosso redor.",
        artista: "Claudio",
        tecnica: "Fotografia",
        ano: "2013",
        valor: "R$ 300,00",
        obra_id: 12
    }
]

let allObrasButtons = document.getElementById("obras-article-button");

let desenhoButton = document.createElement("button");
desenhoButton.textContent = "Desenho";
desenhoButton.id = "desenho";
desenhoButton.addEventListener("click", function () {
    obrasFilter("desenho");
})

let pinturaButton = document.createElement("button");
pinturaButton.textContent = "Pintura";
pinturaButton.id = "pintura";
pinturaButton.addEventListener("click", function () {
    obrasFilter("pintura")
})

let esculturaButton = document.createElement("button");
esculturaButton.textContent = "Escultura";
esculturaButton.id = "escultura";
esculturaButton.addEventListener("click", function () {
    obrasFilter("escultura");
})

let fotografiaButton = document.createElement("button");
fotografiaButton.textContent = "Fotografia";
fotografiaButton.id = "fotografia";
fotografiaButton.addEventListener("click", function () {
    obrasFilter("fotografia");
})

allObrasButtons.appendChild(desenhoButton);
allObrasButtons.appendChild(pinturaButton);
allObrasButtons.appendChild(esculturaButton);
allObrasButtons.appendChild(fotografiaButton);

function mostrarObras(obras) {
    let allObras = document.getElementById("section-all-obras");
    allObras.innerHTML = ""; // limpa o conteúdo e exibe as obras filtrados

    for (let i = 0; i < obras.length; i++) {
        let obrasArticle = document.createElement("article");
        obrasArticle.className = "article-obras";

        let url_imgObras = document.createElement("img");
        url_imgObras.src = obras[i].url_img;
        url_imgObras.className = "obras-imgs";
        url_imgObras.addEventListener("click", function () {
            abrirDetalhesObras(obras[i].id);
        });

        let obra_description = document.createElement("div");
        obra_description.className = "container-obras-description";

        let obra_name = document.createElement("h2");
        obra_name.textContent = obras[i].nome;
        obra_name.addEventListener("click", function () {
            abrirDetalhesObras(obras[i].id);
        })

        let obra_artist = document.createElement("p");
        obra_artist.textContent = obras[i].artista;

        allObras.appendChild(obrasArticle);
        obrasArticle.appendChild(url_imgObras);
        obrasArticle.appendChild(obra_description);
        obra_description.appendChild(obra_name);
        obra_description.appendChild(obra_artist);
    }
}

function obrasFilter(modalidade) {
    let obrasFilter = OBRAS.filter(function (filtrarObra) {
        let buttons = document.querySelectorAll("#obras-article-button button");
        buttons.forEach(d => {
            d.classList.remove("change-color");
        });
        let button = document.getElementById(modalidade);
        button.classList.add("change-color"); // criação da classe "change-color" para mudar a cor do botão
        return filtrarObra.modalidade === modalidade;
    });


    mostrarObras(obrasFilter); // função para filtrar as obras após o clique no botão
}

function abrirDetalhesObras(obra_id) {
    let obrasDetalhes = DETALHES_OBRAS.find(function (obra) {
        return obra.id === obra_id;
    });

    if (obrasDetalhes) {
        let detalhesObraUrlImg = obrasDetalhes.url_img;
        let detalhesObraNome = obrasDetalhes.nome;
        let detalhesObraDescricao = obrasDetalhes.descricao;
        let detalhesObraArtista = obrasDetalhes.artista;
        let detalhesObraTecnica = obrasDetalhes.tecnica;
        let detalhesObraAno = obrasDetalhes.ano;
        let detalhesObraValor = obrasDetalhes.valor;

        let novaPagina = window.open("", "_blank");
        novaPagina.document.write(`
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=, initial-scale=1.0">
        <title>Culturalize</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="C:/Users/Adm/Desktop/West-Devs-entrega-final-Culturalize/content/styles/catalog/obras.css">
        </head>
        <body class="body-obras-details">
            <header>

            </header>
            <main>
                <section class="section-obras-details">
                <img class="details-obras-img" src="${detalhesObraUrlImg}" alt="${detalhesObraNome}">
                <article class="article-obras-details">
                <h2>${detalhesObraNome}</h2>
                <p class="text-obras-details">${detalhesObraDescricao}</p>
                <div class="container-obras-details">
                    <div class="container-first-obras-details">
                        <p>
                        <span class="material-symbols-outlined">person</span>
                        Artista: ${detalhesObraArtista}
                        </p>
                        <p>
                        <span class="material-symbols-outlined">calendar_month</span>
                        Ano: ${detalhesObraAno}
                        </p>
                        
                    </div>
                    <div class="container-second-obras-details">
                        <p>
                        <span class="material-symbols-outlined">palette</span>
                        Técnica: ${detalhesObraTecnica}
                        </p>
                        <p>
                        <span class="material-symbols-outlined">sell</span>
                        Valor: ${detalhesObraValor}
                        </p>
                    </div>
                </div>
                <div class="container-button-obras-details">
                    <button>Ver portfólio</button>
                </div>
            </main>
            <footer>   

            </footer>
        </body>
        </html>
        `);
        novaPagina.document.close();
    }
}

mostrarObras(OBRAS); // mostra todos as obras (sem filtro)