const container = document.querySelector('.container')
const open = document.querySelector('#open')
const close = document.querySelector('#close')


open.addEventListener('click', (e)=> {
    container.classList.add('active')
})

close.addEventListener('click', (e)=> {
    container.classList.remove('active')
})

console.log(container.classList)