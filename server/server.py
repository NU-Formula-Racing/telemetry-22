import socket
import threading
import json

from response_files.list_sensors_by_subteam import list_sensors_by_subteam
import test_start

client = []

class ThreadedServer(object):
    def __init__(self, host, port):
        self.host = host
        self.port = port
        self.data = {}
        self.session = False
        self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.sock.bind((self.host, self.port))

    def listen(self):
        self.sock.listen(5)
        while True:
            client, address = self.sock.accept()
            client.settimeout(600)

            threading.Thread(target=self.listenToClient,
                             args=(client, address)).start()

    def listenToClient(self, client, address):
        firstMessage = getMessage(client)
        if firstMessage == "HEWWO!":
            sendJson(client, "OWO WHATS THIS?")
        else:
            sendJson(client, "YOU HAVE DISPLEASED THE SNAIL GOD")
            client.close()
            return

        while True:
            message = getMessage(client)
            if not message:
                client.close()
                return
            
            pyObjResp = self.responseToMessage(message)
            if pyObjResp:
                sendJson(client, pyObjResp)
            else:
                sendJson(client, ":(")


# === END ThreadedServer ===

# MOVE THIS SOMEWHERE ELSE
# (BECAUSE IT DOES NOT FIT HERE)
# IF YOU USE THIS CODE
    def responseToMessage(self, message):
        match message.split():
            case ["LIST_SENSORS_BY_SUBTEAM"]:
                return list_sensors_by_subteam()
            case ["VALS", *sensorIDs]: 
                # This whole experiment was based on the premise that threads share memory, but apprently
                # changes done by the thread created in "test_start.py" are not seen by further messages
                # Made responseToMessage a method of ThreadedServer, then created data and session variables
                # Tried starting the session, having the thread read from a file and into data.
                # Tried monitoring the session variable to signal the thread reading from a file to stop
                # if the session was to end.
                print(type(self.data))
                print(self.data)
                ## TODO: Cerberus - receiver ---- Cerberus - parser?
                if self.session:
                    return  #{str(sensorID) : self.data[str(sensorID)] for sensorID in list(sensorIDs)}
                else:
                    return "SESSION NOT STARTED"
                
            case ["STATUS"]:
                ## TODO
                return ":)"
            case ["LIST_HISTORIC_DATAFILES"]:
                ## Awaiting Cloud API
                return [["name1", 420], ["name2", 69]]
            case ["REQUEST_HISTORIC_DATAFILE_BY_TIME", timestamp]:
                ## Awaiting Cloud API
                return "no lol"
            case ["REQUEST_HISTORIC_DATAFILE_BY_NAME", name]:
                ## Awaiting Cloud API
                return "no lol"
            case ["END_SESSION", name]:
                ## TODO
                self.session = False
                return ":)"
            case ["BEGIN_SESSION"]:
                ## TODO: Enables connection to receiver/parser, starts test_start
                if not self.session:
                    self.session = True
                    test_start.start_session(self)
                    return "SESSION STARTED"
                else:
                    return "SESSION ALREADY ACTIVE"
            case _:
                return None
            
def getMessage(client):
    raw = client.recv(1024)
    if raw == b'':
        return None
    else:
        return raw.decode("utf-8").rstrip()

def sendASCII(client, message):
    client.send(bytes(message + "\n", 'ascii'))

def sendJson(client, message):
    sendASCII(client, json.dumps(message))

def runServer():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.connect(("8.8.8.8", 80))
    print("ready at {}:42069".format(s.getsockname()[0]))
    s.close()
    ThreadedServer('', 42069).listen()


if __name__ == "__main__":
    runServer()
