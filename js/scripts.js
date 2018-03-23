var name = $("#name").val();
var goals = $("#goals").val();

$(document).ready(function(){
  $("#survey").submit(function(event){
    event.preventDefault();
    $("#survey").fadeOut('slow');
  })
})
