function main() {
  
  var failed = false;

  $(".boundary").hover( function() {

  	$("#maze .boundary").addClass("youlose");

  	failed = true;

  });

  $("#end").hover( function(){

  	if ( failed == false ){
  		alert('You win!');
  	}

  })

  $("#start").click(function(){
  	$("#maze .boundary").removeClass("youlose");
	
	failed = false;

  })

}

$(document).ready(main);