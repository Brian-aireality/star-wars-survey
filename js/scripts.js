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

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});

var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};
