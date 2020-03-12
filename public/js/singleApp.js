url = document.URL;
formId = url.split('?')[1];

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
  });
let commentAdminKey;
fetch('/comments/' + formId)
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.map(comment => {
      commentAdminKey = comment.adminKey;

      document.getElementById('previousComments').innerHTML = comment.comment;
    });
    fetch('/admins/' + commentAdminKey.toString())
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        adminName = data[0].userName;
        document.getElementById('previousComments').innerHTML +=
          '. Reviewed by ' + adminName;
      });
  });
