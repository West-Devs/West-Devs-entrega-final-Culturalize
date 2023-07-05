localStorage.setItem('signedIn', 'false');
const signedIn = localStorage.getItem('signedIn');
let count = 0;

var cursos = [
    {
        image: './img/home/Cursos/cursos-sqr1.svg',
        titulo: 'Curso de desenho',
        data: '10/07/2023 - 14:00',
        local: 'Av. Brasil, 1235, Foz do Iguaçu'
    },
    {
        image: './img/home/Cursos/cursos-sqr2.svg',
        titulo: 'Curso de pintura',
        data: '05/07/2023 - 18:30',
        local: 'Av. Brasil, 1235, Foz do Iguaçu'
    },
    {
        image: './img/home/Cursos/cursos-paisagem.svg',
        titulo: 'Curso de cerâmica',
        data: '03/07/2023 - 16:00',
        local: 'Av. Brasil, 1235, Foz do Iguaçu'
    },
    {
        image: './img/home/Cursos/cursos-retrato.svg',
        titulo: 'Curso de esculturas',
        data: '03/07/2023 - 17:00',
        local: 'Av. Brasil, 1235, Foz do Iguaçu'
    }
];

var obras = [
    {
        image: './img/home/Obras/obras-sqr1.svg',
        titulo: 'Fragmentos da Alma',
        data: '10/10/2023 - 10:00',
        local: 'Av. das Cataratas, 3570, Foz do Iguaçu'
    },
    {
        image: './img/home/Obras/obras-sqr2.svg',
        titulo: 'Elevação da Liberdade',
        data: '10/10/2023 - 10:00',
        local: 'Av. das Cataratas, 3570, Foz do Iguaçu'
    },
    {
        image: './img/home/Obras/obras-paisagem.svg',
        titulo: 'Sinfonia de Cores',
        data: '10/10/2023 - 10:00',
        local: 'Av. das Cataratas, 3570, Foz do Iguaçu'
    },
    {
        image: './img/home/Obras/obras-retrato.svg',
        titulo: 'Ressonância Abstrata',
        data: '10/10/2023 - 10:00',
        local: 'Av. das Cataratas, 3570, Foz do Iguaçu'
    }
];

var eventos = [
    {
        image: './img/home/Eventos/eventos-sqr1.svg',
        titulo: 'Orquestra Sinfônica',
        data: '01/07/2023 - 10:00',
        local: 'Av. das Cataratas, 3570, Foz do Iguaçu'
    },
    {
        image: './img/home/Eventos/eventos-sqr2.svg',
        titulo: 'Exposição de fotografia',
        data: '13/07/2023 - 12:00',
        local: 'Av. das Cataratas, 3570, Foz do Iguaçu'
    },
    {
        image: './img/home/Eventos/eventos-paisagem.svg',
        titulo: 'Encontro Internacional do Clube do Livro',
        data: '09/07/2023 - 14:00',
        local: 'Av. das Cataratas, 3570, Foz do Iguaçu'
    },
    {
        image: './img/home/Eventos/eventos-retrato.svg',
        titulo: 'Festival de Música Guarani',
        data: '11/07/2023 - 20:00',
        local: 'Av. das Cataratas, 3570, Foz do Iguaçu'
    }
];

function loadContent() {
    loadEventos();
    loadObras();
    loadCursos();
    logged();
}
function logged() {
    const user = document.getElementById("user_status");
    if (signedIn === 'true') {
        let a = document.createElement('a');

        let welcome = document.createElement('h3');
        welcome.textContent = "Bem Vindo!";
        let userdata = document.createElement('h3');
        userdata.textContent = "User";
        userdata.style.fontWeight = "bold";

        a.appendChild(welcome);
        a.appendChild(userdata);
        user.appendChild(a);
    } else {
        let a = document.createElement('a');
        a.style.cursor = "pointer";
        a.addEventListener("click", function () {
            let baseURL = "https://west-devs.github.io/West-Devs-entrega-final-Culturalize";
            let path = "/content/views/";

            window.location.href = baseURL + path + "login.html";
        });
        let welcome = document.createElement('h3');
        welcome.textContent = "Bem Vindo!";
        let userdata = document.createElement('h3');
        userdata.textContent = "Entre ou cadastre-se";
        userdata.style.fontWeight = "bold";
        a.appendChild(welcome);
        a.appendChild(userdata);
        user.appendChild(a);
    }
}

