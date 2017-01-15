var dog = {
  name: "뽀삐",
  location: "NJ",
  party: function(){
    console.log(this.dog + "가 미친듯이 춤을 춥니다");
  },
  favorite_food: "healthy food",
  eat: function(){
    console.log(this.favorite_food + "를 같이 먹자");
    this.hungry = false;
  },
  hungry: true,
  go_to_park: function(){
    this.hungry = true;
    this.location = "Park";
  }
}



var move_fn = function(){
  var prev = this.position
  this.position = this.position + 1
  console.log(this.type + " is moving from " + prev + " to " + this.position)
}

var car = {
  type: "Honda Civic",
  position: 1,
  move: move_fn
}

car.move();
