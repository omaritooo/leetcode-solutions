function maxProfit(prices: number[]): number {
    let slidingL: number = 0;
    let slidingR: number = 1;
    let maxProfit: number = 0;

    while (slidingR < prices.length)
    {

        if (prices[slidingL] < prices[slidingR])
        {
            let profit: number = prices[slidingR] - prices[slidingL]
            maxProfit = Math.max(maxProfit, profit)

        }
        else {
            slidingL = slidingR
        }
        slidingR +=1
    }

    return maxProfit
};