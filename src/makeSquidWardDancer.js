var makeSquidwardDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="http://i.giphy.com/Ug1qQ8XVoO8q4.gif">');
  this.setPosition(top,left);
  this.character = "squidward"
}

// var newDancer = new makeBlinkyDancer(3, 3, 10)
// newDancer.$node = $('<span class="dancer"></span>');

makeSquidwardDancer.prototype = Object.create(makeDancer.prototype);
makeSquidwardDancer.prototype.constructor = makeSquidwardDancer;

makeSquidwardDancer.prototype.step = function(){

  makeDancer.prototype.step.call(this);
  //this.$node.toggle();

}
