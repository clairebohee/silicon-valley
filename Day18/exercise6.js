var party_fn = function(){
  console.log(this.name + "가 미친듯이 춤을 춥니다");
}

var eat_fn = function(){
  console.log(this.favorite_food + "를 같이 먹자");
  this.hungry = false;
}

var go_to_park_fn = function(){
  this.hungry = true;
  this.location = "Park";
}

var dog1 = {
  name: "뽀삐",
  location: "NJ",
  party: party_fn,
  favorite_food: "healthy food",
  eat: eat_fn,
  hungry: true,
  go_to_park: go_to_park_fn,
}

var dog2 = {
  name: "puppy",
  location: "Seoul",
  party: party_fn,
  favorite_food: "oyster",
  eat: eat_fn,
  hungry: true,
  go_to_park: go_to_park_fn,
}

dog1.party()
dog2.party()

dog1.eat()
dog2.eat()

------------------------

var move_fn = function(){
  this.position = this.position + this.speed;
}

var reverse_adder = function(car){
  car.reverse = function(){
    this.position = this.position - this.speed
  }
}

var car1 = {
  type: "Hyundai Civic",
  speed: 5,
  position: 1,
  move: move_fn
}

var car2 = {
  type: "Toyota Corolla",
  speed: 3,
  position: 6,
  move: move_fn
}
car1.move();
console.log(car1.position);
console.log(car2.position);
car2.move();
console.log(car1.position);
console.log(car2.position);


reverse_adder(car1);
car1.reverse();
console.log(car1.position);
reverse_adder(car2);
car2.reverse();
console.log(car2.position);

---------------------------------------

var meow_fn = function(){
  console.log(this.name + "가 야옹 거립니다")
}

var cat1 = {
  name: "hi",
  meow: meow_fn
}

var cat2 = {
  name: "hello",
  meow: meow_fn
}

cat1.meow();
cat2.meow();
---------------------------------------------

var car_factory = function (type, speed){
  var car = {}

  car.position = 0
  car.type = type
  car.speed = speed

  car.move = function(){
    this.position += this.speed
  }

  return car
}

var new_toyota = car_factory('Toyota Hilux', 3)
var new_honda = car_factory('Honda Accord', 5)
