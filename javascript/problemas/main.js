// ========================== Chapter 1 - problem A ==========================

function showIcecream (name, money) {
    if (money >= 2.9) {
        alert(`${name} puede comprarse un pote de 1/4 kg o un potecito de helado con confites.`);
        if (name == "Cofla") {
            alert(`Y le sobran ${money - 2.9}`)
        }
    } else if (money >= 1.8) {
        alert(`${name} puede comprarse un bombon helado marca helardo.`);
    } else if (money >= 1.7) {
        alert(`${name} puede comprarse un bombon helado marca heladovich.`);
    } else if (money >= 1.6) {
        alert(`${name} puede comprarse un bombon helado marca heladix.`);
    } else if (money >= 1) {
        alert(`${name} puede comprarse un palito de helado de crema.`);
    } else if (money >= 0.6) {
        alert(`${name} puede comprarse un palito de helado de agua.`);
    } else {
        alert(`A ${name} no le alcanza para ningun helado.`);
    }
}

let robertoMoney = parseFloat(prompt("Ingrese el dinero de Roberto:"));
let pedroMoney = parseFloat(prompt("Ingrese el dinero de Pedro:"));
let coflaMoney = parseFloat(prompt("Ingrese el dinero de Cofla:"));


for (let i = 0; i < 3; i++) {
    let names = ["Roberto", "Pedro", "Cofla"];
    let moneys = [robertoMoney, pedroMoney, coflaMoney];
    showIcecream(names[i], moneys[i]);
    document.write(`${names[i]} - ${moneys[i]}`)
} 

// ===========================================================================

// ========================== Chapter 1 - problem B ==========================

// ===========================================================================
