// get box 
const E7image = document.querySelector("#elementImage") 
const E7name = document.querySelector('#elementName') 
const E7token = document.querySelector('#token') 
const E7atomicNumber = document.querySelector('#atomicNumber') 
const E7atomicMass = document.querySelector('#atomicMass') 
const E7utility = document.querySelector('#utility') 
const E7reuse = document.querySelector('#reuse') 
// get Element 
const E7 = document.querySelector('#E7') 
// Inner HTML 
E7.addEventListener('click', () => { 
    E7image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465629129064448/007.png") 
    E7name.innerHTML = "Nome: Nitrogênio"; 
	E7token.innerHTML = "Símbolo:  N"; 
	E7atomicNumber.innerHTML = "Numero atômico: 7"; 
	E7atomicMass.innerHTML = "Massa Atômica:  14,006"; 
    E7utility.innerHTML = "Utilização: O nitrogênio é utilizado na indústria na fabricação de aço inoxidável, como explosivos (TNT), como combustível para foguetes, para encher pneus de alto desempenho e na medicina nuclear."; 
    E7reuse.innerHTMl = "Reutilização: Como o nitrogênio é usado na produção de aço, a principal reutilização do elemento é a reciclagem de latinhas e demais objetos com composição de aço."; 
})