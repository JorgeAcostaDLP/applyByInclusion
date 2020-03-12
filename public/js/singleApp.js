url = document.URL;
formId = url.split('?')[1];

const form = $('#newComment');

form.on('submit', submitHandler);
function submitHandler(e) {
  e.preventDefault();
  $.ajax({
    url: '/comments',
    type: 'POST',
    data: form.serialize()
  }).then(location.reload());
}

fetch('/forms/' + formId)
  .then(response => {
    return response.json();
  })
  .then(data => {
    document.getElementById('appInfoName').innerHTML = data[0].textInput;
    document.getElementById('appInfoId').innerHTML = data[0].id;
    document.getElementById('appInfoGraduated').innerHTML = data[0].checkBox;
    document.getElementById('appInfoWhy').innerHTML = data[0].textArea;
    document.getElementById('appInfoStatus').innerHTML = data[0].status;
    document.getElementById('formId').value = formId;
  });
let commentAdminKey;
fetch('/comments/' + formId)
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.map(comment => {
      commentAdminKey = comment.adminKey;
      document.getElementById('previousComments').innerHTML =
        document.getElementById('previousComments').innerHTML +
        comment.comment +
        ' - Reviewed by ' +
        comment.adminName +
        '<br/>';
    });
  });

// let admins = {};
// fetch('/admins/')
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     admins = data;
//   });
