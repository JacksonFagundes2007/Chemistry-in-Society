// get box

const E20image = document.querySelector("#elementImage")
const E20name = document.querySelector('#elementName')
const E20token = document.querySelector('#token')
const E20atomicNumber = document.querySelector('#atomicNumber')
const E20atomicMass = document.querySelector('#atomicMass')
const E20content = document.querySelector('#text')


// get Element

const E20 = document.querySelector('#E26')

// Inner HTML

E20.addEventListener('click', () => {

    alert('TESTE')

    E20image.setAttribute('src', "/images/elements/020.png")

    E20name.innerHTML = "Nome: Cálcio"; 
    E20token.innerHTML = "Símbolo: Ca"; 
    E20atomicNumber.innerHTML = "Numero atômico: 20"; 
    E20atomicMass.innerHTML = "Massa Atômica: 40,078"; 
    E20content.innerHTML = "O cálcio é um dos elementos mais abundantes no corpo humano, ele é essencial para a transmissão nervosa, coagulação do sangue e contração muscular. Na indústria, o cálcio é usado na sua forma metálica, onde a sua principal utilidade é a produção de tintas e fertilizantes. A principal área de reutilização do cálcio é na eliminação de gases residuais em tubos de vácuo, onde entra também como agente redutor na preparação de metais como tório, urânio, etc...";

})