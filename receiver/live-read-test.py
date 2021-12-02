'''Reads lines with JSON asynchronously from a live-written file.'''

import os
import time
import json

'''JSON version'''
# Generate file path
path = os.path.dirname(os.path.abspath(__name__))
if 'receiver' not in path:
    path = os.path.join(path, 'receiver')
path = os.path.join(path, 'live-read-dir/lr-test.txt')

json_list = [] # List of Python dicts, from JSON objects

print('Starting program, waiting for sufficient data...')
time.sleep(1)

# Read from file
with open(path, 'r') as lr_file:
    print('File opened: lr-test.txt')
    
    # Loop for reading
    while True:
        try:
            new_entry = json.loads(lr_file.readline()) # Reads next line and converts to Python dict
            print(new_entry, type(new_entry)) # Prints convents of JSON object + type in Python (should be dict)
            json_list.append(new_entry) # Adds dict to list
        except:
            print('End of file reached. Waiting for more data...')
        time.sleep(0.25)
        
        
        
'''Bit version'''
'''
# Generate file path
path = os.path.dirname(os.path.abspath(__name__))
if 'receiver' not in path:
    path = os.path.join(path, 'receiver')
path = os.path.join(path, 'live-read-dir/lr-test.bin')

term = b'\x13\x37'
buffer = None # Holds bits from file
b_count = 0 # Length of string buffer
c_lim = 64 # Max characters per line, including terminator

print('Starting program, waiting for sufficient data...')
time.sleep(1)

# Read from file
with open(path, 'rb') as lr_file:
    print('File opened: lr-test.bin')
    
    # Loop for reading
    while True:
        buffer = b'' # Reset data
        b_count = 0
        time.sleep(0.5)
        
        # Individual readline
        while buffer.rfind(term) == -1 and b_count < c_lim:
            buffer += lr_file.read(1) # Read 2 bytes
            b_count += 1
        print(buffer, len(buffer))
        # print(list(buffer))
'''