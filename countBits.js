function countBits(nr){
    if (nr > 0){
      let str = nr.toString(2);
      let contadorOne = null;
      str = '000000000000000000000000'.slice(str.length) + str;
      console.log(str)
      arrayStr = str.split("");
      const result = arrayStr.reduce((acumulador,valorAtual,indice,array)=>{
          console.log (valorAtual)
          if (valorAtual === '1') contadorOne++
          return contadorOne
      });
      return(result);
      }else return 0;
  };
