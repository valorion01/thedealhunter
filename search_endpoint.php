<?php
// Simulated data (replace this with your actual data source)
$allDeals = [
    ['name' => 'Samsung Deal 1', 'image' => 'samsung_deal1.jpg', 'link' => '#'],
    ['name' => 'Samsung Deal 2', 'image' => 'samsung_deal2.jpg', 'link' => '#'],
    // Add more deals here
    ['name' => 'Samsung 4K Ultra HD TV', 'image' => 'samsung_tv.jpg', 'link' => 'https://www.amazon.com/SAMSUNG-U28R550UQNX-LU28R550UQNXZA-Monitor-Free/dp/B084V9CJB1?ref_=Oct_DLandingS_D_860e167d_0&th=1']
];

// Function to filter deals based on the search query
function filterDeals($deals, $query) {
    $filteredDeals = [];
    foreach ($deals as $deal) {
        if (stripos($deal['name'], $query) !== false) {
            $filteredDeals[] = $deal;
        }
    }
    return $filteredDeals;
}

// Get the search query from the URL parameter 'q'
$searchQuery = isset($_GET['q']) ? trim($_GET['q']) : '';

// Filter deals based on the search query
$searchResults = filterDeals($allDeals, $searchQuery);

// Return the results as JSON
header('Content-Type: application/json');
echo json_encode($searchResults);
?>
