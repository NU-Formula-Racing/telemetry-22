# Telemetry Frontend/Backend Comms Protocol

- The server listens on port 42069.
- A connection is established when the client sends `"HEWWO!"` and the server responds with `"OWO WHATS THIS?"`.
- All server responses shall be valid JSON and end with a newline. 
- If a request is malformed, the server shall respond with `":("`. If a state-changing request or the handshake is malformed, the server shall close the connection.
- If a request does not ask for data, the server shall respond with `":)"` to indicate success.


The server must accept the following commands:

- `SWITCH_STATE state`
where `state` is either `"cloud"` or `"local"`. The server shall return either `"SWITCHED STATE TO *state*"` or `"INVALID STATE"`.

- `LIST_SENSORS_BY_SUBTEAM` 
The server shall return the following (exhaustive) JSON:
```
{
    "subteam_name": ["sensor_id", ...],
    ...
}
```

- `CUR_VALS sensor_id ...`
The server shall return the value of the given `sensor_ids` in the current frame in the FIRST of the following JSON formats:
```
{
    "timestamp": frame_timestamp,
    "sensor_id1": current_value_of_sensor,
    ...
}
```
```
[
    {
        "timestamp": frame_timestamp,
        "sensor_id1": current_value_of_sensor
    },
    ...
]
```

- `HITHERTO_VALS sensor_id`
The server shall return all values of the given `sensor_ids` up to this frame in the FIRST of the following JSON formats:
```
[
    {
        "timestamp": frame_timestamp,
        "sensor_id1": current_value_of_sensor,
        ...
    },
    ...
]
```
```
[
    {
        "sensor_id": sensor_id,
        "timestamps": [timestamp1, ...]
        "values": [value_of_sensor1, ...]
    },
    ...
]
```


- `STATUS`
The server shall return either `":)"` or `":("`.

- `LIST_HISTORIC_DATAFILES path`
The server shall return the following (exhaustive) JSON:
```
[
    {
        "name": historic_datafile_name, 
        "timestamp": historic_datafile_timestamp,
        "local": true/false
    },
    ...
]
```
This JSON is comprised of both local historic and cloud (if active) Telemetry related CSV files in the given file path.

- `REQUEST_HISTORIC_DATAFILE_BY_TIME timestamp`
The server shall return the structured contents of the requested datafile (if found) in the following JSON:
```
{
    "name": filename,
    "filecreation": datetime,
    "data":
        [
            {
                "timestamp": timestamp1,
                "sensor1": value1,
                ...
            },
            ...
        ]
}
```
Otherwise, it will return `"FILE NOT FOUND"`.

- `REQUEST_HISTORIC_DATAFILE_BY_NAME name`
The server shall return the structured contents of the requested datafile (if found) in the same JSON format as `REQUEST_HISTORIC_DATAFILE_BY_TIME`. Otherwise, it will return `"FILE NOT FOUND"`.

- `END_SESSION name`
Ends the session and renames the datafile. No commands may be sent other than `"BEGIN_SESSION"` until `"BEGIN_SESSION"` is sent.

- `BEGIN_SESSION`
Begins a new session.
