document.addEventListener("DOMContentLoaded", function () {
    const dealsContainer = document.getElementById("deals-container");

    // Array of sample deals
    const dealsData = [
        { name: "Utopia Bedding Queen Bed Sheets Set - 4 Piece Bedding - Brushed Microfiber - Shrinkage and Fade Resistant - Easy Care (Queen, Grey)", image: "bedsheet.jpg", link: "https://amzn.to/48BBYma" },
        { name: "Wireless Headphones", image: "wireless-headphones.jpg", link: "https://www.plaisio.gr/gaming-zone/aksesouar-gia-konsoles/sony-gold-black-wireless-headset_2873842?qId=6640455434af0fb3a4ed162b51533a7d&qIx=products" },
        { name: "4K Ultra HD TV", image: "4k-tv.jpg", link: "https://example.com/4k-tv" },
        { name: "Running Shoes", image: "running-shoes.jpg", link: "https://example.com/running-shoes" },
        { name: "Home Security Camera", image: "security-camera.jpg", link: "https://example.com/security-camera" },
        { name: "Samsung 4K Monitor", image: "samsung-monitor.jpg", link: "https://www.amazon.com/SAMSUNG-U28R550UQNX-LU28R550UQNXZA-Monitor-Free/dp/B084V9CJB1?ref_=Oct_DLandingS_D_860e167d_0&th=1" },
    ];

    // Display the deals on page load
    displayDeals(dealsData);

    function displayDeals(deals) {
        console.log("Displaying deals:", deals);

        if (!dealsContainer) {
            console.error("Deals container not found.");
            return;
        }

        dealsContainer.innerHTML = "";

        if (deals.length === 0) {
            dealsContainer.innerHTML = "<p>No deals found.</p>";
            return;
        }

        deals.forEach(deal => {
            dealsContainer.appendChild(createDealCard(deal));
        });
    }

    function createDealCard(deal) {
        const card = document.createElement("article");
        card.className = "deal-card";
        card.innerHTML = `
            <h2>${deal.name}</h2>
            <img src="${deal.image}" alt="${deal.name}">
            <a href="${deal.link}" target="_blank">View Deal</a>
        `;
        return card;
    }
});

