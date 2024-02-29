function calcularPrestamo(monto, cuotas) {
    let montoFinal = 0;

    if (cuotas == 1) {
        montoFinal = monto + monto * 0.25;
        return montoFinal;
    } 
    else if (cuotas == 3) {
        montoFinal = monto + monto * 0.5;
        return montoFinal;
    } 
    else if (cuotas == 6) {
        montoFinal = monto + monto * 0.75;
        return montoFinal;
    } 
    else if (cuotas == 12) {
        montoFinal = monto + monto * 1.25;
        return montoFinal;
    }

}

function calcularCuotas(monto, cuotas) {
    let montoCuota = 0;

    if (cuotas == 1) {
        montoCuota = monto + (monto * 0.25);
        return montoCuota;
    } 
    else if (cuotas == 3) {
        montoCuota = (monto + (monto * 0.5)) / 3;
        return montoCuota;
    } 
    else if (cuotas == 6) {
        montoCuota = (monto + (monto * 0.75)) / 6;
        return montoCuota;
    } 
    else if (cuotas == 12) {
        montoCuota = (monto + (monto * 1.25)) / 12;
        return montoCuota;
    }

    
}

while (true) {
    let monto = prompt("Ingrese el monto deseado o escriba 'Finalizar'").toLowerCase();
    
    if (monto == "finalizar") {
        console.log("Gracias por contactarte con Credi-Ya");
        break;
    }

    monto = parseFloat(monto);

    if (isNaN(monto) || monto <= 0) {
        console.log("Monto inválido. Ingrese un número positivo.");
        continue;
    }

    let cuotas = prompt("Ingrese la cantidad de cuotas: 1, 3, 6 o 12");
    cuotas = parseInt(cuotas);

    if (![1, 3, 6, 12].includes(cuotas)) {
        console.log("Cantidad de cuotas inválida. Debe ser 1, 3, 6 o 12.");
        continue;
    }

    let costoTotal = calcularPrestamo(monto, cuotas);
    let precioCuotas = calcularCuotas(monto, cuotas);

    console.log("Bienvenidos a Credi-Ya");
    console.log("Cantidad solicitada:", monto);
    console.log("Cantidad de cuotas seleccionada:", cuotas);
    console.log("Monto final a devolver:", costoTotal);
    console.log("Deberá abonar", cuotas, "cuotas de $", precioCuotas);
}
