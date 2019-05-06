# Request Header Parser API

The api has a single endpoint `/api/whoami`, returning the IP address, preferred language(s), and browser information of the request.

## Example usage
- `GET [project url]/api/whoami`

## Example output
- `{"ipaddress":"::ffff:159.20.14.100","language":"en-US,en;q=0.5",
"software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}`

## Run locally
1. `npm install`
2. `npm start`

## [Demo](https://parseheaderapi.glitch.me/)
