import time
import struct
import datetime as dt
import numpy as np
import old.backend.telemetry_csv as tc
import old.backend.sensor_list as sl

def telemetry_main(live_input, csv_name):

    # csv_name = "Telemetry_Data/"+str(dt.datetime)+".csv"
    in_file = open(live_input, 'r')

    ''' Wait for connection to establish '''
    while (in_file.read() == ''):
        print('waiting')
        time.sleep(2)
        pass

    print("Data received!")
    time.sleep(1)

    index = 0
    start_time = time.time()
    size = (len(sl.all_xbee_sensors)+1) * 2 # for consistency, -1 from time, +1 for parity byte
    id_bytes = b'\x80\x01'

    sig_list = np.ones(size)  # multiplications for each sensor values turning short back to float, default as 1 for now

    tc.csv_create_header(csv_name, sl.all_xbee_sensors)


    while True:
        current_time = round(time.time() - start_time, 2)
        ''' read input stream, works like a stack '''
        raw_values = live_input.read_until(id_bytes, size)
        # MAKE SURE THE STRING FILE HAS THE CORRECT SIZE, OTHERWISE ABANDON DATA
        if (raw_values[len(raw_values) - 2:len(raw_values)] != id_bytes) | (len(raw_values) < size):
            # print("Warning, incorrect identifier, second chance")
            raw_values += live_input.read_until(id_bytes, size)
            if raw_values[len(raw_values) - 2:len(raw_values)] != id_bytes:
                print("Second chance fail at: " + str(current_time))
                print(raw_values)
                time.sleep(0.1)
                live_input.flushInput()
                continue
        ''' decoode "byte" type and remove newline char '''
        # v = raw_values.decode('utf-8', errors='ignore').strip('\n').strip('\r')
        tuple_values = struct.unpack('>'+'h'*(size//2), raw_values[len(raw_values)-size:len(raw_values)])  # data type: tuple

        sensor_values = np.asarray(tuple_values[:len(tuple_values)-1]) / (10 ** 1) ## sig_list
        print("time: " + str(current_time) + " and size of raw values is " + str(len(raw_values)) + " and size of sensor_values is " +  str(len(sensor_values)))
        print(sensor_values[1])

        csv_list = np.concatenate((np.array([index, current_time]), sensor_values))
        index += 1
        
        tc.csv_store_data(csv_name, sl.all_xbee_sensors, csv_list)
        print(csv_list)

        ''' wait '''
        time.sleep(0.1)  # default 0.1
        ''' flush input stream '''
        live_input.flushInput()