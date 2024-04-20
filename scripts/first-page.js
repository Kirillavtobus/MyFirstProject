const closeButton = document.querySelector('.first-page-backdrop__close')
const submitButton = document.querySelector('.first-page-backdrop__save')
const modal = document.querySelector('.first-page-backdrop')
function closeModal(){
     modal.classList.add('forst-page-is-hidden')
}

closeButton.addEventListener('click',function(){
    modal.style.display = 'none';
})

submitButton.addEventListener('click',function(){
    modal.style.display = 'none';
})

const name = document.querySelector('.first-page-backdrop__input')
const userName = document.querySelector('.user-name')
const submitName = document.querySelector('.first-page-backdrop__save')

submitButton.addEventListener('click',function(event){
    userName.textContent = name.value
})