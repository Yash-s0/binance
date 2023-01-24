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
            }
            else {
                const price = response.data["price"]
                console.log(price)
            }

            // document.querySelector(".temp").innerText = "Price " + price;

            // document.getElementById("price").innerHTML = "Price" + price;
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










