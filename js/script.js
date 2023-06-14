// Skillcrush JS 9.4
// Assemble a Potluck Guest List 

// Starter Code 
// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

// Add an Event Listener & Create an Element
addGuestButton.addEventListener("click", function(e){
    const guest = guestInput.value;
    // console.log(guest);
    if (guest !== ""){
        // let listItem = document.createElement("li");
        // listItem.innerText = guest;
        // guestList.append(listItem);
        addToList(guest);
        clearInput();
        updateGuestCount();
    }
});

// Clear the Input Box
const clearInput = function(){
    guestInput.value = "";
};

// Refactor Code
const addToList = function(guest){
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
};

// Limit the Guest List
const updateGuestCount = function(){
    let guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;
    if (guests.length == 8){
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};