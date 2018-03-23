$(document).ready(function(){
  $("#survey-intro").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var goals = $("#goals").val();
    $("#survey-intro").toggle();
    $("#intro").toggle();
    $("#name-insert").text(name);
  });

  $("#prev-xp").change(function(event){
    event.preventDefault();

    var prevXp = $(this).find("option:selected").val();

    if (prevXp === "yes") {
      $("#if-yes").show();
      $("#if-no").hide();
    } else if (prevXp === "no") {
      $("#if-no").show();
      $("#if-yes").hide();
    }
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

  $("#survey-for-track").submit(function(event){
    event.preventDefault();
    debugger;
    var enviro = $("input:radio[name = enviro ]:checked").val();
    console.log(enviro);
    //series of results and conditionals for results to display
    if(enviro === "sharp"){
      $(".results#cSharp").show();
    } else if (enviro === "java") {
      $(".results#java").toggle();
      alert("it should work");
    } else if (enviro === "ruby") {
      $(".results#ruby").show();
    };

  });

});
