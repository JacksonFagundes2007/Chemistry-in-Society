// pegamos o valor no localStorage
const nightModeStorage = localStorage.getItem('gmtNightMode')

const nightMode = document.querySelector('.night-mode')

// caso tenha o valor no localStorage

  document.documentElement.classList.add('night-mode')

  nightMode.checked = true


// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.toggle('light-mode');

  // box theme
  document.querySelector('#box').classList.toggle('box-light')

  // Border bottom black
  for(let i = 0; i < 4; i++) {
    document.getElementsByClassName('div-separation')[i].classList.toggle('div-light')
  }

})