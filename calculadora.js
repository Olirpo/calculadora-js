const log = console.log;
function calcularCuadrado(lado){
    const perimetro = lado*4;
    const area = lado*lado;
    console.group("cuadrado");
    log(`Los lados de su cuadrado son de ${lado}cm`);
    log(`El perimetro de tu cuadrado es de ${perimetro}cm`);
    log(`El area de tu cuadrado es de ${area}`)
    
}
function calcularTriangulo(base, lado1, lado2){
    const perimetro = base + lado1 + lado2;
    const altura = Math.sqrt((base/2)**2 + lado1**2)

}