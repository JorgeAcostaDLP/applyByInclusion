let admins;
fetch('/admins/')
  .then(response => {
    return response.json();
  })
  .then(data => {
    admins = data;
  });

document.getElementById('login').addEventListener('click', handleSubmitMain);

function handleSubmitMain(e) {
  e.preventDefault();
  document.getElementById('loginForm').style.display = 'block';
}

document
  .getElementById('loginSubmit')
  .addEventListener('click', handleSubmitLogin);

function handleSubmitLogin(e) {
  e.preventDefault();
  let userName = document.getElementById('userName').value;
  let passWord = document.getElementById('passWord').value;
  let loginSuccess = false;
  admins.forEach(element => {
    if (element.userName === userName && element.userPassword === passWord)
      loginSuccess = true;
  });
  if (loginSuccess)
    document.location.href = document.location.href + '/applications.html';
  else alert('Login Unsuccesful');
}
