"""
Qian Zhou
SoftDev2 pd07
K06 -- Yummy Mongo Py
2019-02-28
"""

import pymongo

SERVER_ADDR = "142.93.240.95"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection=db.restaurants

def findInBorough(b):
    return list(collection.find({"borough":b}))

def findInZip(z):
    
    return list(collection.find({"address.zipcode":z}))

def findInZipGrade(z,g):
    if z == None:
        return list(collection.find({"grades":{'$elemMatch':{"grade":g}}}))
    return list(collection.find({'$and' : [
        {"address.zipcode":z},
        {"grades":{'$elemMatch':{"grade":g}}}
    ]}))

def findScoreBelow(threshold):
    
    return list(collection.find({'grades':{'$elemMatch':
                                           {'score':{'$lt':threshold}}
    }}))

def clever(s=None,z=None,g=None,b=None):
    a=findInBorough(b)
    b=findInZipGrade(z,g)
    c=findScoreBelow(s)
    return [i for i in a if (i in b and i in c)]
    

#print(findInBorough("Brooklyn"))

#print(findInBorough("Queens"))

#print(findInZip('11214'))
#print(findInZipGrade('11214','A'))
#print(findInZipGrade(None,'A'))
#print(findScoreBelow(3))
print(clever(s=5,g='A',b='Manhattan'))
