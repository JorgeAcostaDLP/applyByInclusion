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

fetch('/comments/' + formId)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log('datacomment', data);
    data.map(comment => {
      document.getElementById('previousComments').innerHTML =
        comment.comment + '. Reviewer id: ' + comment.adminKey;
    });
  });
