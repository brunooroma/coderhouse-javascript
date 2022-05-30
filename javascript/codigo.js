/* let nombre = prompt('Ingrese su nombre');
let apellido = prompt('Ingrese su apellido');
let edad = prompt('Ingrese su edad');
let pais = prompt('Ingrese el pais donde vive');

let descripcion = `Me llamo ${nombre} ${apellido} tengo ${edad} años y vivo en ${pais}`;

document.write(descripcion);
 */

for (let i = 1; i <= 12; i++) {
    document.write('La tabla del ',i,' es: <br>');
    for (let y = 1; y <= 12; y++) {
        document.write(i*y + ', ');
    }
    document.write('<br>');
    document.write('<br>');
}