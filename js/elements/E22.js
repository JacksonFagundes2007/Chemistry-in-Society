// get box 
const E22image = document.querySelector("#elementImage") 
const E22name = document.querySelector('#elementName') 
const E22token = document.querySelector('#token') 
const E22atomicNumber = document.querySelector('#atomicNumber') 
const E22atomicMass = document.querySelector('#atomicMass') 
const E22utility = document.querySelector('#utility') 
const E22reuse = document.querySelector('#reuse') 
// get Element 
const E22 = document.querySelector('#E22') 
// Inner HTML 
E22.addEventListener('click', () => { 
    E22image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465768115728385/022.png") 
    E22name.innerHTML = "Nome: Titânio"; 
    E22token.innerHTML = "Símbolo: Ti";  
    E22atomicNumber.innerHTML = "Numero atômico: 22"; 
    E22atomicMass.innerHTML = "Massa Atômica: 47.867"; 
    E22utility.innerHTML = "Utilização: O titânio é um metal conhecido por ser resistente, e ele é mesmo. Justamente por ser resistente, ele é usado na indústria aeroespacial (na formação das estruturas de aviões e turbinas para aviões supersônico). Mas suas aplicações não ficam apenas na indústria aeroespacial, já que ele é utilizado em implantes dentários, está presente na composição de joias e é utilizado em tratamentos de câncer."; 
    E22reuse.innerHTML = "Reutilização: O titânio é reutilizado quando é retirado dos ossos de pessoas mortas. Quando uma pessoa com dentes, joelhos ou qualquer outro osso com titânio implantado cirurgicamente morre, seus ossos com o metal são retirados e reciclados."; 
})