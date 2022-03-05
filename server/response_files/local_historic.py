import os.path as osp
import glob

def list_local_data_files(path):
    if not osp.isdir(path):
        return False
    files = glob.glob(path+"/**/*.csv", recursive=True)
    result = {}
    for file in files:
        print(osp.basename(file))
        with open(file, 'r', newline='') as f: 
            first = f.readline().strip()
            if first == "FORMULASAEDATA": # Check for Formula identification header
                result[osp.basename(file)] = f.readline().strip()
    return result

# def find_local_files_by_name(path, name):
#     files = list_local_data_files(path)
#     if files:
#         json_f = {}
#         for file in files:
#             if boyer_moore_match(file, name) >= 0:
#                 json_f[file] = os.stat(file).st_ctime
#         return json_f
#     else:
#         return False

# def find_local_files_by_dt(path, dt):
#     files = list_local_data_files(path)
#     if files:
#         #files = files[files == 0] #files[:].timestamp == dt? or within a certain range
#         file = files[os.stat(file).st_ctime == dt]
#         json_f = {}
#         for file in files:
#             dt = open(file).readline()
#             json_f[file] = os.stat(file).st_ctime
#         # sort dictionary by closest to timestamp
#         return sorted(json_f.items)
#     else:
#         return False