url = document.URL;
formId = url.split('?')[1];

const button = document.getElementById('back');
button.addEventListener('click', handleBack);
function handleBack(e) {
  e.preventDefault();
  $(location).attr('href', '/applications.html');
}

const newCommentForm = $('#newComment');
newCommentForm.on('submit', submitHandler);
function submitHandler(e) {
  e.preventDefault();
  $.ajax({
    url: '/comments',
    type: 'POST',
    data: newCommentForm.serialize()
  }).then(location.reload());
}

const deleteForm = document.getElementById('delete');
deleteForm.addEventListener('click', handleDeleteForm);
function handleDeleteForm(e) {
  e.preventDefault();
  $.ajax({
    url: '/forms' + '/' + formId,
    type: 'DELETE',
    data: newCommentForm.serialize()
  }).then($(location).attr('href', '/applications.html'));
}

const updateStatusForm = $('#updateStatus');
updateStatusForm.on('submit', submitHandler2);
function submitHandler2(e) {
  e.preventDefault();
  $.ajax({
    url: '/forms',
    type: 'PUT',
    data: updateStatusForm.serialize()
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
    document.getElementById('statusAdminId').value = formId;
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
