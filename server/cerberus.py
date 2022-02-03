import threading
import json


class ThreadedWatcher(object):

    def __init__(self):
        self.data = []
        self.timeToDie = threading.Event()

    def startWatching(self):
        threading.Thread(target=self.observe).start()

    def observe(self):
        timeToDie.clear()
        while True:
            if timeToDie.isSet():
                return
            curFrame = json.loads(input())
            self.data.append(curFrame)

    def kill(self):
        self.timeToDie.set()

    def mostRecentFrame(self):
        return self.data[-1]

    def bark(self):
        return "woof"


if __name__ == "__main__":
    Egregore = ThreadedWatcher()
    #Egregore.observe()
