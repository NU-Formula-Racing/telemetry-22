import os
import json
import time as snail
import threading as t
import live_read_test as lrt


def start_session(self):
    #parent,child = mp.pipe()
    p = t.Thread(target=read_file, args=(self,)).start()


def read_file(self):
    '''JSON version'''
    # Generate file path
    path = os.path.dirname(os.path.abspath(__name__))
    if 'receiver' not in path:
        path = os.path.join(path, 'receiver')
    path = os.path.join(path, 'live-read-dir/lr-test.txt')

    print('Starting program, waiting for sufficient data...')
    snail.sleep(1)

    # Read from file
    with open(path, 'r') as lr_file:
        print('File opened: lr-test.txt')
        
        # Loop for reading
        while True:
            if not self.session: # trying to check the status of the server (not working)
                print("HIIIIIIIIIIII")
                return "SESSION ENDED"
            try:
                new_entry = json.loads(lr_file.readline()) # Reads next line and converts to Python dict
                print(new_entry, type(new_entry)) # Prints convents of JSON object + type in Python (should be dict)
                #json_list.append(new_entry) # Adds dict to list
                self.data.append(new_entry)
            except:
                  print('End of file reached. Waiting for more data...')
            snail.sleep(0.25)


if __name__ == "__main__":
    start_session()

