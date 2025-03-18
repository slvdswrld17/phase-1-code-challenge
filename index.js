const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "Images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "Images/miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "Images/Tonkotsu.jpg" }
 ];

// Display Ramen Images in #ramen-menu
function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = "";

ramens.forEach((ramen) => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.classList.add("ramen-img"); 
    img.addEventListener("click", () => handleClick(ramen));
    ramenMenu.appendChild(img);
});
}

// Handle Click Event to Show Ramen Details
function handleClick(ramen) {
    document.getElementById("ramen-detail-img").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent =` Rating: ${ramen.rating} / 10`;
    document.getElementById("ramen-comment").textContent = `Comment: ${ramen.comment}`;
}

// Add New Ramen via Form
function addSubmitListener() {
    const form = document.getElementById("new-ramen-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newRamen = {
        id: ramens.length + 1,
        name: event.target.name.value,
        restaurant: event.target.restaurant.value,
        image: event.target.image.value,
        rating: event.target.rating.value,
        comment: event.target.comment.value
    };

    ramens.push(newRamen);
    displayRamens(); 
    form.reset(); 
});
}

// Show First Ramen's Details on Page Load (Optional)
function showFirstRamen() {
    if (ramens.length > 0) {
        handleClick(ramens[0]); 
    }
}

// Initialize App
function main() {
    displayRamens();
    addSubmitListener();
    showFirstRamen(); 
}

// Run after DOM loads
document.addEventListener("DOMContentLoaded", main);