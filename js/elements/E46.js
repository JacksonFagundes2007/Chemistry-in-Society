// get box 
const E46image = document.querySelector("#elementImage") 
const E46name = document.querySelector('#elementName') 
const E46token = document.querySelector('#token') 
const E46atomicNumber = document.querySelector('#atomicNumber') 
const E46atomicMass = document.querySelector('#atomicMass') 
const E46utility = document.querySelector('#utility') 
const E46reuse = document.querySelector('#reuse') 
// get Element 
const E46 = document.querySelector('#E46') 
// Inner HTML 
E46.addEventListener('click', () => { 
    E46image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465616755884092/001.png") 
    E46name.innerHTML = "Nome: Paládio"; 
    E46token.innerHTML = "Símbolo: Pd";  
    E46atomicNumber.innerHTML = "Numero atômico: 46"; 
    E46atomicMass.innerHTML = "Massa Atômica: 106.420"; 
    E46utility.innerHTML = "Utilização:  O paládio é utilizado como  catalisador de reações de hidrogenação, na catálise de fracções de petróleo destilado, indústria elétrica e na fabricação de contatos em sistemas eletromecânicos."; 
    E46reuse.innerHTML = "Reutilização: O paládio é Reutilizado no derretimento para formar novas peças de paládio e como catalisador onde pegam o paládio utilizado e transformam em catalisador."; 
})