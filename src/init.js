$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    //dancerMakerFunctionName = makeBlinkyDancer;


    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    //dancerMakerFunction refers to makeBlinkyDancer function

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($("body").height()-180) * Math.random(),
      ($("body").width()-50) * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('body').on('mouseover', '.twerkOnMe', function () {
    var newSquidWard = new makeSquidwardDancer(this.offsetTop - 100, this.offsetLeft-13, Math.random() * 1000);
    window.dancers.push(newSquidWard);
   $('body').append(newSquidWard.$node);
  });

$(".lineUp").on("click", function(event){

    var lastSpiderTopPosition = 0;
    var lastObamaTopPosition = 0;

  for (var i = 0; i<window.dancers.length; i++) {


    var $a = window.dancers[i].$node;
    if(window.dancers[i].character === "spiderman"){
      $a.animate({left:"0px", top:lastSpiderTopPosition}, 3000)
      lastSpiderTopPosition = lastSpiderTopPosition + 150;
    } else if(window.dancers[i].character === "obama"){
         $a.animate({left:1329, top: lastObamaTopPosition}, 3000)
         lastObamaTopPosition = lastObamaTopPosition + 120

    }



    }
  });

  // $(".makeSquidWard").on("click", function(event){

  //     for(var i = 0; i < window.dancers.length; i++){

  //         if(window.dancers[i].character !== "squidward"){

  //             var newSquidWard = new makeSquidwardDancer(window.dancers[i].$node[0].offsetTop - 100, window.dancers[i].$node[0].offsetLeft-13, Math.random() * 1000);
  //             window.dancers.push(newSquidWard);
  //             $('body').append(newSquidWard.$node);

  //         }

  //     }
  // })




});


















