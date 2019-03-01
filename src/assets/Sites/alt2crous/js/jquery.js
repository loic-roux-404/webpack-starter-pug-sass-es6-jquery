           $(document).ready(function(){  
                $('textarea').focus(function(){  
                     $(this).animate({"height":"140px",}, "fast");  
                });  
                $('textarea').blur(function(){  
                     $(this).animate({"height": "40px",}, "fast" );  
                });  
           });
           
