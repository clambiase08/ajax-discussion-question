const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});


// Open up the Github repository for this reading and view the provided src/index.html file in the browser. In src/index.js, make an AJAX request to https://randomuser.me/api/ when the button is clicked and append the retrieved information to the DOM. Use the labels to append the right data in the appropriate h4's, h3's and img tags.

//First, I need to:
//[x] write a fetch equation that takes in a url and returns a fetch
//[x] write a render function that renders the data to the DOM
//[x] add an event listener to the button, that initializes the fetch, and passes in the renderUser function

//Global variables
const URL = "https://randomuser.me/api/"

//DOM Selectors
const fullName = document.querySelector("#fullname")
const email = document.querySelector("#email")
const street = document.querySelector("#street")
const city = document.querySelector("#city")
const state = document.querySelector("#state")
const postCode = document.querySelector("#postcode")
const phone = document.querySelector("#phone")
const cell = document.querySelector("#cell")
const dateBirth = document.querySelector("#date_of_birth")
const button = document.querySelector(".btn.btn-primary")
const image = document.querySelector("#profile_picture")


// Fetch function

function getUserInfo(url) {
  return fetch(url)
  .then (res => res.json())
}

// Render Function

function renderUser(data) {
  const user = data.results[0]
  fullName.textContent = `${user.name.first} ${user.name.last}`
  email.textContent = user.email
  street.textContent = `${user.location.street.number} ${user.location.street.name}`
  city.textContent = user.location.city
  state.textContent = user.location.state
  postCode.textContent = user.location.postcode
  phone.textContent = user.phone
  cell.textContent = user.cell
  dateBirth.textContent = user.dob.date
  image.src = user.picture.large

}

//Event Listener

button.addEventListener('click', () => {
  getUserInfo(URL)
  .then(renderUser)
})

