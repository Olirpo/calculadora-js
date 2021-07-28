const resultadoPrecio = document.getElementById('resultado');
const cupons = []
const aplicarDescuento = ()=>{
    let precioOriginal = parseFloat(document.getElementById('precio').value);
    let descuento = parseFloat(document.getElementById('descuento').value);
    if(precioOriginal > 0){
        let precioFinal = (precioOriginal * (100-descuento))/100
        resultadoPrecio.innerHTML = `El precio final sería de <strong style="color:black">${precioFinal}</strong>`
    }
    else{
        alert('introduza los valores correctamente')
    }
}