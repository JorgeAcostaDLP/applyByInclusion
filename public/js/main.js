let admins;
fetch('/admins/')
  .then(response => {
    return response.json();
  })
  .then(data => {
    admins = data;
  });

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
    localStorage.setItem('loggedIn', 'true');
  });
  if (loginSuccess)
    document.location.href = document.location.href + '/applications.html';
  else alert('Login Unsuccesful');
}
document.getElementById('login').addEventListener('click', handleSubmitMain);

if (localStorage.getItem('loggedIn') === 'true') {
  $(location).attr('href', '/applications.html');
}
// 1. `npm install`
// 2. `npx sequelize-cli db:migrate`
// 3. `npx sequelize-cli db:seed:all`
// 4. `npx nodemon`
