$(document).ready(function() {
    console.clear();
    $(".delete").submit(function(e) {
        var form = $(this).serialize();
        console.log(form);
        $.ajax({
            url:"./functions/delete-picture.php",
            type:"POST",
            data:form,
            success:function(data, textStatus, jqXHR) {
                if (data) {
                    console.log(form);
                } else {
                    $(this).alert("Erreur requete!");
                }
            },
            error:function(data, textStatus, jqXHR) {
                alert("Erreur");
            }
        });
        $(this).parents(".gallery-admin").hide("slow", function() {
            $(this).parents(".gallery-admin").remove();
        });
        e.preventDefault();
        return false;
    });
});