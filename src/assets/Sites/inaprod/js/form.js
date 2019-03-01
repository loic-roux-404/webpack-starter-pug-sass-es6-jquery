$.validator.setDefaults({
    highlight: function(input) {
        $(input).addClass("error-highlight");
        $('textarea:eq(0)').addClass("error-highlight");
        $('.select2-selection--multiple').addClass("error-highlight");
        $(input).parent().addClass("error");
    },
    unhighlight: function(input) {
        $(input).removeClass("error-highlight");
        $('textarea:eq(0)').removeClass("error-highlight");
        $('.select2-selection--multiple').removeClass("error-highlight");
        $(input).parent().removeClass("error");
    }
});

$(document).ready(function() {

    $(".checkboxes input[type=\"checkbox\"]").iCheck({
        checkboxClass: 'icheckbox_flat-aero',
        radioClass: 'iradio_flat-aero',
        increaseArea: '20%' // optional
    });
    $.fn.select2.defaults.set('language', 'fr');

    $('#service').select2({
        minimumResultsForSearch: Infinity,
        maximumSelectionLength: 2,
        placeholder: "Selectionner un service"

    });


    // step form functions
    var form1 = $("#devis");

    var v1 = form1.validate({
        rules: {

            email: {
                required: true,
                email: true
            },
            societe: {
                required: true,
                minlength: 2
            },
            'choix[]': {
                required: true,
                minlength: 1,
                maxlength: 2
            },
            'service[]': {
                required: true,
                minlength: 1,
                maxlength: 2
            }

        },
        messages: {
            email: {
                required: "Entrez votre email",
                email: "Entrez un email valide"
            },
            societe: {
                required: "Entrez un nom de société",
                minlength: "Votre société doit comporter plus de deux caractères"
            },
            'choix[]': {
                required: "Choisissez une catégorie",
                minlength: "Au minimum une catégorie",
                maxlength: "Au maximum 2 catégories"

            },
            'service[]': {
                required: "Choisissez vos services",
                minlength: "Au moins 1 service",
                maxlength: "Pas plus de 2 services"
            }
        },
        errorPlacement: function(error, element) {
            element.parent('div').append(error);
            $('input:eq(0),input:eq(1),#page1 input,textarea, .select2-selection--multiple').css({
                'margin-bottom': '1em'
            });
            if (element.attr("name") == "choix[]")
                error.insertAfter(".checked-label");

        },
        success: function(label) {
            label.html("<i class=\"material-icons md-28 checked\">done</i>");
        },
        ignore: ".ignore",
        debug: true
    });

    form2 = $("#devis2");
    var v2 = form2.validate({
        rules: {

            telephone: {
                required: true,
                number: true,
                min: 9
            },
            budget: {
                required: true,
                number: true,
                min: 200,
                max: 3000
            },
            description: {
                required: true,
                minlength: 50
            }
        },
        messages: {
            telephone: {
                required: "Entrez votre telephone",
                number: "Veuillez entrer un num&eacutero",
                min: "Num&eacutero invalide"
            },
            budget: {
                required: "Veuillez renseigner votre budget",
                number: "Vous devez entrer un nombre",
                min: "Nos services s'&eacuteleve a un minimum de 200€",
                max: "Maximum 3000€ de budget"
            },
            description: {
                required: "Veuillez pr&eacutesent&eacute votre projet",
                minlength: "Votre description du projet doit faire au moins 50 caractères"
            }
        },
        errorPlacement: function(error, element) {
            element.parent('div').append(error);
            $('input:eq(0),input:eq(1),#page2 input,textarea').css({
                'margin-bottom': '1em'
            });

        },
        success: function(label) {
            label.html("<i class=\"material-icons md-28 checked\">done</i>");
        },
        ignore: ".ignore",
        debug: true
    });

    $('.next').click(function() {
        v1.valid();
        if (form1.valid()) {
            $('#page1').fadeOut('fast');
            $('#page2').fadeIn();
        }
    });

    $('.prev').click(function() {
        $('#page2').fadeOut('fast');
        $('#page1').fadeIn();
    });

    $('.submit').on('click', function() {
        v2.valid();
        if (form2.valid()) {
            alert("Vous venez d'envoyer votre formulaire! la bretagne est un beau pays");
        }
    });


});