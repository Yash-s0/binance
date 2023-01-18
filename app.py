from flask import Flask
from flask_restful import Api, request
import requests

app = Flask(__name__)
api = Api(app)

@app.get("/")
def sayhello():
    message=  "hey"
    name= "yash"
    return {message: name}

@app.get("/get-price")
def get_data():
    # API CALL
    args = request.json
    symbol = args.get("symbol")
    print(symbol)
    symbol_cap = symbol.upper()
    
    print(symbol_cap)

    url = "https://api.binance.com/api/v3/ticker/price?symbol={}".format(symbol_cap)
    print(url)
    url_api = requests.get(url)
    # print(url_api)
    formatted_data = url_api.json()
    # print(formatted_data)
    try:
        price = formatted_data["price"]
        # print(price)
        return {
            "success": "True",
            "symbol": symbol_cap,
            "price": price
        }
    except:
        return {"success": "Flase", "message": "Invalid Symbol!!!"}


if __name__ == "__main__":
    app.run(debug=True)