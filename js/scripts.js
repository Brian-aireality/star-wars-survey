$(document).ready(function() {
  $("form#test").submit(function(event) {
  var weapon = parseInt($("select#weapon").val());
  var color = parseInt($("select#color").val());
  var rebels = parseInt($("selector#rebels").val());
  var score = weapon + color;

  if (score > 5) {
    var character = "Han Solo"
    $("#Han").show();
    $("#Luke").hide();
  } else if(score <=  4) {
    var character = "Luke Skywalker"
    $("#Luke").show();
    $("#Han").hide();
  }
  $("#character").text(character);
  $("#results").show();
  event.preventDefault();
  });
});
