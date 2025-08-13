// JavaScript Document

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
        document.getElementById('msg_erreur').style.display='block4;
        document.getElementById('msg_erreur').className='focus';
        form.email.focus();
        return false;
    } else {
        document.getElementById('msg_erreur').style.display='none';
    }
    return true;
}