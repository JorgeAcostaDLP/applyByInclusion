let admins = {};
fetch('/admins/')
  .then(response => {
    return response.json();
  })
  .then(data => {
    admins = data;
  });

document.getElementById('login').addEventListener('click', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
}
