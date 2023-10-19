<?php
include_once 'dbConnection.php'; // including db connection code here
$ref=@$_GET['q'];
$email = $_POST['uname'];
$password = $_POST['password'];

$email = stripslashes($email); // remove slashes
$email = addslashes($email);
$password = stripslashes($password); 
$password = addslashes($password);
$result = mysqli_query($con,"SELECT email FROM admin WHERE email = '$email' and password = '$password'") or die('Error');
$count=mysqli_num_rows($result); // number of rows
if($count==1)
{
    session_start();
    if(isset($_SESSION['email'])) // check if email is already available in session
    {
        session_unset(); // clear all session variable
    }
    $_SESSION["name"] = 'Admin'; // adding session variable
    $_SESSION["key"] ='sunny7785068889';
    $_SESSION["email"] = $email;
    header("location:dash.php?q=0"); 
    // If the login is successful, the script redirects 
    //the user to the 'dash.php' page with the query 
    //parameter 'q' set to 0.
}
else header("location:$ref?w=Warning : Access denied");
?>
