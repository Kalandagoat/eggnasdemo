document.getElementById("food-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const foodName = document.getElementById("food-name").value;
    const foodCalories = document.getElementById("food-calories").value;

    if (foodName && foodCalories) {
        addFoodItem(foodName, foodCalories);
        document.getElementById("food-name").value = '';
        document.getElementById("food-calories").value = '';
    }
});

function addFoodItem(name, calories) {
    const foodList = document.getElementById("food-list");

    const foodItem = document.createElement("li");
    foodItem.innerHTML = `
        <span>${name} - ${calories} Calories</span>
        <button class="delete-btn" onclick="deleteFoodItem(this)">Delete</button>
    `;

    foodList.appendChild(foodItem);
}

function deleteFoodItem(button) {
    button.parentElement.remove();
}
