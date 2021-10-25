// get box 
const E86image = document.querySelector("#elementImage")  
const E86name = document.querySelector('#elementName')  
const E86token = document.querySelector('#token')  
const E86atomicNumber = document.querySelector('#atomicNumber')  
const E86atomicMass = document.querySelector('#atomicMass')  
const E86utility = document.querySelector('#utility') 
const E86reuse = document.querySelector('#reuse') 
// get Element 
const E86 = document.querySelector('#E86')  
// Inner HTML 
E86.addEventListener('click', () => {  
    E86image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/894302416927866900/086.png")  
    E86name.innerHTML = "Nome: Radônio";  
    E86token.innerHTML = "Símbolo: Rn";   
    E86atomicNumber.innerHTML = "Numero atômico: 86";  
    E86atomicMass.innerHTML = "Massa Atômica: (220)";  
    E86utility.innerHTML = "Utilização: O radônio é um elemento gasoso radioativo, classificado como um gás nobre, é utilizado para terapias contra o câncer, sendo melhor que o rádio em alguns casos. Utiliza-se também como indicador para a detecção de fuga de gases, e também na medida da velocidade de escoamento de fluidos. Além disso, é utilizado em sismógrafos e como fonte de nêutrons."; 
    E86reuse.innerHTML = "Reutilização: Não pode ser reutilizado.";  
})