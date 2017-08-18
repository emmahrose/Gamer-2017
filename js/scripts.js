jQuery(document).ready(function($) {
  $(".form-model").submit(function(event) {
    event.preventDefault()
    var numb = parseInt($("input#model").val());
    console.log(numb);
  });
});
