import os
import glob
import json
import pandas as pd

def list_local_data_files(path):
    if not os.path.isdir(path):
        return False
    files = glob.glob(path+"/**/*.csv", recursive=True)
    # print(files)
    result = []
    for file in files:
        # print(os.path.basename(file))
        with open(file, 'r', newline='') as f: 
            first = f.readline().strip()
            if first == "# FORMULASAEDATA": # Check for Formula identification header
                newentry = {}
                newentry["name"] = os.path.basename(file)
                newentry["filecreation"] = f.readline().strip().lstrip("# ")
                newentry["local"] = True
                result.append(newentry)
    return result


def return_local_file_data_by_path(path):
    print(path)
    if not os.path.isfile(path):
        return "INVAlID PATH"
    with open(path, 'r', newline='') as f: 
        name = os.path.basename(path)
        first = f.readline().strip()
        if first == "# FORMULASAEDATA":
            sensor_df = pd.read_csv(open(path, 'r'),comment='#')
            sensor_names = sensor_df.columns.values
            sensor_json = {"name": name, "filecreation": f.readline().strip().lstrip("# "), "data": []}
            for i, row in sensor_df.iterrows():
                json_row={}
                for name in sensor_names:
                    json_row[name] = row[name]
                sensor_json["data"].append(json_row)
            return sensor_json
    return "FILE NOT FOUND"


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

if __name__ == "__main__":
    os.chdir("..")
    os.chdir("..")
    path = os.path.abspath("server/")
    print(path)
    print(list_local_data_files(path))