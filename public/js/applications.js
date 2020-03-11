let applications = [
  {
    "status": "NEW",
    "textInput": "Svetlana",
    "textArea": "I'm applying because...",
    "checkBox": true,
    "createdAt": "2020-03-10",
    "date": "2020-03-12"
  }
];

$(document).ready(function() {
  let table = $("#applications-table");

  table.DataTable ({
      "data" : applications,
      "columns" : [
          { "data" : "textInput" },
          { "data" : "status" },
          { "data" : "createdAt" }
      ]
  });
});
