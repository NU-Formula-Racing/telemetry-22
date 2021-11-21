#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

typedef uint8_t byte;
typedef uint16_t twoBytes;

enum PARSE_STATE { IN_FRAME, LOOKING_FOR_FRAME };

const char *SENSOR_NAMES[] = {
    "FL_VSS",     "FR_VSS",     "BR_VSS",     "FL_SUS_POT", "FR_SUS_POT",
    "BL_SUS_POT", "BR_SUS_POT", "FL_BRK_TMP", "FR_BRK_TMP", "BL_BRK_TMP",
    "BR_BRK_TMP", "F_BRK_PRES", "B_BRK_PRES", "COOL_TEMP",  "STEER_ANG",
    "TPS",        "OIL_TEMP",   "OIL_PRES",   "MAP",        "MAT",
    "NEUT",       "LAMBDA1",    "LAMBDA2",    "ACCELX",     "ACCELY",
    "ACCELZ",     "GYROX",      "GYROY",      "GYROZ",      "MAGNETX",
    "MAGNETY",    "MAGNETZ",    "VOLT",       "RPM",        "GEAR",
    "IG_CUT"};

int NUM_SENSORS = (sizeof(SENSOR_NAMES) / sizeof(char *));

int readAndShift(byte *bytes, FILE *f);
void printBuffer(twoBytes *buff);

int main() {
  FILE *f = fopen("../receiver/binout/xbee-raw-PARSETEST.bin", "rb");

  twoBytes *curBytes = (twoBytes *)malloc(sizeof(twoBytes));
  byte *hByte = (byte *)curBytes;
  byte *tByte = (byte *)curBytes + 1;

  *hByte = 0;
  *tByte = 0;

  int curIdx = 0;

  twoBytes *readBuffer = malloc(sizeof(twoBytes) * NUM_SENSORS);

  enum PARSE_STATE curState = LOOKING_FOR_FRAME;
  //curState = IN_FRAME;
  
  while (readAndShift((byte *)curBytes, f)) {
    //printf("mrrb      %02hhx%02hhx\n", *tByte, *hByte);
    //printf("%d", curState == IN_FRAME? 1 : 0);
    //printf("%02d %02hhx%02hhx\t", curIdx, *hByte, *tByte);
    if(curState == IN_FRAME)
    {
        readAndShift((byte*) curBytes, f);
    }

    if(*curBytes == 0x8001)
    {
        curIdx = 0; 

        switch (curState)
        {
            case LOOKING_FOR_FRAME:
                curState = IN_FRAME;
                break;
            case IN_FRAME:
                printBuffer(readBuffer);
                //puts("\n\nNEWFRAME");
                break;
        }   

    }
    else
    {
        if (curState == IN_FRAME && curIdx == NUM_SENSORS + 1)
        {
            //puts("\nOVERRUN\n");
            curState = LOOKING_FOR_FRAME;
        }
        else
        {      
            readBuffer[curIdx] = *curBytes;
            curIdx++;
        }
    }
  }
}

int readAndShift(byte *bytes, FILE *f) {
  *(bytes + 1) = *bytes;
  return fread(bytes, 1, 1, f);
}

void printBuffer(twoBytes *buff) {
  //printf("\n");
  for (int idx = 0; idx < NUM_SENSORS; idx++) {
    printf("%d ", buff[idx] / 10);
  }
  printf("\n");
}
