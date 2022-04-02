import threading
import json
###

class ThreadedWatcher(object):

    def __init__(self):
        self.data = []
        self.timeToDie = threading.Event()
        self.cloudActive = threading.Event()
        self.sesh = threading.Event()

    def startWatching(self):
        threading.Thread(target=self.observe).start()
        self.sesh.set()

    def observe(self):
        self.timeToDie.clear()
        while True:
            if self.timeToDie.is_set():
                return
            curFrame = json.loads(input())
            self.data.append(curFrame)

    def kill(self):
        self.timeToDie.set()

    def mostRecentFrame(self):
        return self.data[-1]

    def bark(self):
        return "woof"

    def cloud_status(self):
        return self.cloudActive.is_set()
    
    def cloud_start(self):
        self.cloudActive.set()
    
    def cloud_stop(self):
        self.cloudActive.clear()
    
    def switch_source(self, newstate):
        if newstate == "cloud":
            self.cloud_start()
        elif newstate == "local":
            self.cloud_stop()
        else:
            pass