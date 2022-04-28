import json
import pandas as pd

fname = "cloud_test.txt" # Assume this is also a timestamp
sensor_df = pd.read_csv(open(fname, 'r'))
print(sensor_df.head())

sensor_json = {"name": fname, "filecreation": fname, "data": []}
sensor_names = sensor_df.columns.values

# This is a temporary timestamp, replace when proper formatting is introduced
timestamp = 0

for i, row in sensor_df.iterrows():
    json_row = {"timestamp": timestamp}
    for name in sensor_names:
        json_row[name] = row[name]
    sensor_json["data"].append(json_row)
    timestamp += 1
    
with open("cloud_test.json", 'w') as f:
    f.write(json.dumps(sensor_json))