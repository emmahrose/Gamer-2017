jQuery(document).ready(function($) {
  $("form#max").submit(function(event) {
    event.preventDefault()
    var numb = parseInt($("input#number").val());
    console.log(numb);
    countr()
  });
});

var countr = function(numb) {
  for (var i = 1; i <= 16; i++) {
    if (i % 3 === 0) {
      alert("ping");
    } else if (i % 5 === 0) {
      alert("pong");
    } else {
      alert(i);
    }
  }
};
