let nombre = prompt('Ingrese su nombre');
let apellido = prompt('Ingrese su apellido');
let edad = prompt('Ingrese su edad');
let pais = prompt('Ingrese el pais donde vive');
 
let descripcion;

// USO DE CONDICIONAL

if (edad < 18) {
    descripcion = `Tu nombre es ${nombre} ${apellido} tenes ${edad} años y vivis en ${pais}, pero sos menor edad`;
    alert(descripcion);
} else {
    descripcion = `Tu nombre es ${nombre} ${apellido} tenes ${edad} años y vivis en ${pais}`;
    alert(descripcion);
}

//BUCLE FOR - TABLA MULTIPLICAR

for (let i = 1; i <= 12; i++) {
    document.write('La tabla del ',i,' es: <br>');
    for (let y = 1; y <= 12; y++) {
        document.write(i*y + ', ');
    }
    document.write('<br>');
    document.write('<br>');
}