// ***** SELECT ITEMS ********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn')
const list = document.querySelector('.grocery-container')
const clearBtn = document.querySelector('.clear-btn')

// ** EDIT OPTIONS ****
let editElement;
let editFlag = false;
let edited = "";

// ***** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem);
// **** FUNCTIONS ****
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;

    const id = new Date().getTime().toString();
    if (value && !editFlag) {
        console.log ("add item to the list")
    } else if (value && editFlag) {
        console.log("editing");
    } else {
        displayAlert("please enter value", "danger");
    }

}

function displayAlert (text, action) {
    alert.textContent = text;
    console.log(text);
    alert.classList.add(`alert-${action}`);
}