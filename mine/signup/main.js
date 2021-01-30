function display2() {
    0 < document.getElementById("username").value.length ? (document.getElementById("d").innerHTML = '<div class="pass">Username</div>') : (document.getElementById("d").innerHTML = "");
}
function display() {
    var e = document.getElementById("password").value,
        n = document.getElementById("password");
    0 < e.length && "password" === n.type
        ? ((document.getElementById("disp").innerHTML = "<button  id='but' class='buton'><b>SHOW</b></button>"),
          document.getElementById("but").addEventListener("click", myFunction, false),
          (document.getElementById("dis").innerHTML = '<div class="pass"> Password </div>'))
        : 0 < e.length && "text" === n.type
        ? ((document.getElementById("disp").innerHTML = "<button  id='but' class='buton'><b>HIDE</b></button>"),
        document.getElementById("but").addEventListener("click",myFunction,false),
        (document.getElementById("dis").innerHTML = '<div class="pass"> Password </div>'))
        : ((document.getElementById("disp").innerHTML = ""), (document.getElementById("dis").innerHTML = ""));
}
function myFunction() {
    var e = document.getElementById("password");
    "password" === e.type ? ((e.type = "text"), (document.getElementById("but").innerHTML = "<b>HIDE</b>")) : ((e.type = "password"), (document.getElementById("but").innerHTML = "<b>SHOW</b>"));
}

function di() {
    var e = document.getElementById("pass2").value,
        n = document.getElementById("pass2");
    0 < e.length && "password" === n.type
        ? ((document.getElementById("disp2").innerHTML = "<button  id='but2' class='buton'><b>SHOW</b></button>"),
          document.getElementById("but2").addEventListener("click", myFunc, false),
          (document.getElementById("dis2").innerHTML = '<div class="pass"> Password </div>'))
        : 0 < e.length && "text" === n.type
        ? ((document.getElementById("disp2").innerHTML = "<button  id='but2' class='buton'><b>HIDE</b></button>"),
        document.getElementById("but2").addEventListener("click",myFunc,false),
        (document.getElementById("dis2").innerHTML = '<div class="pass"> Password </div>'))
        : ((document.getElementById("disp2").innerHTML = ""), (document.getElementById("dis2").innerHTML = ""));
}
function myFunc() {
    var e = document.getElementById("pass2");
    "password" === e.type ? ((e.type = "text"), (document.getElementById("but2").innerHTML = "<b>HIDE</b>")) : ((e.type = "password"), (document.getElementById("but2").innerHTML = "<b>SHOW</b>"));
}

function check()
{

    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var pass=document.getElementById("pass2").value;

    if(username.length >3 && password.length>3 && pass.length>3)
    {
       document.getElementById("loginbutton").innerHTML ="<button id='register'  class='sub' value='register'><b>REGISTER</b></button>";
       var buttonchange=document.getElementById("register");

       buttonchange.style.backgroundColor = "#007fff";

       document.getElementById("register").addEventListener("click", login,false);
    }
    else
    {
         document.getElementById("loginbutton").innerHTML ="<button   class='sub'><b>REGISTER</b></button>";
    }
}
function login() {
    document.getElementById("review").innerHTML ="";
    var e = "username=" + document.getElementById("username").value + "&pass1=" + document.getElementById("password").value + "&pass2=" + document.getElementById("pass2").value+ "&register=" + document.getElementById("register").value,
        n = new XMLHttpRequest();
    (n.timeout = 3e4),
        n.open("POST", "signup.php", !0),
        n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        (n.onload = function () {
            var a=this.responseText;
            if(a.indexOf("New user addeed successfully")>-1)
            {
              document.getElementById("username").value='';
                document.getElementById("password").value='';
                 document.getElementById("pass2").value='';
                 document.getElementById("review").innerHTML = this.responseText;
                  document.getElementById("loginbutton").innerHTML ="<button   class='sub'><b>REGISTER</b></button>";

            }
             else if(a.indexOf("encountered")>-1)
              {
                document.getElementById("review").innerHTML = this.responseText;
                 document.getElementById("loginbutton").innerHTML ="<button id='register'  class='sub' value='register'><b>REGISTER</b></button>";

         document.getElementById("register").style.backgroundColor = "#007fff";
       document.getElementById("retry").style.color='blue';
                document.getElementById("retry").addEventListener("click",login,false);
              }
              else
              {


                  document.getElementById("review").innerHTML = this.responseText;
                   document.getElementById("loginbutton").innerHTML ="<button id='register'  class='sub' value='register'><b>REGISTER</b></button>";
        document.getElementById("register").style.backgroundColor = "#007fff";

       document.getElementById("register").addEventListener("click", login,false);
              }


        }),
        (n.ontimeout = function () {
            (document.getElementById("register").innerHTML = "<b>REGISTER</b>"),
                (document.getElementById("review").innerHTML = '<br><div class="error"><b>Time out, please check your Internet connection or <br><a  id="try" href="#" >RETRY</a></b></div>');
                document.getElementById("try").addEventListener("click", login,false);
        }),
        n.send(e),
        (document.getElementById("register").innerHTML = '<div class="loader"></div>');
}

document.getElementById("username").addEventListener("input", display2,false);
document.getElementById("password").addEventListener("input", display,false);
document.getElementById("pass2").addEventListener("input", di,false);
document.getElementById("username").addEventListener("input", check,false);
document.getElementById("password").addEventListener("input", check,false);
document.getElementById("pass2").addEventListener("input", check,false);
