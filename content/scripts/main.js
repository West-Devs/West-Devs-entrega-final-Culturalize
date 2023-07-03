let navItensContent;
let showAllElement

function init() {
    navItensContent[0].classList.add("selected");

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
}

document.addEventListener("DOMContentLoaded", function () {
    navItensContent = document.querySelectorAll(".nav-item-content");
    showAllElement = document.getElementById("todos");

    init();
});