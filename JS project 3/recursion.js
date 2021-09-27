//Replace Loops using Recursion//
const sum =(arr, n) => {
    if(n <= 0){
      return 0;
    } else {
      return sum (arr, n -1) + arr [n -1];
    }
    }
     console.log(sum([1], 0));
     console.log(sum([2,3,6,7,89], 5));