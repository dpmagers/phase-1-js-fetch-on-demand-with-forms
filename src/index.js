const init = () => {
  

const inputForm = document.querySelector('form')

inputForm.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log(event.target.children[1].value)
    const input = document.querySelector("input#searchByID")
    // console.log(input.value)

    fetch(`http://localhost:3000/movies/${input.value}`)
        .then(res => res.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4')
            const summary = document.querySelector('section#movieDetails p')

            title.innerText = data.title
            summary.innerText = data.summary
        })
        // .catch(err => console.log(err))

} )


}

document.addEventListener('DOMContentLoaded', init);

//1
//add event listeners to capture form data
// and override a form's default behavior

//2 
//fetch data based on what the user types into that form

//3
//display that data on the page 