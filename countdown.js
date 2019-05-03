var countdownGenerator = function(x) {
  var autoNumber = x;
  return function() {
    if (autoNumber > 0) {
      console.log("T-minus " + autoNumber + "...");
      autoNumber--;
    } else if (autoNumber === 0) {
      console.log("Blast Off");
      autoNumber--;
    } else if (autoNumber < -0) {
      console.log("Rockets already gone, bub!");
      autoNumber--;
    }
  };
};

var countdown = countdownGenerator(3);

countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
