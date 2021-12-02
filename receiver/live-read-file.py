'''Writes randomly generated strings of bytes, with common terminator \x13\x37, asynchronously into a file. Meant to resemble live reception of data.'''

# from threading import Thread
import os
import time
import random as rand

# os.chdir('./live-read-dir/')
# os.path.dirname(os.path.abspath(__name__)) # __name__ on Mac, change to __file__ for Windows and Linux

'''JSON Version'''
# Generate file path
path = os.path.dirname(os.path.abspath(__name__))
if 'receiver' not in path:
    path = os.path.join(path, 'receiver')
path = os.path.join(path, 'live-read-dir/lr-test.txt')

# Create new file
with open(path, 'w') as lr_file:
    print('File created: lr-test.txt')

# Seeding RNG to make results consistent
rand.seed(1337)

term = '\n' # Line terminator
sensor_names = ["FL_VSS", "FR_VSS", "BL_VSS", "BR_VSS", "FL_SUS_POT", "FR_SUS_POT", "BL_SUS_POT", "BR_SUS_POT", "FL_BRK_TMP", "FR_BRK_TMP","BL_BRK_TMP","BR_BRK_TMP","F_BRK_PRES","B_BRK_PRES","COOL_TEMP","STEER_ANG","TPS","OIL_TEMP","OIL_PRES","MAP","MAT","NEUT","LAMBDA1","LAMBDA2","ACCELX","ACCELY","ACCELZ","GYROX","GYROY","GYROZ","MAGNETX","MAGNETY","MAGNETZ","VOLT","RPM","GEAR","IG_CUT"]

# Append to file live with jsons
while True:
    curr_json = dict(zip(sensor_names,rand.randbytes(sensor_names.__len__()))).__str__() + term
    print(curr_json)
    time.sleep(0.1)
    with open(path, 'a') as lr_file:
        lr_file.write(curr_json)

'''Bit Version'''
'''
# Generate file path
path = os.path.dirname(os.path.abspath(__name__))
if 'receiver' not in path:
    path = os.path.join(path, 'receiver')
path = os.path.join(path, 'live-read-dir/lr-test.bin')

# Create new file
with open(path, 'wb') as lr_file:
    print('File created: lr-test.bin')

# Seeding RNG to make results consistent
rand.seed(1337)

term = b'\x13\x37' # Line terminator
count = 0 # Number of characters generated per line, used to determine terminator placement
c_range = 16 # [0, c_range]; range of number of characters generated per cycle
c_lim = 64 # Number of characters per "line," including terminator, used for reading and terminator placement

# Append to file live with bits
while True:
    if count >= c_lim - len(term): 
        # count has currently exceeded c_lim as shown below, needs to be reset
        count %= c_lim - len(term) # Rectify count; terminator already accounted for
        bit_stream = rand.randbytes(count) # Use excess in count to generate value
    else:
        # Generate random number of new bits
        c_add = rand.randint(0, 16)
        if count + c_add > c_lim - len(term):
            # Count currrently exceeds terminator amount
            # Uses previous count value in generation
            # Generates bytes up to c_lim - length of terminator, then adds terminator
            bit_stream = rand.randbytes(c_lim - len(term) - count) + term
        else:
            bit_stream = rand.randbytes(c_add)
        count += c_add # Actually add to count
    print(list(bit_stream))
    time.sleep(0.1)
    with open(path, 'ab') as lr_file:
        lr_file.write(bit_stream)
'''