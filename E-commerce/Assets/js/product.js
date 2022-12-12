
let product = document.getElementById("product22");
let basket = JSON.parse(sessionStorage.getItem("data")) || [];




let genrateProducts=()=>{
let card="";
     products.product1.map((product) => {
                let { productName, price, image, categories, id } = product;
                card+=  `
      <div class="pro" id=product-id-${id}>
                  <img src='${image}' alt="" >
                  
                <div class="des">
                      <span>${categories}</span>
                   <div> <h5 class="product-name" >${productName}</h5></div>
                     <div class="star">
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                       </div>
                       <h4>$${price}</h4>
                   </div>
                   <span><i class="fa-solid fa-cart-arrow-down" onclick="increment(${id})" ></i></span>
               </div>  `
            });
            product.innerHTML=card;
    }
    genrateProducts();


let increment = (id) => {
        let search = basket.find((product) => product.id === id);
        if (search === undefined) {
          basket.push({
            id:id,
            item: 1,
          });
        } else {
          search.item += 1;
        }
  update(id);
  sessionStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    console.log(search.item);
    calculation();
  };

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
calculation();


function seacrhProducts(){
  let searchInput = document.getElementById("search-input").value;
  let products = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".pro");
  
  products.forEach((product, i) => {
    if (product.textContent.includes(searchInput)) {
      cards[i].style.display="";
    } else {
      cards[i].style.display='none';

    }
  });
}