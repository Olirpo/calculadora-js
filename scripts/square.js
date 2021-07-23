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
        alert('Su triangulo no es valido, por favor introduzca los valores correctamente')
    }
}
