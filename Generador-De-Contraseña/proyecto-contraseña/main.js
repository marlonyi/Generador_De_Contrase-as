let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres debe ser mayor a 8");
    }

    let password = "";
    for (let i = 0; i < numeroDigitado; i++) {
        
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password += caracterAleatorio;
        
    }
   
    contrasena.value = password;  


}
