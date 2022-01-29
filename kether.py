import subprocess

recvCmd = "cat receiver/binout/xbee-timespliced-1643249685317.bin"
parsCmd = "parser/parser"

parsProc = subprocess.Popen(parsCmd.split(),
                            stdin=subprocess.PIPE,
                            stdout=subprocess.PIPE)

recvProc = subprocess.Popen(recvCmd.split(), stdout=parsProc.stdin)

out, err = parsProc.communicate()

print(out)
