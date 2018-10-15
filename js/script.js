// On écoute le click sur les évènements qui ont la classe nav-item
$(document).ready(function()
{
    $('.nav-item').click(function(event)
    {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });


   
   var text = $('#texte').text().trim()
   
   $('#texte').text('');

    for(let i = 0 ; i < text.length ; i++){

       
        setTimeout(function(){
             console.log(text[i]);
            $('#texte').append(text[i]);
        }, 300 * i );
        
    }
    
   
    
    
 })
        

    






