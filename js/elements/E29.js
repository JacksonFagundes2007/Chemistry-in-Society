// get box 
const E29image = document.querySelector("#elementImage") 
const E29name = document.querySelector('#elementName') 
const E29token = document.querySelector('#token') 
const E29atomicNumber = document.querySelector('#atomicNumber') 
const E29atomicMass = document.querySelector('#atomicMass') 
const E29utility = document.querySelector('#utility') 
const E29reuse = document.querySelector('#reuse') 
// get Element 
const E29 = document.querySelector('#E29') 
// Inner HTML 
E29.addEventListener('click', () => { 
    E29image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465778790203412/029.png") 
    E29name.innerHTML = "Nome: Cobre"; 
    E29token.innerHTML = "Símbolo: Cu";  
    E29atomicNumber.innerHTML = "Numero atômico: 29"; 
    E29atomicMass.innerHTML = "Massa Atômica: 63.546"; 
    E29utility.innerHTML = "Utilização: O cobre é um dos elementos mais abundantes da Terra, mas normalmente é encontrado na sua forma de mineral. Ele é utilizado pelas indústrias na produção de moedas, medalhas, produção de telhados e em fios para instalações elétricas e motores."; 
    E29reuse.innerHTML = "Reutilização: O cobre pode ser reutilizado pelas indústrias quando é derretido para ser usado na produção de moedas."; 
})