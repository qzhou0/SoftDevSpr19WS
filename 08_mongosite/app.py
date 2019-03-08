import os

import json
import pymongo
from flask import Flask, render_template, request, flash, redirect, url_for,session
import util.mongo as mongo
# import util.json_setup as parser
# import util.find as find

app = Flask(__name__)
app.secret_key = os.urandom(32)


@app.route("/")
def index_page():


    tempDisplay=False
    tempPokemon=[]
    
    if 'displayPokemon' in session:
        tempDisplay = session['displayPokemon']
        tempPokemon = pokemons#session['pokemons']
        print('pok',pokemons)#session['pokemons'])
        session.pop('displayPokemon')
        #session.pop('pokemons')
    print(tempPokemon,tempDisplay)
    connected = False
    if 'connected' in session:
        connected = True
    return render_template("index.html", connected = connected, pokemons = tempPokemon, displayPokemon = tempDisplay)

@app.route("/connect", methods=['POST'])
def add_connection():
    global collection
    ip = request.form['ip']
    try:
        connection = pymongo.MongoClient(ip)
        print('yay')
    except:
        print('nay')
        return redirect(url_for('index_page'))

    session['connected'] = True;
    db = connection.PinkMangoes
    collection =db.pokemons

    collection.drop()
    f=open('./data/pokedex.json','r')
    fr=f.read()
    f.close()
    collection.insert_many(json.loads(fr))
                           
    print(session['connected'])
    return redirect('/')

@app.route("/find", methods=['POST'])
def find_pokemon():
    global pokemons
    print('oljaisda')
    searchType = request.form['searchType']
    print(searchType)


    if (searchType == 'type'):
        session['displayPokemon'] = True
        pokemons = mongo.pokemon_type(request.form['query'],collection)
    elif (searchType == 'name'):
        session['displayPokemon'] = True
        pokemons= mongo.pokemon_name(request.form['query'], collection)
    return redirect('/')

if __name__ == "__main__":
    app.debug = True
    app.run()
