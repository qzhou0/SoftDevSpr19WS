import pymongo

server_add = "142.93.240.95"
connection = pymongo.MongoClient(server_add)
db = connection.PinkMangoes
collection = db.pokemons

def pokemon_type(type, collection):
    print(collection)
    print('ahiaf')
    ans=list(collection.find({'type':type}))
    print('type:',ans)
    return ans
    #print(list(results))
    # for res in results:
    #    print(res['name'])
    #    print(res['type'])
    #    print(res['height'] + " " + res['weight'])
    #    print("\n")

def pokemon_name(name, collection):
    print('asdfa',collection)
    ans=list(collection.find({"name":name}))
    print('name:',ans)
    return ans
    #print(list(results))
    # for res in results:
    #    print(res['name'])
    #    print(res['type'])
    #    print(res['height'] + " " + res['weight'])
    #    print("\n")

def pokemon_weight(weight):
    return collection.find({'weight':str(weight) + " kg"})
    # for res in results:
    #    print(res['name'])
    #    print(res['type'])
    #    print(res['height'] + " " + res['weight'])
    #    print("\n")

def pokemon_height(height):
    return collection.find({'height':str(height) + " m"})
    # for res in results:
    #    print(res['name'])
    #    print(res['type'])
    #    print(res['height'] + " " + res['weight'])
    #    print("\n")

def pokemon_evolvedFrom(prevEvol):
    return collection.find({"prev_evolution.name": prevEvol})
    # for res in results:
    #    print(res['name'])
    #    print(res['type'])
    #    print(res['height'] + " " + res['weight'])
    #    print("\n")

def pokemon_evolvedInto(nextEvol):
    return collection.find({"next_evolution.name": nextEvol})
    # for res in results:
    #    print(res['name'])
    #    print(res['type'])
    #    print(res['height'] + " " + res['weight'])
    #    print("\n")
