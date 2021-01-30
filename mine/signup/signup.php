<?php
include '../connect.php';

if(!isset($_POST["username"]) || !isset($_POST["pass1"]) || !isset($_POST["pass2"]))
{
    echo'<div class="error"><b>Please ensure you have entered a username and both passwords</b></div>';
}
else if(empty($_POST["username"]) || empty($_POST["pass1"]) || empty($_POST["pass2"]))
{
   echo '<div class="error"><b>Fill all fields</b>';
}
else if(strlen($_POST["username"])> 30 || strlen($_POST["pass1"])> 30 || strlen($_POST["pass2"])> 30  )
{
     echo '<div class="error"><b>Please ensure tha both passwords and school each have less than thirty characters.</b></div>';
}

else if(strlen($_POST["pass1"])<7)
{
    echo '<div class="error"><b>The Password is too short, it must have atleast eight characters</b></div>';
}
 else if($_POST["pass1"] != $_POST["pass2"])
 {
    echo "<div class='error'><b>The passwords entered don't match</b></div>";
 }
 else if(isset($_POST['register']))
 {
     $username=ucfirst(strtolower($_POST["username"]));
  $pass1=$_POST["pass1"];
  $pass2=$_POST["pass2"];
  $pos='user';

  try
  {
  $mysql='SELECT username FROM login WHERE username=?';
  $statement=$pdo->prepare($mysql);
  $statement->execute([$username]);
  $total=$statement->rowcount();
  if($total>0)
  {
      echo '<b>The username name <u><div class="error">'.htmlentities($username).'</div></u> already exists.</b>';

}
else
{
    $pas1=password_hash($pass1, PASSWORD_DEFAULT);
$query="INSERT INTO login( username,password,position )VALUES (?,?,?)";
$stmt=$pdo->prepare($query);
$success=$stmt->execute([$username,$pas1,$pos]);

if($success)
{
  echo '<u><b><br>New user addeed successfully</b></u>';
}
else {
echo'<b>An error was encountered while trying to register user.<br> <div id ="retry"> RETRY</div></b>';
}
}
}
catch(PDOException $e)
{
    echo'<b>An error was encountered while trying to register user.<br> <div id ="retry"> RETRY</div></b>';
}
  }

else
{
    echo'<div class="error"><b>An error was encountered while trying to register user.</div> <div id ="retry"> RETRY</div></b><br>';
}
 ?>
