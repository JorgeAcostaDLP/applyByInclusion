let applications = [
  {
    "status": "NEW",
    "textInput": "Svetlana",
    "textArea": "I'm applying because...",
    "checkBox": true,
    "createdAt": "2020-03-10",
    "date": "2020-03-12"
  },
  {
    "status": "UNDER_REVIEW",
    "textInput": "Stan",
    "textArea": "I'm the best...",
    "checkBox": true,
    "createdAt": "2020-03-11",
    "date": "2020-03-11"
  },
  {
    "status": "UNDER_REVIEW",
    "textInput": "Random Guy",
    "textArea": "I'm Random...",
    "checkBox": true,
    "createdAt": "2020-03-11",
    "date": "2020-03-11"
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
