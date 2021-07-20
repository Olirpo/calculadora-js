const perimetroTriangulo = document.getElementById('perimetrotriangulo');
const alturaTriangulo = document.getElementById('alturatriangulo');
const areaTriangulo = document.getElementById('areatriangulo');

document.getElementById('botonTriangulo').addEventListener('click',()=>{
    const baseTriangulo = parseFloat(document.getElementById('basetriangulo').value);
    const ladoATriangulo = parseFloat(document.getElementById('ladoatriangulo').value);
    const ladoBTriangulo = parseFloat(document.getElementById('ladobtriangulo').value);
    console.log(ladoBTriangulo)
        // this functions validates if the triangle is corret, if any value its <=0 returns true
    if (validateTriangle(baseTriangulo, ladoATriangulo, ladoBTriangulo)){
        return perimetroTriangulo.value = "ERR INTRODUZCA LOS NUMEROS CORRECTAMENTE",
        alturaTriangulo.value = "ERR INTRODUZCA LOS NUMEROS CORRECTAMENTE",
        areaTriangulo.value = "ERR INTRODUZCA LOS NUMEROS CORRECTAMENTE";
    }
    perimetroTriangulo.value = baseTriangulo + ladoATriangulo + ladoBTriangulo;
    alturaTriangulo.value = Math.sqrt((baseTriangulo/2)**2);
    areaTriangulo.value = (baseTriangulo * alturaTriangulo.value) / 2;
});

function validateTriangle(base, A, B){
    if (A + B > base && base > 0) return false;
    return true;
   /*  if (isNaN(A) || isNaN(B) || isNaN(base)) return true; 
    if (A+B <= base) return true;
    if(base<=0 || A<=0 || B <= 0) return true;
    return false */
}