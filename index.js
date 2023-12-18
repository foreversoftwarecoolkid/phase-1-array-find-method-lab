// index.js

function superbowlWin(record) {
    const winObject = record.find(entry => entry.result === 'W');
    
    // If there is a win object, return the corresponding year; otherwise, return undefined.
    return winObject ? winObject.year : undefined;
  }
  
  // Example usage:
  const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    // ... other entries
  ];
  
  const winningYear = superbowlWin(record);
  console.log(winningYear); // This will print the year of the Super Bowl win or undefined if not found
  
