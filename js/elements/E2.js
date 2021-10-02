// get box

const E2image = document.querySelector("#elementImage")
const E2name = document.querySelector('#elementName')
const E2token = document.querySelector('#token')
const E2atomicNumber = document.querySelector('#atomicNumber')
const E2atomicMass = document.querySelector('#atomicMass')
const E2content = document.querySelector('#text')


// get Element

const E2 = document.querySelector('#E2')

// Inner HTML

E2.addEventListener('click', () => {

    E2image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465622049075220/002.png")
    E2name.innerHTML = "Nome: Hélio";
    E2token.innerHTML = "Símbolo: He"; 
    E2atomicNumber.innerHTML = "Numero atômico: 2";
    E2atomicMass.innerHTML = "Massa Atômica: 4.002";
    E2content.innerHTML = "O Hélio é um gás nobre com diversas utilidades. Entre elas estão: enchimento de balões e dirigíveis,  utilização para mergulhadores em grande profundidade, aplicação de imagens por ressonância magnética, e o mais legal de todos, deixa sua voz muito fina, entre outras utilidades. Pode ser transferido de um balão para outro, por exemplo...";
}) 
