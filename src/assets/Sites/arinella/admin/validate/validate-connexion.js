$(document).ready(function() {


    var connexion = $('#connexion').validate({
        rules: {
            'conn_mail': {
                required: true,
                email: true
            },
            'conn_mdp': {
                required: true,
                minlength: 6,
                maxlength: 14
            }

        },
        messages: {
            'conn_mail': {
                required: "Entrez votre mail d'administrateur",
                email: "Merci de saisir une adresse mail valide"
            },
            'conn_mdp': {
                required: "Entrez un mot de passe",
                minlength: "Votre mot de passe contient au moins 6 caractères",
                maxlength: "Votre mot de passe ne peut contenir plus de 14 caractères"
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



    
});