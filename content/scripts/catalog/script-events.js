let EVENTOS = [
    {
        id: 1,
        url_img: "./content/imgs/02-Eventos/01-Eventos-Exposicoes/ExposicaoFotografia.jpg",
        nome: "#Exposição de fotografia",
        data: "22-04-2023 14:30",
        local: "Avenida 1,  7, Foz do Iguaçu-PR",
        modalidade: "exposicoes"
    },
    {
        id: 2,
        url_img: "./content/imgs/02-Eventos/01-Eventos-Exposicoes/ExposicaoPinturas.jpg",
        nome: "#Exposição de pinturas",
        data: "22-04-2023 14:30",
        local: "Avenida 1,  7, Foz do Iguaçu-PR",
        modalidade: "exposicoes"
    },
    {
        id: 3,
        url_img: "./content/imgs/02-Eventos/01-Eventos-Exposicoes/ExposicaoQuadros.jpg",
        nome: "#Exposição de arte",
        data: "22-04-2023 14:30",
        local: "Avenida 1,  7, Foz do Iguaçu-PR",
        modalidade: "exposicoes"
    },
    {
        id: 4,
        url_img: "./content/imgs/02-Eventos/02-Eventos-Musicas/musica.jpg",
        nome: "#Apresentação Orquestra Sinfônica ",
        data: "22-04-2023 14:30",
        local: "Avenida 1,  7, Foz do Iguaçu-PR",
        modalidade: "musica"
    },
    {
        id: 5,
        url_img: "./content/imgs/02-Eventos/03-Eventos-Apresentacoes/cinema.jpg",
        nome: "#Mostra de Cinema Iguaçu",
        data: "22-04-2023 14:30",
        local: "Avenida 1,  7, Foz do Iguaçu-PR",
        modalidade: "apresentacoes"
    },
    {
        id: 6,
        url_img: "./content/imgs/02-Eventos/03-Eventos-Apresentacoes/concert.jpg",
        nome: "#Festival de Música Guarani",
        data: "22-04-2023 14:30",
        local: "Avenida 1,  7, Foz do Iguaçu-PR",
        modalidade: "apresentacoes"
    },
    {
        id: 7,
        url_img: "./content/imgs/02-Eventos/03-Eventos-Apresentacoes/danca.jpg",
        nome: "#Festival de Música Guarani",
        data: "22-04-2023 14:30",
        local: "Avenida 1,  7, Foz do Iguaçu-PR",
        modalidade: "apresentacoes"
    },
    {
        id: 8,
        url_img: "./content/imgs/02-Eventos/04-Eventos-Literatura/literatura1.jpg",
        nome: "#Lançamento do livro Naipi",
        data: "22-04-2023 14:30",
        local: "Avenida 1,  7, Foz do Iguaçu-PR",
        modalidade: "literatura"
    },
    {
        id: 9,
        url_img: "./content/imgs/02-Eventos/04-Eventos-Literatura/literatura2.jpg",
        nome: "#Encontro Internacional do Clube do Livro",
        data: "22-04-2023 14:30",
        local: "Avenida 1,  7, Foz do Iguaçu-PR",
        modalidade: "literatura"
    }
]

