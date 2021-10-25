const coins = [10, 6, 1];

const makeChange = (value) => {
  //12
  if (value === 0) return 0; //in case if value = 0, it will be finish
  let minCoins; //gonna initialize
  coins.forEach((coin) => {
    //will start with 10
    if (value - coin >= 0) {
      //value - coin 12-10 = 2
      let curMinCoins = 2;
      if (minCoins === undefined || curMinCoins < minCoins) {
        minCoins = curMinCoins;
      }
    }
  });
  return minCoins + 1;
};

// we reached the buttom of one of our branches (12 = 10 - 1 - 1);
