# Telemetry Frontend/Backend Comms Protocol

- The server listens on port 42069.
- A connection is established when the client sends `"HEWWO!"` and the server responds with `"OWO WHATS THIS?"`.
- All server responses shall be valid JSON and end with a newline. 
- If a request is malformed, the server shall respond with `":("`. If a state-changing request or the handshake is malformed, the server shall close the connection.
- If a request does not ask for data, the server shall respond with `":)"` to indicate success.


The server must accept the following commands:

- `SWITCH_SOURCE source`
where `source` is either `"cloud"` or `"local"`. The server shall return either `"SWITCHED STATE TO *source*"` or `"INVALID SOURCE"`.

- `LIST_SENSORS_BY_SUBTEAM` 
The server shall return the following (exhaustive) JSON:
```
{
    "subteam_name": ["sensor_id", ...],
    ...
}
```

- `VALS sensor_id ...`
The server shall return the following JSON:
```
{
    "sensor_id": current_value_of_sensor,
    ...
}
```

- `STATUS`
The server shall return either `":)"` or `":("`.

- `LIST_HISTORIC_DATAFILES`
The server shall return the following (exhaustive) JSON:
```
[["historic_datafile_name", "historic_datafile_timestamp"], ...]
```

- `REQUEST_HISTORIC_DATAFILE_BY_TIME timestamp`
The server shall return the structured contents of the requested datafile.

- `REQUEST_HISTORIC_DATAFILE_BY_NAME name`
The server shall return the structured contents of the requested datafile.

- `END_SESSION name`
Ends the session and renames the datafile. No commands may be sent other than `"BEGIN_SESSION"` until `"BEGIN_SESSION"` is sent.

- `BEGIN_SESSION`
Begins a new session.
