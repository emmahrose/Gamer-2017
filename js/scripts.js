//user interface -front end
jQuery(document).ready(function($) {
  $("form#max").submit(function(event) {
    $("output").empty();
    event.preventDefault()
    var numb = parseInt($("input#number").val());
    console.log(numb);
    countr()
  });
});
//backend

var countr = function(numb) {
  for (var i = 1; i <= 16; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      $("#outputList").append('<li>pingpong</li>');



    } else if (i % 5 === 0) {
      $("#outputList").append('<li>pong</li>');
    } else if (i % 3 === 0) {
      $("#outputList").append('<li>ping</li>');
    } else {
      $("#outputList").append('<li>' + i + "</li>");
    }

  }
};
