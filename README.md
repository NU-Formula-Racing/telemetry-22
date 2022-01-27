# NFR21-Telemetry Backend


The NFR Telemetry Backend has 3 distinct parts:

## Receiver

> `receiver/receiver.js`
- Automatically connects to and listens to xbee.
- Writes raw binary data\* to `receiver/binout/xbee-raw-{timestamp}.bin`
- If run with `--raw`, outputs raw binary data\* to STDOUT. Else, outputs debug info.
- *Raw data is spliced with timestamp % UINT_MAX after frame end sigils.

### Read before running

- You must edit `xbee-api.js` in the xbee-api node module. 
- Comment out line 221: `this.emit('error', err);`
- Yes, this is horrible practice. If you have a better idea for catching the error, please go for it.

## Parser

> `parser/parser.c`
- Takes raw binary data through STDIN.
- Outputs structured data as JSON, including reconstructed timestamps (still % UINT_MAX though). Drops bad frames.

## Server

> Not yet implemented, TODO basically everything
- Two parts: Cerberus and Pythia
- Cerberus watches data, either locally or from cloud. If local, also uploads to cloud.
- Pythia responds to requests from frontend (see [serverprotocol](./SERVERPROTOCOL.md)), asking Cerberus as needed.