function loadEventos() {
    const expo = document.getElementById("expo");
    const eventosHolder = document.createElement('div');
    eventosHolder.id = 'events-holder';
    eventosHolder.classList.add('holder');
    eventosHolder.dataset.type = 'eventos';

    const block1 = document.createElement('div');
    block1.classList.add('block1');

    const sqrs = document.createElement('div');
    sqrs.classList.add('sqrs');

    const link = document.createElement('a');
    link.href = '#';
    const sqr1 = document.createElement('div');
    sqr1.classList.add('sqr1');
    const image = document.createElement('img');
    image.src = eventos[0].image;
    image.alt = eventos[0].titulo;
    const description = document.createElement('div');
    description.classList.add('description');
    const title = document.createElement('h3');
    title.textContent = eventos[0].titulo;
    const dateTime = document.createElement('p');
    dateTime.textContent = eventos[0].data;
    const location = document.createElement('p');
    location.textContent = eventos[0].local;
    description.appendChild(title);
    description.appendChild(dateTime);
    description.appendChild(location);
    sqr1.appendChild(image);
    sqr1.appendChild(description);
    link.appendChild(sqr1);

    const link2 = document.createElement('a');
    link2.href = '#';
    const sqr2 = document.createElement('div');
    sqr2.classList.add('sqr2');
    const image2 = document.createElement('img');
    image2.src = eventos[1].image;
    image2.alt = eventos[1].titulo;
    const description2 = document.createElement('div');
    description2.classList.add('description');
    const title2 = document.createElement('h3');
    title2.textContent = eventos[1].titulo;
    const dateTime2 = document.createElement('p');
    dateTime2.textContent = eventos[1].data;
    const location2 = document.createElement('p');
    location2.textContent = eventos[1].local;
    description2.appendChild(title2);
    description2.appendChild(dateTime2);
    description2.appendChild(location2);
    sqr2.appendChild(image2);
    sqr2.appendChild(description2);
    link2.appendChild(sqr2);

    sqrs.appendChild(sqr1);
    sqrs.appendChild(sqr2);

    const link3 = document.createElement('a');
    link3.href = '#';
    const paisagem = document.createElement('div');
    paisagem.classList.add('paisagem');
    const imagem3 = document.createElement('img');
    imagem3.src = eventos[2].image;
    imagem3.alt = eventos[2].titulo;
    const description3 = document.createElement('div')
    description3.classList.add('description');
    const title3 = document.createElement('h3');
    title3.textContent = eventos[2].titulo;
    const dateTime3 = document.createElement('p');
    dateTime3.textContent = eventos[2].data;
    const location3 = document.createElement('p');
    location3.textContent = eventos[2].local;
    description3.appendChild(title3);
    description3.appendChild(dateTime3);
    description3.appendChild(location3);
    paisagem.appendChild(imagem3);
    paisagem.appendChild(description3);
    link3.appendChild(paisagem);

    block1.appendChild(sqrs);
    block1.appendChild(link3);

    const block2 = document.createElement('div');
    block2.classList.add('block2');

    const link4 = document.createElement('a');
    link4.href = '#';
    const retrato = document.createElement('div');
    retrato.classList.add('portrait');
    const imagem4 = document.createElement('img');
    imagem4.src = eventos[3].image;
    imagem4.alt = eventos[3].titulo;
    const description4 = document.createElement('div')
    description4.classList.add('description');
    const title4 = document.createElement('h3');
    title4.textContent = eventos[3].titulo;
    const dateTime4 = document.createElement('p');
    dateTime4.textContent = eventos[3].data;
    const location4 = document.createElement('p');
    location4.textContent = eventos[3].local;
    description4.appendChild(title4);
    description4.appendChild(dateTime4);
    description4.appendChild(location4);
    retrato.appendChild(imagem4);
    retrato.appendChild(description4);
    link4.appendChild(retrato);

    block2.appendChild(link4);

    eventosHolder.appendChild(block1);
    eventosHolder.appendChild(block2);
    expo.appendChild(eventosHolder);
}

