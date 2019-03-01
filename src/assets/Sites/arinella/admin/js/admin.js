$(document).ready(function() {
    //-------------admin confirm-------------\\
    $("#confirm").on("click", function(e) {
        $('#lightbox').fadeToggle('800');
        $('body').css({
            'overflow': 'hidden'
        });
        var link = this;
        e.preventDefault();
        $("<div id=\"dialog\" class=\"montserrat f12pt f300\"><span>Êtes Vous sur de vouloir supprimer votre compte administrateur</span></div>").dialog({
            title: "Suppression",
            height:200,
            buttons: {
                "Oui": function() {
                    window.location = link.href;
                },
                "Annuler": function() {
                    $(this).dialog("close");
                },

            },
            show: {
                effect: "fade",
                duration: 500
            },
            hide: {
                effect: "fade",
                duration: 300
            },
            close: function(ev, ui){
             /*Do stuff always when closing*/                 
             Hide();
         }
     });
    });

    function Hide() {
       
        $('body').css({
            'overflow': 'visible'
        });
        $('#lightbox').fadeToggle('300');
        event.preventDefault();
    }


//-------FILE INPUT CVHANGE CURSOR------\\








});