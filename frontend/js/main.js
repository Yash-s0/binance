const callapi = (symbol) => {
    axios({
        method: 'post',
        url: "http://127.0.0.1:5000/get-price",
        data: {
            "symbol": symbol,
        }
    })
        .then(function (response) {
            price = response.data["price"]
            if (price == undefined) {
                document.getElementById("data").innerHTML = "<h3>" + "Invalid Symbol ! ! !" + "</h3>"
            }
            else {
                const price = response.data["price"]
                const highPrice = response.data["highPrice"]
                const lowPrice = response.data["lowPrice"]

                // Push Symbol to html
                document.getElementById("data").innerHTML = "<h3>" + response.data["symbol"] + "</h3>"

                // price tag element
                const priceTag = document.createElement("div");
                priceTag.className = "price"
                const priceTagNode = document.createTextNode("Price  : ");
                priceTag.appendChild(priceTagNode);
                document.getElementById("data").appendChild(priceTag);

                // price value element
                const priceValue = document.createElement("div");
                priceValue.className = "priceValue"
                const priceValueNode = document.createTextNode(price);
                priceValue.appendChild(priceValueNode);
                document.getElementById("data").appendChild(priceValue);

                // High price tag element
                const highPriceTag = document.createElement("div");
                highPriceTag.className = "highPrice"
                const highPriceTagNode = document.createTextNode("High Price  :  ");
                highPriceTag.appendChild(highPriceTagNode);
                document.getElementById("data").appendChild(highPriceTag);

                // high price value element
                const highPriceValue = document.createElement("div");
                highPriceValue.className = "highValue"
                const highPriceValueNode = document.createTextNode(highPrice);
                highPriceValue.appendChild(highPriceValueNode);
                document.getElementById("data").appendChild(highPriceValue);

                // low price tag element
                const lowPriceTag = document.createElement("div");
                lowPriceTag.className = "lowPrice"
                const lowPriceTagNode = document.createTextNode("Low Price  :  ");
                lowPriceTag.appendChild(lowPriceTagNode);
                document.getElementById("data").appendChild(lowPriceTag);

                // low price value element
                const lowPriceValue = document.createElement("div");
                lowPriceValue.className = "lowValue"
                const lowPriceValueNode = document.createTextNode(lowPrice);
                lowPriceValue.appendChild(lowPriceValueNode);
                document.getElementById("data").appendChild(lowPriceValue);
            }

        })
        .catch(function (error) {
            console.log(error);
        });
}

function runFunction() {
    const form = document.querySelector('form');
    const formEvent = form.addEventListener('submit', event => {
        event.preventDefault();
        const symbol = document.querySelector('#symbol').value;
        callapi(symbol);
    });
}










