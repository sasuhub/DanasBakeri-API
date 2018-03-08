from flask import request
from flask_api import FlaskAPI
from flask_cors import CORS

app = FlaskAPI(__name__)
CORS(app)

products = [
    {
        'id': 0,
        'navn': 'Børek med Spinat',
        'ingredienser': [
            'Mel',
            'Egg',
            'Spinat',
            'Fetaost'
        ]
    },
    {
        'id': 1,
        'navn': 'Børek med Kylling',
        'ingredienser': [
            'Mel',
            'Egg',
            'Tomat',
            'Kylling',
        ]
    },
    {
        'id': 2,
        'navn': 'Schawarma',
        'ingredienser': [
            'Mel',
            'Tomat',
            'Mysteriesaus',
            'Salat',
            'Resirkulert plast',
            'Død',
        ]
    },
    {
        'id': 3,
        'navn': 'Innbakt pølse',
        'ingredienser': [
            'Deigete ting',
            'Pølse',
        ]
    },
]

@app.route('/products/', methods=['GET'])
def list_products():
    return products

#app.route('/products/<int:product_id>', method=['GET', 'PUT'])

#app.route('/products/<int:product_id>', method=['GET'])

if __name__ == "__main__":
    app.run(debug=True)
