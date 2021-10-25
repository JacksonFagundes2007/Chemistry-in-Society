// get box 
const E55image = document.querySelector("#elementImage") 
const E55name = document.querySelector('#elementName') 
const E55token = document.querySelector('#token') 
const E55atomicNumber = document.querySelector('#atomicNumber') 
const E55atomicMass = document.querySelector('#atomicMass') 
const E55utility = document.querySelector('#utility') 
const E55reuse = document.querySelector('#reuse') 
// get Element 
const E55 = document.querySelector('#E55') 
// Inner HTML 
E55.addEventListener('click', () => { 
    E55image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/894301874382061640/055.png") 
    E55name.innerHTML = "Nome: Césio"; 
    E55token.innerHTML = "Símbolo: Cs";  
    E55atomicNumber.innerHTML = "Numero atômico: 55"; 
    E55atomicMass.innerHTML = "Massa Atômica: 132.905"; 
    E55utility.innerHTML = "Utilização: O Césio é um metal usado como catalisador na hidrogenação de certos compostos orgânicos e o fluoreto de césio é usado extensivamente na química orgânica como base e como fonte de íons fluoretos.";  
    E55reuse.innerHTML = "Reutilização: O Césio não possui nenhum modo de reciclagem e reutilização."; 
})