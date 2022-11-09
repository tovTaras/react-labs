from flask import Flask, request, jsonify, abort
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS, cross_origin

DB_URI = "mysql+mysqlconnector://root:Moskit2805@localhost/stravy"

app = Flask(__name__)
CORS(app, support_credentials=True)

app.config['SQLALCHEMY_DATABASE_URI'] = DB_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)


class Stravy(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    src = db.Column(db.String(1000))
    title = db.Column(db.String(100))
    text = db.Column(db.String(500))
    ingredients = db.Column(db.String(1000))
    calories = db.Column(db.Integer)
    price = db.Column(db.Integer)

    def __init__(self, id, src, title, text, ingredients, calories, price):
        self.id = id
        self.src = src
        self.title = title
        self.text = text
        self.ingredients = ingredients
        self.calories = calories
        self.price = price


class StravySchema(ma.Schema):
    class Meta:
        fields = ('id', 'src', 'title', 'text', 'ingredients', 'calories', 'price')


stravas_schema = StravySchema(many=True)


@app.route('/stravy', methods=['GET'])
@cross_origin(supports_credentials=True)
def get_strava():
    all_items = Stravy.query.all()

    reverse_condition = False

    try:
        order = request.args.get('order')
        if order:
            reverse_condition = True if order == 'desc' else False
    except Exception as e:
        print(e)

    try:
        parameter = request.args.get('parameter')
        if parameter:
            selected_parameter = parameter

            sort_parameters = {
                'title': lambda item: item.title,
                'calories': lambda item: item.calories,
                'price': lambda item: item.price
            }

            if selected_parameter == 'title':
                all_items.sort(key=lambda item: item.title, reverse=reverse_condition)
            else:
                all_items.sort(key=lambda item: sort_parameters[selected_parameter](item), reverse=reverse_condition)
        else:
            all_items.sort(key=lambda item: item.title, reverse=reverse_condition)
    except Exception as e:
        print(e)

    return stravas_schema.jsonify(all_items)


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        app.run(debug=True)
