var makeRandomDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  var possibleDancers = ['<img class="twerkOnMe" src="gifs/elephant.gif">','<img class="twerkOnMe" src="gifs/stitch.gif">','<img class="twerkOnMe" src="gifs/lisa.gif">'];
  var index = Math.floor(Math.random()*possibleDancers.length);
  this.$node = $(possibleDancers[index]);
  this.setPosition(top,left);
}

// var newDancer = new makeBlinkyDancer(3, 3, 10)
// newDancer.$node = $('<span class="dancer"></span>');

makeRandomDancer.prototype = Object.create(makeDancer.prototype);
makeRandomDancer.prototype.constructor = makeRandomDancer;

makeRandomDancer.prototype.step = function(){

  makeDancer.prototype.step.call(this);
  //this.$node.toggle();

}
