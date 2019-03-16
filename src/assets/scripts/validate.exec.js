//const mailPhp = require('./php/mail.php');


var name = null;
const formObj = {
  form: document.querySelector('#contact-form'),
  data: function (data) {
    //for (name in data) {
    const FD = this.form.elements;
    //console.log(FD);
    var serialized = [];

    // Loop through each field in the form
    for (var i = 0; i < FD.length; i++) {

      var field = FD[i];

      // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
      if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

      // If a multi-select, get all selections
      if (field.type === 'select-multiple') {
        for (var n = 0; n < field.options.length; n++) {
          if (!field.options[n].selected) continue;
          serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
        }
      }

      // Convert field data to a query string
      else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
        serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
      }
    }

    return serialized.join('&');
    //}
  },
  sendForm: function () {

    const form = this.form;
    var XHR = new XMLHttpRequest();
    var formData = this.data();
    console.log(formData);
    var url = this.form.action;
    console.log(url);

    XHR.onerror = function () {
      console.log('error no server joined');
    };

    XHR.onreadystatechange = function () {
      document.querySelector('#loader').style.display = "block";
      document.querySelector('#contact-form .btn').classList.add('success-ajax');
      document.querySelector('#contact-form .btn').innerText = 'Envoi...';
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        
        console.log("sended");

        setTimeout(function () {document.querySelector('#contact-form .btn').innerText = 'Envoyé !';}, 700);
        setTimeout(function () {
          form.reset();
        }, 1200);
      }
    };
    XHR.open('GET', url + "?" + formData, true);
    console.log(XHR.open('GET', url + "?" + formData, true));
    XHR.send();

    //return false;
  }

  //return false;


};

formObj.form.onsubmit = (e) => {
  e.preventDefault();

  console.log('=======');
  formObj.sendForm();

};




/*autosize textarea*/
$(document).ready(function () {
  $('textarea').focus(function () {
    $(this).animate({
      "height": "130px",
    }, "fast");
    //$('#variable-bloc').animate({"height":"53em",},"fast")
  });
  $('textarea').blur(function () {
    $(this).animate({
      "height": "40px",
    }, "fast");
    //$('#variable-bloc').animate({"height":"42em",},"fast")
  });
});




//console.log(serialized);

// document.addEventListener("change", function(event) {
//   var element = event.target;
//   if (element && element.matches(".form-element-field")) {
//     element.classList[element.value ? "add" : "remove"]("-hasvalue");
// }
// });
