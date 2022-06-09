const input = document.querySelector("#input");
const ventanaEmergente = document.querySelector("#ventana");
const cruz = document.querySelector(".cruz");

input.addEventListener('click', function(){
    ventanaEmergente.showModal();
});

cruz.addEventListener('click', function(){
    ventanaEmergente.close();
});
