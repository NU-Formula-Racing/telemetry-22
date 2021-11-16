import socket
import threading
import json

client = []


class ThreadedServer(object):
    def __init__(self, host, port):
        self.host = host
        self.port = port
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
            
            pyObjResp = responseToMessage(message)
            if pyObjResp:
                sendJson(client, pyObjResp)
            else:
                sendJson(client, ":(")


# === END ThreadedServer ===

# MOVE THIS SOMEWHERE ELSE
# (BECAUSE IT DOES NOT FIT HERE)
# IF YOU USE THIS CODE
def responseToMessage(message):
    match message.split():
        case ["LIST_SENSORS_BY_SUBTEAM"]:
            return {"formula": ["here", "are", "the", "sensors"]}
        case ["VALS", *sensorIDs]:
            return {sensorID : 420 for sensorID in sensorIDs}
        case ["STATUS"]:
            return ":)"
        case ["LIST_HISTORIC_DATAFILES"]:
            return [["name1", 420], ["name2", 69]]
        case ["REQUEST_HISTORIC_DATAFILE_BY_TIME", timestamp]:
            return "no lol"
        case ["REQUEST_HISTORIC_DATAFILE_BY_NAME", name]:
            return "no lol"
        case ["END_SESSION", name]:
            return ":)"
        case ["BEGIN_SESSION"]:
            return ":)"
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
