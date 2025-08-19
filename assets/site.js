$(document).ready(function() 
{
	$(".close").css("display", "none");

	var isMenuOpen = false;

	$('.menu_btn').click(function()
	{
		if (isMenuOpen == false)
		{
			$("#menu").clearQueue().animate({ right : '0' });
			$("#page").clearQueue().animate({ "margin-left" : '0px' });

			$(this).fadeOut(200);
			$(".close").fadeIn(300);

			isMenuOpen = true;
		}
	});

	$('.menu_btn_index').click(function()
	{
		if (isMenuOpen == false)
		{
			$("#menu").clearQueue().animate({ right : '0' });
			$("#page").clearQueue().animate({ "margin-left" : '0px' });

			$(this).fadeOut(200);
			$(".close").fadeIn(300);

			isMenuOpen = true;
		}
	});

	$('.close').click(function()
	{
		if (isMenuOpen == true)
		{
			$("#menu").clearQueue().animate({ right : '-240px' });
			$("#page").clearQueue().animate({ "margin-left" : '0px' });

			$(this).fadeOut(200);
			$(".menu_btn").fadeIn(300);
			$(".menu_btn_index").fadeIn(300);

			isMenuOpen = false;
		}
	});

	/* =========================
	   Google Ads conversion: ALL "More Details"
	   (без правок HTML; ловим по классу и тексту)
	   ========================= */
	$(document).on('click', 'a.custom_btn_land', function(e){
		// цепляем ТОЛЬКО ссылки с текстом "More Details"
		var txt = $.trim($(this).text()).toLowerCase();
		if (txt !== 'more details') return;

		var href   = $(this).attr('href')   || '';
		var target = ($(this).attr('target') || '').toLowerCase();

		// задерживаем переход, чтобы успел уйти хит
		var shouldDelay = href && href !== '#' && href.indexOf('javascript:') !== 0;
		if (shouldDelay) e.preventDefault();

		var proceeded = false;
		function goNext(){
			if (proceeded) return;
			proceeded = true;
			if (shouldDelay){
				if (target === '_blank') window.open(href, '_blank');
				else window.location.href = href;
			}
		}

		try {
			if (typeof gtag === 'function'){
				gtag('event', 'conversion', {
					send_to: 'AW-17198813589/jOcGCPWtsfsaEJWjhIlA',
					value: 1.0,
					currency: 'PLN',
					event_callback: goNext
				});
				// фоллбек на случай отсутствия callback
				setTimeout(goNext, 500);
			} else {
				goNext();
			}
		} catch (err){
			goNext();
		}
	});
});


function VerifForm(form) {
    var nom    = document.getElementById('form').nom.value;
    var prenom = document.getElementById('form').prenom.value;
    var email  = document.getElementById('form').email.value;

    if (nom == "") {
        document.getElementById('msg_erreur').innerHTML = 'Veuillez indiquer votre nom !';
        document.getElementById('msg_erreur').style.display = 'block';
        document.getElementById('msg_erreur').className = 'focus';
        form.nom.focus();
        return false;
    } else {
        document.getElementById('msg_erreur').style.display = 'none';
    }
    if (prenom == "") {
        document.getElementById('msg_erreur').innerHTML = 'Veuillez indiquer votre prenom !';
        document.getElementById('msg_erreur').style.display = 'block';
        document.getElementById('msg_erreur').className = 'focus';
        form.prenom.focus();
        return false;
    } else {
        document.getElementById('msg_erreur').style.display = 'none';
    }
    if (email == "") {
        document.getElementById('msg_erreur').innerHTML = 'Veuillez indiquer votre email !';
        document.getElementById('msg_erreur').style.display = 'block4'; // оставил, как было
        document.getElementById('msg_erreur').className = 'focus';
        form.email.focus();
        return false;
    } else {
        document.getElementById('msg_erreur').style.display = 'none';
    }
    return true;
}
