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

function openInitalForm() {
    document.getElementById("initalForm").style.display = "flex";
    document.getElementById("strengthForm").style.display = "none";
    document.getElementById("fullpage").style.filter = "blur(2px)"
  }
  
function closeForm() {
    document.getElementById("initalForm").style.display = "none";
    document.getElementById("fullpage").style.filter = "blur(0px)"
  }

function openStrengthForm(){
    document.getElementById("strengthForm").style.display = "flex";
    document.getElementById("initalForm").style.display = "none";
}

// Add exercise to plan

const addEx = document.querySelector('.addexercise').addEventListener('click', addExercise)
const exerciseDiv = document.querySelector('.exerciseInput')
const copyDiv = exerciseDiv.cloneNode(true)

function addExercise(){
    const emptyValCopy = copyDiv.cloneNode(true)
    exerciseDiv.after(emptyValCopy)
}

