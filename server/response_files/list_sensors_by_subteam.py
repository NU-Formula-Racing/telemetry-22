import os
import json

def _nice_json(snail : dict) -> str:
    """
    Displays a Python dict (from JSON) using the following syntax:
    
    { 
        key1: [val11, val12, ...],
        key2: [val21, val22, ...],
        ...
    }
    
    Used for testing purposes or for rendering the JSON nicely in the output console.
    """
    out = "{\n"
    for k in snail.keys():
        out += "\t" + k + ": " + str(snail[k]) + ',\n'
    out += "}"
    return out

def list_sensors_by_subteam() -> str:
    """
    Handler for
    >>> LIST_SENSORS_BY_SUBTEAM
    displaying the contents of the JSON with lists of sensors for each subteam.
    """
    by_subteam = open(os.path.dirname(os.path.realpath(__file__)) + "/sensors_by_subteam.json", 'r').read()
    return _nice_json(json.loads(by_subteam))
    
# Test script
if __name__ == "__main__":
    print('Running test:')
    print(list_sensors_by_subteam())