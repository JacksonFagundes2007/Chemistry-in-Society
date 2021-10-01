// get box

const E3image = document.querySelector("#elementImage")
const E3name = document.querySelector('#elementName')
const E3token = document.querySelector('#token')
const E3atomicNumber = document.querySelector('#atomicNumber')
const E3atomicMass = document.querySelector('#atomicMass')
const E3content = document.querySelector('#text')


// get Element

const E3 = document.querySelector('#E3')

// Inner HTML

E3.addEventListener('click', () => {

    E3image.setAttribute('src', "/images/elements/003.png")
    E3name.innerHTML = "Nome: lítio"; 
    E3token.innerHTML = "Símbolo: Li"; 
    E3atomicNumber.innerHTML = "Numero atômico: 3"; 
    E3atomicMass.innerHTML = "Massa Atômica: 6,941"; 
    E3content.innerHTML = "O Lítio é um metal alcalino solido em temperatura ambiente. Ele tem como principais utilizações: composição de aviões, baterias( tanto de ion quanto de lítio) e é utilizado na fabricação de torpedos e vidros.  O Lítio pode ser reutilizado nas baterias e nos vidros.";
})