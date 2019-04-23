# A single timestamp api

The api endpoint `/api/timestamp/:date_string?` takes a string and returns its corresponding unix and UTC timestamp.

## Example usage
- `GET [project url]/api/timestamp/2015-12-25`
- `GET [project url]/api/timestamp/1450137600`
- `GET [project url]/api/timestamp/foobar`

## Example output
- `{ "unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}`
- `{ "unix": null, "utc" : "Invalid Date" }`

## Run locally
1. `npm install`
2. `npm start`
