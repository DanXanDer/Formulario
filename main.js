const password = document.querySelector("input.password");
const conPassword = document.querySelector("input.con-password");
const conPassSpan = document.querySelector("span.con-pass");
let pass = "";
let conPass = "";

password.addEventListener("keyup", getPassword);

function getPassword(e) {
    if(((pass==null)&&(conPass==null))){
        conPassSpan.style.display = "none";
        conPassword.style.borderColor = "#E5E7EB";
    }
    pass = this.value;
    if((pass.length>0)&&(conPass!==pass)){
        conPassSpan.style.color = "red";
        conPassSpan.style.display = "flex";
        conPassword.style.borderColor = "red";
    }else{
        conPassSpan.style.display = "none";
        conPassword.style.borderColor = "#E5E7EB";
    }
}

conPassword.addEventListener("keyup", getConPassword);

function getConPassword(e) {
    if(((pass==null)&&(conPass==null))){
        conPassSpan.style.display = "none";
        conPassword.style.borderColor = "#E5E7EB";
    }
    conPass = this.value;
    if((pass.length>0)&&(conPass!==pass)){
        conPassSpan.style.color = "red";
        conPassSpan.style.display = "flex";
        this.style.borderColor = "red";
    }else{
        conPassSpan.style.display = "none";
        this.style.borderColor = "#E5E7EB"
    }
}