const earn = [900, 2700, 3400];
const cost = 10000;

function monthlySavings(arr,livingcost){
    if (Array.isArray(arr) && typeof livingcost === 'number'){
    let save = 0;
    for(let income of arr){
        // console.log(income);
        if (income>=3000){
            const texfee = income /100 *20;
            const tex = income - texfee
            save = tex + save;
        }
        else{
            
        save = income + save;
        }
    }
    let totalSavings= save - livingcost ;
   return totalSavings >0 ? totalSavings : "earn more";
    
}
else {
    return "invalid";
}
}


let savings = monthlySavings(earn,cost);
console.log(savings);