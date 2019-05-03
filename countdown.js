var countdownGenerator = function (x) {
    var autoNumber = x;

        if (autoNumber > 0){
            return function(){
                autoNumber -- 
                console.log("T-minus " + autoNumber + "...");
            }
        } else if (autoNumber = 0){
            return function(){
            console.log("Blast Off");
            }
        }
    
        if (autoNumber < 0){
            return function(){
            console.log("Rockets already gone, bub!");
            }
        }
    
    };
    
    var countdown = countdownGenerator(3);
    
      countdown(); // T-minus 3...
      countdown(); // T-minus 2...
      countdown(); // T-minus 1...
      countdown(); // Blast Off!
      countdown(); // Rockets already gone, bub!
      countdown(); // Rockets already gone, bub!