// get box 
const E19image = document.querySelector("#elementImage") 
const E19name = document.querySelector('#elementName') 
const E19token = document.querySelector('#token') 
const E19atomicNumber = document.querySelector('#atomicNumber') 
const E19atomicMass = document.querySelector('#atomicMass') 
const E19content = document.querySelector('#text') 
// get Element 
const E19 = document.querySelector('#E19') 
// Inner HTML 
E19.addEventListener('click', () => { 
    E19image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465670614933564/019.png") 
    E19name.innerHTML = "Nome: Potássio"; 
    E19token.innerHTML = "Símbolo: K";  
    E19atomicNumber.innerHTML = "Numero atômico: 19"; 
    E19atomicMass.innerHTML = "Massa Atômica: 39.098"; 
    E19content.innerHTML = " O potássio é um metal alcalino muito abundante na natureza que se funde em baixas temperaturas. Esse elemento químico é usado como células fotoelétricas. Esse elemento é mais usado pela indústria quando misturado com outros elementos, daí ele pode ser usado na fabricação de pólvora e em aparelhos de respiração usados por bombeiros e mineiros. Esse elemento é reutilizado na produção de fertilizantes."; 
})