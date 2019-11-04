$(document).ready(function() {
  $(".questions").submit(function(event) {
    var music =  parseInt($("#music").val());
    var pet =  parseInt($("#pet").val());
    var day =  parseInt($("#day").val());
    var eye = parseInt($("#eyecolor").val());
    var age =  parseInt($("#age").val())

    $(".the-questions").hide();
    if (music + day + pet + eyecolor + age === 10) {
      $("#results").show();
    } else if (music + day + pet + eyecolor + age  > 10){
      $("#results2").show();
    } else {
      $("#results3").show();
    }
    event.preventDefault();
  });
});
