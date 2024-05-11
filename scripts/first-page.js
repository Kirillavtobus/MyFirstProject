document.querySelector('.first-page-backdrop__close').addEventListener('click',function(){
    modal.style.display = 'none';
})

document.querySelector('.first-page-backdrop__save').addEventListener('click',function(){
    modal.style.display = 'none';
})

const modal = document.querySelector('.first-page-backdrop')
function closeModal(){
     modal.classList.add('forst-page-is-hidden')
}

const name = document.querySelector('.first-page-backdrop__input')
const userName = document.querySelector('.user-name')
const submitName = document.querySelector('.first-page-backdrop__save')

submitButton.addEventListener('click',function(event){
    userName.textContent = name.value
})