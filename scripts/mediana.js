//@ts-check

const selectionInput = document.getElementById('form-chooser__selector');
const options ={
    1:'media',
    2:'mediana',
    3:'moda'
}
selectionInput.addEventListener('change',(e)=>{
    const choiceIndex = selectionInput.selectedIndex;
    const choice = options[choiceIndex];
    console.log(choice)
});