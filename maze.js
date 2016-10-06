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

}

$(document).ready(main);