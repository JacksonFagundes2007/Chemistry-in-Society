// get box

const E9image = document.querySelector("#elementImage")
const E9name = document.querySelector('#elementName')
const E9token = document.querySelector('#token')
const E9atomicNumber = document.querySelector('#atomicNumber')
const E9atomicMass = document.querySelector('#atomicMass')
const E9content = document.querySelector('#text')


// get Element

const E9 = document.querySelector('#E9')

// Inner HTML

E9.addEventListener('click', () => {

    E9image.setAttribute('src', "https://media.discordapp.net/attachments/801974522839826484/893465632161534012/009.png")
    E9name.innerHTML = "Nome: Ferro";
    E9token.innerHTML = "Símbolo: Fe";
    E9atomicNumber.innerHTML = "Numero atômico: 9";
    E9atomicMass.innerHTML = "Massa Atômica: 55,845";
    E9content.innerHTML = "O Ferro faz parte do grupo dos Metais na Tabela Períodica, então apresenta característica comuns desse grupo como: ser um bom condutor de calor e eletricidade. Justamente por isso é utilizado na produção de aço, liga metálica para a produção de ferramentas, máquinas, veículos de transporte (automóveis, navios, etc.), como elemento estrutural de pontes, edifícios, e uma infinidade de outras coisas. Na reutilização, o ferro é utilizado na sua forma de aço. No Brasil existem dois processos diferentes de reciclagem de ferro: um voltado apenas para o reaproveitamento das latas de aço e outro para uso das siderúrgicas em geral.";
})