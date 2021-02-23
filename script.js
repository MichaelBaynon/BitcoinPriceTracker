// var checkBTC = window.setInterval(function () {
//   fetch("https://api.coinbase.com/v2/prices/spot?currency=USD")
//     .then((response) => response.json())
//     .then((data) => console.log(data.data.amount));
// }, 1500);

// var checkBTC = window.setInterval(function () {
//   fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data.bpi.USD.rate));
// }, 1500);

function checkBTC() {
  var BTCprice = document.querySelector("#BTCprice");

  setInterval(function () {
    fetch("https://api.coinbase.com/v2/prices/spot?currency=USD")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        BTCprice.textContent = data.data.amount;
      })
      .catch(function (error) {
        console.log(error);
      });
  }, 2000);
  setInterval(function () {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        BTCprice.textContent = data.bpi.USD.rate;
      })
      .catch(function (error) {
        console.log(error);
      });
  }, 1300);
}

document.addEventListener("DOMContentLoaded", function () {
  checkBTC();
});
