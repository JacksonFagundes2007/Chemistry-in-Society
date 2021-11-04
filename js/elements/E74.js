// get box 
const E74image = document.querySelector("#elementImage")  
const E74name = document.querySelector('#elementName')  
const E74token = document.querySelector('#token')  
const E74atomicNumber = document.querySelector('#atomicNumber')  
const E74atomicMass = document.querySelector('#atomicMass')  
const E74utility = document.querySelector('#utility') 
const E74reuse = document.querySelector('#reuse') 
// get Element 
const E74 = document.querySelector('#E74')  
// Inner HTML 
E74.addEventListener('click', () => {  
    E74image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/894302326939090985/074.png")  
    E74name.innerHTML = "Nome: Tungstênio";  
    E74token.innerHTML = "Símbolo: W";   
    E74atomicNumber.innerHTML = "Numero atômico: 74";  
    E74atomicMass.innerHTML = "Massa Atômica: 183.840";  
    E74utility.innerHTML = "Utilização: O Tungstênio está presente nas ferramentas de obra urbanas."; 
    E74reuse.innerHTML = "Reutilização: As ferramentas feitas de Tungstênio são derretidas e a partir daí remodeladas.";  
})