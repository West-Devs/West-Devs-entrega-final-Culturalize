const logIn = () => {
    var userInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    let name = localStorage.getItem("username");
    let password = localStorage.getItem("password");

    if (name === userInput.value && password === passwordInput.value){
        window.location.href="./../../index.html";
    }else{
        console.log("dados invalidos")
    }
}

