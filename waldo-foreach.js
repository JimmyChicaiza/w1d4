// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {

 arr.forEach(function(array, i) {
   if (array === "Waldo") {
   found(i)
   }
   })


  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(indexPosition) {
  console.log("Found him at index " + indexPosition);


}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



// a new one with and other callback at the end



// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {

 arr.forEach(function(array, i) {
   if (array === "Waldo") {
   found(i)
    }
   })
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(result) {
  console.log("The result is:", result);
});
//function actionWhenFound(indexPosition) {
  //console.log("Found him at index " + indexPosition);



