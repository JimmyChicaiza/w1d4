var words = ["ground", "control", "to", "major", "tom"];

var map = function(arr, func){
  var arr2 = [];
  for (var word of arr){
    arr2.push(func(word));
     }
   console.log(arr2);
   return arr2; 
  
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});