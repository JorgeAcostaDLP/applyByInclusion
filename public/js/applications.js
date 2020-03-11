fetch('/forms')
  .then(response => {
    return response.json();
  })
  .then(data => {
    applications = data;
    console.log(data);

    $(document).ready(function() {
      let table = $('#applications-table');

      table.DataTable({
        data: applications,
        columns: [
          { data: 'textInput' },
          { data: 'status' },
          { data: 'createdAt' }
        ]
      });
    });
  });
