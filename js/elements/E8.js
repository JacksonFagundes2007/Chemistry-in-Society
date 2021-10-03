// get box

const E8image = document.querySelector("#elementImage")
const E8name = document.querySelector('#elementName')
const E8token = document.querySelector('#token')
const E8atomicNumber = document.querySelector('#atomicNumber')
const E8atomicMass = document.querySelector('#atomicMass')
const E8content = document.querySelector('#text')


// get Element

const E8 = document.querySelector('#E8')

// Inner HTML

E8.addEventListener('click', () => {

    E8image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465630429286420/008.png")
    E8name.innerHTML = "Nome: Oxigênio";
    E8token.innerHTML = "Símbolo: O"; 
    E8atomicNumber.innerHTML = "Numero atômico: 8";
    E8atomicMass.innerHTML = "Massa Atômica: 15.999";
    E8content.innerHTML = "O oxigênio é utilizado por diversas indústrias por motivos diferentes. Na metalúrgica, o elemento ajuda nos processos de fundição, corte e solda; ainda na metalúrgica, o oxigênio aumenta a eficiência de diferentes processos porque reduz a quantidade de combustível necessária, além de reduzir as emissões de dióxido de carbono. Já na medicina, o oxigênio é utilizado no tratamento de insuficiência respiratória, na intoxicação por monóxido de carbono e em procedimentos de receptação. Nos laboratórios, o oxigênio é utilizado como: agente de branqueamento, combustível para detecção de chama, agente combustível para análise elementar, agente oxidante e para oxidação de silício na fabricação de semi condutores. O oxigênio em si não tem nenhum tipo de reutilização, mas ele ajuda no processo de reciclagem química ( A reciclagem química é um processo em que os resíduos são alterados e transformados em matéria prima para produção de novos produtos). O oxigênio é inserido em um dos processos de reciclagem química para que ocorra a combustão do carbono contido na matéria.";
})