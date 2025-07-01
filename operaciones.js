const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    const nuevaCita = {nombre, edad, animal, color, enfermedad}
    fs.writeFileSync('citas.json', JSON.stringify([...citas, nuevaCita], null, 2));
    console.log('Cita registrada correctamente');
}

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    console.log(citas)
}

module.exports = { registrar, leer };