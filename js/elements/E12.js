// get box

const E12image = document.querySelector("#elementImage")
const E12name = document.querySelector('#elementName')
const E12token = document.querySelector('#token')
const E12atomicNumber = document.querySelector('#atomicNumber')
const E12atomicMass = document.querySelector('#atomicMass')
const E12content = document.querySelector('#text')


// get Element

const E12 = document.querySelector('#E12')

// Inner HTML

E12.addEventListener('click', () => {

    E12image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465661966270494/012.png")
    E12name.innerHTML = "Nome: Magnésio";
    E12token.innerHTML = "Símbolo: Mg"; 
    E12atomicNumber.innerHTML = "Numero atômico: 12";
    E12atomicMass.innerHTML = "Massa Atômica: 24.305";
    E12content.innerHTML = "O magnésio é um elemento químico conhecido por fazer parte da estrutura de aviões, mísseis, maquinários e ferramentas, mas o que poucos sabem é que o magnésio é usado em produtos químicos como agente redutor na produção de metais( titânio, zircônio, urânio, berílio, etc). O magnésio pode ser reutilizado na limpeza das ligas de cloro, onde é colocado uma pequena quantidade de magnésio para limpar essas ligas.";
})