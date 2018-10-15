// On écoute le click sur les évènements qui ont la classe nav-item
$(document).ready(function()
{
    $('.nav-item').click(function(event)
    {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });
})