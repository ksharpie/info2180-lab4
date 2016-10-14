window.onload = function(e)
{ 
    
  var boundaries = document.querySelectorAll('.boundary');
  var end = document.getElementById('end');
  var start = document.getElementById('start');

  for (var i=0; i<boundaries.length; i++)
  {
    boundaries[i].onmouseover = function()
    {
      for (var j=0;j<boundaries.length-1; j++)
      {
        boundaries[j].setAttribute('class', 'boundary youlose');
      }  
    } 
  }

  start.onclick = function()
  {
    for (var i=0;i<boundaries.length-1; i++)
    {
      boundaries[i].setAttribute('class', 'boundary');
    }
  }

  end.onmouseover = function()
  {
      alert("You Win!"); 
  }


}

