// get box

const E14image = document.querySelector("#elementImage")
const E14name = document.querySelector('#elementName')
const E14token = document.querySelector('#token')
const E14atomicNumber = document.querySelector('#atomicNumber')
const E14atomicMass = document.querySelector('#atomicMass')
const E14content = document.querySelector('#text')


// get Element

const E14 = document.querySelector('#E14')

// Inner HTML

E14.addEventListener('click', () => {

    E14image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465664193450024/014.png")
    E14name.innerHTML = "Nome: Silício";
    E14token.innerHTML = "Símbolo: Si"; 
    E14atomicNumber.innerHTML = "Numero atômico: 14";
    E14atomicMass.innerHTML = "Massa Atômica: 28.085";
    E14content.innerHTML = "O silício é um semimetal utilizado na produção de ligas metálicas, na preparação de silicones, na indústria cerâmica; e por ser um material semicondutor muito abundante é utilizado na indústria eletrônica e microeletrônica( como material básico para a produção de transistores para chips, células solares e em diversas ). Sua reutilização foca principalmente nas ligas metálicas, que podem ser reutilizadas em diversos objetos e bicicletas.";
})