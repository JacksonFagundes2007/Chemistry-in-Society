// get box

const E3image = document.querySelector("#elementImage")
const E3name = document.querySelector('#elementName')
const E3token = document.querySelector('#token')
const E3atomicNumber = document.querySelector('#atomicNumber')
const E3atomicMass = document.querySelector('#atomicMass')
const E3utility = document.querySelector('#utility')
const E3reuse = document.querySelector('#reuse')

// get Element

const E3 = document.querySelector('#E3')

// Inner HTML

E3.addEventListener('click', () => {

    E3image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465623600988170/003.png")
    E3name.innerHTML = "Nome: lítio";
    E3token.innerHTML = "Símbolo: Li"; 
    E3atomicNumber.innerHTML = "Numero atômico: 3";
    E3atomicMass.innerHTML = "Massa Atômica: 6.941";
    E3utility.innerHTML = "Utilização: O Lítio é um metal alcalino solido em temperatura ambiente. Ele tem como principais utilizações: composição de aviões, baterias( tanto de íon quanto de lítio) e é utilizado na fabricação de torpedos e vidros.";
    E3reuse.innerHTML = "Reutilização: O Lítio pode ser Reutilizado nas baterias e nos vidros.";
})