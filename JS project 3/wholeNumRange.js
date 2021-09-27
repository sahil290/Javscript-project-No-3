//Generate Random Whole Numbers within a Range//
const randomRange =(myMin, myMax) =>{
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }