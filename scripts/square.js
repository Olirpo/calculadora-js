///////// DOM MANIPULATION CONSTS //////////////
const respuestaCuadrado = document.getElementById('resultadoCuadrado');
const resultadoTriangulo = document.getElementById('resultadoTriangulo');


//////// SQUARE FUNCTIONS //////////
const perimetroCuadrado = ()=>{
    let lado = parseFloat(document.getElementById('ladocuadrado').value);
    if (lado>0){
        let perimetro = lado*4;
    respuestaCuadrado.innerHTML = `El perimetro de tu cuadrado es de <strong style="color:black">${perimetro}cm</strong>`;
    }
    else{
        alert('Introduzca un valor correcto')
    }
    
}
const areaCuadrado = ()=>{
    let lado = parseFloat(document.getElementById('ladocuadrado').value);
    let area = lado**2;
    respuestaCuadrado.innerHTML = `El area de tu cuadrado es de <strong style="color:black">${area}cm²</strong>`
}
///////// TRIANGLE FUNCTIONS //////////
const perimetroTriangulo = ()=>{
    let base = parseFloat(document.getElementById('basetriangulo').value);
    let ladoA = parseFloat(document.getElementById('ladoatriangulo').value);
    let ladoB = parseFloat(document.getElementById('ladobtriangulo').value);
    let triangulo = new Triangulo(base, ladoA, ladoB);
    if (triangulo.isValid()){
        let perimetro = triangulo.perimetro()
        resultadoTriangulo.innerHTML = `El perimetro de tu triangulo es igual a 
                                    <strong style="color:black">${perimetro}cm</strong>`;
    }
    else{
        alert('Su triangulo no es valido, por favor introduzca los valores correctamente');
    }
}
const areaTriangulo = () =>{
    let ladoA = parseFloat(document.getElementById('basetriangulo').value);
    let ladoB = parseFloat(document.getElementById('ladoatriangulo').value);
    let ladoC = parseFloat(document.getElementById('ladobtriangulo').value);
    let triangulo = new Triangulo(ladoA, ladoB, ladoC);
    if(triangulo.isValid()){
        let sp = triangulo.perimetro()/2
        console.log(sp)
        let area = Math.sqrt(sp * (sp -ladoA)*(sp-ladoB)*(sp-ladoC));
        area = area.toFixed(2)
        resultadoTriangulo.innerHTML = `El area de tu triangulo es igual a 
                                    <strong style="color:black">${area}cm²</strong>`;
    }
    else{
        alert('Su triangulo no es valido, por favor introduzca los valores correctamente');
    }
}
const alturaTriangulo = () =>{
    let base = parseFloat(document.getElementById('basetriangulo').value);
    let ladoA = parseFloat(document.getElementById('ladoatriangulo').value);
    let ladoB = parseFloat(document.getElementById('ladobtriangulo').value);
    let triangulo = new Triangulo(base, ladoA, ladoB);
    if(triangulo.isValid()){
        let sp = triangulo.perimetro()/2
        let area = Math.sqrt(sp * (sp - base)*(sp-ladoA)*(sp-ladoB));
        let altura = (area*2)/base;
        resultadoTriangulo.innerHTML = `La altura de tu triangulo es igual a 
                                    <strong style="color:black">${altura}cm</strong>`;
}
}
const resultadoCirculo = document.getElementById('diametrocirculo');


document.getElementById('botonCirculo').addEventListener('click', ()=>{
    const radioCirculo = parseFloat(document.getElementById('radioCirculo').value);
    if(radioCirculo>0){
        return diametroCirculo.value = (radioCirculo*2).toFixed(2),
        circunferenciaCirculo.value = (diametroCirculo.value * Math.PI).toFixed(2),
        areaCirculo.value = (Math.PI * radioCirculo**2).toFixed(2);
    }
    return diametroCirculo.value = "ERR INTRODUZCA LOS NUMEROS CORRECTAMENTE",
        circunferenciaCirculo.value = "ERR INTRODUZCA LOS NUMEROS CORRECTAMENTE",
        areaCirculo.value = "ERR INTRODUZCA LOS NUMEROS CORRECTAMENTE";

});
