let obj = {
    name: "abir",
    birthyear:2005,
    site: "google",
    age : 24,

}
console.log(obj[4])
function password(pass) {
    if (Object.keys(pass).length >=3 && pass.birthyear.toString().length >=4 ) {
        let uppercase = pass.site[0].toUpperCase();
        let allletter = pass.site.slice(1);
        const final = uppercase + allletter;
        let genaratePass = `${final}#${pass.name}@${pass.birthyear}`;
        return genaratePass;
    }
    else{
        return "error";
    }
}
let result = password(obj);
console.log(result);
