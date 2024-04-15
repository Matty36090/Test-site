<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    try {
        $connection = new MongoDB\Driver\Manager("mongodb+srv://matteamonson:mongo@cluster0.wpftrft.mongodb.net/");

        $databaseName = 'userDB';
        $collection = 'users';

        $username = $_POST['username'];
        $password = $_POST['password'];

        // Hashing the password (if storing a new user, you'd store the hash)
        // $passwordHash = password_hash($password, PASSWORD_DEFAULT);

        $query = new MongoDB\Driver\Query(['username' => $username]);

        $cursor = $connection->executeQuery("$databaseName.$collection", $query);
        $user = $cursor->toArray();

        if (!empty($user) && password_verify($password, $user[0]->password)) {
            echo "Login successful!";
        } else {
            echo "Login failed!";
        }
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styleabout.css" />
    <link rel="icon" type="image/x-icon" href="images/favicon.ico" />
    <title>The Blue Suede Shoe</title>
</head>
<body>
<div class="main-content">
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="index.html">
            <img class="logo" src="images/shoe.jpg" width="100px" height="100px" alt="logo"/>
        </a>
    </nav>

    <div class="logotext">
        <h1>The Blue Suede Shoe</h1>
    </div>

    <div class="navigation">
        <a href="index.html">Home</a>
        <a href="history.html">History</a>
        <a href="tracks2.html">Tracks</a>
        <a href="members.html">Members Section</a>
        <!--<a href="tracks.html">Images</a>-->
        <a href="about.html">About</a>
    </div>

    <div class="aboutbox">
        <h2>Login</h2>
    <form action="tracks.html" method="post">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username" required><br>
        <label for="pass">Password:</label><br>
        <input type="password" id="password" name="password" required><br>
        <input type="submit" value="Submit">
    </form>
    </div>
</div>

    <footer>
        <p>© 2024 The Blue Suede Shoe. A Student Project.</p>
    </footer>
</div>
</body>
</html>
