from flask import Blueprint, render_template

game = Blueprint("game", __name__, url_prefix='/')

@game.route("/", methods=['GET'])
def homepage():
    return "homepage"

@game.route("/easy", methods=['GET'])
def easy():
    return "easy"

@game.route("/hard", methods=['GET'])
def hard():
    return "hard"

@game.route("/over", methods=['GET'])
def over():
    return "game over"
