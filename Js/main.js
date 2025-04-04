let nombre = document.getElementById("nombreApellido");
let pais = document.getElementById("nacionalidad");
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    alert("Nombre: "+ nombre.value + "\nNacionalidad: "+ pais.value)
})



