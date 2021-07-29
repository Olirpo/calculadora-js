var lista = [];

const printMedia = ()=>{
    const resultadoHTML = document.getElementById('resultado');
    if(lista[0]==undefined){
        alert('Debe introducir valores en su lista')
        return
    }
    let promedio = calcularMedia(lista);
    let promedioFixed = promedio.toFixed(2)
    resultadoHTML.innerHTML = `El promedio de tu lista de valores es de <strong>${promedioFixed}</strong>`
}   
const printMediana = ()=>{
    const resultadoHTML = document.getElementById('resultado');
    if(lista[0]==undefined){
        alert('Debe introducir valores en su lista')
        return
    }
    let mediana = calcularMediana(lista)
    resultadoHTML.innerHTML= `La mediana de su lista ingresada es <strong>${mediana}</strong>`

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
    resultadoHTML.innerHTML = ''
}

const calcularMedia = (array)=>{
    let sumaElementos = array.reduce((elementVal,currentVal)=>currentVal += elementVal);
    let promedio = sumaElementos / array.length;
    return promedio;
}
const calcularMediana = (array) => {
    let length = array.length;
    let middleLength = length/2
    let orderedArray = orderArray(array)
    if(isPair(length)){
        let half1 = orderedArray[middleLength-1]; // IAM RESTING ONE COZ THE INDEX 0 IS NOT CONTEMPLATED
        let half2 = orderedArray[middleLength]
        let mediana = calcularMedia([half1,half2]);
        return mediana
    }
    let ceiledMiddle = Math.floor(middleLength);
    let mediana = orderedArray[ceiledMiddle]
    return mediana
}
function isPair(num){
    return num % 2 === 0 
}
function orderArray(array) {
    return array.sort((a,b)=>a-b)
}
function objectModa(array){
    let object = {};
    array.map(e=>{
        if(object[e]){
            object[e] +=1
        }
        else{
            object[e] = 1
        }
        
    })
}