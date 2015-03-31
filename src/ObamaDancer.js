var makeObamaDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="http://i.giphy.com/WgmMsEZChSHqE.gif">');
  this.setPosition(top,left);

}

// var newDancer = new makeBlinkyDancer(3, 3, 10)
// newDancer.$node = $('<span class="dancer"></span>');

makeObamaDancer.prototype = Object.create(makeDancer.prototype);
makeObamaDancer.prototype.constructor = makeObamaDancer;

makeObamaDancer.prototype.step = function(){


  makeDancer.prototype.step.call(this);
  //this.$node.toggle();




}
