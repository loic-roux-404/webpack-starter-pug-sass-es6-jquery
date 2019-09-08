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
      // if (field.type === 'select-multiple') {
      //   for (var n = 0; n < field.options.length; n++) {
      //     if (!field.options[n].selected) continue;
      //     serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
      //   }
      // }

      // Convert field data to a query string
      if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
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
      document.querySelector('#contact-form .btn').classList.add('success-ajax');
      document.querySelector('#contact-form .btn').innerText = 'Envoi...';
      if (this.readyState == 4 && this.status == 200) {


        setTimeout(function () {document.querySelector('#contact-form .btn').innerText = 'Envoyé !';}, 700);
        setTimeout(function () {
          form.reset();
        }, 1200);
      }
    };
    XHR.open('GET', url + "?" + formData, true);
    //console.log(XHR.open('GET', url + "?" + formData, true));
    XHR.send();

    //return false;
  }

  //return false;


};

formObj.form.onsubmit = (e) => {
  e.preventDefault();

  //console.log('=======');
  if (formObj.form.elements[3].value.match('([^0-9]|^)13([^0-9]|$)')){
    formObj.sendForm();
    setTimeout(function(){location.reload();},2000);
  }else{
    document.querySelector('#contact-form .btn').classList.add('error-form');
    document.querySelector('#contact-form .btn').innerText = 'Are you as bad in math ?';
  }

};


if(/Android 4\.[0-3]/.test(navigator.appVersion)){
  window.addEventListener("resize", function(){
     if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA" ){
        window.setTimeout(function(){
           document.activeElement.scrollIntoViewIfNeeded();
        },0);
     }
  });
}


/*FORM interactions*/

/*autosize textarea*/
let textarea = document.getElementsByTagName('textarea')[0];

  const animeTxt = anime({
    targets:'textarea',
    height:170,
    autoplay: false,
    easing: 'easeOutCubic',
    duration:160
  });
  let click = false;
  
  textarea.addEventListener("focus", function( event ) {
    if(click === false){
      animeTxt.play();
    }
    if(animeTxt.reversed){
      animeTxt.reverse();
      animeTxt.play();
      click = true;
    }
  });
  textarea.addEventListener("blur", function( event ) {
    if(!animeTxt.reversed){
      animeTxt.reverse();
      animeTxt.play();
    }    
  });
