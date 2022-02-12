import threading
import json


class ThreadedWatcher(object):

    def __init__(self):
        self.data = []
        self.timeToDie = threading.Event()
        self.cloudActive = threading.Event()

    def startWatching(self):
        threading.Thread(target=self.observe).start()

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


if __name__ == "__main__":
    Egregore = ThreadedWatcher()
    #Egregore.observe()
