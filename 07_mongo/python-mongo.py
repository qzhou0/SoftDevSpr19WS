#Team PinkMangoes: Ivan Zhang and Qian Zhou
#SoftDev2 pd7
#K #07: Import/Export Bank
#2019-03-01

'''
    Pokedex Database
    Contains Information (Name, Id, Type, Height, Weight, Weaknesses, Evolutions, etc.) of Pokemon
    Raw Data: https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json
    Import Directions:
        Remove '{"pokemon":' at the beginning of the JSON file and the corresponding '}' at the end, else would return all anyway...
        When Importing the JSON attach '--jsonArray' flag:
            mongoimport --db DATABASE_NAME --collection COLLECTION_NAME --drop --jsonArray --file DIRECTORY_NAME/pokedex.json
            This apparently averts error "exception:BSON representation of supplied JSON is too large: code FailedToParse:"
'''
import pymongo

server_add = "142.93.240.95"
connection = pymongo.MongoClient(server_add)
db = connection.PinkMangoes
collection = db.pokemons

def pokemon_type(type):
    results = collection.find({'type':type})
    #print(list(results))
    for res in results:
       print(res['name'])
       print(res['type'])
       print(res['height'] + " " + res['weight'])
       print("\n")

def pokemon_name(name):
    results = collection.find({"name":name})
    #print(list(results))
    for res in results:
       print(res['name'])
       print(res['type'])
       print(res['height'] + " " + res['weight'])
       print("\n")

def pokemon_weight(weight):
    results = collection.find({'weight':str(weight) + " kg"})
    for res in results:
       print(res['name'])
       print(res['type'])
       print(res['height'] + " " + res['weight'])
       print("\n")

def pokemon_height(height):
    results = collection.find({'height':str(height) + " m"})
    for res in results:
       print(res['name'])
       print(res['type'])
       print(res['height'] + " " + res['weight'])
       print("\n")

def pokemon_evolvedFrom(prevEvol):
    results = collection.find({"prev_evolution.name": prevEvol})
    for res in results:
       print(res['name'])
       print(res['type'])
       print(res['height'] + " " + res['weight'])
       print("\n")

def pokemon_evolvedInto(nextEvol):
    results = collection.find({"next_evolution.name": nextEvol})
    for res in results:
       print(res['name'])
       print(res['type'])
       print(res['height'] + " " + res['weight'])
       print("\n")

#pokemon_type("Grass")
#pokemon_name("Tangela")
#pokemon_weight(6.9)
#pokemon_height(0.71)
#pokemon_evolvedFrom("Bulbasaur")
pokemon_evolvedInto("Venusaur")
