var target = [1, 'two', 3, 'for', 5, 'six', 7]
var new_target = [];
var long = target.length;

var shuffler = function(array){
  for (var i=0; i < long; i++){
    var random = Math.floor(Math.random()*(target.length));
    var middle = array.splice(random,1);
    new_target[i] = middle.join('');
  }
  return new_target;
}
console.log(shuffler(target));