function loadObras() {
    const expo = document.getElementById("expo");
    const eventosHolder = document.createElement('div');
    eventosHolder.id = 'obras-holder';
    eventosHolder.classList.add('holder');
    eventosHolder.dataset.type = 'obras';

    const block1 = document.createElement('div');
    block1.classList.add('block1');

    const sqrs = document.createElement('div');
    sqrs.classList.add('sqrs');

    const link = document.createElement('a');
    link.href = '#';
    const sqr1 = document.createElement('div');
    sqr1.classList.add('sqr1');
    const image = document.createElement('img');
    image.src = obras[0].image;
    image.alt = obras[0].titulo;
    const description = document.createElement('div');
    description.classList.add('description');
    const title = document.createElement('h3');
    title.textContent = obras[0].titulo;
    const dateTime = document.createElement('p');
    dateTime.textContent = obras[0].data;
    const location = document.createElement('p');
    location.textContent = obras[0].local;
    description.appendChild(title);
    description.appendChild(dateTime);
    description.appendChild(location);
    sqr1.appendChild(image);
    sqr1.appendChild(description);
    link.appendChild(sqr1);

    const link2 = document.createElement('a');
    link2.href = '#';
    const sqr2 = document.createElement('div');
    sqr2.classList.add('sqr2');
    const image2 = document.createElement('img');
    image2.src = obras[1].image;
    image2.alt = obras[1].titulo;
    const description2 = document.createElement('div');
    description2.classList.add('description');
    const title2 = document.createElement('h3');
    title2.textContent = obras[1].titulo;
    const dateTime2 = document.createElement('p');
    dateTime2.textContent = obras[1].data;
    const location2 = document.createElement('p');
    location2.textContent = obras[1].local;
    description2.appendChild(title2);
    description2.appendChild(dateTime2);
    description2.appendChild(location2);
    sqr2.appendChild(image2);
    sqr2.appendChild(description2);
    link2.appendChild(sqr2);

    sqrs.appendChild(sqr1);
    sqrs.appendChild(sqr2);

    const link3 = document.createElement('a');
    link3.href = '#';
    const paisagem = document.createElement('div');
    paisagem.classList.add('paisagem');
    const imagem3 = document.createElement('img');
    imagem3.src = obras[2].image;
    imagem3.alt = obras[2].titulo;
    const description3 = document.createElement('div');
    description3.classList.add('description');
    const title3 = document.createElement('h3');
    title3.textContent = obras[2].titulo;
    const dateTime3 = document.createElement('p');
    dateTime3.textContent = obras[2].data;
    const location3 = document.createElement('p');
    location3.textContent = obras[2].local;
    description3.appendChild(title3);
    description3.appendChild(dateTime3);
    description3.appendChild(location3);
    paisagem.appendChild(imagem3);
    paisagem.appendChild(description3);
    link3.appendChild(paisagem);

    block1.appendChild(sqrs);
    block1.appendChild(link3);

    const block2 = document.createElement('div');
    block2.classList.add('block2');

    const link4 = document.createElement('a');
    link4.href = '#';
    const retrato = document.createElement('div');
    retrato.classList.add('portrait');
    const imagem4 = document.createElement('img');
    imagem4.src = obras[3].image;
    imagem4.alt = obras[3].titulo;
    const description4 = document.createElement('div');
    description4.classList.add('description');
    const title4 = document.createElement('h3');
    title4.textContent = obras[3].titulo;
    const dateTime4 = document.createElement('p');
    dateTime4.textContent = obras[3].data;
    const location4 = document.createElement('p');
    location4.textContent = obras[3].local;
    description4.appendChild(title4);
    description4.appendChild(dateTime4);
    description4.appendChild(location4);
    retrato.appendChild(imagem4);
    retrato.appendChild(description4);
    link4.appendChild(retrato);

    block2.appendChild(link4);

    eventosHolder.appendChild(block1);
    eventosHolder.appendChild(block2);
    expo.appendChild(eventosHolder);
}

