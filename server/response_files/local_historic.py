import os

def set_state(self, cloud):
    self.cloud = cloud
    # TODO: what other things need to be here?
    return True

def list_local_data_files(path):
    if not os.path.isdir(path):
        return False
    files = os.listdir(path)
    for dir in files[os.path.isdir(files[:])]: # Find all subdirecfories in the path
        files.append(list_local_data_files(path + '/' + dir)) # Check all files in each subdirectory
    return files[files[:].endswith('.csv')] # Filter by CSV files

def find_local_files_by_name(path, name):
    files = list_local_data_files(path)
    if files:
        json_f = {}
        for file in files:
            if boyer_moore_match(file, name) >= 0:
                json_f[file] = os.stat(file).st_ctime
        return json_f
    else:
        return False

def find_local_files_by_dt(path, dt):
    files = list_local_data_files(path)
    if files:
        #files = files[files == 0] #files[:].timestamp == dt? or within a certain range
        file = files[os.stat(file).st_ctime == dt]
        json_f = {}
        for file in files:
            dt = open(file).readline()
            json_f[file] = os.stat(file).st_ctime
        # sort dictionary by closest to timestamp
        return sorted(json_f.items)
    else:
        return False

def boyer_moore_match(text, pattern):
    """Find occurrence of pattern in text."""
    alphabet = set(text)
    last = last_occurrence(pattern, alphabet)
    m = len(pattern)
    n = len(text)
    i = m - 1  # text index
    j = m - 1  # pattern index
    while i < n:
        if text[i] == pattern[j]:
            if j == 0:
                return i
            else:
                i -= 1
                j -= 1
        else:
            l = last(text[i])
            i = i + m - min(j, 1+l)
            j = m - 1 
    return -1

class last_occurrence(object):
    """Last occurrence functor."""

    def __init__(self, pattern, alphabet):
        """Generate a dictionary with the last occurrence of each alphabet
        letter inside the pattern.
        
        Note: This function uses str.rfind, which already is a pattern
        matching algorithm. There are more 'basic' ways to generate this
        dictionary."""
        self.occurrences = dict()
        for letter in alphabet:
            self.occurrences[letter] = pattern.rfind(letter)

    def __call__(self, letter):
        """Return last position of the specified letter inside the pattern.
        Return -1 if letter not found in pattern."""
        return self.occurrences[letter]