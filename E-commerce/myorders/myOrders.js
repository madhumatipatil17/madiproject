
$(document).ready(function () {


    let list = JSON.parse(sessionStorage.getItem("list"));

    var dataSet = [];

    list.map((x) => {

        let { orderId, placedDate,address,city,state,zipCode, myOrder: [ {item}] ,total} = x


        let data = [`<a  onclick="orderedProduct(${orderId})"  data-bs-toggle="modal" class="orderID" data-bs-target="#orderProducts" data-bs-whatever="@mdo" >${orderId}</a>`, placedDate, `${address},${city},${state},${zipCode}` , `$${total}`,`<button type='submit' class='btn btn-danger' onclick="cancelOrder(${orderId})">Cancel</button>`]
        dataSet.push(data);


    });

    $(document).ready(function () {
        $('#table').DataTable({
            data: dataSet,
            columns: [
                { title: 'Order Id' },
                { title: 'Placed on' },
                { title: 'Delivery Address ' },
                { title: 'Total' },
                { title: 'Action' }
            ]
      
        });
    });
});

function cancelOrder(id) {
    let list = JSON.parse(sessionStorage.getItem("list"));

    let search = list.filter((x) => x.orderId !== id);

    sessionStorage.setItem("list", JSON.stringify(search))

    var can = confirm("Do you want to cancel the order!");
    if (can == true){
      window.location.reload();
    }


}



function orderedProduct(id){
    let list = JSON.parse(sessionStorage.getItem("list"));
let orderDetails=document.getElementById("orderDetails")
let card=''
    list.map((x)=>{
      
            let { orderId, placedDate,myOrder} = x

            console.log(x)
              myOrder.map((value)=>{
    
         let {productName,price,image,item}=value
    
               


        card+=`
        <div class="wrapper">
       <div class="container-fluid my-5 d-sm-flex justify-content-center">
         <div class="card px-2" style="width:100%;">
              <div class="card-header bg-white" >
                  <div class="row">
                    <div class="col   d-flex justify-content-between" >
                        <p class="text-muted"> Order ID  <span class="font-weight-bold text-dark">${orderId}</span></p> 
                        <div class=" my-auto">
                   
                        <p class="text-muted"> Place On <span class="font-weight-bold text-dark">${placedDate}</span> </p></div>
                              
                        
                        </div>
                  </div>
                </div>
                <div class="card-body">
                    <div>
                    <div class="d-flex  justify-content-between">
                        <div class="media-body ">
                            <h5 class="bold">${productName}</h5>
                            <p class="text-muted">Items:${item}</p>
                            <h4 class="mt-3 mb-4 bold"> <span class="mt-5">&#x20B9;</span>${price*item}</h4>
                        </div>
                        <div>
                        <img class="align-self-center img-fluid" src="${image}" width="180 " height="180">
                    </div>
                    </div>
               
   
                </div>
                   
                </div>
               
                 <div class="card-footer  bg-white px-sm-3 pt-sm-4 px-0">
                    <div class="row  ">
                    </div>
                </div>
            </div>
        </div>
    </div> `
})
        })

    

    orderDetails.innerHTML=card
}