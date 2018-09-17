// Code your solution in this file
function findMatching(drivers,name){
  const drive=[];
  for(const driver of drivers){
    if(driver.toUpperCase()===name.toUpperCase()){
     drive.push(driver);
    }
  }
   return drive ;
}

function fuzzyMatch(drivers,letter){
  const drive=[];
   for(const driver of drivers){
    if(driver.slice(0,letter.length)===letter){
     drive.push(driver);
    }
  }
   return drive ;
  
}

function matchName(drivers,drivername){
  const drive=[];
  for(const driver of drivers){
    if(driver.name===drivername){
     drive.push(driver);
    }
  }
   return drive ;
  
}
