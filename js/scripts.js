$(document).ready(function() {
  $(".questions").submit(function(event) {
    var area =  parseInt($("#music").val());
    var color =  parseInt($("#pet").val());
    var pet =  parseInt($("#day").val());
    var eye = parseInt($("#eyecolor").val());
    var day =  parseInt($("#age").val())

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
