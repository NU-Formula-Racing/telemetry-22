from response_files import list_sensors_by_subteam as sub, local_historic as lh #, cloud_relay as cl
### Handles incoming messages for Pythia

def responseToMessage(message, watchdog):
    match message.split():
        case ["BARKBARK"]:
            # Test function?
            return watchdog.bark()
        
        case ["LIST_SENSORS_BY_SUBTEAM"]:
            return sub.list_sensors_by_subteam()
        
        case ["CUR_VALS", *sensorIDs]: 
            rFrame = watchdog.mostRecentFrame()
            return {sensorID : rFrame[sensorID] for sensorID in sensorIDs}
        
        case ["HITHERTO_VALS", *sensorIDs]:
            res = watchdog.hithertoData(sensorIDs)
            return res if res else ":("
                
        case ["STATUS"]:
            return {"CLOUD": watchdog.cloud_status(), "SESSION_CREATED": watchdog.sesh.is_set(), "SESSION_ONGOING": not watchdog.timeToDie.is_set()}
        
        case ["SWITCH_SOURCE", newstate]:
            #lh.set_state(newstate):
            if newstate != "cloud" or newstate != "local":
                return "INVALID SOURCE"
            watchdog.switch_source(newstate)
            return "SWITCHED STATE TO "+ newstate
            if False: 
                return ":)"
            else:
                return ":("

        case ["LIST_HISTORIC_DATAFILES", path]:
            if watchdog.cloud_status():
                return cl.list_historic_data()
            else:
                #path = "" # GET THE PATH SOMEHOW
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
                if files != None:
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
                files = lh.return_local_file_data_by_name(path, name)
                if files != None:
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
            
