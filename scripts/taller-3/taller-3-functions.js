var lista = [];

const printMedia = ()=>{
    const resultadoPromedio = document.getElementById('resultadoPromedio');
    if(lista[0]==undefined){
        alert('Debe introducir valores en su lista')
        return
    }
    let promedio = calcularMedia(lista);
    let promedioFixed = promedio.toFixed(2)
    resultadoPromedio.innerHTML = `El promedio de tu lista de valores es de <strong>${promedioFixed}</strong>`
}   
const addValue = ()=>{
    const listaHTML = document.getElementById('listaHTML');
    const inputNumber = document.getElementById('inputNumbers');
    const numeroIngresado = inputNumber.value;
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
        inputNumber.value=''
        return
    }
    else{
        listaHTML.innerHTML += `, ${numeroIngresado}`;
        lista.push(parseFloat(numeroIngresado));
        inputNumber.value=''
    }
}
const cleanList = ()=>{
    listaHTML.innerHTML = '';
    lista = [];
    resultadoPromedio.innerHTML = ''
}

const calcularMedia = (array)=>{
    let sumaElementos = array.reduce((elementVal,currentVal)=>currentVal += elementVal);
    let promedio = sumaElementos / array.length;
    return promedio;
}
const calcularMediana = (array) => {
    let length = array.length;
    let middleLength = length/2
    if(isPair(length)){
        let half1 = array[middleLength];
        let half2 = array[middleLength+1]
        let mediana = calcularMedia([half1,half2]);
        return mediana
    }
    let ceiledMiddle = Math.ceil(middleLength);
    let mediana = array[ceiledMiddle]
}
function isPair(num){
    return num % 2 === 0 
}
