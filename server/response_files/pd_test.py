import pandas as pd

test_file = "pd_test_df.csv"

## Test data
d = pd.DataFrame({'Archons': ['Venti', 'Morax', 'Ei', 'Murata', None], 
                  'Spice': ['Cute', 'Smart', 'Beauty', 'Tough', 'Cool']})

## Test attribute: timestamp
timestamp = 42069
ts_label = "# stored at " # Format based on W3C standards: http://www.w3.org/TR/tabular-data-model/#embedded-metadata

## Store data as CSV
d.attrs['timestamp'] = 42069 # Attempt to store timestamp in attrs, an experimental attribute of pd.DF
c_file = ts_label + str(timestamp) + '\n' # Attempt to store timestamp as "metadata" header
c_file += d.to_csv(index = False)
print(c_file)
with open(test_file, 'w') as file:
    file.write(c_file)

## Read data as DF
pdf = pd.read_csv(test_file, header = 1) # Ignores metadata, parses table starting at line below
print(pdf.to_string())

## Parse timestamp 
print()
print(pdf.attrs) # Attempt to retrieve metadata through attrs attribute
print(open(test_file, 'r').readline()[len(ts_label):]) # Attempt to retrieve metadata by parsing data from text

'''
Expected output:
# stored at 42069
Archons,Spice
Venti,Cute
Morax,Smart
Ei,Beauty
Murata,Tough
,Cool

Archons   Spice
0   Venti    Cute
1   Morax   Smart
2      Ei  Beauty
3  Murata   Tough
4     NaN    Cool

{}
42069

Discussion:
This test successfully shows that metadata can be written directly into the contents of a CSV file without affecting its parsing.

The metadata was unsuccessfully retrieved from DF's attrs, which is partly explained due to pd's current lack of support and
instability regarding that attribute. It is possible it will be compatible across CSV in a future update. However, it was
successfully retrieved by parsing the header tag at the beginning of the file, albeit without pd's abstractions. From this
test, we conclude that storing metadata as a header tag in the CSV and parsing the header and contents separately works
best for assigning timestamps to a CSV file.
'''