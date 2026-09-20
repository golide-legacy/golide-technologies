const menu = document.getElementById("menu");
const pages = document.getElementById("pages");
menu.addEventListener("click", function () {
    pages.classList.toggle("show");
});

const forgot = document.getElementById("forgot");
const password = document.getElementById("password");
password.addEventListener("click", function(){
    forgot.classList.toggle("show")
})

const action =document.getElementById("work");
action.addEventListener("click", function(){
    alert("I dont have work to show its pratical project, what's on your mind? lets work together!")
})

const display =document.getElementById("Meenu");
display.addEventListener("click", function(){
    alert("What are busy on? lets collaborate i'm willing to learn from you")
})

const login =document.getElementById("login-name");
const loginn =document.getElementById("login-password");
const logi =document.getElementById("ok");
logi.addEventListener("click", function(){
    if(login.value === !"" && loginn.value === !"") {
       ("Login Successfuly")
    }else{(login.value === !"" && loginn.value === !"")
       ("Please fill both shields");
    }
    });

