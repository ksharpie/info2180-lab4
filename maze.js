window.onload = function(e)
{ 
    
  var boundaries = document.querySelectorAll(".boundary");
  var end = document.getElementById("end");
  var start = document.getElementById("start");
  var status = document.getElementById("status");

  var gameStatus = "normal";

  for (var i=0; i<boundaries.length; i++)
  {
    boundaries[i].onmouseover = function()
    {
      if(gameStatus == "normal")  
      { 
        for (var j=0;j<boundaries.length-1; j++)
        {
          boundaries[j].setAttribute("class", "boundary youlose");
        }
        gameStatus = "Lost";
        status.innerHTML = "You Lose!"; 
      }
    }
  }

  start.onclick = function()
  {
    for (var i=0;i<boundaries.length-1; i++)
    {
      boundaries[i].setAttribute("class", "boundary");
      status.innerHTML = "Move your mouse over the \"S\" to begin.";
    }
  }

  end.onmouseover = function()
  {
    if(gameStatus == "normal")
    {
      status.innerHTML = "You Win!";
      gameStatus = "Won";
    }
  }
}

