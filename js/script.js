import { petsResponseMock } from "/mock/pets.js"
const buttonsArray = document.querySelectorAll(".main_button")
const menu = document.querySelector(".main_menu")

function toggleMenu() {
    menu.classList.toggle("open")
}
buttonsArray.forEach(button => {
    button.addEventListener("click", toggleMenu)
})
// modal button 

function fetchMockData(id) {
    return petsResponseMock.find(petItem => petItem.id == id)
}
const modalButtons = document.querySelectorAll(".button_learnmore")
const modal = document.querySelector(".modal_wrap")
const modalCloseBtn = document.querySelector(".modal_close")

function toggleModal() {
    modal.classList.toggle("open")
}
function renderModal(target) {
    const id = target.dataset.id
    const modal_img = document.querySelector(".modal_")
    const petData = fetchMockData(id)
    const modalTitle = document.querySelector(".modal_name")
    modalTitle.innerHTML = petData.title
}
modalButtons.forEach(button => {
    button.addEventListener("click", () => {
        renderModal(button);
        toggleModal()
    })
})
modalCloseBtn.addEventListener("click", toggleModal)

