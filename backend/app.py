from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample data for tourist destinations
destinations = [
    {"id": 1, "name": "Destino 1"},
    {"id": 2, "name": "Destino 2"},
    # ... other destinations
]

# Endpoint to get tourist destinations


@app.route('/api/destinations', methods=['GET'])
def get_destinations():
    return jsonify(destinations)

# Endpoint to process checkout


@app.route('/api/checkout', methods=['POST'])
def checkout():
    data = request.json
    # Here you would process the checkout information
    # For example, save to the database
    return jsonify({"message": "Checkout processed", "data": data})


if __name__ == '__main__':
    app.run(debug=True)
