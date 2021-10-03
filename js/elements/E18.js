// get box

const E18image = document.querySelector("#elementImage")
const E18name = document.querySelector('#elementName')
const E18token = document.querySelector('#token')
const E18atomicNumber = document.querySelector('#atomicNumber')
const E18atomicMass = document.querySelector('#atomicMass')
const E18content = document.querySelector('#text')


// get Element

const E18 = document.querySelector('#E18')

// Inner HTML

E18.addEventListener('click', () => {

    E18image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465669167878174/018.png")
    E18name.innerHTML = "Nome: Argônio";
    E18token.innerHTML = "Símbolo: Ar"; 
    E18atomicNumber.innerHTML = "Numero atômico: 18";
    E18atomicMass.innerHTML = "Massa Atômica: 39.948";
    E18content.innerHTML = "O Argônio é um gás nobre incolor e inodoro, sendo um dos gases nobres mais abundantes da terra,  que é utilizado em extintores de incêndio, lasers para tratamento de doenças oculares e datação de objetos. Não pode ser reutilizado.";
})