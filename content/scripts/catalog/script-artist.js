let ARTISTAS = [
    {
        id: 1,
        url_img: "./content/imgs/04-Artistas/01-Artistas-Desenho/artista-desenho.jpg",
        nome: "Marcia",
        tipo: "Desenho",
        modalidade: "desenho"
    },
    {
        id: 2,
        url_img: "./content/imgs/04-Artistas/02-Artistas-Pintura/artista-pintura.jpg",
        nome: "Regina",
        tipo: "Pintura",
        modalidade: "pintura"
    },
    {
        id: 3,
        url_img: "./content/imgs/04-Artistas/03-Artistas-Escultura/artista-escultura.jpg",
        nome: "Laura",
        tipo: "Escultura",
        modalidade: "escultura"
    },
    {
        id: 4,
        url_img: "./content/imgs/04-Artistas/04-Artistas-Fotografia/artista-fotografia.jpg",
        nome: "Maria",
        tipo: "Fotografia",
        modalidade: "fotografia"
    }
]

let PERFIL_ARTISTAS = [
    {
        id: 1,
        url_img: "./content/imgs/04-Artistas/01-Artistas-Desenho/artista-desenho.jpg",
        nome: "Marcia",
        curtidas: "333 CURTIDAS",
        seguidores: "333 SEGUIDORES",
        tipo_conteudo: "Desenho",
        bio: "Sou uma desenhista apaixonada por transformar ideias em imagens. Com um lápis na mão, dou vida a personagens, paisagens e conceitos que habitam minha imaginação. Minha arte é uma forma de expressão, uma maneira de compartilhar histórias e despertar emoções. Cada traço é cuidadosamente elaborado para transmitir a essência e a beleza de cada criação. Seja bem-vindo(a) ao meu mundo de linhas e sombras, onde a imaginação ganha forma e o papel ganha vida.",
        galeria1: "./content/imgs/04-Artistas/01-Artistas-Desenho/artistas-desenho-perfil/perfil-desenho1.jpg",
        galeria2: "./content/imgs/04-Artistas/01-Artistas-Desenho/artistas-desenho-perfil/perfil-desenho2.jpg",
        galeria3: "./content/imgs/04-Artistas/01-Artistas-Desenho/artistas-desenho-perfil/perfil-desenho3.jpg",
        galeria4: "./content/imgs/04-Artistas/01-Artistas-Desenho/artistas-desenho-perfil/perfil-desenho4.jpg",
        galeria5: "./content/imgs/04-Artistas/01-Artistas-Desenho/artistas-desenho-perfil/perfil-desenho5.jpg",
        galeria6: "./content/imgs/04-Artistas/01-Artistas-Desenho/artistas-desenho-perfil/perfil-desenho6.jpg",
        galeria7: "./content/imgs/04-Artistas/01-Artistas-Desenho/artistas-desenho-perfil/perfil-desenho7.jpg",
        galeria8: "./content/imgs/04-Artistas/01-Artistas-Desenho/artistas-desenho-perfil/perfil-desenho8.jpg",
        galeria9: "./content/imgs/04-Artistas/01-Artistas-Desenho/artistas-desenho-perfil/perfil-desenho9.jpg",
        galeria10: "./content/imgs/04-Artistas/01-Artistas-Desenho/artistas-desenho-perfil/perfil-desenho10.jpg",
        galeria11: "./content/imgs/04-Artistas/01-Artistas-Desenho/artistas-desenho-perfil/perfil-desenho11.jpg",
        galeria12: "./content/imgs/04-Artistas/01-Artistas-Desenho/artistas-desenho-perfil/perfil-desenho12.jpg",
        artist_id: 1
    },
    {
        id: 2,
        url_img: "./content/imgs/04-Artistas/02-Artistas-Pintura/artista-pintura.jpg",
        nome: "Regina",
        curtidas: "444 CURTIDAS",
        seguidores: "444 SEGUIDORES",
        tipo_conteudo: "Pintura",
        bio: "Sou uma pintora apaixonada por cores e pinceladas. Através da minha arte, busco transmitir emoções, contar histórias e explorar diferentes formas de expressão. Cada tela é um convite para mergulhar em um universo único, onde a criatividade flui livremente. Minhas pinceladas são carregadas de energia e sentimentos, criando composições que cativam e inspiram. Convido você a explorar meu mundo de cores e descobrir as infinitas possibilidades que a pintura oferece. Bem-vindo(a) ao meu ateliê.",
        galeria1: "./content/imgs/04-Artistas/02-Artistas-Pintura/artistas-pintura-perfil/perfil-pintura1.jpg",
        galeria2: "./content/imgs/04-Artistas/02-Artistas-Pintura/artistas-pintura-perfil/perfil-pintura2.jpg",
        galeria3: "./content/imgs/04-Artistas/02-Artistas-Pintura/artistas-pintura-perfil/perfil-pintura3.jpg",
        galeria4: "./content/imgs/04-Artistas/02-Artistas-Pintura/artistas-pintura-perfil/perfil-pintura4.jpg",
        galeria5: "./content/imgs/04-Artistas/02-Artistas-Pintura/artistas-pintura-perfil/perfil-pintura5.jpg",
        galeria6: "./content/imgs/04-Artistas/02-Artistas-Pintura/artistas-pintura-perfil/perfil-pintura6.jpg",
        galeria7: "./content/imgs/04-Artistas/02-Artistas-Pintura/artistas-pintura-perfil/perfil-pintura7.jpg",
        galeria8: "./content/imgs/04-Artistas/02-Artistas-Pintura/artistas-pintura-perfil/perfil-pintura8.jpg",
        galeria9: "./content/imgs/04-Artistas/02-Artistas-Pintura/artistas-pintura-perfil/perfil-pintura9.jpg",
        galeria10: "./content/imgs/04-Artistas/02-Artistas-Pintura/artistas-pintura-perfil/perfil-pintura10.jpg",
        galeria11: "./content/imgs/04-Artistas/02-Artistas-Pintura/artistas-pintura-perfil/perfil-pintura11.jpg",
        galeria12: "./content/imgs/04-Artistas/02-Artistas-Pintura/artistas-pintura-perfil/perfil-pintura12.jpg",
        artist_id: 2
    },
    {
        id: 3,
        url_img: "./content/imgs/04-Artistas/03-Artistas-Escultura/artista-escultura.jpg",
        nome: "Laura",
        curtidas: "777 CURTIDAS",
        seguidores: "777 SEGUIDORES",
        tipo_conteudo: "Escultura",
        bio: "Sou uma escultora apaixonada por transformar formas e materiais em obras de arte tridimensionais. Com minhas mãos e ferramentas, dou vida a peças que transmitem emoções e contam histórias. Cada escultura é o resultado de um processo criativo intenso, onde busco explorar a essência dos materiais e transmitir minha visão de mundo. Meu objetivo é provocar reflexões, despertar sensações e conectar o espectador com a obra. Convido você a mergulhar no mundo escultural que crio e a experimentar a beleza e o poder da arte tridimensional. Bem-vindo(a) ao meu universo esculpido.",
        galeria1: "./content/imgs/04-Artistas/03-Artistas-Escultura/artistas-escultura-perfil/perfil-escultura1.jpg",
        galeria2: "./content/imgs/04-Artistas/03-Artistas-Escultura/artistas-escultura-perfil/perfil-escultura2.jpg",
        galeria3: "./content/imgs/04-Artistas/03-Artistas-Escultura/artistas-escultura-perfil/perfil-escultura3.jpg",
        galeria4: "./content/imgs/04-Artistas/03-Artistas-Escultura/artistas-escultura-perfil/perfil-escultura4.jpg",
        galeria5: "./content/imgs/04-Artistas/03-Artistas-Escultura/artistas-escultura-perfil/perfil-escultura5.jpg",
        galeria6: "./content/imgs/04-Artistas/03-Artistas-Escultura/artistas-escultura-perfil/perfil-escultura6.jpg",
        galeria7: "./content/imgs/04-Artistas/03-Artistas-Escultura/artistas-escultura-perfil/perfil-escultura7.jpg",
        galeria8: "./content/imgs/04-Artistas/03-Artistas-Escultura/artistas-escultura-perfil/perfil-escultura8.jpg",
        galeria9: "./content/imgs/04-Artistas/03-Artistas-Escultura/artistas-escultura-perfil/perfil-escultura9.jpg",
        galeria10: "./content/imgs/04-Artistas/03-Artistas-Escultura/artistas-escultura-perfil/perfil-escultura10.jpg",
        galeria11: "./content/imgs/04-Artistas/03-Artistas-Escultura/artistas-escultura-perfil/perfil-escultura11.jpg",
        galeria12: "./content/imgs/04-Artistas/03-Artistas-Escultura/artistas-escultura-perfil/perfil-escultura12.jpg",
        artist_id: 3
    },
    {
        id: 4,
        url_img: "./content/imgs/04-Artistas/04-Artistas-Fotografia/artista-fotografia.jpg",
        nome: "Maria",
        curtidas: "545 Curtidas",
        seguidores: "545 Seguidores",
        tipo_conteudo: "Fotografia",
        bio: "Sou uma fotógrafa especializada em paisagens, apaixonada por explorar os cantos mais remotos e deslumbrantes do mundo. Através da minha lente, busco capturar a grandeza e a serenidade da natureza, transmitindo a sua beleza única. Cada imagem é uma forma de celebrar a diversidade e a magia que encontramos ao ar livre. De montanhas majestosas a praias paradisíacas, estou em constante busca pela próxima aventura fotográfica. Junte-se a mim nessa jornada visual e descubra a grandiosidade do nosso planeta através das minhas imagens.",
        galeria1: "./content/imgs/04-Artistas/04-Artistas-Fotografia/artistas-fotografia-perfil/perfil-fotografia1.jpg",
        galeria2: "./content/imgs/04-Artistas/04-Artistas-Fotografia/artistas-fotografia-perfil/perfil-fotografia2.jpg",
        galeria3: "./content/imgs/04-Artistas/04-Artistas-Fotografia/artistas-fotografia-perfil/perfil-fotografia3.jpg",
        galeria4: "./content/imgs/04-Artistas/04-Artistas-Fotografia/artistas-fotografia-perfil/perfil-fotografia4.jpg",
        galeria5: "./content/imgs/04-Artistas/04-Artistas-Fotografia/artistas-fotografia-perfil/perfil-fotografia5.jpg",
        galeria6: "./content/imgs/04-Artistas/04-Artistas-Fotografia/artistas-fotografia-perfil/perfil-fotografia6.jpg",
        galeria7: "./content/imgs/04-Artistas/04-Artistas-Fotografia/artistas-fotografia-perfil/perfil-fotografia7.jpg",
        galeria8: "./content/imgs/04-Artistas/04-Artistas-Fotografia/artistas-fotografia-perfil/perfil-fotografia8.jpg",
        galeria9: "./content/imgs/04-Artistas/04-Artistas-Fotografia/artistas-fotografia-perfil/perfil-fotografia9.jpg",
        galeria10: "./content/imgs/04-Artistas/04-Artistas-Fotografia/artistas-fotografia-perfil/perfil-fotografia10.jpg",
        galeria11: "./content/imgs/04-Artistas/04-Artistas-Fotografia/artistas-fotografia-perfil/perfil-fotografia11.jpg",
        galeria12: "./content/imgs/04-Artistas/04-Artistas-Fotografia/artistas-fotografia-perfil/perfil-fotografia12.jpg",
        artist_id: 4
    }
]

