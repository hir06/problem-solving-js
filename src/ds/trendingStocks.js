/*
company: Google
Title: Trending Stocks
Difficulty: Medium
Description:
You are tasked with creating a function that retrieves information about trending stocks based on their market capitalization and prices. The goal is to identify the top n trending stocks, where n is a specified number, and return details about these stocks in a structured format. The function should return an array of objects, each encapsulating the symbol, name, market capitalization, and current price of these trending stocks.
The challenge involves fetching data from three different APIs: one for stock symbols and names, another for market capitalizations, and the last one for current stock prices. The process is to first fetch the symbols and market caps, sort the stocks by market cap in descending order, pick the top n stocks, and then fetch their current prices. Finally, the information is aggregated into a single array of objects that contain all the necessary details for each selected stock.
Example:
Consider you want to find the top 2 trending stocks. The function will sort all available stocks based on their market capitalization and return the details for the top 2.
- Input: n = 2
- Output:
  
json
  [
    { "symbol": "MMM", "name": "3M Company", "market-cap": 138721055226, "price": 1001.52 },
    { "symbol": "ABT", "name": "Abbott Laboratories", "market-cap": 102121042306, "price": 1001.52 }
  ]
  
The function encapsulates a complex process of asynchronous API calls, data sorting, and aggregation, presenting a streamlined solution to the user. This task not only tests your proficiency with asynchronous JavaScript operations but also your ability to work with external data sources and transform data to fit specific requirements.
This challenge serves as an excellent real-world scenario for frontend developers, especially for those interested in financial technologies or stock market applications, providing both a technical challenge and an insight into financial data manipulation.
Test Cases:
1. Verify the Result is an Array of Objects
   - Description: Should verify the result is an array of objects.
   - Setup: Mock API responses for symbols, market caps, and prices.
   - Action: Call trendingStocks(2).
   - Expected Outcome: The result is an array of objects, each with keys 'symbol', 'name', 'market-cap', 'price'.
2. Handle Cases Where n is Greater Than Available Stocks
   - Description: Should handle cases where n is greater than available stocks.
   - Setup: Mock API responses with a limited number of stocks.
   - Action: Call trendingStocks(n) with n larger than the number of available stocks.
   - Expected Outcome: The result length is at most n.
3. Return Stocks Sorted by Market-Cap in Descending Order
   - Description: Should return stocks sorted by market-cap in descending order.
   - Setup: Mock API responses for a few stocks with different market caps.
   - Action: Call trendingStocks(2).
   - Expected Outcome: Stocks are sorted by market-cap in descending order.
Constraints:
- The function must accept a single integer n as an argument, representing the number of trending stocks to retrieve.
- Data is retrieved from three separate APIs for symbols, market capitalizations, and prices. Ensure each API is accessible and responses are in the expected format.
- Market capitalization data should be used to determine the "trendiness" of a stock, with higher market capitalizations indicating higher trends.
- The function should return an array of objects, with each object containing the symbol, name, market-cap, and price for each trending stock.
- Ensure error handling for API requests, including network errors or unexpected response formats.
- The stock data returned should be current, consider adding a timestamp or ensuring the API provides the most recent data.
- The solution should handle cases where fewer than n stocks are available.
*/