from flask import Flask, jsonify, request
from flask_cors import CORS
import json


app = Flask(__name__)
CORS(app)  # Habilitar CORS para todas las rutas

with open('destinations.json', 'r') as file:
    destinations = json.load(file)  # Cargar los archivos del json de destinos


# Endpoint para obtener todos los destinos


@app.route('/api/destinations', methods=['GET'])
def get_destinations():
    return jsonify(destinations)

# Endpoint para procesar el checkout


@app.route('/api/checkout', methods=['POST'])
def checkout():
    data = request.json
    # Aqui se procesa la informacion obtenida
    # Por ejemplo, mandar datos a la base de datos
    return jsonify({"message": "Checkout processed", "data": data})


if __name__ == '__main__':
    app.run(debug=True)