let allArtistButtons = document.getElementById("artist-article-button");

let desenhoButton = document.createElement("button");
desenhoButton.textContent = "Desenho";
desenhoButton.id = "desenho";
desenhoButton.addEventListener("click", function () {
    artistsFilter("desenho");
})

let pinturaButton = document.createElement("button");
pinturaButton.textContent = "Pintura";
pinturaButton.id = "pintura";
pinturaButton.addEventListener("click", function () {
    artistsFilter("pintura")
})

let esculturaButton = document.createElement("button");
esculturaButton.textContent = "Escultura";
esculturaButton.id = "escultura";
esculturaButton.addEventListener("click", function () {
    artistsFilter("escultura");
})

let fotografiaButton = document.createElement("button");
fotografiaButton.textContent = "Fotografia";
fotografiaButton.id = "fotografia";
fotografiaButton.addEventListener("click", function () {
    artistsFilter("fotografia");
})

allArtistButtons.appendChild(desenhoButton);
allArtistButtons.appendChild(pinturaButton);
allArtistButtons.appendChild(esculturaButton);
allArtistButtons.appendChild(fotografiaButton);


function mostrarArtistas(artistas) {
    let allArtists = document.getElementById("section-all-artist");
    allArtists.innerHTML = ""; // limpa o conteúdo e exibe os artistas filtrados

    for (let i = 0; i < artistas.length; i++) {
        let artistsArticle = document.createElement("article");
        artistsArticle.className = "article-artist";

        let url_imgArtists = document.createElement("img");
        url_imgArtists.src = artistas[i].url_img;
        url_imgArtists.className = "artist-imgs";
        url_imgArtists.addEventListener("click", function () {
            abrirDetalhesArtistas(artistas[i].id);
        });

        let artists_description = document.createElement("div");
        artists_description.className = "container-artist-description";

        let artist_name = document.createElement("h2");
        artist_name.textContent = artistas[i].nome;
        artist_name.addEventListener("click", function () {
            abrirDetalhesArtistas(artistas[i].id);
        })

        let artist_type = document.createElement("p");
        artist_type.textContent = artistas[i].tipo;

        allArtists.appendChild(artistsArticle);
        artistsArticle.appendChild(url_imgArtists);
        artistsArticle.appendChild(artists_description);
        artists_description.appendChild(artist_name);
        artists_description.appendChild(artist_type);
    }
}

