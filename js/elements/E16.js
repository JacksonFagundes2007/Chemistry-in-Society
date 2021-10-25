// get box 
const E16image = document.querySelector("#elementImage") 
const E16name = document.querySelector('#elementName') 
const E16token = document.querySelector('#token') 
const E16atomicNumber = document.querySelector('#atomicNumber') 
const E16atomicMass = document.querySelector('#atomicMass') 
const E16utility = document.querySelector('#utility') 
const E16reuse = document.querySelector('#reuse') 
// get Element 
const E16 = document.querySelector('#E16') 
// Inner HTML 
E16.addEventListener('click', () => { 
    E16image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465666638721054/016.png") 
    E16name.innerHTML = "Nome: Enxofre"; 
    E16token.innerHTML = "Símbolo: S";  
    E16atomicNumber.innerHTML = "Numero atômico: 16"; 
    E16atomicMass.innerHTML = "Massa Atômica:  32.065"; 
    E16utility.innerHTML = "Utilização: O enxofre é um não metal que possui diversas funções na indústria, como: nas indústrias de pigmentação, celulose, petróleo e metalúrgica; produção de baterias, detergentes, fungicidas, cosméticos, explosivos e no tratamento da água."; 
    E16reuse.innerHTML = "Reutilização: A principal forma de reutilização do enxofre é na reciclagem de baterias, já que o enxofre está presente na produção destas."; 
})