
$.validator.setDefaults({
	highlight: function(input) {
		$(input).addClass("error-highlight");
		$('textarea:eq(0)').addClass("error-highlight");
		$(input).parent().addClass("error");
	},
	unhighlight: function(input) {
		$(input).removeClass("error-highlight");
		$('textarea:eq(0)').removeClass("error-highlight");
		$(input).parent().removeClass("error");

	}
});

// $.fn.clearForm = function() {
//   return this.each(function() {
//     var type = this.type, tag = this.tagName.toLowerCase();
//     if (tag == 'form')
//       return $(':input',this).clearForm();
//   if (type == 'text' || type == 'password' || tag == 'textarea')
//       this.value = '';
//   else if (type == 'checkbox' || type == 'radio')
//       this.checked = false;
//   else if (tag == 'select')
//       this.selectedIndex = -1;
// });
// };

$(document).ready(function() {



    // step form functions
    var form1 = $("#contact-form");

    var formValidate = form1.validate({

        ignore: ".ignore",
        debug: true,
        rules: {

            email: {
             required: true,
             email: true
         },
         nom: {
             required: true,
             minlength: 2
         },
         societe: {
             required: true,
             minlength: 1
         },
         prenom: {
             required: true,
             minlength: 2
         },
         message: {
             required: true,
             minlength: 15,
             maxlength: 700
         }

     },
     messages: {
      email: {
         required: "Entrez votre email",
         email: "Entrez un email valide"
     },
     nom: {
         required: "Entrez votre nom",
         minlength: "Votre nom doit dépasser 2 lettres"
     },
     societe: {
         required: "Entrez un nom de société",
         minlength: "Votre société doit dépasser une lettre"
     },
     prenom: {
         required: "Choisissez une catégorie",
         minlength: "Votre prénom doit dépasser 2 lettres"

     },
     message: {
         required: "Entrez un message...",
         minlength: "Au moins 15 caractères",
         maxlength: "Maximum 700 caractères"
     }
 },
 errorPlacement: function(error, element) {
  element.parent('div').append(error);
 //  $('input:eq(0),input:eq(1),#form-contact input,textarea').css({
 //     'margin-bottom': '1em'
 // });


},
success: function(label) {
  label.html("<i class=\"material-icons md-28 checked\">done</i>");
},
submitHandler: function(form) {

    var dataparam = form1.serialize();

    $.ajax({
        type: 'POST',
        async: true,
        url: 'php/mail.php',
        data: dataparam,
        datatype: 'json',
        cache: true,
        global: false,
        beforeSend: function() {
            $('#contact-form input, #contact-form textarea').animate({
                opacity: 0
            }, { 
                duration: 1000,
                specialEasing: {
                  opacity: "easeOutBounce"
              }

          });
            $('#loader').animate({
                opacity: 1
            }, {
                duration: 500,
                specialEasing: {
                  opacity: "easeOutBounce"
              }
          });
        },
        success: function(data) {
            if(data == 'success'){
                console.log(data);
            } else {
                console.log(data);
            }

        },
        complete: function(data) {
            $('#loader').fadeToggle(400);

            setTimeout(function(){

                $('#contact-form .btn').toggleClass('success-ajax');
                $('#contact-form .btn').html('Message Envoyé');},300);


            setTimeout(function(){

                location.reload();

            },3500);
        }


    });
}
});

    /*autosize textarea*/
    $(document).ready(function(){  
        $('textarea').focus(function(){  
           $(this).animate({"height":"130px",}, "fast");  
       //$('#variable-bloc').animate({"height":"53em",},"fast")
   });  
        $('textarea').blur(function(){  
           $(this).animate({"height": "40px",}, "fast" );  
       //$('#variable-bloc').animate({"height":"42em",},"fast")
   });
    });



});



// document.addEventListener("change", function(event) {
//   var element = event.target;
//   if (element && element.matches(".form-element-field")) {
//     element.classList[element.value ? "add" : "remove"]("-hasvalue");
// }
// });






