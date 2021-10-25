// get box 
const E53image = document.querySelector("#elementImage") 
const E53name = document.querySelector('#elementName') 
const E53token = document.querySelector('#token') 
const E53atomicNumber = document.querySelector('#atomicNumber') 
const E53atomicMass = document.querySelector('#atomicMass') 
const E53utility = document.querySelector('#utility') 
const E53reuse = document.querySelector('#reuse') 
// get Element 
const E53 = document.querySelector('#E55') 
// Inner HTML 
E53.addEventListener('click', () => { 
    E53image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/894301868451303464/053.png") 
    E53name.innerHTML = "Nome: Iodo"; 
    E53token.innerHTML = "Símbolo: I";  
    E53atomicNumber.innerHTML = "Numero atômico: 53"; 
    E53atomicMass.innerHTML = "Massa Atômica: 126.904"; 
    E53utility.innerHTML = "Utilização: O Iodo é um não metal que é famoso por estar presente no sal de cozinha, mas tem aplicações como: teste para a presença de amido, desinfetante na medicina, tintas de impressão, corantes, pigmentos e catalisador na indústria. O isótopo radioativo do Iodo, o Iodo-131 pode ser utilizado para tratamento de câncer na tireoide."; 
    E53reuse.innerHTML = "Reutilização: Mão possui reutilização.;" 
})