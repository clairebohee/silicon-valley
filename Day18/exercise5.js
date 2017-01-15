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


var dog = {
  name: "뽀삐",
  location: "NJ",
  party: party_fn,
  favorite_food: "healthy food",
  eat: eat_fn,
  hungry: true,
  go_to_park: go_to_park_fn,
}

dog.party();
dog.eat();
dog.go_to_park();
console.log(dog.hungry);
console.log(dog.location);

-------------------------------
var move_fn = function(){
  this.position++
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
