const prices = [120.5, 1200.99, 420.01, 12585.55];

let chaise = 120.5;
let table = 1200.99;
let vase = 420.01;
let canape = 12585.55;

prices.forEach(function (prix) {
  function calculePourcentage(prix, nbr) {
    return Math.round((prix - (prix * nbr) / 100) * 100) / 100;
  }
  let result = calculePourcentage(prix, 25).toString();
  console.log(`le prix est de ${result.replace(".", ",")} €`);
});