let DETALHES_EVENTOS = [
    {
        id: 1,
        url_img: "./content/imgs/02-Eventos/01-Eventos-Exposicoes/ExposicaoFotografia.jpg",
        nome: "Exposição de fotografia",
        descricao: "A exposição é uma jornada imersiva que convida os visitantes a explorarem diferentes formas de expressão artística. A exposição apresenta uma variedade de obras de arte, incluindo pinturas, esculturas, fotografias e instalações, criadas por artistas renomados e emergentes. Cada sala da exposição é cuidadosamente projetada para proporcionar uma experiência única, com iluminação e disposição das obras que realçam sua beleza e significado.",
        artista: "Clara",
        data: "22-04-2023 14:30",
        local: "Avenida 1,  7, Foz do Iguaçu-PR",
        valor: "R$ 100,00",
        event_id: 1
    },
    {
        id: 2,
        url_img: "./content/imgs/02-Eventos/01-Eventos-Exposicoes/ExposicaoPinturas.jpg",
        nome: "Exposição de pinturas",
        descricao: "A exposição é uma jornada imersiva que convida os visitantes a explorarem diferentes formas de expressão artística. A exposição apresenta uma variedade de obras de arte, incluindo pinturas, esculturas, fotografias e instalações, criadas por artistas renomados e emergentes. Cada sala da exposição é cuidadosamente projetada para proporcionar uma experiência única, com iluminação e disposição das obras que realçam sua beleza e significado.",
        artista: "Gustavo",
        data: "22-04-2023 14:30",
        local: "Avenida 1,  7, Foz do Iguaçu-PR",
        valor: "R$ 100,00",
        event_id: 2
    },
    {
        id: 3,
        url_img: "./content/imgs/02-Eventos/01-Eventos-Exposicoes/ExposicaoQuadros.jpg",
        nome: "Exposição de arte",
        descricao: "A exposição é uma jornada imersiva que convida os visitantes a explorarem diferentes formas de expressão artística. A exposição apresenta uma variedade de obras de arte, incluindo pinturas, esculturas, fotografias e instalações, criadas por artistas renomados e emergentes. Cada sala da exposição é cuidadosamente projetada para proporcionar uma experiência única, com iluminação e disposição das obras que realçam sua beleza e significado.",
        artista: "Andréa",
        data: "22-04-2023 14:30",
        local: "Avenida 1,  7, Foz do Iguaçu-PR",
        valor: "R$ 100,00",
        event_id: 3
    },
    {
        id: 4,
        url_img: "./content/imgs/02-Eventos/02-Eventos-Musicas/musica.jpg",
        nome: "Apresentação Orquestra Sinfônica ",
        descricao: "Com uma atmosfera envolvente e energética, o evento proporciona uma variedade de estilos musicais, incluindo rock, pop, jazz, música clássica e world music. Além das apresentações, o evento também oferece espaços interativos, como estandes de venda de discos, alimentos e bebidas, proporcionando uma experiência completa para os amantes da música.",
        artista: "Orquestra Sinfônica",
        data: "22-04-2023 14:30",
        local: "Avenida 1,  7, Foz do Iguaçu-PR",
        valor: "R$ 100,00",
        event_id: 4
    },
    {
        id: 5,
        url_img: "./content/imgs/02-Eventos/03-Eventos-Apresentacoes/cinema.jpg",
        nome: "Mostra de Cinema Iguaçu",
        descricao: "O evento de cinema é uma experiência cinematográfica envolvente que reúne amantes da sétima arte em um ambiente inspirador. Com uma seleção cuidadosa de filmes de diferentes gêneros, o evento oferece uma programação diversificada que abrange desde clássicos até produções contemporâneas e independentes.",
        artista: "Luana",
        data: "22-04-2023 14:30",
        local: "Avenida 1,  7, Foz do Iguaçu-PR",
        valor: "R$ 100,00",
        event_id: 5
    },
    {
        id: 6,
        url_img: "./content/imgs/02-Eventos/03-Eventos-Apresentacoes/concert.jpg",
        nome: "Festival de Música Guarani",
        descricao: "Com uma atmosfera envolvente e energética, o evento proporciona uma variedade de estilos musicais, incluindo rock, pop, jazz, música clássica e world music. Além das apresentações, o evento também oferece espaços interativos, como estandes de venda de discos, alimentos e bebidas, proporcionando uma experiência completa para os amantes da música.",
        artista: "Rogério",
        data: "22-04-2023 14:30",
        local: "Avenida 1,  7, Foz do Iguaçu-PR",
        valor: "R$ 100,00",
        event_id: 6,
    },
    {
        id: 7,
        url_img: "./content/imgs/02-Eventos/03-Eventos-Apresentacoes/danca.jpg",
        nome: "Apresentação de Dança",
        descricao: "O evento de dança é uma celebração da expressão corporal e da arte do movimento. Realizado em um ambiente acolhedor e inspirador, o evento reúne bailarinos profissionais, grupos de dança e artistas talentosos de diferentes estilos, como ballet, dança contemporânea, dança de salão e danças folclóricas.",
        artista: "Balé de Foz do Iguaçu",
        data: "22-04-2023 14:30",
        local: "Avenida 1,  7, Foz do Iguaçu-PR",
        valor: "R$ 100,00",
        event_id: 7
    },
    {
        id: 8,
        url_img: "./content/imgs/02-Eventos/04-Eventos-Literatura/literatura1.jpg",
        nome: "Lançamento do livro Naipi",
        descricao: "O evento de lançamento do livro Naipi é uma celebração literária que reúne autores, leitores e entusiastas da literatura em um ambiente acolhedor. Com um clima de expectativa e empolgação, o evento marca o momento em que a obra ganha vida e é apresentada ao público pela primeira vez.No evento, o autor tem a oportunidade de compartilhar sua jornada criativa e os bastidores da escrita, proporcionando insights sobre o processo de criação da obra. Os leitores têm a chance de conhecer de perto o autor, obter uma cópia autografada do livro e interagir com outros fãs da obra.",
        artista: "Juliana",
        data: "22-04-2023 14:30",
        local: "Avenida 1,  7, Foz do Iguaçu-PR",
        valor: "R$ 100,00",
        event_id: 8
    },
    {
        id: 9,
        url_img: "./content/imgs/02-Eventos/04-Eventos-Literatura/literatura2.jpg",
        nome: "Encontro Internacional do Clube do Livro",
        descricao: "O Encontro Internacional do Clube do Livro é um evento emocionante que reúne entusiastas da leitura de todo o mundo para celebrar a paixão pelos livros e promover o intercâmbio literário. Realizado em um ambiente acolhedor e culturalmente diversificado, o evento oferece uma oportunidade única de conectar pessoas que compartilham o amor pela literatura.",
        artista: "Vários",
        data: "22-04-2023 14:30",
        local: "Avenida 1,  7, Foz do Iguaçu-PR",
        valor: "R$ 100,00",
        event_id: 9
    }
]

