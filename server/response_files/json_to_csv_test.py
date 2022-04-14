import pandas as pd

sensor_df = pd.read_csv(open("cloud_test.txt", 'r'))
print(sensor_df.head())

print()
sensor_lines = open("cloud_test.txt", 'r').read().split('\n')
for l in sensor_lines:
    print(len(l.split(',')))