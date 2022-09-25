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

// Popup form for creating a workout

function openForm() {
    document.getElementById("initalForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("initalForm").style.display = "none";
  }