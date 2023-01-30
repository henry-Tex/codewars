function pooRoulette(p) {
    let be = [];
    let linha = [];
    let coluna = [];
    for (let index1 = 0; index1 < p.length; index1++) {
        for (let index2 = 0; index2 < p[index1].length; index2++) {
            if(p[index1][index2]==='B') be.push (index1,index2);
            if(p[index1][index2]==='~') coluna.push (index1);
            if(p[index1][index2]==='~') linha.push (index2);
            
        }
    };
    if (linha[0]===linha[1]&&linha[0]===linha[2]){
        if (coluna[0]+1===coluna[1]&&coluna[0]+2===coluna[2]) return "Get the wipes!"
    };
    if (coluna[0]===coluna[1]&&coluna[0]===coluna[2]){
        if (linha[0]+1===linha[1]&&linha[0]+2===linha[2]) return "You disgust me!"
    };
    return "Calm before the storm"
}

/*
You will be given a 2-dimensional array (p) that looks similar to below. Empty spots are represented by 'o' and your baby's bottom is represented by 'B'. Any scent is represented by '~'.
If the smell is rising vertically, it's safe to say it's coming from the baby - return "Get the wipes!". If the smell is moving horizontally.. it's probably your partner trying to pass it off as the baby - return "You disgust me!". in both cases the three scents must be connected to the baby.  If there is no scent, or there are less than three in a row, there is no baby, or they do not form a straight vertical of horizontal line, return "Calm before the storm".  Lines of scent cannot pass through the baby (or if they do they dont count).
*\
