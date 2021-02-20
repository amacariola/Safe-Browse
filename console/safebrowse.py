#################################################
#       Google SafeBrowsing console client      #
#  Using the standalone Python3 request library #
#         Coded by: Macariola Ace H             #
#                                               #
#################################################

import requests
from time import sleep

try:
    mainurl = "https://safebrowsing.googleapis.com/v4/threatMatches:find?"
    url = input('Enter URL here:')
    querystring = {'key':"AIzaSyCua037xQknK7sMR3CRBmHpxTLJKmRNbnc"}
    # PAYLOAD HERE
    payload = """
        {
            "client": {
                "clientId" : "Kuro Macariola",
                "clientVersion" : "1.5.2",
            },
            "threatInfo" : {
                "threatTypes": ["MALWARE", "SOCIAL_ENGINEERING"],
                "platformTypes": ["WINDOWS"],
                "threatEntryTypes": ["URL"],
                "threatEntries" : [
                    {"url": "https://stackoverflow.com"}
                ]
            }
        }
    """
    ## CHANGE THE URL FIELD TO THE URL YOU WANT TO CHECK

    headers = {
        'content-type' : 'application/json',
        'accept' : 'application/json',
        'cache-control' : 'no-cache',
    }

    response = requests.request("POST",mainurl,data=payload,headers=headers,params=querystring)
    print(response.text)
 
except:
    print('Error Occured')