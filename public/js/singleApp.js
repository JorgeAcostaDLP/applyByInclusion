url = document.URL;
formId = url.split('?')[1];

fetch('/forms/' + formId)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    document.getElementById('appInfoId').value = data[0].id;
    document.getElementById('appInfoName').value = data[0].textInput;
    document.getElementById('appInfoGraduated').value = data[0].checkBox;
    document.getElementById('appInfoWhy').value = data[0].textArea;
    document.getElementById('appInfoStatus').value = data[0].status;
  });
