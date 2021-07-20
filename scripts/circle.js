const diametroCirculo = document.getElementById('diametrocirculo');
const circunferenciaCirculo = document.getElementById('circunferenciacirculo');
const areaCirculo = document.getElementById('areacirculo');

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