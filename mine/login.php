<?php
include 'connect.php';

if (isset($_SESSION['user'])) {
    echo 'user';
} elseif (isset($_SESSION['admin'])) {
    echo 'admin';
}
elseif (!isset($_POST['username']) || !isset($_POST['password'])) {
    echo '<div class="error">An Error occurred while trying to log in, Please try again after sometime.</div>';
} elseif (strlen($_POST['username']) > 30 || strlen($_POST['password']) > 30) {
    echo '<div class="error">Invalid username or password entered</div>';
} elseif (isset($_POST['login'])) {
    $username = ucfirst(strtolower($_POST['username']));
    $password = $_POST['password'];
    if (empty($username) || empty($password)) {
        echo '<div class="error">Please fill in all fields</div>';
    }
        else {
        try {
            $query = 'SELECT username,password,position FROM login WHERE username=?';
            $stmt = $pdo->prepare($query);
            $success = $stmt->execute([$username]);
            $count = $stmt->rowcount();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($success) {
                if ($count > 0 && password_verify($password, $row['password']))
                  {
                    $_SESSION[$row['position']] = true;
                echo $row['position'];
                    }
               else {
                    echo '<div class="error">Invalid username or password entered</div>';
                }
            } else {
                echo '<div class="error">An  error was encountered while you tried to login.<br><a id="retry">RETRY</a></b><br>';
            }
        } catch (PDOException $e) {
            echo '<div class="error">An  error was encountered while you tried to login.<br><a id="retry">RETRY</a></b><br>';
        }
   }
} else {
    echo '<div class="error">An  error was encountered while you tried to login.<br><a id="retry">RETRY</a></b><br>';
}
?>
