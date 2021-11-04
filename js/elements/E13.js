// get box 
const E13image = document.querySelector("#elementImage") 
const E13name = document.querySelector('#elementName') 
const E13token = document.querySelector('#token') 
const E13atomicNumber = document.querySelector('#atomicNumber') 
const E13atomicMass = document.querySelector('#atomicMass') 
const E13utility = document.querySelector('#utility') 
const E13reuse = document.querySelector('#reuse') 
// get Element 
const E13 = document.querySelector('#E13') 
// Inner HTML 
E13.addEventListener('click', () => { 
    E13image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465616755884092/001.png") 
    E13name.innerHTML = "Nome: Alumínio"; 
    E13token.innerHTML = "Símbolo: Al";  
    E13atomicNumber.innerHTML = "Numero atômico: 13"; 
    E13atomicMass.innerHTML = "Massa Atômica: 26.981"; 
    E13utility.innerHTML = "Utilização: O alumínio é um metal que possui muitas utilidades. Pode servir como material estrutural em aviões, barcos, automóveis, tanques, blindagens e outros. Também pode fazer parte de embalagens como papel de alumínio, latas e outras. Também pode fazer parte de coisas cotidianas, como: em janelas, portas, divisórias, grades, utensílios de cozinha e ferramentas"; 
    E13reuse.innerHTML = "Reutilização: O alumínio pode ser reciclado a partir de sucatas como de sobras do processo produtivo. A partir do seu processo de reciclagem ele pode fazer parte de esquadrias de janelas, componentes automotivos, eletrodomésticos, latas de bebidas, entre outros"; 
})