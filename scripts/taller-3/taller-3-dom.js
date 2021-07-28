//@ts-check
// DOM ELEMENTS TO MODIFY
const selectionInput = document.getElementById('form-chooser__selector');
const root = document.getElementById('root');


selectionInput.addEventListener('change',(e)=>{
    // @ts-ignore
    
    const choiceIndex = selectionInput.selectedIndex;
    const choice = options[choiceIndex];
    root.innerHTML = choice
});