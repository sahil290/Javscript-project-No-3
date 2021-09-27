//Accessing Nested Objects//

var myStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets",
        "folder3" : "maps"
      },
      "bottom drawer": "soda"
    }
  };
  var gloveBoxContents = myStorage.cabinet['top drawer'].folder3;
  console.log(gloveBoxContents);