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

    

    $("#appeal").click(function(event){
    var choiceResult = $("input:radio[name = front-or-back]:checked").val(); //will return which one was checked!

    if(choiceResult === "front"){
      $("#front-track").show();
      $("#rest-of-survey").hide();
    } else if (choiceResult === "back"){
      $("#rest-of-survey").show();
      $("#front-track").hide();
    }
  });
  });

});
