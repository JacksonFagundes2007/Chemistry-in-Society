// get box 
const E37image = document.querySelector("#elementImage") 
const E37name = document.querySelector('#elementName') 
const E37token = document.querySelector('#token') 
const E37atomicNumber = document.querySelector('#atomicNumber') 
const E37atomicMass = document.querySelector('#atomicMass') 
const E37utility = document.querySelector('#utility') 
const E37reuse = document.querySelector('#reuse') 
// get Element 
const E37 = document.querySelector('#E37') 
// Inner HTML 
E37.addEventListener('click', () => { 
    E37image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/894301361242533928/037.png") 
    E37name.innerHTML = "Nome: Rubídio"; 
    E37token.innerHTML = "Símbolo: Rb";  
    E37atomicNumber.innerHTML = "Numero atômico: 37"; 
    E37atomicMass.innerHTML = "Massa Atômica: 85.467"; 
    E37utility.innerHTML = "Utilização: O Rubídio quando encontrado em estado sólido tem cores pretas e prateadas, mas ele pode ser encontrado no estado liquido. A principal utilização do Rubídio é nos combustíveis espaciais, mas ele possui outras utilizações como: no preparo de soporíferos e sedativos, no tratamento de epilépticos e é usado como células fotoelétricas. Já o carbono de Rubídio é usado em indústrias vidreiras."; 
    E37reuse.innerHTML = "Reutilização: O Rubídio pode ser reutilizado quando faz parte da formação de vidros, onde o vidro é lavado, triturado, aquecido, fundido e depois remodelado (nessa sequência)."; 
})