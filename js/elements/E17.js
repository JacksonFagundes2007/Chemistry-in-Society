// get box 
const E17image = document.querySelector("#elementImage") 
const E17name = document.querySelector('#elementName') 
const E17token = document.querySelector('#token') 
const E17atomicNumber = document.querySelector('#atomicNumber') 
const E17atomicMass = document.querySelector('#atomicMass') 
const E17utility = document.querySelector('#utility') 
const E17reuse = document.querySelector('#reuse') 
// get Element 
const E17 = document.querySelector('#E17') 
// Inner HTML 
E17.addEventListener('click', () => { 
    E17image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465667855073310/017.png") 
    E17name.innerHTML = "Nome: Cloro"; 
    E17token.innerHTML = "Símbolo: Cl";  
    E17atomicNumber.innerHTML = "Numero atômico: 17"; 
    E17atomicMass.innerHTML = "Massa Atômica: 35.453"; 
    E17utility.innerHTML = "Utilização: O cloro é um elemento químico famoso por estar na composição de desinfetante, bactericida e clareador, mas ele é usado na produção de PVC desde 1930.  o PVC é um material sustentável, menos dependente do petróleo do que qualquer outro termoplástico."; 
    E17reuse.innerHTML = "Reutilização: Sua principal reutilização é no formato de PVC, onde pode ser reutilizado de duas maneiras: Na energética, onde retira-se o calor intrínseco do PVC, que pode ser transformado em energia elétrica, e na reciclagem mecânica transforma o produto de PVC em um novo, sem processo químico."; 
})