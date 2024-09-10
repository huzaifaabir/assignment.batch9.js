function calculateMoney (ticketQuantity){
    const tickePrice = 120;
    let totalTicke = tickePrice * ticketQuantity;
    const sequrityGardCost = 500;
    const perEmployeeLunchCost = 50;
    let totalEmployeeCost = sequrityGardCost + (perEmployeeLunchCost * 8) ;
    
    if(ticketQuantity>0){
        let totalIncome = totalTicke - totalEmployeeCost ;
        return totalIncome;
    }
    else{
        return "Please input possitive number";
    }
}

let income = calculateMoney(458);
console.log(income);
