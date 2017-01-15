var warrior_factory = function (name, weapon){
  var warrior = {}

  warrior.name = name;
  warrior.weapon = weapon;

  warrior.attack = function(){
    console.log(warrior.name + "은 " + warrior.weapon + "을 가지고 있습니다")
  }
  warrior.adventure = function(){
    this.attack();
    this.attack();
    this.attack();
    console.log ("I love " + warrior.name + "!");
  }
}
