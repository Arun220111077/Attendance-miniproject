
document.querySelector("#form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    let username = document.querySelector("#name").value;
    let password =  document.querySelector("#password").value;

    if (username == "Arun Singh" && password == "220111077") {
    
        window.location.href = "./faculty.html";
    } else {
        alert("Invalid username or password");
        document.querySelector("#form").reset();
    }

}