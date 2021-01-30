function show() {
  'use strict';
  document.getElementById('menu').style.width = '250px';
}

function hide() {
  'use strict';
  document.getElementById('menu').style.width = '0px';
}
function display2() {
  'use strict';
  if ( 0 < document.getElementById('username').value.length) {
    document.getElementById('d').innerHTML = '<div class="pass">username</div>';
  } else {
    document.getElementById('d').innerHTML = '';
  }
}
function display() {
  'use strict';
  const e = document.getElementById('password').value;
  const n = document.getElementById('password');
  const pa='<div class="pass"> Password </div>';
  const hd='<button  id=\'but\' class=\'buton\'><b>HIDE</b></button>';
  const sh='<button  id=\'but\' class=\'buton\'><b>SHOW</b></button>';
  if (0 < e.length && 'password' === n.type ) {
    document.getElementById('disp').innerHTML = sh;
    document.getElementById('but').addEventListener('click', myFunction, false);
    document.getElementById('dis').innerHTML = pa;
  } else if (0 < e.length && 'text' === n.type) {
    document.getElementById('disp').innerHTML = hd;
    document.getElementById('but').addEventListener('click', myFunction, false);
    document.getElementById('dis').innerHTML = pa;
  } else {
    document.getElementById('disp').innerHTML = '';
    document.getElementById('dis').innerHTML = '';
  }
}
function myFunction() {
  'use strict';
  const u = document.getElementById('password');
  if ('password' === u.type) {
    u.type = 'text';
    document.getElementById('but').innerHTML = '<b>HIDE</b>';
  } else {
    u.type = 'password';
    document.getElementById('but').innerHTML = '<b>SHOW</b>';
  }
}

function check() {
  'use strict';
  const username=document.getElementById('username').value;
  const password=document.getElementById('password').value;
  const lbtn='<button id=\'login\'  class=\'sub\'' +
'value=\'login\'><b>Log in</b></button>';

  const lg='<button   class=\'sub\' value=\'login\'><b>Log in</b></button>';

  if (username.length >0 && password.length>3) {
    document.getElementById('loginbutton').innerHTML =lbtn;
    const buttonchange=document.getElementById('login');

    buttonchange.style.backgroundColor = '#007fff';

    document.getElementById('login').addEventListener('click', login, false);
  } else {
    document.getElementById('loginbutton').innerHTML =lg;
  }
}
function login() {
  'use strict';
  const offline='<br><b>Seems that you may be offline, please check your Internet connectioin or' +
        ' <br><a id=\'offline\'>RETRY</a></b>';
  const again = '<br><b>Time out, please check your Internet connectioin or' +
        ' <br><a id=\'try\'>RETRY</a></b>';

  document.getElementById('review').innerHTML ='';
  const ee = 'username=' + document.getElementById('username').value +
  '&password=' + document.getElementById('password').value +
  '&login=' + document.getElementById('login').value;
  try {
    const n = new XMLHttpRequest();
    n.timeout = 3e4;
    n.open('POST', 'login.php', true);
    n.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    n.onload = function() {
      const a=this.responseText;
      if ('user' === this.responseText) {
        window.location = 'user/';
      } else if ('admin' === this.responseText) {
        window.location = 'admin/';
      }
     else if (a.indexOf('encountered')>-1) {
        document.getElementById('review').innerHTML = this.responseText;
        document.getElementById('login').innerHTML = '<b>Log in</b>';
        document.getElementById('login').addEventListener('click', login, false);
        document.getElementById('retry').style.color = 'blue';
        document.getElementById('retry').style.fontWeight = '700';
        document.getElementById('retry').addEventListener('click', login, false);
      } else {
        document.getElementById('review').innerHTML = this.responseText;
        document.getElementById('login').innerHTML = '<b>Log in</b>';
        document.getElementById('login').style.backgroundColor = '#007fff';
        document.getElementById('login').addEventListener('click', login, false);
      }
    };
    n.onerror = function() {
      document.getElementById('login').innerHTML = '<b>Log in</b>';
      document.getElementById('review').innerHTML = offline;
      document.getElementById('offline').style.color = 'blue';
      document.getElementById('offline').addEventListener('click', login, false);
    };
    n.ontimeout = function() {
      document.getElementById('login').innerHTML = '<b>Log in</b>';
      document.getElementById('review').innerHTML = again;
      document.getElementById('try').style.color = 'blue';
      document.getElementById('try').addEventListener('click', login, false);
    };
    n.send(ee);
    document.getElementById('login').innerHTML = '<div class="loader"></div>';
  } catch (err) {
    document.getElementById('review').innerHTML = err.message;
  }
}

document.getElementById('username').addEventListener('input', display2, false);
document.getElementById('password').addEventListener('input', display, false);
document.getElementById('username').addEventListener('input', check, false);
document.getElementById('password').addEventListener('input', check, false);
document.getElementById('container').addEventListener('click', show, false);
document.getElementById('back').addEventListener('click', hide, false);
