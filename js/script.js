// import petsResponseMock from "./../mock/pets"
const buttonsArray = document.querySelectorAll(".main_button")
const menu = document.querySelector(".main_menu")

function toggleMenu() {
    menu.classList.toggle("open")
}
buttonsArray.forEach(button => {
    button.addEventListener("click", toggleMenu)
})
// modal button 
// TODO -refactor 
const petsResponseMock = [
    {
        id: 1,
        src: "./img/pets-katrine.png",
        title: "Katrine ",
        breed: "test",
        content: "asfosdhgr eobweijfbweif dkmfb sdkf pefijweofihwef kjekfjbwef",
        params: {
            Age: 8,
            test: "bb"
        }
    },
    {
        id: 2,
        src: "./img/pets-jennifer.png",
        title: "Jennifer",
        breed: "test",
        content: "eee",
        params: {
            Age: 5,
            test: "ee"
        }
    },
    {
        id: 3,
        src: "./img/pets-woody.png",
        title: "Woody",
        breed: "eRRRR",
        content: "awesome content",
        params: {
            Age: 2,
            test: "yep"
        }
    }
]
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

