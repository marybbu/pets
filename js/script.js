const buttonsArray = document.querySelectorAll(".main_button")
const menu = document.querySelector(".main_menu")

function toggleMenu() {
    menu.classList.toggle("open")
}
buttonsArray.forEach(button => {
    button.addEventListener("click", toggleMenu)
})

