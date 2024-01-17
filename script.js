document.addEventListener("DOMContentLoaded", function () {
    const dealsContainer = document.getElementById("deals-container");

    // Array of sample deals
    const dealsData = [
        { name: "Wireless Headphones", image: "wireless-headphones.jpg", link: "https://www.plaisio.gr/gaming-zone/aksesouar-gia-konsoles/sony-gold-black-wireless-headset_2873842?qId=6640455434af0fb3a4ed162b51533a7d&qIx=products" },
        { name: "Mielle Organics Rosemary Oil", image: "rosemary oil.jpg", link: "https://amzn.to/4b2AFhu" },
        { name: "Sceptre Curved 24.5-inch Gaming Monitor 240Hz", image: "gamingmonitor.jpg", link: "https://amzn.to/3SmujlR" },
        { name: "26 Inch Windshield Wiper", image: "winwiper.jpg", link: "https://amzn.to/3U68FUe" },
        { name: "Premier Protein Shake 30g(pack of 12)", image: "proteindrink.jpg", link: "26 Inch Windshield Wipers" },
        { name: "Utopia Bedding Queen Bed Sheets Set(Queen, Grey)", image: "bedsheet.jpg", link: "https://amzn.to/48BBYma" },                  
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

