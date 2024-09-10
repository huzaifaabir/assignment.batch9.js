function names (name){
    const goodNameLastWord = ["a", "y"];
   let n = name[name.length - 1];
   let result;
   for(const letter of goodNameLastWord){
    if(n == letter){
        result = true
    }
    else {
        result = false
    }

    let final = result === true ? "good name" : "bad name";
    return final;
   }
}

let checkName = names("abir");
console.log(checkName);