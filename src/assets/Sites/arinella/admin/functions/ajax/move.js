/*$(document).ready(function() {

    console.clear();
   $(".form-move-up-int").submit(function( e ) {

        var form = $(this).serialize();
        
        console.log(form);

        $.ajax({
            url:"./functions/ajax/move-up-int.php",
            type:"POST",
            data : form,

            success: function(data, textStatus, jqXHR) {
                if(data){
                    console.log(form);
                }
                else{
                    $(this).html("PAS OK !");
                }           
            },
            error: function(data, textStatus, jqXHR){
                alert("ta gueule");
            }
        });

        return false;

    });
});

*/