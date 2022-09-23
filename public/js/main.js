// Password visability toggle
const password = document.querySelectorAll('.password')
const togglePassword = document.querySelectorAll('.togglePassword').forEach(item =>{
    item.addEventListener('click', function(){
        password.forEach(item =>{
            const type = item.getAttribute('type') === 'password' ? 'text' : 'password'
            item.setAttribute('type', type)
        })
        item.classList.toggle('bi-eye')
    })
})

console.log(password)

// const password = document.querySelectorAll('.password')
// const togglePassword = document.querySelectorAll('.togglePassword')


// console.log(password)