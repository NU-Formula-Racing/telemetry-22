import local_historic as lh

path = "C:/Users/vince/OneDrive/Actually Useful/College/Formula/NFR21-Telemetry/server"

print(lh.list_local_data_files(path))

# def getOurDate():
# DateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
# try:
#     unformatedDate = format.parse(date)
#     formatedDate = ("HH:mm dd.MM.yyyy").format(unformatedDate)
#     return formatedDate
# except:           
#     System.out.println("Error")
#     return date