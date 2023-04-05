// Archivo JavaScript para la calculadora

function sumaNumeros(){
    // Declaracion let y const
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    // Proceso
    const suma = n1 + n2;
    // Salida
    // alert('Resultado suma:'+suma);
    resultado.innerHTML ='Resultado: '+suma;
}

function restaNumeros(){
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    const resta = n1 - n2;
    resultado.innerHTML ='Resultado: '+resta;
}

function multiplicaNumeros(){
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    const multi = n1 * n2;
    resultado.innerHTML ='Resultado: '+multi;
}

function divideNumeros(){
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    const division = n1 / n2;
    resultado.innerHTML ='Resultado: '+division;
}