var complex_object = {
  string: "I'm a string!",
  number: 42,
  array: [
    "all sorts of stuff", 10, true, undefined,
    {me: "an object", more: "find me in here!"},
    function(){ console.log('beepity-beep') }
  ],
  simple_object: {name: 'bob', location: 'basement'},
  fn: function(){
    console.log("fn has been invoked! Checking both kinds of invocation-time inputs...")
    console.log("what is my calling context?", this)
    console.log("what are my arguments?", arguments)
  }
}

complex_object.string
complex_object.array[4]
complex_object.simple_object.name
complex_object.fn("stuff", "more stuff", "even more stuff!")

var complex_object_2{
  string: "Cka",
  number: 13,
  array : [
            1, 2, "hi",
            {one: "hello", two: "wonderful!"},
            function() {console.log ("wonderful!")}
          ],
  objec1: {age: 25, function(){console.log ("me")}},
  working: function(){
    console.log(this)
    console.log(arguments)
  }
}
