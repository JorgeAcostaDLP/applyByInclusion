const form = $('#form2');
form.on('submit', submitHandler);
function submitHandler(e) {
  e.preventDefault();
  $.ajax({
    url: '/forms',
    type: 'POST',
    data: form.serialize()
    //clears form data and displays latest reservation
  })
    .then(alert('Form Submitted'))
    .then($(location).attr('href', '/'));
}
