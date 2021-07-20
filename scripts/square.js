const perimetroCuadrado = document.getElementById('pericuadrado');
const areaCuadrado = document.getElementById('areacuadrado');
document.getElementById('botonCuadrado').addEventListener("click",()=>{
    var ladoCuadrado = parseFloat(document.getElementById('ladocuadrado').value)
    if(ladoCuadrado > 0){
        return perimetroCuadrado.value = (ladoCuadrado*4).toFixed(2),
        areaCuadrado.value = (ladoCuadrado**2).toFixed(2);
    }
    
    return perimetroCuadrado.value = "ERR INTRODUZCA LOS NUMEROS CORRECTAMENTE",
        areaCuadrado.value = "ERR INTRODUZCA LOS NUMEROS CORRECTAMENTE"
})
