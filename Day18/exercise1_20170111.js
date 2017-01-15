var person = {
  name: "Claire",
  location: "Seoul",
  hobbies: ["yoga", "watching a movie"],
  cat: {
    name: "tofu",
    hobbies: ["white", "grey"]
  },
  party: function(){
    console.log('Party Party!!')
  }
}


person.work = function(){
  console.log("우리 " + this.name +"와 함께 놀아요!");
}


person.workout = function(){
  console.log("우리 " + this.hobbies[0] + "해요");
  console.log("우리 " + this.location + "에서 만나요!");
}


person.float_through_life_on_autopilot = function(){
  console.log(this.work());
  console.log(this.workout());
  console.log(this.party());
}

person.float_through_life_on_autopilot();
