// get box 
const E34image = document.querySelector("#elementImage")  
const E34name = document.querySelector('#elementName')  
const E34token = document.querySelector('#token')  
const E34atomicNumber = document.querySelector('#atomicNumber')  
const E34atomicMass = document.querySelector('#atomicMass')  
const E34content = document.querySelector('#text')  
// get Element 
const E34 = document.querySelector('#E34')  
// Inner HTML 
E34.addEventListener('click', () => {  
    E34image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/894301349490098176/034.png")  
    E34name.innerHTML = "Nome: Selênio";  
    E34token.innerHTML = "Símbolo: Se";   
    E34atomicNumber.innerHTML = "Numero atômico: 34";  
    E34atomicMass.innerHTML = "Massa Atômica: 78.900";  
    E34content.innerHTML = " O Selênio é um elemento químico famoso por fazer parte da produção de vidros, mas ele também faz parte da produção de painéis solares e aço inoxidável. A única reutilização do selênio é na produção de fertilizantes.";  
})