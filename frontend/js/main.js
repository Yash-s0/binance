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
                console.log("Invalid symbol.")
                document.getElementById("data").innerHTML = "<h3>" + "Invalid Symbol" + "</h3>"
            }
            else {
                const price = response.data["price"]
                console.log(price)
                document.getElementById("data").innerHTML = "<h3>" + response.data["symbol"] + "</h3>"
                const node = document.createElement("div");
                node.className = "price"
                const textnode = document.createTextNode(price);
                node.appendChild(textnode);
                document.getElementById("data").appendChild(node);
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
        console.log(symbol)
        callapi(symbol);
    });
}










