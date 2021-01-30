<?php
session_start();
if(isset($_SESSION['user']))
{
  header('location:user/');
  die();
}
if(isset($_SESSION['admin']))
{
header('location:admin/');
 die();
}
?>
<!DOCTYPE html>
<html lang=en dir=ltr>
<head>
<meta charset=utf-8>
<link rel=stylesheet href=/mine/index.css >
<meta name=viewport content="width=device-width, initial-scale=1.0">
<title>Opportunity</title>
</head>
<body>
<noscript><br><b><u>Please enable javascript for this site to work</u></b><br></noscript>
<div id="container" class="container" >
<div class="bar1"></div>
<div class="bar2"></div>
<div class="bar3"></div>
</div>
<p>LOG IN</p>
<div id="review"></div>
<div class='check'>
<input type="text" id="username"  placeholder="Username" >
<div id='d'></div>
</div>
<div class='check'>
<input type="password" id="password"  placeholder="Password">
<div id='disp'></div>
<div id='dis'></div>
</div>
<div id='loginbutton'>
<button   class='sub' value='login'><b>Log in</b></button>
</div>
<div class="menu" id="menu">
<div  class="sidenav">
<a id="back" class="back">BACK</a>
<a class="contact" href="signup/">Register</a>
</div>
</div>
<script type='text/javascript' src="index.js">
</script>
</body>
</html>
