let label = document.getElementById("label");
let totalCartValue = document.getElementById("total-cart-value");
let ShoppingCart = document.getElementById("shopping-cart");
let basket = JSON.parse(sessionStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();


let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = products.product1.find((y) => y.id === id) || [] && products.samsung.find((y) => y.id === id) || [];

        let { image, productName, price } = search;
        return `
    

      <div class="box">
      <img src="${image}" alt="">

      <div class="content">
          <h4>${productName}</h4>
          <div style="display:flex;justify-content:space-between">
          <h5>Price:$ ${price}</h5>
          <h3>$ ${item * price}</h3>
          </div>


          <div class="unit">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${item}</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
          <p class="btn-area" onclick="removeItem(${id})">
              <i class="fa fa-trash"></i>
              <span class="btn2" >Remove</span>
          </p>
      </div>
</div>
   `;}).join(""));
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="../index.html">
   <button class="home-btn"><i class="fa-solid fa-house"></i> Continue Shopping</button></a>
    </a>
    `;
  }
};

generateCartItems();

let increment = (id) => {

  let search = basket.find((product) => product.id === id);

  if (search === undefined) {
    basket.push({
      id: id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generateCartItems();
  update(id);
  sessionStorage.setItem("data", JSON.stringify(basket));
};


let decrement = (id) => {
  let search = basket.find((x) => x.id === id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(id);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  sessionStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeItem = (id) => {
  basket = basket.filter((x) => x.id !== id);
  generateCartItems();
  TotalAmount();
  calculation();

  sessionStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = () => {
  basket = [];
  generateCartItems();
  calculation();
  totalCartValue.innerHTML = "";
  sessionStorage.setItem("data", JSON.stringify(basket));
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket.map((x) => {
      let { item, id } = x;
      let search = products.product1.find((y) => y.id === id) || [] && products.samsung.find((y) => y.id === id) || [];

      let subtotal = item * search.price;
      return subtotal
}).reduce((x, y) => x + y, 0);
    let total = amount + 10;

    sessionStorage.setItem("totalAmount", total);

    totalCartValue.innerHTML =
      `
      <div class="right-bar">
    <p><span>Subtotal</span> <span>$${amount}</span></p>
    <hr>
    <p><span>Tax</span><span>$30</span></p>
    <hr>
   
    <p><span>Total</span><span>$${total}</span></p>
    <hr>
   <div class="cart-shop">
   <span class="check-out">
   
 <a   id="shop" data-bs-toggle="modal"> Check Out </a></span>
    <span onclick="clearCart()" class="removeAll">Clear Cart</span>
    </div>

 
    </div>`;
  }
};

TotalAmount();

let userName = sessionStorage.getItem("email");
let shop = document.getElementById('shop');

if (userName == null) {
  shop.setAttribute("data-bs-target", "#loginRegister")
} else {
  shop.removeAttribute("data-bs-target", "#loginRegister")
  shop.href = "../checkout/checkout.html"
}
