// get box 
const E6image = document.querySelector("#elementImage") 
const E6name = document.querySelector('#elementName') 
const E6token = document.querySelector('#token') 
const E6atomicNumber = document.querySelector('#atomicNumber') 
const E6atomicMass = document.querySelector('#atomicMass') 
const E6utility = document.querySelector('#utility') 
const E6reuse = document.querySelector('#reuse') 
// get Element 
const E6 = document.querySelector('#E6') 
// Inner HTML 
E6.addEventListener('click', () => { 
    E6image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465627971428382/006.png") 
    E6name.innerHTML = "Nome: Carbono"; 
    E6token.innerHTML = "Símbolo: C"; 
    E6atomicNumber.innerHTML = "Numero atômico: 6"; 
    E6atomicMass.innerHTML = "Massa Atômica: 12,010"; 
    E6utility.innerHTML = "Utilização: O carbono está presente na maioria dos compostos orgânicos. Ele é utilizado na indústria em: usinas de produção de energia, fabricação de joias, em ligas metálicas e como combustível de máquinas e usinas."; 
    E6reuse.innerHTMl = "Reutilização: O carbono é reutilizado na produção das bicicletas especializadas, onde todas as fibras metálicas são recicladas."; 
})