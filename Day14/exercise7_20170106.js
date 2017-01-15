var favorites = []

var famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt',
'ashton kutcher', 'mark whalberg', 'morgan freeman', 'mila kunis']

var obama_jobs = []

var politicos = {
  secretary_of_state: 'hillary clinton',
  potus: 'barack obama',
  flotus: 'michelle obama',
  vice_prez: 'joe biden',
  gov_of_california: 'jerry brown'
}

console.log(famous[0][0])

var i = 0;
for (var key in famous){
  if(famous[key][0] === "a"){
    favorites[i] = famous[key];
    i++;
  }
}

console.log(favorites);


for (var key in politicos){
  famous.push(politicos[key]);
}
console.log(famous)




for (var key in politicos){
  var words = politicos[key].split(' ')
  console.log(words);
  if (words[1] === "obama"){
    obama_jobs.push(politicos[key]);
  }
}

console.log(obama_jobs);

var b_named_politicos = {};

for (var key in politicos){
  var words = politicos[key].split(' ')
  console.log(words);
  if (words[0][0] === "b" || words[1][0] === "b"){
    b_named_politicos[key] = politicos[key];
  }
}

console.log(b_named_politicos);

var reverse_politico_lookup = {};

for (var key in politicos){
  reverse_politico_lookup[politicos[key]] = key;
}
console.log(reverse_politico_lookup);
