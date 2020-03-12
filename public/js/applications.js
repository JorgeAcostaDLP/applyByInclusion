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
        $(location).attr(
          'href',
          'http://localhost:3000/singleApplication.html?' + formId
        );
      });
    });
  });
