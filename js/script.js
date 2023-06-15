// Skillcrush JS 9.4 + JS 9.5
// Assemble a Potluck Guest List
// Assign a Potluck Dish

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

// 9.5 Select Assigned Items
const assignButton = document.querySelector("button.assign");
const assignedItems = document.querySelector(".assigned-items");

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
        guestInput.focus();
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

// 9.5 Build an Array + Select Elements & Loop Through the Array
const assignItems = function(){
    let potluckItems = 
        ["Halloumi and Melon Skewers", 
        "Peach and Prosciutto Bruschetta", 
        "Veggie Nori Rolls",
        "Caprese Skewers",
        "3-Cheese Tomato Tart",
        "Zoodles with Tomato and Corn",
        "3-Bean Couscous Salad",
        "Lemon Cream Icebox Cake",
        "Pesto Pasta Salad",
        "Tangy Carrot Slaw",
        "Strawberry Icebox Cake",
        "Sheet Pan Lemon Yogurt Tart",
        "Grilled Zucchini Salad",
        "Peach and Tahini Tart"];
    const allGuests = document.querySelectorAll(".guest-list li");
    for (let guest of allGuests) {
        const randomPotluckIndex = Math.floor(Math.random()*potluckItems.length);
        let randomPotluckItem = potluckItems[randomPotluckIndex];
        let listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}. (:`;
        assignedItems.append(listItem);
        potluckItems.splice(randomPotluckIndex, 1);
    };
};

// Add an Event Listener & Update PotluckItems Array
assignButton.addEventListener("click", function(){
    assignItems();
    assignButton.disabled = true;
});