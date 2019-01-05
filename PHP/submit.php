<?php

   $username = $_POST['username'];
   $email = $_POST['email'];
   $message = $_POST['msg'];


// Create connection
$conn =  mysqli_connect('localhost','portfolio', 'suraj3d3');

// Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }
// echo "Connected successfully";

mysqli_select_db($conn,'contactMeForm');

$q="insert into userDetails(username,email,message) values('$username','$email','$message')";

$i=mysqli_query($conn,$q);
header('Location:../mainFiles/');
?>