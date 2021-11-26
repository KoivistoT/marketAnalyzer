# marketAnalyze

## API url

https://marketanalyze.herokuapp.com/api

## Endpoints

# /longest_bearish

Longest bearish (downward) trend within a given date range.
Expected output: The maximum amount of days bitcoin’s price was decreasing in a row.

# /highest_trading_volume

Date within a given date range had the highest trading volume
Expected output: The date with the highest trading volume and the volume on that day in euros.

# /buy_and_sell

The best day for buying bitcoin, and the best day for selling
Expected output: A pair of days: The day to buy and the day to sell.

## Request body (required)

`{"startDate": "YYYY-MM-DD", "endDate": "YYYY-MM-DD"}`

## Example curl

`curl -X GET https://marketanalyze.herokuapp.com/api/analyze/buy_and_sell -H 'Content-Type: application/json' -d ' {"startDate": "2020-03-01", "endDate": "2021-08-01"}'`
