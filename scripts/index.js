const demoButtonSelector = document.querySelector('#demoButton')
const init = () => {
  demoButtonSelector.addEventListener('click', () => changeParentBgColor())
  demoButtonSelector.parentElement.style.padding = '50px'
}
const getRandomColor = () => Math.floor(Math.random() * 16777215).toString(16)
const changeParentBgColor = () => {
  demoButtonSelector.parentElement.style.backgroundColor = `#${getRandomColor()}`
}

window.addEventListener('load', init())
