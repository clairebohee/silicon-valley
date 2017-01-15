var car = {
  make: "Toyota"
}

car["model"] = "Camry"
car["mode"]
car.model

car.model = "Prius"
car["model"]
car.model
var prop = 'year'

car[prop] = 1992;
console.log(car[prop]);
car.prop = 1992;
console.log(car.prop);

console.log(car["nothing_here"]);
console.log(car.nothing_here);

var dream_car = { }

dream_car.make = "well";
dream_car.model = "cool";
dream_car.color = "wonderful";
dream_car.year = 2030;
dream_car.registered = true;

for (var a in dream_car){
  console.log(dream_car[a]);
  if (a = "color")
    $('div#special').append(dream_car[a]);
  }
}
