import os

def set_state(self, cloud):
    self.cloud = cloud
    # TODO: what other things need to be here?
    return True

def list_data_files(path):
    if not os.path.isdir(path):
        return False
    files = os.listdir(path)
    for dir in files[os.path.isdir(files[:])]: # Find all subdirecfories in the path
        files.append(list_data_files(path + '\\' + dir)) # Check all files in each subdirectory
    return files[files[:].endswith('.csv')] # Filter by CSV files

def find_files_by_name(path, name):
    files = list_data_files(path)
    if files:
        files = files[name in files[:]]
        json_f = {}
        for file in files:
            json_f[file] = file#.timestamp?
        return json_f
    else:
        return False

def find_files_by_dt(path, dt):
    files = list_data_files(path)
    if files:
        files = files[files[:] == 0] #files[:].timestamp == dt? or within a certain range
        json_f = {}
        for file in files:
            json_f[file] = file#.timestamp?
        return json_f
    else:
        return False