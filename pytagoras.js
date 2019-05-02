

var input = [
 { x: 3, y: 4 },
 { x: 12, y: 5 },
 { x: 8, y: 15 }
];
// console.log(input[0]['x']);
var result = input.map(function(xyPair){
var xSquarred = Math.pow(xyPair.x, 2)
var ySquarred = Math.pow(xyPair.y, 2)
var total = Math.sqrt(xSquarred + ySquarred);
// console.log(total);
return total;
// console.log("this is our x squared: ", xSquarred);
// console.log("this is our y squarred: ", ySquarred);
 //return xyPair.x + xyPair.y;
});
//console.log(result[0])
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);