let allEventsButtons = document.getElementById("events-article-button");

let exposicoesButton = document.createElement("button");
exposicoesButton.textContent = "Exposições";
exposicoesButton.id = "exposicoes";
exposicoesButton.addEventListener("click", function () {
    eventsFilter("exposicoes");
})

let musicaButton = document.createElement("button");
musicaButton.textContent = "Música";
musicaButton.id = "musica";
musicaButton.addEventListener("click", function () {
    eventsFilter("musica")
})

let apresentacoesButton = document.createElement("button");
apresentacoesButton.textContent = "Apresentações";
apresentacoesButton.id = "apresentacoes";
apresentacoesButton.addEventListener("click", function () {
    eventsFilter("apresentacoes");
})

let literaturaButton = document.createElement("button");
literaturaButton.textContent = "Literatura";
literaturaButton.id = "literatura";
literaturaButton.addEventListener("click", function () {
    eventsFilter("literatura");
})

allEventsButtons.appendChild(exposicoesButton);
allEventsButtons.appendChild(musicaButton);
allEventsButtons.appendChild(apresentacoesButton);
allEventsButtons.appendChild(literaturaButton);






function mostrarEventos(eventos) {
    let allEvents = document.getElementById("section-all-events");
    allEvents.innerHTML = ""; // limpa o conteúdo e exibe os eventos filtrados

    for (let i = 0; i < eventos.length; i++) {
        let eventsArticle = document.createElement("article");
        eventsArticle.className = "article-events";

        let url_imgEvents = document.createElement("img");
        url_imgEvents.src = eventos[i].url_img;
        url_imgEvents.className = "events-imgs";
        url_imgEvents.addEventListener("click", function () {
            abrirDetalhesEventos(eventos[i].id);
        });

        let events_description = document.createElement("div");
        events_description.className = "container-events-description";

        let event_name = document.createElement("h2");
        event_name.textContent = eventos[i].nome;
        event_name.addEventListener("click", function () {
            abrirDetalhesEventos(eventos[i].id);
        })

        let event_date = document.createElement("p");
        event_date.textContent = eventos[i].data;

        let event_local = document.createElement("p");
        event_local.textContent = eventos[i].local;

        allEvents.appendChild(eventsArticle);
        eventsArticle.appendChild(url_imgEvents);
        eventsArticle.appendChild(events_description);
        events_description.appendChild(event_name);
        events_description.appendChild(event_date);
        events_description.appendChild(event_local);
    }
}

function eventsFilter(modalidade) {
    let eventsFilter = EVENTOS.filter(function (filtrarEvento) {
        let buttons = document.querySelectorAll("#events-article-button button");
        buttons.forEach(d => {
            d.classList.remove("change-color");
        });
        let button = document.getElementById(modalidade);
        button.classList.add("change-color"); // criação da classe "change-color" para mudar a cor do botão
        return filtrarEvento.modalidade === modalidade;
    });

    mostrarEventos(eventsFilter); // função para filtrar os eventos após o clique no botão
}

function abrirDetalhesEventos(event_id) {
    let eventoDetalhes = DETALHES_EVENTOS.find(function (evento) {
        return evento.id === event_id;
    });

    if (eventoDetalhes) {
        let detalhesEventoUrlImg = eventoDetalhes.url_img;
        let detalhesEventoNome = eventoDetalhes.nome;
        let detalhesEventoDescricao = eventoDetalhes.descricao;
        let detalhesEventosArtista = eventoDetalhes.artista;
        let detalhesEventosData = eventoDetalhes.data;
        let detalhesEventosLocal = eventoDetalhes.local;
        let detalhesEventosValor = eventoDetalhes.valor;

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
        <link rel="stylesheet" href="https://west-devs.github.io/West-Devs-entrega-final-Culturalize/content/styles/catalog/events.css">
        </head>
        <body class="body-events-details">
            <header>

            </header>
            <main>
                <section class="section-events-details">
                <img class="details-events-img" src="${detalhesEventoUrlImg}" alt="${detalhesEventoNome}">
                <article class="article-events-details">
                <h2>${detalhesEventoNome}</h2>
                <p class="text-event-details">${detalhesEventoDescricao}</p>
                <div class="container-events-details">
                    <div class="container-first-events-details">
                        <p>
                        <span class="material-symbols-outlined">person</span>
                        Artista: ${detalhesEventosArtista}
                        </p>
                        <p>
                        <span class="material-symbols-outlined">calendar_month</span>
                        Data: ${detalhesEventosData}
                        </p>
                    </div>
                    <div class="container-second-events-details">
                        <p>
                        <span class="material-symbols-outlined">location_on</span>
                        Local: ${detalhesEventosLocal}
                        </p>
                        <p>
                        <span class="material-symbols-outlined">sell</span>
                        Valor: ${detalhesEventosValor}
                        </p>
                    </div>
                </div>
                <div class="container-button-events-details">
                    <button>Inscreva-se</button>
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

mostrarEventos(EVENTOS); // mostra todos os eventos (sem filtro)

