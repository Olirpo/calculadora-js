//@ts-check
// DOM ELEMENTS TO MODIFY
const selectionInput = document.getElementById('form-chooser__selector');
const root = document.getElementById('root');


selectionInput.addEventListener('change',(e)=>{
    // @ts-ignore
    const choiceIndex = selectionInput.selectedIndex; //Search for what option has been chosen
    const choice = options[choiceIndex]; //An object with all the HTML in the file taller-3-html.js
    root.innerHTML = choice; //Here I print all the html in my div called root
    // @ts-ignore
    document.getElementById('listaHTML').innerHTML = lista.map((currentValue, index)=>index==0 ? currentValue : ` ${currentValue}`)
});