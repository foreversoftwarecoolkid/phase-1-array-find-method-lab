function superbowlWin(record) {
    const win = record.find(obj => obj.result === "W");
  
    if (win) {
      return win.year;
    } else {
      return undefined;  
    }
  }