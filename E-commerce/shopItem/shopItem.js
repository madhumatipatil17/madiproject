
let samsung = document.getElementById("samsung");
let oppo = document.getElementById("oppo");
let realme = document.getElementById("realme");


let basket = JSON.parse(sessionStorage.getItem("data")) || [];




let samsungProduct=()=>{
let card="";
     products.samsung.map((product) => {
                let { productName, price, image, categories, id } = product;
               
                card+=  `
                <div class=" cards pro swiper-slide box   " id=product-id-${id}>
                <img src='${image}' alt="" >
                
              <div class="des">
                    <span>${categories}</span>
                 <div> <h5  class="product-name">${productName}</h5></div>
                   <div class="star">
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                     </div>
                     <h4>$${price}</h4>
                 </div>
                 <span><i class="fa-solid fa-cart-arrow-down" onclick="increment(${id})" ></i></span>
             </div> `
            });
            samsung.innerHTML=card;
    }

    let oppoProducts=()=>{
      let card="";
           products.oppo.map((product) => {
                      let { productName, price, image, categories, id } = product;
                     
                      card+=  `
                      <div class="pro swiper-slide box " id=product-id-${id}>
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
                   </div> `
                  });
                  oppo.innerHTML=card;
          }

          let realmeProducts=()=>{
            let card="";
                 products.realme.map((product) => {
                            let { productName, price, image, categories, id } = product;
                           
                            card+=  `
                            <div class="pro" id=product-id-${id}>
                            <img src='${image}' alt="" >
                            
                          <div class="des">
                                <span>${categories}</span>
                             <div> <h5 >${productName}</h5></div>
                               <div class="star">
                                     <i class="fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                 </div>
                                 <h4>$${price}</h4>
                             </div>
                             <span><i class="fa-solid fa-cart-arrow-down" onclick="increment(${id})" ></i></span>
                         </div> `
                        });
                        oppo.innerHTML=card;
                }
    samsungProduct();
    oppoProducts();





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
         console.log(basket);
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



var swiper = new Swiper(".samsung-slider", {
  loop:true,
  spaceBetween: 100,
  zoom: true,
  autoplay: {
      delay: 10500,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});

var swiper = new Swiper(".oppo-slider", {
  loop:true,
  spaceBetween: 100,
  zoom: true,

  autoplay: {
      delay: 10500,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".oppoN",
    prevEl: ".oppoB",
  }

});



  function seacrhProducts(){
  let searchInput = document.getElementById("search-input").value;
  let products = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".pro");
  
  console.log(products)
  products.forEach((product, i) => {
    if (product.textContent.includes(searchInput)) {
      cards[i].style.display="";
    } else {
      cards[i].style.display='none';

    }
  });
}


