// get box   
const E28image = document.querySelector("#elementImage")    
const E28name = document.querySelector('#elementName')    
const E28token = document.querySelector('#token')    
const E28atomicNumber = document.querySelector('#atomicNumber')    
const E28atomicMass = document.querySelector('#atomicMass')    
const E28utility = document.querySelector('#utility') 
const E28reuse = document.querySelector('#reuse')  
// get Element   
const E28 = document.querySelector('#E28')    
// Inner HTML   
E28.addEventListener('click', () => {    
     
    E28image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465616755884092/001.png")    
    E28name.innerHTML = "Nome: Níquel";    
    E28token.innerHTML = "Símbolo: Ni";     
    E28atomicNumber.innerHTML = "Numero atômico: 28";    
    E28atomicMass.innerHTML = "Massa Atômica: 58.694"; 
    E28utility.innerHTML = "Utilização: O Níquel é utilizado das seguintes maneiras: como catalisador, fabricação de aço inoxidável, na indústria aeroespacial e na proteção contra corrosão e oxidação.";    
    E28reuse.innerHTML = "Reutilização: O Níquel é Reutilizado na sua forma metálica, onde ele é derretido e usado novamente como liga"; 
})