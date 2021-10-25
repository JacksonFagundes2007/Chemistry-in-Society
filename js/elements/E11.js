// get box 
const E11image = document.querySelector("#elementImage") 
const E11name = document.querySelector('#elementName') 
const E11token = document.querySelector('#token') 
const E11atomicNumber = document.querySelector('#atomicNumber') 
const E11atomicMass = document.querySelector('#atomicMass') 
const E11utility = document.querySelector('#utility') 
const E11reuse = document.querySelector('#reuse') 
// get Element 
const E11 = document.querySelector('#E11') 
// Inner HTML 
E11.addEventListener('click', () => { 
    E11image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465660691197982/011.png") 
    E11name.innerHTML = "Nome: Sódio"; 
    E11token.innerHTML = "Símbolo: Na";  
    E11atomicNumber.innerHTML = "Numero atômico: 11"; 
    E11atomicMass.innerHTML = "Massa Atômica: 22.989"; 
    E11utility.innerHTML = "Utilização: O sódio é importante para a sociedade de duas maneira: O sódio na sua forma mineral auxilia na regulação osmótica do sangue, de fluidos intracelulares e do equilíbrio ácido-base, e na sua forma de Hidróxido de sódio ( soda cáustica) é usado na indústria de papel, tecidos, detergentes, alimentos e biodiesel."; 
    E11reuse.innerHTML = "Reutilização: A partir da sua reutilização, o sódio auxilia na produção de soda cáustica, cloro e barrilha."; 
})