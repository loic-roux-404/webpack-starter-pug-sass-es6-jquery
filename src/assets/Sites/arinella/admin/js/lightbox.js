    $(document).ready(function() {


      $("#lightbox").fadeToggle("200");
      $(".add").dialog({
        title: "Action",
        height: 30,
        show: {
          effect: "fade",
          duration: 500
        },
        open: function(event, ui){
         setTimeout($(".add").dialog("close"),1100);
         $("#lightbox").delay("500").fadeToggle("300");       }
       });

      
    });

