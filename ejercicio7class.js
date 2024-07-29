function mostrarSeleccion() {
    const motos = document.getElementsByName('moto');
    let motoSeleccionada = '';
    for (const moto of motos) {
        if (moto.checked) {
            motoSeleccionada = moto.value;
            break;
        }
    }

    const colores = document.getElementsByName('color');
    let coloresSeleccionados = [];
    for (const color of colores) {
        if (color.checked) {
            coloresSeleccionados.push(color.value);
        }
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '<p>Moto seleccionada: ' + motoSeleccionada + '</p>' +
                          '<p>Colores seleccionados: ' + coloresSeleccionados.join(', ') + '</p>';
}