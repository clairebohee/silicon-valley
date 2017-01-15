var array_duplicator = function(inputArray) {
  var outputArray = []
  outputArray = inputArray.slice();
  return outputArray
};


var original = [1, 2, 3, 4]
var duplicated = array_duplicator(original)

duplicated.pop()
duplicated.pop()
duplicated.pop()

console.log(original, duplicated) // original 하고 duplicated 하고 같으면 안됩니다
