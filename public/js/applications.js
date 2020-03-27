fetch('/forms')
  .then(response => {
    return response.json();
  })
  .then(data => {
    applications = data;
    $(document).ready(function() {
      let table = $('#applications-table');
      table.DataTable({
        data: applications,
        columns: [
          { data: 'id' },
          {
            data: 'textInput'
          },
          { data: 'status' },
          { data: 'createdAt' }
        ]
      });
      $(document).on('click', '#applications-table tr', function(e) {
        e.preventDefault();
        currentTarget = e.currentTarget.innerHTML;
        formId = currentTarget.slice(
          currentTarget.indexOf('>') + 1,
          currentTarget.indexOf('</')
        );
        $(location).attr('href', '/singleapplication.html?' + formId);
      });
    });
  });
const newAdminForm = $('#newAdmin');
newAdminForm.on('submit', submitHandler);
function submitHandler(e) {
  e.preventDefault();
  $.ajax({
    url: '/admins',
    type: 'POST',
    data: newAdminForm.serialize()
  }).then(location.reload());
}
if (localStorage.getItem('loggedIn') !== 'true') {
  $(location).attr('href', '/');
}
const button = document.getElementById('logOut');
button.addEventListener('click', handleLogOut);
function handleLogOut(e) {
  e.preventDefault();
  localStorage.clear();
  $(location).attr('href', '/');
}
