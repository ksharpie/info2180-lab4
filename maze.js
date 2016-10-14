window.onload = function(e){ 
    var boundary1 = document.getElementById('boundary1');

    boundary1.onmouseover = function(){
        boundary1.setAttribute('class', 'boundary youlose');
    }
}

