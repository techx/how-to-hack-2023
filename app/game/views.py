from flask import Blueprint, request, jsonify

game = Blueprint("mod2", __name__, url_prefix='/mod2')

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
