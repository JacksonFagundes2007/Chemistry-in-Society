// get box 
const E85image = document.querySelector("#elementImage")  
const E85name = document.querySelector('#elementName')  
const E85token = document.querySelector('#token')  
const E85atomicNumber = document.querySelector('#atomicNumber')  
const E85atomicMass = document.querySelector('#atomicMass')  
const E85content = document.querySelector('#text')  
// get Element 
const E85 = document.querySelector('#E85')  
// Inner HTML 
E85.addEventListener('click', () => {  
    E85image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/894302415107526747/085.png")  
    E85name.innerHTML = "Nome: Ástato";  
    E85token.innerHTML = "Símbolo: At";   
    E85atomicNumber.innerHTML = "Numero atômico: 85";  
    E85atomicMass.innerHTML = "Massa Atômica: (210)";  
    E85content.innerHTML = " O astato é um elemento químico radioativo da série dos halogênios. Esse elemento químico é utilizado em pesquisas. Um fato interessante é que achava-se que sua radioatividade poderia ser benéfica para tratar doenças como hipotireoidismo e para tratamento de glândula, mas no final descobriu-se que não era nem um pouco benéfica.";  
})