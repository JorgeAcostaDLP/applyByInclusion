// Fetching HTML Elements in Variables by ID.
// var x = document.getElementById('form_sample');
// var createform = document.createElement('form'); // Create New Element Form
// createform.setAttribute('action', ''); // Setting Action Attribute on Form
// createform.setAttribute('method', 'post'); // Setting Method Attribute on Form
// x.appendChild(createform);

// var heading = document.createElement('h2'); // Heading of Form
// heading.innerHTML = 'Application for 2020';
// createform.appendChild(heading);

// var line = document.createElement('hr'); // Giving Horizontal Row After Heading
// createform.appendChild(line);

// var linebreak = document.createElement('br');
// createform.appendChild(linebreak);

// var namelabel = document.createElement('label'); // Create Label for Name Field
// namelabel.innerHTML = 'Your Name : '; // Set Field Labels
// createform.appendChild(namelabel);

// var inputelement = document.createElement('input'); // Create Input Field for Name
// inputelement.setAttribute('type', 'text');
// inputelement.setAttribute('name', 'textInput');
// inputelement.setAttribute('id', 'textInput');
// createform.appendChild(inputelement);

// var linebreak = document.createElement('br');
// createform.appendChild(linebreak);

// var emaillabel = document.createElement('label'); // Create Label for E-mail Field
// emaillabel.innerHTML = 'Your Email : ';
// createform.appendChild(emaillabel);

// var emailelement = document.createElement('input'); // Create Input Field for E-mail
// emailelement.setAttribute('type', 'text');
// emailelement.setAttribute('name', 'checkbox');
// createform.appendChild(emailelement);

// var emailbreak = document.createElement('br');
// createform.appendChild(emailbreak);

// var messagelabel = document.createElement('label'); // Append Textarea
// messagelabel.innerHTML = 'Why would you like to be part of Inclusion? : ';
// createform.appendChild(messagelabel);

// var texareaelement = document.createElement('textarea');
// texareaelement.setAttribute('name', 'textArea');
// texareaelement.setAttribute('id', 'textArea');
// createform.appendChild(texareaelement);

// var messagebreak = document.createElement('br');
// createform.appendChild(messagebreak);

// var date = document.createElement('textArea');
// date.setAttribute('name', 'date');

// var submitelement = document.createElement('input'); // Append Submit Button
// submitelement.setAttribute('type', 'submit');
// submitelement.setAttribute('name', 'dsubmit');
// submitelement.setAttribute('value', 'Submit');
// createform.appendChild(submitelement);
// // createform.addEventListener('submit', handlesubmit);
// console.log(createform);
const form = $('#form2');
console.log(form);
form.on('submit', submitHandler);
function submitHandler(e) {
  e.preventDefault();
  $.ajax({
    url: '/forms',
    type: 'POST',
    data: form.serialize()
    //clears form data and displays latest reservation
  }).then(location.reload());
}
