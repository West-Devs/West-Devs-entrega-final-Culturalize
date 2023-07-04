let navItensContent;
let showAllElement;
let categoriaSelecionada;

function init() {
    selectCategoria(navItensContent[0]);

    if(navItensContent[0].id !== "obras") {
        showAllElement.innerText = `Confira todos os ${navItensContent[0].id}`
    } else {
        showAllElement.innerText = `Confira todas as ${navItensContent[0].id}`
    }

    navItensContent.forEach(e => {
        e.addEventListener("click", function () {
            selectCategoria(e);
        });
    });

    showAllElement.addEventListener("click", function() {
        goToCatalog(categoriaSelecionada);
    });
}

function selectCategoria(item) {
    navItensContent.forEach(e => {
        if(e.classList.contains("selected")) {
            e.classList.remove("selected")
        }
    });

    item.classList.add("selected");

    if(item.id !== "obras") {
        showAllElement.innerText = `Confira todos os ${item.id}`
    } else {
        showAllElement.innerText = `Confira todas as ${item.id}`
    }

    categoriaSelecionada = item.id;
}

function goToCatalog(tpCategoria) {
    var baseURL = "file:///C:/Users/Adm/West-Devs-entrega-final-Culturalize";
    var path = "/content/views/catalog/";

     switch(tpCategoria) {
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

document.addEventListener("DOMContentLoaded", function () {
    navItensContent = document.querySelectorAll(".nav-item-content");
    showAllElement = document.getElementById("todos");

    init();
});