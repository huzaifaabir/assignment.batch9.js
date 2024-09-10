const arr = ['abir',45,];
function types(arritem) {
    if (Array.isArray(arritem) ){
    let numbers = [];
    for (let array of arritem) {
        if (typeof array === "number") {
            numbers.push(array);
        }

    }
        return numbers;}
        else{
            return "error"
        }
}

let result = types(arr);
console.log(result);