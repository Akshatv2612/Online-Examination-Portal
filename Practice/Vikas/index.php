<?php
// Basic PHP Syntax
echo "Hello, World!"; // Output: Hello, World!

// Variables
$name = "John";
$age = 30;

// Concatenation
echo "My name is " . $name . " and I am " . $age . " years old.";

// Arrays
$fruits = array("Apple", "Banana", "Cherry");
echo "I like " . $fruits[0]; // Output: I like Apple

// Conditional Statements
if ($age >= 18) {
    echo "I am an adult.";
} else {
    echo "I am a minor.";
}

// Loops
for ($i = 1; $i <= 5; $i++) {
    echo "Iteration " . $i . "<br>";
}

// Functions
function greet($name) {
    echo "Hello, " . $name . "!";
}

greet("Alice"); // Output: Hello, Alice!

// Super Global Variables
echo $_SERVER['PHP_SELF']; // The name of the current script

// Form Handling (POST method)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    echo "Username: " . $username . "<br>";
    echo "Password: " . $password . "<br>";
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>PHP Basics</title>
</head>
<body>
    <!-- HTML Form -->
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
