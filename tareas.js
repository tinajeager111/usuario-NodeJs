const usuario = JSON.parse(localStorage.getItem("usuario"));

if(!usuario){
    window.location.href="../home/index.html";
}