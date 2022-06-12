let mainCourse;
let drink;
let dessert;
let total = 0;
let option1;
let option2;
let option3;
let price1;
let price2;
let price3;

function selectMainCourse(element) {
    mainCourse = element.innerHTML;
    let clicked = document.querySelector(".selected.main");
    if (clicked !== null) {
        clicked.classList.remove("selected");
    }

    element.classList.toggle("selected");

    unlockOrder();

    option1 = document.querySelector(".main.selected h4").innerHTML;
    price1 = document.querySelector(".main.selected span").innerHTML;
    total += Number(price1.replace(',' , '.'));
}

function selectDrink(element) {
    drink = element.innerHTML;
    let clicked = document.querySelector(".selected.drink");
    if (clicked !== null) {
        clicked.classList.remove("selected");
    }

    element.classList.add("selected");

    unlockOrder();

    option2 = document.querySelector(".drink.selected h4").innerHTML;
    price2 = document.querySelector(".drink.selected span").innerHTML;
    total += Number(price2.replace(',' , '.'));
}

function selectDessert(element) {
    dessert = element.innerHTML;
    let clicked = document.querySelector(".selected.dessert");
    if (clicked !== null) {
        clicked.classList.remove("selected");
    }

    element.classList.toggle("selected");

    unlockOrder();

    option3 = document.querySelector(".dessert.selected h4").innerHTML;
    price3 = document.querySelector(".dessert.selected span").innerHTML;
    total += Number(price3.replace(',' , '.'));
}

function unlockOrder() {
    if (mainCourse && drink && dessert) {
        const button = document.querySelector(".order");
        button.classList.add("close-order");
        button.innerHTML = "Fechar pedido";
    }
}

function confirm() {
    document.querySelector(".confirmation-box").classList.remove("hide");
    document.querySelector(".cover").classList.remove("hide");

    document.querySelector(".confirmation-box .main h3").innerHTML = option1;
    document.querySelector(".confirmation-box .main .price").innerHTML = price1;

    document.querySelector(".confirmation-box .drink h3").innerHTML = option2;
    document.querySelector(".confirmation-box .drink .price").innerHTML = price2;

    document.querySelector(".confirmation-box .dessert h3").innerHTML = option3;
    document.querySelector(".confirmation-box .dessert .price").innerHTML = price3;

    total = total.toFixed(2).replace('.' , ',');
    document.querySelector(".confirmation-box .total").innerHTML = "R$" + total;
}

function sendToWA() {
    let nome = prompt("Insira seu nome:");
    let endereco = prompt("Insira seu endereço:")
    let msg =
    ` 
        Olá, gostaria de fazer o pedido: 
        - Prato: ${option1} 
        - Bebida: ${option2}
        - Sobremesa: ${option3}
        Total: R$ ${total}

        Nome: ${nome};
        Endereço: ${endereco};
    `;
    let text="https://wa.me/5521987691897?text=" + encodeURIComponent(msg);
    console.log(text);
}

function cancelOrder() {
    document.querySelector(".confirmation-box").classList.add("hide");
    document.querySelector(".cover").classList.add("hide");
}


