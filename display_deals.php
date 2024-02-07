<?php
// Step 1: Connect to the database
$servername = "localhost"; // Change this if your MySQL server is hosted elsewhere
$username = "root"; // Replace with your MySQL username
$password = "abdo2052005"; // Replace with your MySQL password
$dbname = "new_schema"; // Replace with the name of your database

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Step 2: Fetch deals from the database
$sql = "SELECT * FROM deals";
$result = $conn->query($sql);

// Step 3: Display deals
if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        echo "<h2>" . $row["name"] . "</h2>";
        echo "<p>Price: $" . $row["price"] . "</p>";
        echo "<img src='" . $row["image"] . "' alt='" . $row["name"] . "'>";
        echo "<a href='" . $row["link"] . "' target='_blank'>View Deal</a>";
    }
} else {
    echo "No deals found.";
}

// Step 4: Close connection
$conn->close();
?>
