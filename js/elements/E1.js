// get box

const E1image = document.querySelector("#elementImage")
const E1name = document.querySelector('#elementName')
const E1token = document.querySelector('#token')
const E1atomicNumber = document.querySelector('#atomicNumber')
const E1atomicMass = document.querySelector('#atomicMass')
const E1utility = document.querySelector('#utility')
const E1reuse = document.querySelector('#reuse')
const E1content = document.querySelector('#text')


// get Element

const E1 = document.querySelector('#E1')

// Inner HTML

E1.addEventListener('click', () => {

    E1image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465616755884092/001.png")
    E1name.innerHTML = "Nome: Hidrogênio";
    E1token.innerHTML = "Símbolo: H"; 
    E1atomicNumber.innerHTML = "Numero atômico: 1";
    E1atomicMass.innerHTML = "Massa Atômica: 1,008";
    E1utility.innerHTML = "Utilidade";
    E1reuse.innerHTML = "Reutilização"
    E1content.innerHTML = "O hidrogênio é o elemento químico mais leve e abundante de todo o universo. O hidrogênio é utilizado em indústrias para transformar óleos crus em óleos refinados e também no transporte de combustível ( mais especificadamente na segurança). O Hidrogênio é reutilizado na produção de fertilizantes.";
})