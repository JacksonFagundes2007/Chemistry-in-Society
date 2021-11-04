// get box 
const E84image = document.querySelector("#elementImage")  
const E84name = document.querySelector('#elementName')  
const E84token = document.querySelector('#token')  
const E84atomicNumber = document.querySelector('#atomicNumber')  
const E84atomicMass = document.querySelector('#atomicMass')  
const E84utility = document.querySelector('#utility') 
const E84reuse = document.querySelector('#reuse') 
// get Element 
const E84 = document.querySelector('#E84')  
// Inner HTML 
E84.addEventListener('click', () => {  
    E84image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/894302413559836692/084.png")  
    E84name.innerHTML = "Nome: Polônio";  
    E84token.innerHTML = "Símbolo: Po";   
    E84atomicNumber.innerHTML = "Numero atômico: 84";  
    E84atomicMass.innerHTML = "Massa Atômica: (209)";  
    E84utility.innerHTML = "Utilização: O Polônio é muito radioativo, mas ainda sim é utilizado. O Polônio é usado, por exemplo, em escovas de fotógrafos (usadas para limpar as câmeras profissionais). O Polônio ainda pode ser utilizado como fonte de energia termoelétrica em satélites."; 
    E84reuse.innerHTML = "Reutilização: O Polônio não possui nenhum método de reciclagem ou reutilização.";  
})