function artistsFilter(modalidade) {
    let artistsFilter = ARTISTAS.filter(function (filtrarArtista) {
        let buttons = document.querySelectorAll("#artist-article-button button");
        buttons.forEach(d => {
            d.classList.remove("change-color");
        });
        let button = document.getElementById(modalidade);
        button.classList.add("change-color"); // criação da classe "change-color" para mudar a cor do botão
        return filtrarArtista.modalidade === modalidade;
    });

    mostrarArtistas(artistsFilter);
}

function abrirDetalhesArtistas(artist_id) {
    let artistaDetalhes = PERFIL_ARTISTAS.find(function (artista) {
        return artista.id === artist_id;
    });

    if (artistaDetalhes) {
        let detalhesArtistaUrlImg = artistaDetalhes.url_img;
        let detalhesArtistaNome = artistaDetalhes.nome;
        let detalhesArtistaCurtidas = artistaDetalhes.curtidas;
        let detalhesArtistaSeguidores = artistaDetalhes.seguidores;
        let detalhesArtistaTipo = artistaDetalhes.tipo_conteudo;
        let detalhesArtistaBio = artistaDetalhes.bio;
        let detalhesArtistaGaleria1 = artistaDetalhes.galeria1
        let detalhesArtistaGaleria2 = artistaDetalhes.galeria2
        let detalhesArtistaGaleria3 = artistaDetalhes.galeria3
        let detalhesArtistaGaleria4 = artistaDetalhes.galeria4
        let detalhesArtistaGaleria5 = artistaDetalhes.galeria5
        let detalhesArtistaGaleria6 = artistaDetalhes.galeria6
        let detalhesArtistaGaleria7 = artistaDetalhes.galeria7
        let detalhesArtistaGaleria8 = artistaDetalhes.galeria8
        let detalhesArtistaGaleria9 = artistaDetalhes.galeria9
        let detalhesArtistaGaleria10 = artistaDetalhes.galeria10
        let detalhesArtistaGaleria11 = artistaDetalhes.galeria11
        let detalhesArtistaGaleria12 = artistaDetalhes.galeria12

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
        <link rel="stylesheet" href="C:/Users/Adm/Desktop/West-Devs-entrega-final-Culturalize/content/styles/catalog/artist.css">
        </head>
        <body class="body-artist-details">
            <header>

            </header>
            <main>
                <section class="section-artist-details">
                    
                    <article class="article-artist-details">
                        <img class="details-artist-img" src="${detalhesArtistaUrlImg}" alt="${detalhesArtistaNome}">
                        <h2>${detalhesArtistaNome}</h2>
                            <div class="container-spans">
                                <p>
                                <span class="material-symbols-outlined">favorite</span>
                                ${detalhesArtistaCurtidas}
                                </p>
                                <p>
                                <span class="material-symbols-outlined">groups</span>
                                ${detalhesArtistaSeguidores}
                                </p>
                            </div>
                            <p class="tipo-artista">${detalhesArtistaTipo}</p>
                            <div class="artist-text-profile">
                                <p>${detalhesArtistaBio}</p>
                            </div>
                        
                        <div class="container-botao">
                            <button>Seguir</button>
                            <span class="material-symbols-outlined">forum</span>
                        </div>
                        
                    </article>
                    <article class="article-artist-galery">
                        <p class="galery-p">Galeria</p>
                        <img class="galery-artist-img" src="${detalhesArtistaGaleria1}" alt="${detalhesArtistaTipo}">
                        <img class="galery-artist-img" src="${detalhesArtistaGaleria2}" alt="${detalhesArtistaTipo}">
                        <img class="galery-artist-img" src="${detalhesArtistaGaleria3}" alt="${detalhesArtistaTipo}">
                        <img class="galery-artist-img" src="${detalhesArtistaGaleria4}" alt="${detalhesArtistaTipo}">
                        <img class="galery-artist-img" src="${detalhesArtistaGaleria5}" alt="${detalhesArtistaTipo}">
                        <img class="galery-artist-img" src="${detalhesArtistaGaleria6}" alt="${detalhesArtistaTipo}">
                        <img class="galery-artist-img" src="${detalhesArtistaGaleria7}" alt="${detalhesArtistaTipo}">
                        <img class="galery-artist-img" src="${detalhesArtistaGaleria8}" alt="${detalhesArtistaTipo}">
                        <img class="galery-artist-img" src="${detalhesArtistaGaleria9}" alt="${detalhesArtistaTipo}">
                        <img class="galery-artist-img" src="${detalhesArtistaGaleria10}" alt="${detalhesArtistaTipo}">
                        <img class="galery-artist-img" src="${detalhesArtistaGaleria11}" alt="${detalhesArtistaTipo}">
                        <img class="galery-artist-img" src="${detalhesArtistaGaleria12}" alt="${detalhesArtistaTipo}">
                    </article>
            </main>
            <footer>   

            </footer>
        </body>
        </html>
        `);
        novaPagina.document.close();
    }
}

mostrarArtistas(ARTISTAS); // mostra todos os artistas (sem filtro)

