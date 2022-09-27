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
    document.getElementById("initalForm").style.display = "block";
    document.getElementById("strengthForm").style.display = "none";
  }
  
function closeForm() {
    document.getElementById("initalForm").style.display = "none";
  }

function openStrengthForm(){
    document.getElementById("strengthForm").style.display = "flex";
    document.getElementById("initalForm").style.display = "none";
}

// Add exercise to plan

const exerciseDiv = document.querySelector('.exerciseInput')
const addEx = document.querySelector('.addexercise').addEventListener('click', addexercise)

function addexercise(){
    let copyDiv = exerciseDiv.cloneNode(true)
    console.log(copyDiv)
    exerciseDiv.after(copyDiv)
    console.log(exerciseDiv)
}



// function addexercise(){
//     exerciseName.appendChild(input).setAttribute('name', 'test')
//     sets.appendChild(input).setAttribute('name', 'test')
//     reps.append(input).setAttribute('name', 'test')
// }
