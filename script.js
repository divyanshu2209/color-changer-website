const button = document.querySelectorAll('.button')
const body = document.querySelector('body')
button.forEach((button) => {
    button.addEventListener('click' , (e)=>{
        if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "green"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "purple"){
            body.style.backgroundColor = e.target.id
        }
    })
})

