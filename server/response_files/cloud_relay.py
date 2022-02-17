import requests
import json

base_url = "https://9f01fr6vdh.execute-api.us-east-2.amazonaws.com/Testing"

def get_live_data(session_id = None, timestamp = None):
    """
    Retrieves live data by sessionId or timestamp
    Reverts to last entered data point if neither timestamp nor sessionId are given. 
    
    Args: None
    Kwargs:
    - session_id: int, session for which data is being fetched from
    - timestamp: string, timestamp for which data is fetched, formatted 'HH:MM:SS'
    
    Returns:
    - JSON, data from session (response 200)
    - None, if invalid input (response 405)
    """
    url = f"{base_url}/getLiveData?"
    if type(session_id) == int:
        url += f"sessionId={session_id}&"
    if type(timestamp) == str:
        url += f"timestamp={timestamp}&"
    url = url.rstrip('&')
    
    return url # Dummy result until Cloud is functional
    response = requests.get(url)
    if response.status_code == 405:
        return response.json()
    else:
        return None

def store_live_data(session_id: int, timestamp: str, sensor_data: str) -> bool:
    """
    Stores live data by sessionId and timestamp. Adds the provided JSON data to the DynamoDB table.

    Args:
    - session_id: int, session for which data is being recorded
    - timestamp: str, timestamp for which data is being recorded
    - sensor_data: str, JSON containing sensor data to be stored
    
    Returns:
    - bool, True if storage was successful (response 201) or False if invalid (response 405)
    """
    url = f"{base_url}/storeLiveData?sessionId={session_id}&timestamp={timestamp}"
    return url # Dummy
    return requests.post(url, data = sensor_data).status_code == 201

def get_historic_data(session_id: int):
    """
    Gets historic data by sessionId
    Reverts to last stored file if not given sessionId.

    Args:
    - sessionId : int, session for which data is being fetched
    
    Returns:
    - JSON, data from historic CSV (response 200)
    - None, if invalid input (response 405)
    """
    url = f"{base_url}/getHistoricData?sessionId={session_id}"
    
    return url # Dummy
    response = requests.get(url)
    if response.status_code == 405:
        return response.json()
    else:
        return None

def store_historic_data(session_id: int, sensor_data: str):
    """
    Uploads and saves a CSV file that contains sensor data for the entire session.

    Args:
    - sessionId: int, session for which data is being recorded
    - sensor_data: JSON, sensor data that has to be stored
    
    Returns:
    - bool, successfully stored CSV data (response 201)
    - bool, if invalid input (response 405)
    """
    url = f"{base_url}/storeHistoricData?sessionId={session_id}"
    return url # Dummy
    return requests.post(url, data = sensor_data).status_code == 201

def list_historic_data():
    """
    Gets a list of all the filenames (based on sessionId) saved in S3 (cloud).

    Args: None

    Returns:
    - JSON, successfully fetched CSV list (response 200)
    - None, if otherwise
    """
    url = f"{base_url}/listHistoricData"
    return url # Dummy
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        return None
