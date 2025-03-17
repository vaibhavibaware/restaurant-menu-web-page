// Menu Data
const menu = [
    {
        name: "Buttermilk Pancakes",
        category: "Breakfast",
        price: "$15.99",
        img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=1000&auto=format&fit=crop&q=60",
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed."
    },
    {
        name: "Diner Double",
        category: "Lunch",
        price: "$13.99",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000&auto=format&fit=crop&q=60",
        desc: "Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid Jianbing."
    },
    {
        name: "Godzilla Milkshake",
        category: "Shakes",
        price: "$6.99",
        img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=1000&auto=format&fit=crop&q=60",
        desc: "Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },
    {
        name: "Country Delight",
        category: "Dinner",
        price: "$20.99",
        img: "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?w=1000&auto=format&fit=crop&q=60",
        desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut."
    }
];

// Function to Load Menu Items
function displayMenuItems(menuItems) {
    const menuContainer = document.querySelector(".menu");
    menuContainer.innerHTML = menuItems.map(item => `
        <div class="menu-item">
            <img src="${item.img}" alt="${item.name}">
            <div class="menu-info">
                <h2>${item.name} <span class="price">${item.price}</span></h2>
                <p>${item.desc}</p>
            </div>
        </div>
    `).join("");
}

// Function to Filter Menu Items Based on Category
function filterMenu(category) {
    if (category === "All") {
        displayMenuItems(menu);
    } else {
        const filteredItems = menu.filter(item => item.category === category);
        displayMenuItems(filteredItems);
    }
}

// Event Listener for Buttons
document.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu); // Load all items by default

    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            filterMenu(e.target.textContent);
        });
    });
});

