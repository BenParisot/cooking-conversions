//Back-End Logic
  var convert = function(number1) {
    return number1 / 16;
  };

//Front-End Logic

$(document).ready(function() {
  $("form#cups").submit(function(event) {
    var number1 = parseInt($("#input1").val());
    var result1 = convert(number1);
    $(".result1").text(result1);
    event.preventDefault();

  });
  $("form#ounces").submit(function(event) {
    var number1 = parseInt($("#input2").val());
    var result2 = convert(number1);
    $(".result2").text(result2);
    event.preventDefault();

  });




});
