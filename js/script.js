const buttonsArray = document.querySelectorAll(".main_button")
const menu = document.querySelector(".main_menu")

function toggleMenu() {
    menu.classList.toggle("open")
}
buttonsArray.forEach(button => {
    button.addEventListener("click", toggleMenu)
})
// modal button 

async function fetchMockData(id) {
    const url = `http://localhost:3000/data/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
const modalButtons = document.querySelectorAll(".button_learnmore")
const modal = document.querySelector(".modal_wrap")
const modalCloseBtn = document.querySelector(".modal_close")

function toggleModal() {
    modal.classList.toggle("open")
}
async function renderModal(target) {
    const id = target.dataset.id
    //const modal_img = document.querySelector(".modal_")
    const petData = await fetchMockData(id)
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

