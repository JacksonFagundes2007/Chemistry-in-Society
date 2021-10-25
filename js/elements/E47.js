// get box 
const E47image = document.querySelector("#elementImage") 
const E47name = document.querySelector('#elementName') 
const E47token = document.querySelector('#token') 
const E47atomicNumber = document.querySelector('#atomicNumber') 
const E47atomicMass = document.querySelector('#atomicMass') 
const E47utility = document.querySelector('#utility') 
const E47reuse = document.querySelector('#reuse') 
// get Element 
const E47 = document.querySelector('#E47') 
// Inner HTML 
E47.addEventListener('click', () => { 
    E47image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/894301827594616852/047.png") 
    E47name.innerHTML = "Nome: Prata"; 
    E47token.innerHTML = "Símbolo: Ag";  
    E47atomicNumber.innerHTML = "Numero atômico: 47"; 
    E47atomicMass.innerHTML = "Massa Atômica: 107.868"; 
    E47utility.innerHTML = "Utilização: A prata é um metal que pode ser encontrado em 3 origens diferentes; Pode ser natural, encontrada em sua forma pura ou associada a outros materiais; de forma industrial, obtida a partir do processamento de materiais como chumbo, cobre e zinco, ou de forma sintética, quando é obtida a partir de reações químicas com sais que apresentam prata em sua constituição, como o nitrato de prata, que, ao reagir com o cobre, origina um sal e prata metálica pura. A prata pode ser utilizada na produção de: joias e objetos de decoração, em talheres de prata, na produção de instrumentos musicais, fabricação de radiadores de automóveis, fabricação de moedas, na área odontológica, na formação de ligas para solda, Utilizada para provocar chuvas, Produção de explosivos, Produção de baterias de alta capacidade, Serve como cimento para vidro e é utilizado nas fotografias convencionais."; 
    E47reuse.innerHTML = "Reutilização: A prata pode ser reutilizada em chapas e fios, por meio do processo de soldagem."; 
})