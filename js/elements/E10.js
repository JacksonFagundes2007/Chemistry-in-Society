// get box

const E10image = document.querySelector("#elementImage")
const E10name = document.querySelector('#elementName')
const E10token = document.querySelector('#token')
const E10atomicNumber = document.querySelector('#atomicNumber')
const E10atomicMass = document.querySelector('#atomicMass')
const E10content = document.querySelector('#text')


// get Element

const E10 = document.querySelector('#E10')

// Inner HTML

E10.addEventListener('click', () => {

    E10image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465659764252672/010.png")
    E10name.innerHTML = "Nome: Neônio";
    E10token.innerHTML = "Símbolo: Ne"; 
    E10atomicNumber.innerHTML = "Numero atômico: 10";
    E10atomicMass.innerHTML = "Massa Atômica: 20.179";
    E10content.innerHTML = "O Neônio é um gás nobre, pouco presente na atmosfera, mas abundante no universo. Sua principal utilização é nas lâmpadas neon , mas também é utilizado na produção de lasers. Não pode ser reutilizado.";
})