sensorOrder = [
    "FL_VSS", "FR_VSS", "BL_VSS", "BR_VSS", "FL_SUS_POT", "FR_SUS_POT",
    "BL_SUS_POT", "BR_SUS_POT", "FL_BRK_TMP", "FR_BRK_TMP", "BL_BRK_TMP",
    "BR_BRK_TMP", "F_BRK_PRES", "B_BRK_PRES", "COOL_TEMP", "STEER_ANG", "TPS",
    "OIL_TEMP", "OIL_PRES", "MAP", "MAT", "NEUT", "LAMBDA1", "LAMBDA2",
    "ACCELX", "ACCELY", "ACCELZ", "GYROX", "GYROY", "GYROZ", "MAGNETX",
    "MAGNETY", "MAGNETZ", "VOLT", "RPM", "GEAR", "IG_CUT"
]

with open('binout/xbee-raw-PARSETEST.bin', 'rb') as f:
    curByte = f.read(1)

    found80 = False
    while curByte != b'':
        curByte = f.read(1)

        if curByte == b'\x01' and found80:
            print('found frame end!')
            break

        if curByte == b'\x80':
            found80 = True
        else:
            found80 = False

        #print(curByte, found80)
    print('ok time to parse:')

    numSensors = len(sensorOrder)
    curFrame = {}
    curSensor = 0

    while curByte != b'':
        curByte = f.read(2)
        curShort = int.from_bytes(curByte, 'big')
        if curShort == 32769:
            print('\nnew frame!\n')
            print(curFrame)
            curFrame = {}
            curSensor = 0

        else:
            curFrame[sensorOrder[curSensor]] = curShort / 10
            curSensor += 1