function loadCursos() {
    const expo = document.getElementById("expo");
    const eventosHolder = document.createElement('div');
    eventosHolder.id = 'cursos-holder';
    eventosHolder.classList.add('holder');
    eventosHolder.dataset.type = 'cursos';

    const block1 = document.createElement('div');
    block1.classList.add('block1');

    const sqrs = document.createElement('div');
    sqrs.classList.add('sqrs');

    const link = document.createElement('a');
    link.href = '#';
    const sqr1 = document.createElement('div');
    sqr1.classList.add('sqr1');
    const image = document.createElement('img');
    image.src = cursos[0].image;
    image.alt = cursos[0].titulo;
    const description = document.createElement('div');
    description.classList.add('description');
    const title = document.createElement('h3');
    title.textContent = cursos[0].titulo;
    const dateTime = document.createElement('p');
    dateTime.textContent = cursos[0].data;
    const location = document.createElement('p');
    location.textContent = cursos[0].local;
    description.appendChild(title);
    description.appendChild(dateTime);
    description.appendChild(location);
    sqr1.appendChild(image);
    sqr1.appendChild(description);
    link.appendChild(sqr1);

    const link2 = document.createElement('a');
    link2.href = '#';
    const sqr2 = document.createElement('div');
    sqr2.classList.add('sqr2');
    const image2 = document.createElement('img');
    image2.src = cursos[1].image;
    image2.alt = cursos[1].titulo;
    const description2 = document.createElement('div');
    description2.classList.add('description');
    const title2 = document.createElement('h3');
    title2.textContent = cursos[1].titulo;
    const dateTime2 = document.createElement('p');
    dateTime2.textContent = cursos[1].data;
    const location2 = document.createElement('p');
    location2.textContent = cursos[1].local;
    description2.appendChild(title2);
    description2.appendChild(dateTime2);
    description2.appendChild(location2);
    sqr2.appendChild(image2);
    sqr2.appendChild(description2);
    link2.appendChild(sqr2);

    sqrs.appendChild(sqr1);
    sqrs.appendChild(sqr2);

    const link3 = document.createElement('a');
    link3.href = '#';
    const paisagem = document.createElement('div');
    paisagem.classList.add('paisagem');
    const imagem3 = document.createElement('img');
    imagem3.src = cursos[2].image;
    imagem3.alt = cursos[2].titulo;
    const description3 = document.createElement('div');
    description3.classList.add('description');
    const title3 = document.createElement('h3');
    title3.textContent = cursos[2].titulo;
    const dateTime3 = document.createElement('p');
    dateTime3.textContent = cursos[2].data;
    const location3 = document.createElement('p');
    location3.textContent = cursos[2].local;
    description3.appendChild(title3);
    description3.appendChild(dateTime3);
    description3.appendChild(location3);
    paisagem.appendChild(imagem3);
    paisagem.appendChild(description3);
    link3.appendChild(paisagem);

    block1.appendChild(sqrs);
    block1.appendChild(link3);

    const block2 = document.createElement('div');
    block2.classList.add('block2');

    const link4 = document.createElement('a');
    link4.href = '#';
    const retrato = document.createElement('div');
    retrato.classList.add('portrait');
    const imagem4 = document.createElement('img');
    imagem4.src = cursos[3].image;
    imagem4.alt = cursos[3].titulo;
    const description4 = document.createElement('div');
    description4.classList.add('description');
    const title4 = document.createElement('h3');
    title4.textContent = cursos[3].titulo;
    const dateTime4 = document.createElement('p');
    dateTime4.textContent = cursos[3].data;
    const location4 = document.createElement('p');
    location4.textContent = cursos[3].local;
    description4.appendChild(title4);
    description4.appendChild(dateTime4);
    description4.appendChild(location4);
    retrato.appendChild(imagem4);
    retrato.appendChild(description4);
    link4.appendChild(retrato);

    block2.appendChild(link4);

    eventosHolder.appendChild(block1);
    eventosHolder.appendChild(block2);
    expo.appendChild(eventosHolder);
}

document.addEventListener('DOMContentLoaded', loadContent);

function addActive(btnid) {
    var btns = document.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
    }
    var btn = document.getElementById(btnid);
    btn.classList.add("active");
}

function goToCatalog(tpCategoria) {
    let baseURL = "https://west-devs.github.io/West-Devs-entrega-final-Culturalize";
    let path = "/content/views/catalog/";

    switch (tpCategoria) {
        case "obras":
            window.location.href = baseURL + path + "obras.html";
            break;
        case "eventos":
            window.location.href = baseURL + path + "events.html";
            break;
        case "cursos":
            window.location.href = baseURL + path + "courses.html";
            break;
    }
};

function viewmore(tipo) {
    const add = document.getElementById("lista");
    let h3, li;
    const eventos = document.getElementById("events-holder");
    const obras = document.getElementById("obras-holder");
    const cursos = document.getElementById("cursos-holder");
    const elemento = document.getElementById("viewmore");
    if (count > 0) {
        elemento.remove();
    } else {
        count++;
    }
    switch (tipo) {
        case 1:
            h3 = document.createElement("h3");
            h3.textContent = "Confira todos os Eventos";
            li = document.createElement("li");
            li.appendChild(h3);
            li.classList.add("btn");
            li.classList.add("viewmore");
            li.id = "viewmore";
            add.appendChild(li);
            eventos.style.display = "flex";
            obras.style.display = "none";
            cursos.style.display = "none";
            li.addEventListener("click", function () {
                goToCatalog("eventos")
            });
            break;
        case 2:
            h3 = document.createElement("h3");
            h3.textContent = "Confira todas as Obras";
            li = document.createElement("li");
            li.appendChild(h3);
            li.classList.add("btn");
            li.classList.add("viewmore");
            li.id = "viewmore";
            add.appendChild(li);
            eventos.style.display = "none";
            obras.style.display = "flex";
            cursos.style.display = "none";
            li.addEventListener("click", function () {
                goToCatalog("obras")
            });
            break;
        case 3:
            h3 = document.createElement("h3");
            h3.textContent = "Confira todos os Cursos";
            li = document.createElement("li");
            li.appendChild(h3);
            li.classList.add("btn");
            li.classList.add("viewmore");
            li.id = "viewmore";
            add.appendChild(li);
            eventos.style.display = "none";
            obras.style.display = "none";
            cursos.style.display = "flex";
            li.addEventListener("click", function () {
                goToCatalog("cursos")
            });
            break;
        case 4:
            count = 0;
            eventos.style.display = "flex";
            obras.style.display = "flex";
            cursos.style.display = "flex";
            elemento.remove();
            break;
        default:
            console.log("Indisponível!");
            break;
    }
}
