from flask import Flask
from flask_restful import Api, request
from flask_cors import CORS
import requests

app = Flask(__name__)
api = Api(app)
CORS(app)



@app.get("/")
def sayhello():
    message=  "hey"
    name= "yash"
    return {message: name}

@app.post("/get-price")
def get_data():
    args = request.json
    symbol = args.get("symbol")
    symbol_cap = symbol.upper()
    
    url = "https://api.binance.com/api/v3/ticker/24hr?symbol={}".format(symbol_cap)
    url_api = requests.get(url)
    formatted_data = url_api.json()
    try:
        price = formatted_data["lastPrice"]
        highPrice = formatted_data["highPrice"]
        lowPrice = formatted_data["lowPrice"]
        return {
            "success": "True",
            "symbol": symbol_cap,
            "price": price,
            "highPrice": highPrice,
            "lowPrice": lowPrice
        }
    except:
        return {"success": "Flase", "message": "Invalid Symbol!!!"}


if __name__ == "__main__":
    app.run(debug=True)





