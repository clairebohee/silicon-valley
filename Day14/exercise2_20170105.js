var my_dream_life = {};
var property_key = "job";
my_dream_life[property_key] = "CEO & Investor";
var another_property_key = "salary";
my_dream_life[another_property_key] = "unlimited";
my_dream_life[property_key];
my_dream_life["job"];
var next_property = "car";
my_dream_life[next_property] = "good car";
my_dream_life[next_property];
my_dream_life["car"];

for (var i in my_dream_life){
  console.log(my_dream_life[i])
}
