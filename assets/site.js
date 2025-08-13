$(document).ready(function() 
{
	$(".close").css("display", "none");

	var isMenuOpen = false;

	$('.menu_btn').click(function()
	{
		if (isMenuOpen == false)
		{
		//alert('je suis dans le bon cas')
			$("#menu").clearQueue().animate({
				right : '0'
			})
			$("#page").clearQueue().animate({
				"margin-left" : '0px'
			})
			
		
			
			$(this).fadeOut(200);
			$(".close").fadeIn(300);
			
			isMenuOpen = true;
		} 
		
	
	});
	
		$('.menu_btn_index').click(function()
	{
		if (isMenuOpen == false)
		{
		//alert('je suis dans le bon cas')
			$("#menu").clearQueue().animate({
				right : '0'
			})
			$("#page").clearQueue().animate({
				"margin-left" : '0px'
			})
			
		
			
			$(this).fadeOut(200);
			$(".close").fadeIn(300);
			
			isMenuOpen = true;
		} 
		
	
	});
	
	$('.close').click(function()
	{
		if (isMenuOpen == true)
		{
			$("#menu").clearQueue().animate({
				right : '-240px'
			})
			$("#page").clearQueue().animate({
				"margin-left" : '0px'
			})
			
			$(this).fadeOut(200);
			$(".menu_btn").fadeIn(300);
			$(".menu_btn_index").fadeIn(300);
			
			isMenuOpen = false;
		}
	});
});


function VerifForm(form) {
    var nom=document.getElementById('form').nom.value;
    var prenom=document.getElementById('form').prenom.value;
    var email=document.getElementById('form').email.value;

    if (nom == "") {
        document.getElementById('msg_erreur').innerHTML= 'Veuillez indiquer votre nom !';
        document.getElementById('msg_erreur').style.display='block';
        document.getElementById('msg_erreur').className='focus';
        form.nom.focus();
        return false;
    } else {
        document.getElementById('msg_erreur').style.display='none';
    }
    if (prenom == "") {
        document.getElementById('msg_erreur').innerHTML= 'Veuillez indiquer votre prenom !';
        document.getElementById('msg_erreur').style.display='block';
        document.getElementById('msg_erreur').className='focus';
        form.prenom.focus();
        return false;
    } else {
        document.getElementById('msg_erreur').style.display='none';
    }
    if (email == "") {
        document.getElementById('msg_erreur').innerHTML= 'Veuillez indiquer votre email !';
        document.getElementById('msg_erreur').style.display='block4';
        document.getElementById('msg_erreur').className='focus';
        form.email.focus();
        return false;
    } else {
        document.getElementById('msg_erreur').style.display='none';
    }
    return true;
}

