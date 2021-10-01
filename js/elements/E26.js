// get box

const E26image = document.querySelector("#elementImage")
const E26name = document.querySelector('#elementName')
const E26token = document.querySelector('#token')
const E26atomicNumber = document.querySelector('#atomicNumber')
const E26atomicMass = document.querySelector('#atomicMass')
const E26content = document.querySelector('#text')


// get Element

const E26 = document.querySelector('#E26')

// Inner HTML

E26.addEventListener('click', () => {

    E26image.setAttribute('src', "https://media.discordapp.net/attachments/801974522839826484/893465774927282206/026.png") 
    
    E26name.innerHTML = "Nome: Ferro";
    E26token.innerHTML = "Símbolo: Fe"; 
    E26atomicNumber.innerHTML = "Numero atômico: 26"; 
    E26atomicMass.innerHTML = "Massa Atômica: 18,998"; 
    E26content.innerHTML = "O Ferro faz parte do grupo dos Metais na Tabela Periódica, então apresenta característica comuns desse grupo como: ser um bom condutor de calor e eletricidade. Justamente por isso é utilizado na produção de aço, liga metálica para a produção de ferramentas, máquinas, veículos de transporte (automóveis, navios, etc.), como elemento estrutural de pontes, edifícios, e uma infinidade de outras coisas. Na reutilização, o ferro é utilizado na sua forma de aço. No Brasil existem dois processos diferentes de reciclagem de ferro: um voltado apenas para o reaproveitamento das latas de aço e outro para uso das siderúrgicas em geral.";

})