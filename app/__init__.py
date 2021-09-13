import os
from flask import Flask, session, request

app = None

def create_app():
    global app, db, session
    app = Flask(__name__)

    # load config vars from file or environment
    if os.path.exists("config.py"):
        app.config.from_pyfile("./config.py")
        print("Loading secret configs from file")

    # register module blueprints
    from app.game.views import game
    app.register_blueprint(game)

    return app
