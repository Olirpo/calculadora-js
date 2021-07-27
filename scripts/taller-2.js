const resultadoPrecio = document.getElementById('resultado');

const descuentos = {
    'oli2021': 25,
    'soyadminbro': 100,
    'unamonedita': 0.5,
}

const aplicarDescuento = ()=>{
    let precioOriginal = parseFloat(document.getElementById('precio').value);
    let codigoDescuento = document.getElementById('descuento').value;
    let descuento = descuentos[codigoDescuento];
    if(precioOriginal < 0){
        alert('Introduzca un precio correcto');
        return
    }
    if(codigoDescuento == ''){
        resultadoPrecio.innerHTML = `Usted no ingresó ningún codigo de descuento.<br/>
                                     Su precio final queda en <strong style="color:black">
                                     ${precioOriginal}$</strong>`
        return;
    }
    if(descuento == undefined){
        alert('Su codigo de descuento no es valido');
        return
    }
    else{
        let precioFinal = (precioOriginal*(100-descuento))/100;
        resultadoPrecio.innerHTML = `El codigo que usted introdujo cuenta con un <strong style="color:black">
                                    ${descuento}%</strong> de descuento<br/>
                                     Su precio final queda en <strong style="color:black">
                                     ${precioFinal}$</strong>`
    }
}