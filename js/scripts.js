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
    $("#intro").hide();
    $("#second-card").show();

    if(/*front end is toggled*/){
      //show text about front end tracks
    } else if (/*back end is toggled*/) {
      //show more of the survey
    }
  });

});
