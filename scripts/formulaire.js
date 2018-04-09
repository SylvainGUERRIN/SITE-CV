$(function(){
    $("#envoi").click(function(){
        valid = true;
        if($("#name").val() == ""){
            $("#name").next(".erreur-message").fadeIn().text("Veuillez entrer votre nom");
            valid = false;
        }
        else if(!$("#name").val().match(/^[a-z]+$/i)){
            $("#name").next(".erreur-message").fadeIn().text("Veuillez entrer un nom valide");
            valid = false;
        }
        else{
            $("#name").next(".erreur-message").fadeOut();
        }
        if($("#email").val() == ""){
            $("#email").next(".erreur-message").fadeIn().text("Veuillez entrer votre adresse mail");
            valid = false;
        }
        else if(!$("#email").val().match(/^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/)){
             $("#email").next(".erreur-message").fadeIn().text("Veuillez entrer une adresse mail valide");
            valid = false;   
        }
        else{
            $("#email").next(".erreur-message").fadeOut();
        }
        if($("#subject").val() == ""){
            $("#subject").next(".erreur-message").fadeIn().text("Veuillez entrer un sujet");
            valid = false;
        }
        else if(!$("#subject").val().match(/^[a-z]+$/i)){
            $("#subject").next(".erreur-message").fadeIn().text("Veuillez entrer un sujet valide");
            valid = false;
        }
        else{
            $("#subject").next(".erreur-message").fadeOut();
        }
        
        return valid;
    });
});