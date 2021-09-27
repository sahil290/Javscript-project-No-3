//Testing Objects for Properties//
const myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
}

const checkObj = (myObj, checkProp) => {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "String Not Found";
    }
}
console.log(myObj["gift"]);