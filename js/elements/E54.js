// get box 
const E54image = document.querySelector("#elementImage") 
const E54name = document.querySelector('#elementName') 
const E54token = document.querySelector('#token') 
const E54atomicNumber = document.querySelector('#atomicNumber') 
const E54atomicMass = document.querySelector('#atomicMass') 
const E54content = document.querySelector('#text') 
// get Element 
const E54 = document.querySelector('#E54') 
// Inner HTML 
E54.addEventListener('click', () => { 
    E54image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/894301872142290954/054.png") 
    E54name.innerHTML = "Nome: Xenônio"; 
    E54token.innerHTML = "Símbolo: Xe";  
    E54atomicNumber.innerHTML = "Numero atômico: 54"; 
    E54atomicMass.innerHTML = "Massa Atômica: 131.293"; 
    E54content.innerHTML = " O xenônio é um elemento membro do grupo dos gases nobres, ele é utilizado em anestesias,  em instalações nucleares,  na propulsão de foguetes, sendo estudada a possibilidade de incluí-los em tratamentos contra a depressão, o transtorno do pânico e outras doenças psiquiátricas. Não pode ser reutilizado."; 
})