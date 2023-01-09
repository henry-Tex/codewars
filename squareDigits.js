function squareDigits(num){
    let arrayNum = num.toString().split("");
    const result = arrayNum.map(num=>{
        acumulator = Math.pow(num,2);
        return acumulator
    });
    return Number(result.join(''));
}
