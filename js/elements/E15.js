// get box 
const E15image = document.querySelector("#elementImage") 
const E15name = document.querySelector('#elementName') 
const E15token = document.querySelector('#token') 
const E15atomicNumber = document.querySelector('#atomicNumber') 
const E15atomicMass = document.querySelector('#atomicMass') 
const E15utility = document.querySelector('#utility') 
const E15reuse = document.querySelector('#reuse') 
// get Element 
const E15 = document.querySelector('#E15') 
// Inner HTML 
E15.addEventListener('click', () => { 
    E15image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465665464311808/015.png") 
    E15name.innerHTML = "Nome: Fósforo";  
	E15token.innerHTML = "Símbolo: P";  
	E15atomicNumber.innerHTML = "Numero atômico: 15";  
	E15atomicMass.innerHTML = "Massa Atômica: 30, 973762";  
    E15utility.innerHTML = " O Fósforo é um elemento químico situado no grupo dos não metais, suas principais utilizações são voltadas para a produção de fertilizantes, lâmpadas fluorescentes e de fósforos."; 
    E15reuse.innerHTML = " Quando reutilizado o fosforo pode melhorar sua qualidade, pois é adicionado material orgânico, reduzindo a radioatividade."; 
})