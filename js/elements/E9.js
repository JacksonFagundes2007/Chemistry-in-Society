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
    E9name.innerHTML = "Nome: Flúor";
	E9token.innerHTML = "Símbolo: F"; 
	E9atomicNumber.innerHTML = "Numero atômico: 9"; 
	E9atomicMass.innerHTML = "Massa Atômica: 18,998"; 
    	E9content.innerHTML = " As resinas de Flúor são utilizadas no revestimento térmico de fios e cabos, assim como na fabricação de componentes eletrônicos e semicondutores. E         Devido à dificuldade em se lidar com os gases tóxicos gerados pela decomposição termal dessas resinas, elas eram consideradas como não recicláveis e tratadas como lixo a           ser descartado, e isso gerava um enorme impacto no meio ambiente. Mas como só o Japão consome cerca de 20.000 toneladas de resina fluoretada anualmente, uma empresa do             país conseguiu a sua reciclagem. E após o término do processo de reciclagem, a resina fluoretada é quebrada em fluoreto de cálcio, que pode então ser reutilizado para              fabricação da resina que o originou.";
})