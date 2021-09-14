from flask import Blueprint, render_template

game = Blueprint("game", __name__, url_prefix='/')

@game.route("/", methods=['GET'])
def homepage():
    return render_template('index.html')

@game.route("/easy", methods=['GET'])
def easy():
    return render_template('game.html', mode="Easy")

@game.route("/hard", methods=['GET'])
def hard():
    return render_template('game.html', mode="Hard")

@game.route("/over/<score>", methods=['GET'])
def over(score):
    return render_template('over.html', score=score)
