// get box 
const E92image = document.querySelector("#elementImage") 
const E92name = document.querySelector('#elementName') 
const E92token = document.querySelector('#token') 
const E92atomicNumber = document.querySelector('#atomicNumber') 
const E92atomicMass = document.querySelector('#atomicMass') 
const E92utility = document.querySelector('#utility') 
const E92reuse = document.querySelector('#reuse') 
// get Element 
const E92 = document.querySelector('#E92') 
// Inner HTML 
E92.addEventListener('click', () => { 
    E92image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465616755884092/001.png") 
    E92name.innerHTML = "Nome: Urânio"; 
    E92token.innerHTML = "Símbolo: U";  
    E92atomicNumber.innerHTML = "Numero atômico: 92"; 
    E92atomicMass.innerHTML = "Massa Atômica: 238.00"; 
    E92utility.innerHTML = "Utilização: O Urânio é um dos elementos mais radioativos do mundo, justamente por isso que ele é utilizado na produção de bombas atômicas. Mas o Urânio tem fins mais pacíficos, como na geração de energia, combustível em meios agrícolas e tratamentos de câncer (alguns cânceres, não todos)."; 
    E92reuse.innerHTML = "Reutilização: O Urânio não possui nenhum método de reciclagem ou reutilização."; 
})