$.validator.setDefaults({
    highlight:function(input) {
        $(input).addClass("error-highlight");
        $("textarea:eq(0)").addClass("error-highlight");
        $(input).parent().addClass("error");
    },
    unhighlight:function(input) {
        $(input).removeClass("error-highlight");
        $("textarea:eq(0)").removeClass("error-highlight");
        $(input).parent().removeClass("error");
    }
});

$(document).ready(function() {
    var reservation = $("#reservation");
    var resValidate = reservation.validate({
        rules:{
            res_email:{
                required:true,
                email:true
            },
            res_tel:{
                required:true,
                number:true,
                min:10
            },
            res_pseudo:{
                required:true,
                email:true
            },
            res_date:{
                required:true,
                minlength:1,
                maxlength:2
            }
        },
        messages:{
            email:{
                required:"Entrez votre email",
                email:"Entrez un email valide"
            },
            societe:{
                required:"Entrez un nom de société",
                minlength:"Votre société doit comporter plus de deux caractères"
            },
            "choix[]":{
                required:"Choisissez une catégorie",
                minlength:"Au minimum une catégorie",
                maxlength:"Au maximum 2 catégories"
            },
            "service[]":{
                required:"Choisissez vos services",
                minlength:"Au moins 1 service",
                maxlength:"Pas plus de 2 services"
            }
        },
        errorPlacement:function(error, element) {
            element.parent("div").append(error);
            $("input:eq(0),input:eq(1),#page1 input,textarea, .select2-selection--multiple").css({
                "margin-bottom":"1em"
            });
            if (element.attr("name") == "choix[]") error.insertAfter(".checked-label");
        },
        success:function(label) {
            label.html('<i class="material-icons md-28 checked">done</i>');
        },
        ignore:".ignore",
        debug:true
    });
});