$(document).ready(function() {
  $("form#test").submit(function(event) {
  var weapon = parseInt($("select#weapon").val());
  var color = parseInt($("select#color").val());
  var rebels = parseInt($("selector#rebels").val());
  var score = weapon + color;

  if (score > 5) {
    var character = "han solo"
    $("#han").show();
    $("#luke").hide();
  } else if(score <= 4) {
    var character = "luke skywalker"
    $("#luke").show();
    $("#han").hide();
  }
  $("#character").text(character);
  $("#results").show();
  event.preventDefault();
  });
});
