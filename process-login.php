<?php
session_start();
$username = "admin";
$password = "password123";

if(isset($_POST['username']) && isset($_POST['password'])) {
  if($_POST['username'] == $username && $_POST['password'] == $password) {
    $_SESSION['username'] = $_POST['username'];
    header('Location: news-admin.php');
  } else {
    header('Location: login.php');
  }
}
?>
