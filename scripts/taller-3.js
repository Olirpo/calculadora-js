var lista = [];
const inputNumber = document.getElementById('inputNumbers');
const resultadoPromedio = document.getElementById('resultadoPromedio');
const listaHTML = document.getElementById('listaHTML');
// let sumaElementos = lista1.reduce((elementVal,currentVal)=>currentVal += elementVal);
// let promedioLista1 = sumaElementos / lista1.length

const printResult = ()=>{
    let promedio = mediaAritmetica(lista);
    let promedioFixed = promedio.toFixed(2)
    resultadoPromedio.innerHTML = `El promedio de tu lista de valores es de <strong>${promedioFixed}</strong>`
}
const cleanList = ()=>{
    listaHTML.innerHTML = '';
    lista = [];
    resultadoPromedio.innerHTML = ''
}
const addValue = ()=>{
    let numeroIngresado = inputNumber.value;
    if(numeroIngresado === ''){
        alert('Debe ingresar un numero')
        return
    }
    if(numeroIngresado<0){
        alert('No se pueden ingresar valores negativos')
        return
    }
    if(lista.length < 1){
        listaHTML.innerHTML += `${numeroIngresado}`;
        lista.push(parseFloat(numeroIngresado))
        return
    }
    else{
        listaHTML.innerHTML += `, ${numeroIngresado}`
        lista.push(parseFloat(numeroIngresado))
    }


}

function mediaAritmetica(array){
    let sumaElementos = array.reduce((elementVal,currentVal)=>currentVal += elementVal);
    let promedio = sumaElementos / array.length;
    return promedio;
}