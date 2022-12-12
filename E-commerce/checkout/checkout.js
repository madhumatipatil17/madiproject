

let CName = false,
    CNumber = false,
    expirayDate = false,
    cvvCard = false;

let submitBtn = document.getElementById("submitBtn");

let userName = sessionStorage.getItem("email");
console.log(userName)

function validateCardName() {
    let nameOnCard = document.getElementById("payCardName").value;
    let nameCardError = document.getElementById("nameCardError");

    var regName = /^([a-zA-Z\s]{3,15})+$/;

    if (nameOnCard == '') {
        nameCardError.innerHTML = ("Enter a name")

    } else if (!nameOnCard.match(regName)) {
        nameCardError.innerHTML = ("Enter currect name");

    } else if (nameOnCard.match(regName)) {
        nameCardError.innerHTML = ("");
        CName = true;
    }
    validateCode()

}


function validateCardNUmber() {
    let cardNumber = document.getElementById("payCardNumber").value;
    let payCardNumberError = document.getElementById("payCardNumberError");

    var regCNumber = /^([0-9]{16})$/;

    if (cardNumber == '') {
        payCardNumberError.innerHTML = ("Enter a Card number")
    } else if (!cardNumber.match(regCNumber)) {
        payCardNumberError.innerHTML = ("Enter currect number 16 digits");
    } else if (cardNumber.match(regCNumber)) {
        payCardNumberError.innerHTML = ("");
        CNumber = true;
    }



    validateCode()
}


function validateExpirayCard() {
    let CardExpiray = document.getElementById("payExpiray").value;
    let cardExpiryError = document.getElementById("cardExpiryError");
    var regCExpiray = /(0[1-9]|1[0-2])\/?(([0-9]{2})$)+/g;

    if (CardExpiray == '') {
        cardExpiryError.innerHTML = ("Enter a Card expiray number")
    } else if (!CardExpiray.match(regCExpiray)) {
        cardExpiryError.innerHTML = ("Enter currect expiray number");
    } else if (CardExpiray.match(regCExpiray)) {
        cardExpiryError.innerHTML = ("");
        expirayDate = true;
    }
    validateCode()

}

function validateCardCvv() {
    let cardCvv = document.getElementById("payCvv").value;

    let cardCvvError = document.getElementById("cardCvvError");
    var regCvv = /^[0-9]{3}$/;

    if (cardCvv == '') {
        cardCvvError.innerHTML = ("Enter a Card cvv")
    } else if (!cardCvv.match(regCvv)) {
        cardCvvError.innerHTML = ("Enter currect cvv");
    } else if (cardCvv.match(regCvv)) {
        cardCvvError.innerHTML = ("");
        cvvCard = true;
    }
    validateCode()

}

// address validation;

let address = false,
    city = false,
    state = false,
    zipCode = false;


function validateAddress() {
    let userAddress = document.getElementById("address").value,
        userAddressError = document.getElementById("addressError"),
        regAdress = /^([a-zA-Z\s\d])+$/;

    if (userAddress == '') {
        userAddressError.innerHTML = ("Enter a address")
    } else if (!userAddress.match(regAdress)) {
        userAddressError.innerHTML = ("Enter currect address");
    } else if (userAddress.match(regAdress)) {
        userAddressError.innerHTML = ("");
        address = true;
    }
    validateCode()


}

function validateCity() {
    let usercity = document.getElementById("city").value,
        userCityError = document.getElementById("cityError"),
        regCity = /^([a-zA-Z\d])+$/;

    if (usercity == '') {
        userCityError.innerHTML = ("Enter a city")

    } else if (!usercity.match(regCity)) {
        userCityError.innerHTML = ("Enter currect city");
    } else if (usercity.match(regCity)) {
        userCityError.innerHTML = ("");
        city = true;
    }
    validateCode()


}

function validateState() {
    let userState = document.getElementById("state").value,
        userStateError = document.getElementById("stateError"),
        regState = /^([a-zA-Z\d])+$/;

    if (userState == '') {
        userStateError.innerHTML = ("Enter a state")

    } else if (!userState.match(regState)) {
        userStateError.innerHTML = ("Enter valid state name");
    } else if (userState.match(regState)) {
        userStateError.innerHTML = ("");
        state = true;
    }
    validateCode()


}


function validateCode() {
    let userZipCode = document.getElementById("zipCode").value,
        userZipCodeError = document.getElementById("zipCodeError"),
        regZipCode = /^([\d]{6})+$/;

    if (userZipCode == '') {
        userZipCodeError.innerHTML = ("Enter a code")


    } else if (!userZipCode.match(regZipCode)) {
        userZipCodeError.innerHTML = ("Enter valid code");

    } else if (userZipCode.match(regZipCode)) {
        userZipCodeError.innerHTML = ("");
        zipCode = true;
        submitBtn.disabled = false;
    }
    if (CName && CNumber && expirayDate && cvvCard && address && city && state && zipCode) {
        submitBtn.disabled = false;
    }
}











let orderProducts = document.getElementById("order-products");
let totalPrice = document.getElementById("totalPrice");
let basket = JSON.parse(sessionStorage.getItem("data")) || [];


if (!JSON.parse(sessionStorage.getItem("list"))) {
    let list = [];
    sessionStorage.setItem("list", JSON.stringify(list));
}

let lists = JSON.parse(sessionStorage.getItem("list"))
let orderId = lists.length;
orderId += Math.floor(Math.random() * 221222);

let myOrder = [];

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let placedDate = `${day}-${month}-${year}`;



let generateCartItems = () => {
    if (basket.length !== 0) {
        return (orderProducts.innerHTML = basket.map((x) => {

            var { id, item } = x;
            let search = products.product1.find((y) => y.id === id) || [] &&
                products.samsung.find((y) => y.id === id) || [];
            let { image, productName, price } = search;
            search['item'] = item
            myOrder.push(search);




            console.log(myOrder)
            return `
        <div class="productsList">
        <div class="product-image">
            <img src="${image}" alt="" width="20%">
        </div>
        <div class="product-details">
            <h3>${productName}</h3> <br>
            <span>$ ${price}</span>
            <span>Items: ${item}</span>
            <div>
              <h4>Price:<span> $ ${item * price}</span></h4>
              </div>
        </div>
    </div>
    
    `
        })

        )
    }

}

generateCartItems();


let total = sessionStorage.getItem("totalAmount");

let totalAmount = () => {

    totalPrice.innerHTML = ` 
          <div  class="productTotal" >
          <div><h5>Total:<span >Tax include</span></h5></div>
          <div><span> $${total}</span></div>
          </div>
       `
}
totalAmount();





let checkout = () => {

    let address = document.getElementById("address").value,
        city = document.getElementById("city").value,
        state = document.getElementById("state").value,
        zipCode = document.getElementById("zipCode").value;

    let listData = { orderId: orderId, address: address, city: city, state: state, zipCode: zipCode, placedDate: placedDate, myOrder: myOrder, total: total }


    lists = []
    lists.push(listData);


    // let obj1=JSON.parse(sessionStorage.getItem("orders"))
    sessionStorage.setItem("orders", JSON.stringify(lists));

    sessionStorage.setItem("list", JSON.stringify(lists));
    sessionStorage.removeItem("data");

    newDoc()
}

function newDoc() {
    window.location.assign("../myorders/myOrders.html")
    confirm("Do you want to place order?")
}
