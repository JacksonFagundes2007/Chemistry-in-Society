// get box 
const E80image = document.querySelector("#elementImage")  
const E80name = document.querySelector('#elementName')  
const E80token = document.querySelector('#token')  
const E80atomicNumber = document.querySelector('#atomicNumber')  
const E80atomicMass = document.querySelector('#atomicMass')  
const E80utility = document.querySelector('#utility') 
const E80reuse = document.querySelector('#reuse') 
// get Element 
const E80 = document.querySelector('#E80')  
// Inner HTML 
E80.addEventListener('click', () => {  
    E80image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/894302404193968188/080.png")  
    E80name.innerHTML = "Nome: Mercúrio";  
    E80token.innerHTML = "Símbolo: Hg";   
    E80atomicNumber.innerHTML = "Numero atômico: 80";  
    E80atomicMass.innerHTML = "Massa Atômica: 200.59";  
    E80utility.innerHTML = "Utilização: O mercúrio é um metal líquido e pesado. Esse elemento é utilizado em: termômetros, lâmpadas fluorescentes, barômetro, baterias, amálgama dentários, laboratórios médicos e na indústria de mineração."; 
    E80reuse.innerHTML = "Reutilização: O mercúrio presente no termômetro do mesmo pode ser reciclado, mas não há um procedimento oficial para esse processo. Então o mais correto é depositar o termômetro em uma embalagem plástica nos locais para descarte de pilhas, baterias e lâmpadas fluorescentes.";  
})