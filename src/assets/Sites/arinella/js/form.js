$.validator.setDefaults({
    highlight: function(input) {
        $(input).addClass("error-highlight");
        $('textarea').addClass("error-highlight");
        $(input).parent().addClass("error");
    },
    unhighlight: function(input) {
        $(input).removeClass("error-highlight");
        $('textarea').removeClass("error-highlight");
        $(input).parent().removeClass("error");
    }
});


$(document).ready(function() {


    $("#res_date_1").datepicker({
        dateFormat: 'yy/mm/dd',
        changeMonth: true,
        minDate: 4,
        maxDate: '+2y',
        onSelect: function(date) {

            var selectedDate = new Date(date);
            var msecsInADay = 86400000;
            var endDate = new Date(selectedDate.getTime() + msecsInADay * 4);

            //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
            $("#res_date_2").datepicker("option", "minDate", endDate);
            $("#res_date_2").datepicker("option", "maxDate", '+2y');

        }
    });

    $("#res_date_2").datepicker({
        dateFormat: 'yy/mm/dd',
        changeMonth: true
    });

    $("input, textarea").on("keyup", function() {
        $(this).prev("label").toggleClass("inputs--filled", (!this.value == ""));
    });

    /*validate reserver form*/
    //var accordion = $("#accordion").accordion();
    //var current = 0;
    var form = $("#reservation");
    $.validator.addMethod("username_regex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    }, "Saisissez une informations uniquement avec des caractères simple");

/*$.validator.addMethod("phone_regex", function(value, element) {
        return this.optional(element) || /^((\+|00)33\s?|0)[67](\s?\d{2}){4}$/.test(value);
    }, "Numéro invalide");*/


    // form functions
    var v = form.validate({
        rules: {
            debug: true,
            ignore: ".ignore",

            'res_nom': {
                required: true,
                minlength: 2,
                maxlength: 18,
                username_regex: true
            },
            'res_prenom': {
                required: true,
                minlength: 2,
                maxlength: 16,
                username_regex: true
            },
            'res_mail': {
                required: true,
                email: true

            },
            'res_tel': {
                required: true,
                minlength: 10,
                maxlength: 14,
               // phone_regex:true
           },
           'res_date_1': {
            required: true,
            minlength: 10,
            maxlength: 10
        },
        'res_date_2': {
            required: true,
            minlength: 10,
            maxlength: 10
        },
        'res_message': {
            required: true,
            minlength: 20,
        }

    },
    messages: {
        'res_nom': {
            required: "Veuillez entrer un nom",
            maxlength: "18 caractères maximum",
            minlength: "2 caractères minimum",
            username_regex: "Caractère(s) invalide"
        },
        'res_prenom': {
            required: "Veuillez entrer un prénom",
            minlength: "2 caractères minimum",
            maxlength: "18 caractères maximum",
            username_regex: "Caractère(s) invalide"
        },
        'res_mail': {
            required: "Entrez un mail",
            maxlength: "Trop de caractères",
            email: "L'adresse mail est invalide"

        },
        'res_tel': {
            required: "Entrez un numéro de téléphone",
            minlength: "Au mois 10 chiffre",
            maxlength: "Au moins 14 chiffres (id pays compris)",
                //phone_regex:"numéro de teléphone invalide"
            },
            'res_date_1': {
                required: "Entrez une date",
                maxlength: "format unique : yy/mm/dd",
                minlength: "format unique : yy/mm/dd"
            },
            'res_date_2': {
                required: "Entrez une date",
                maxlength: "format unique : yy/mm/dd",
                minlength: "format unique : yy/mm/dd"
            },
            'res_message': {
                required: "Veuillez entrer un message pour accompagner la reservation",
                minlength: "Courte présentation et objectif du séjour (30 caractères)"
            }

        },
        errorPlacement: function(error, element) {
            element.parent('span').append(error).addClass('fix-error-placement');

        },
        onkeyup: function(element) {
            $(element).valid();
        },
        success: function(div, element) {
            div.html("<i class=\"material-icons md-28 checked\">done</i>");
        }

    });

    $.validator.addMethod("pageRequired", function(value, element) {
        function match(index) {
            return current == index && $(element).parents("#page" + (index + 1)).length;
        }
        if (match(0) || match(1)) {
            return !this.optional(element);
        } else {
            return "dependency-mismatch";
        }
    }, $.validator.messages.required);

    $(".next").click(function() {
        if (v.form()) {
            //accordion.accordion("option", "active", 1);
            //current = 1;
            $('#page1').fadeToggle(100);

            $('#page2').slideToggle(300);
        }

    });

    $(".prev").click(function() {
        //accordion.accordion("option", "active", 0);
        //current = 0;
        $('#page2').fadeToggle(100);

        $('#page1').slideToggle(300);
    });


    $(".submit").click(function(){
        if(v.form()){
            $(this).prop('disabled', true);
            $(this).html('Envoi...');
            form.submit();
        }
    });

    /*autosize textarea*/
    $(document).ready(function() {
        $('textarea').focus(function() {
            $(this).animate({ "height": "120px", }, "fast");

            $('#reservation').css({
                'padding':'1% 6% 1% 6%'
            });
            $('.prev').css({
                'padding':'0.7em 0'
            });
            $('#reservation .btn-3:eq(1)').addClass('fix-arrow-button');
        });

        $('textarea').blur(function() {
            $(this).animate({ "height": "22px", }, "fast");

            $('.prev').css({
                'padding':'1.44em 0'
            });
            $('#reservation').css({
                'padding':'1% 6% 4% 6%'
            });
            $('#reservation .btn-3:eq(1)').removeClass('fix-arrow-button');

        });
    });





});