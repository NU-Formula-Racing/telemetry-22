from response_files import list_sensors_by_subteam as sub, local_historic as lh

def responseToMessage(message, watchdog):
    match message.split():
        case ["BARKBARK"]:
            return watchdog.bark()
        case ["LIST_SENSORS_BY_SUBTEAM"]:
            return sub.list_sensors_by_subteam()
        case ["VALS", *sensorIDs]: 
            rFrame = watchdog.mostRecentFrame()
            return {sensorID : rFrame[sensorID] for sensorID in sensorIDs}
                
        case ["STATUS"]:
                ## TODO
            return ":)"
        case ["SWITCH_SOURCE", newstate]:
            if lh.set_state(newstate):
                return ":)"
            else:
                return ":("

        case ["LIST_HISTORIC_DATAFILES"]:
            if watchdog.cloud_status():
                  ## Awaiting Cloud API
                return ":("
            else:
                path = "" # GET THE PATH SOMEHOW
                files = lh.list_local_data_files(path)
                if files:
                    return files
                else:
                    return ":("
            return [["name1", 420], ["name2", 69]]

        case ["REQUEST_HISTORIC_DATAFILE_BY_TIME", timestamp]:
            if watchdog.cloud_status():
                ## Awaiting Cloud API
                return ":("
            else:
                path = "" # GET THE PATH SOMEHOW
                files = lh.find_local_files_by_dt(path, timestamp)
                if files:
                    if len(files) > 0:
                        return files
                    else:
                        return "FILE NOT FOUND"
                else:
                    return ":("

        case ["REQUEST_HISTORIC_DATAFILE_BY_NAME", name]:
            if watchdog.cloud_status():
                ## Awaiting Cloud API
                return ":("
            else:
                path = "" # GET THE PATH SOMEHOW
                files = lh.find_local_files_by_dt(path, timestamp)
                if files:
                    if len(files) > 0:
                        return files
                    else:
                        return "FILE NOT FOUND"
                else:
                    return ":("
            return "no lol"
        case ["END_SESSION", name]:
            ## TODO NAME DATA FILE
            watchdog.kill()
            return ":)"
        case ["BEGIN_SESSION"]:
            if watchdog.timeToDie.isSet():
                return "SESSION ALREADY ACTIVE"
            else:
                watchdog.startWatching()
                return "SESSION STARTED"
        case _:
            return None
            
