const buttonsArray = document.querySelectorAll(".main_button")
const menu = document.querySelector(".main_menu")

function toggleMenu() {
    menu.classList.toggle("open")
}
buttonsArray.forEach(button => {
    button.addEventListener("click", toggleMenu)
})
// modal button 
const modalButtons = document.querySelectorAll(".button_learnmore")
const modal = document.querySelector(".modal_wrap")
const modalCloseBtn = document.querySelector(".modal_close")

function toggleModal() {
    modal.classList.toggle("open")
}
modalButtons.forEach(button =>{
    button.addEventListener("click", toggleModal)
})
modalCloseBtn.addEventListener("click", toggleModal)