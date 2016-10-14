window.onload = function(e)
{ 
    
  var boundaries = document.querySelectorAll(".boundary");
  var end = document.getElementById("end");
  var start = document.getElementById("start");
  var status = document.getElementById("status");

  var gameStatus = "Inactive";

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
      gameStatus = "normal";
    }

    document.onmouseover = function(mouse)
    {
      var left = maze.offsetLeft;
      var right = maze.offsetRight;
      var top = maze.offsetTop;
      var bottom = maze.offsetBottom;
      var x = mouse.clientX;
      var y = mouse.clientY;

      if((x<left)||(x>right)||(y<top)||(y>bottom))
      {
        for (var i=0;i<boundaries.length-1; i++)
        {
          boundaries[i].setAttribute("class", "boundary youlose");
          status.innerHTML = "You Lose!";
        }
      }
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

