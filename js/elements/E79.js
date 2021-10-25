// get box 
const E79image = document.querySelector("#elementImage")  
const E79name = document.querySelector('#elementName')  
const E79token = document.querySelector('#token')  
const E79atomicNumber = document.querySelector('#atomicNumber')  
const E79atomicMass = document.querySelector('#atomicMass')  
const E79utility = document.querySelector('#utility') 
const E79reuse = document.querySelector('#reuse') 
// get Element 
const E79 = document.querySelector('#E79')  
// Inner HTML 
E79.addEventListener('click', () => {  
    E79image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/894302402377826324/079.png")  
    E79name.innerHTML = "Nome: Ouro";  
    E79token.innerHTML = "Símbolo: Au";   
    E79atomicNumber.innerHTML = "Numero atômico: 79";  
    E79atomicMass.innerHTML = "Massa Atômica: 196.966";  
    E79utility.innerHTML = "Utilização: O ouro é um metal que não pode ser utilizado na sua forma pura, pois é muito mole. Por isso as indústrias endurecem formando ligas metálicas. O ouro então é utilizado em joalherias, fabricação de moedas e como padrão monetário em muitos países."; 
    E79reuse.innerHTML = "Reutilização: O ouro é reutilizado nas indústrias eletrônicas, onde faz parte da produção dos laminados de placas de computadores.";  
})