function main() {
  
  var status = "normal";

  $(".boundary").hover( function() {

  	if (status == "normal")
  	{

  		$("#maze .boundary").addClass("youlose");

  		document.getElementById("status").innerHTML = "Move your mouse over the \"S\" to begin. <br> You Lose!";

  		status = "lost";
  	}

  });

  $("#end").hover( function(){

  	if ( status == "normal" ){

  		 document.getElementById("status").innerHTML = "Move your mouse over the \"S\" to begin. <br> You Win!";

  		 status = "won";

  	}

  });

  $("#start").click(function(){

  	$("#maze .boundary").removeClass("youlose");

	document.getElementById("status").innerHTML = "Move your mouse over the \"S\" to begin.";	
	
	status = "normal";

  });

  $("#start").hover(function(){

  		var startButton = document.getElementById("start");

  		if ( event.clientX < 470 & status == "normal"){

  			$("#maze .boundary").addClass("youlose");

  			document.getElementById("status").innerHTML = "Move your mouse over the \"S\" to begin. <br> You Lose!";

  			status = "lost";	

  		}


  });

}

$(document).ready(main);