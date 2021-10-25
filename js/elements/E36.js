// get box 
const E36image = document.querySelector("#elementImage")  
const E36name = document.querySelector('#elementName')  
const E36token = document.querySelector('#token')  
const E36atomicNumber = document.querySelector('#atomicNumber')  
const E36atomicMass = document.querySelector('#atomicMass')  
const E36utility = document.querySelector('#utility') 
const E36reuse = document.querySelector('#reuse') 
// get Element 
const E36 = document.querySelector('#E36')  
// Inner HTML 
E36.addEventListener('click', () => {  
    E36image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/894301360034578452/036.png")  
    E36name.innerHTML = "Nome: Criptônio ";  
    E36token.innerHTML = "Símbolo: Kr";   
    E36atomicNumber.innerHTML = "Numero atômico: 36";  
    E36atomicMass.innerHTML = "Massa Atômica: 83.798";  
    E36utility.innerHTML = "Utilização: O Criptônio é um gás nobre,  que é utilizado principalmente para a produção de lâmpadas incandescentes e fluorescentes, mas também é utilizado em sistemas de iluminação de aeroportos, lasers para cirurgias de retina, e seu isótopo, o Kr-81m é usado no estudo do pulmão pela medicina nuclear. Uma observação, é que o elemento químico do Criptônio não tem relação com o Super-homem.";  
    E36reuse.innerHTML = "Reutilização: Não pode ser reutilizado.";  
})