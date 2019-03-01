

$.validator.setDefaults({
    highlight: function(input) {
        $(input).addClass("error-highlight");
        //$('.select2-selection--multiple').addClass("error-highlight");
        $(input).parent().addClass("error");
    },
    unhighlight: function(input) {
        $(input).removeClass("error-highlight");
        //$('.select2-selection--multiple').removeClass("error-highlight");
        $(input).parent().removeClass("error");
    }
});



$(document).ready(function() {


    $.validator.addMethod("username_regex", function(value, element) {
        return this.optional(element) || /^[a-z0-9\.\-_]{3,30}$/i.test(value);
    }, "Saisissez une informations uniquement avec des caractères numérique et alphabétique");


            // form functions
            validAdmin = $("#addAdmin").validate({
                rules: {
                    debug: true,
                    onfocusout: true,
                    'adm_mail': {
                        required: true,
                        email: "true",
                        remote: {
                            url: 'validate/validatorAJAX.php',
                            type: 'post',
                            data: {
                                email: function() {
                                    return $('#addAdmin :input[name="adm_mail"]').val();
                                }
                            }
                        }

                    },
                    'adm_mdp': {
                        required: true,
                        username_regex: true,
                        minlength: 6,
                        maxlength: 14
                    },
                    'adm_mdp_confirm': {
                        required: true,
                        username_regex: true,
                        minlength: 6,
                        maxlength: 14,
                        equalTo: "#adm_mdp"
                    }



                },
                messages: {
                    'adm_mail': {
                        required: "Entrez votre pseudo",
                        email: "Merci de saisir une adresse mail valide",
                        remote: "Cet administrateur existe déja"
                    },
                    'adm_mdp': {
                        required: "Entrez un mot de passe",
                        username_regex: "Le mot de passe doit comporter uniquement des nombres et des lettres",
                        minlength: "Le mot de passe doit contenir au moins 6 caractères",
                        maxlength: "Le mot de passe ne peut contenir plus de 14 caractères"
                    },
                    'adm_mdp_confirm': {
                        required: "Confirmer le mot de passe",
                        username_regex: "Le mot de passe doit comporter uniquement des nombres et des lettres",
                        minlength: "Le mot de passe doit contenir au moins 6 caractères",
                        maxlength: "Le mot de passe ne peut contenir plus de 14 caractères",
                        equalTo: "La confirmation doit correspondre au mot de passe"
                    }

                },
                errorPlacement: function(error, element) {
                    element.parent('div').append(error);

                },
                success: function(label) {
                    label.html("<i class=\"material-icons md-28 checked\">done</i>");
                    }

                });






/*--------------FILE IMPORT VALIDATE-----------------*/


$(document).ready(function() {

    var v = $('#int_add_pic').validate({
        rules: {
            'int_picture': {
                required: true
            }
        },
        messages: {
            'int_picture': {
                required: "Fichier manquant"
            },
        },

        errorPlacement: function(error, element) {
            element.parent('div').append(error);

        },
        success: function(label) {
            label.html("<i class=\"material-icons md-28 checked\">done</i>");
        },
        submitHandler: function(form) {
            console.log("Submitted!");
            form.submit();
        }

    });


    var v2 = $('#ext_add_pic').validate({
        rules: {
            'ext_picture': {
                required: true
            }
        },
        messages: {
            'ext_picture': {
                required: "Fichier manquant"
            },
        },

        errorPlacement: function(error, element) {
            element.parent('div').append(error);

        },
        success: function(label) {
            label.html("<i class=\"material-icons md-28 checked\">done</i>");
        },
        submitHandler: function(form) {
            console.log("Submitted!");
            form.submit();
        }

    });



if(v2.valid() ){
    $('.add-pic').click(function(){
        $('.php_active').toggle(100);
    });

}


});

 



        });