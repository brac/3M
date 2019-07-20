stock_prices = [{
  "Day": 0,
  "Price": 5
},{
  "Day": 1,
  "Price": 9
},{
  "Day": 2,
  "Price": 3 // buy here
},{
  "Day": 3,
  "Price": 5
},{
  "Day": 4,
  "Price": 8 // sell here
},{
  "Day": 5,
  "Price": 7
}];

const buySellOptimizer = (stock_prices) => {
  let buyDay = 0;
  let sellDay = 0;
  let mostProfit = 0;
  let currentProfit = 0;

  for (let i = 0; i < stock_prices.length -1; i++) {
    for (let k = 1; k < stock_prices.length -1; k++) {
      currentProfit = stock_prices[k].Price - stock_prices[i].Price;

      if (currentProfit > mostProfit) {
        mostProfit = currentProfit;
        buyDay = stock_prices[i].Day;
      }
    }
  }

  for (let i = buyDay; i < stock_prices.length - 1; i++) {
    console.log ((stock_prices[i].Price - stock_prices[buyDay].Price) - 1);

    if ((stock_prices[i].Price - stock_prices[buyDay].Price) === mostProfit -1 ) {
      console.log (stock_prices[i].Price)
    }
  }


  console.log (`Buy[${buyDay}]Sell[${sellDay}]`)
};

buySellOptimizer(stock_prices);
