var makeSpidermanDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="gifs/spiderman.gif">');
  this.setPosition(top,left);
}

// var newDancer = new makeBlinkyDancer(3, 3, 10)
// newDancer.$node = $('<span class="dancer"></span>');

makeSpidermanDancer.prototype = Object.create(makeDancer.prototype);
makeSpidermanDancer.prototype.constructor = makeSpidermanDancer;

makeSpidermanDancer.prototype.step = function(){

  makeDancer.prototype.step.call(this);
  //this.$node.toggle();

}
