function main() {
  
  $(".boundary").hover( function() {

  	$("#maze .boundary").addClass("youlose");

  });

}

$(document).ready(main);