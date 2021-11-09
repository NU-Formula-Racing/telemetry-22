# NFR21-Telemetry Backend

The NFR Telemetry Backend has 3 distinct parts:

## Receiver

> `receiver/receiver.js`
- Automatically connects to and listens to xbee.
- Writes raw binary data to `receiver/binout/xbee-raw-{timestamp}.bin`
- If run with `--raw`, outputs raw binary data to STDOUT. Else, outputs debug info. 

## Parser

> Not yet implemented
- Takes raw binary data through STDIN.
- Outputs structured data in some form (to be determined) with timestamps. Drops bad frames.

## Server

> Not yet implemented
- Asyncly consumes structured data from parser.
- Asyncly responds to requests from frontend (see [serverprotocol](./SERVERPROTOCOL.md))
