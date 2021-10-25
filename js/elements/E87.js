// get box 
const E87image = document.querySelector("#elementImage")  
const E87name = document.querySelector('#elementName')  
const E87token = document.querySelector('#token')  
const E87atomicNumber = document.querySelector('#atomicNumber')  
const E87atomicMass = document.querySelector('#atomicMass')  
const E87utility = document.querySelector('#utility') 
const E87reuse = document.querySelector('#reuse') 
// get Element 
const E87 = document.querySelector('#E87')  
// Inner HTML 
E87.addEventListener('click', () => {  
    E87image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/894302419863879791/087.png")  
    E87name.innerHTML = "Nome: Frâncio";  
    E87token.innerHTML = "Símbolo: Fr";   
    E87atomicNumber.innerHTML = "Numero atômico: 87";  
    E87atomicMass.innerHTML = "Massa Atômica: (223)";  
    E87utility.innerHTML = "Utilização: O Frâncio é um metal alcalino altamente radioativo, e um dos mais raros que pode ser encontrado na natureza. Não há aplicações comerciais para o frâncio devido a sua vida muito curta, e também não é possível obter este elemento em quantidades comerciais significativas. Somente é usado em tarefas de investigação, tanto no campo da biologia como também no da estrutura atômica."; 
    E87reuse.innerHTML = "Reutilização: Não pode ser reutilizado.";  
})