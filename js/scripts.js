$(document).ready(function(){
  $("#survey-intro").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var goals = $("#goals").val();
    $("#survey-intro").toggle();
    $("#intro").toggle();
    $("#name-insert").text(name);
  });
  $("#get-started").click(function(event){
    event.preventDefault();
    $("#intro").toggle();
    $("#second-card").toggle();
  });

});
