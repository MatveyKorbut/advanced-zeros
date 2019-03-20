module.exports = function getZerosCount(number, base) {
    let primeArray = [];
    for (let i = 2; base != 1; i++) {
      if (base % i == 0) {
        primeArray.push(i);
        base = base / i;
        i--;
      }
    }
    const resultArray = primeArray.map( i => {
      let count = 0;
      for (let n = 1; Math.pow(i, n) <= number; n++) {
        count += Math.floor(number / Math.pow(i, n));
      } return count;
    });
    let countOfcopy = 1;
    for (let i = 0; i < resultArray.length; i++) {
      if (resultArray[i] == resultArray[i + 1]) {
          countOfcopy++;
          resultArray.splice(i, 1);
          i--;
      } 
      else {
          resultArray[i] = Math.floor(resultArray[i] / countOfcopy);
          countOfcopy = 1;
      }
    }
    resultArray.sort((a, b) => a - b); 
    return resultArray[0];
}