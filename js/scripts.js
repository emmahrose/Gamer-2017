//user interface -front end
jQuery(document).ready(function($) {
  $("form#max").submit(function(event) {
    event.preventDefault()
    $("#outputList").empty();
    var numb = parseInt($("input#number").val());
    console.log(numb);
    var results = countr(numb);
    // console.log(numb);
    // countr(
    results.forEach(function(result) {
      $(".outputList").append("<li>" + result + "</li>")
    })
  });
});
//backend

function countr(numb) {
  var range = []
  for (var i = 1; i <= numb; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log(i)
      range.push("pingpong")
      //$("#outputList").append('<li>pingpong</li>');


    } else if (i % 5 === 0) {
      range.push('pong');
    } else if (i % 3 === 0) {
      range.push('ping');
    } else {
      range.push(i);
    }

  }
  console.log(range)
  return range
};
