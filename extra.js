const arrNums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

const [pos0, pos1, pos2, pos3, pos4, ...restN] = arrNums

const numDispuestos = [pos0, pos2, pos4]
const restNums = [pos1, pos3, ...restN];
// console.log(numDispuestos);
// console.log(restNums);
const mascota = {
    nombre: "Bony",
    tipo: "Perro",
    color: "Dorado",
    raza: "Golden retriever"
}

const { nombre, tipo, color, raza } = mascota

const mensajeUsuario = `Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipo}, de color: ${color} y su raza es: ${raza}.`

console.log(mensajeUsuario);