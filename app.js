// var removecardbutton = document.getElementsByClassName("btn-warning")
// for (var i = 0; i < removecardbutton.length; i++) {
//     var button = removecardbutton[i]
//     button.addEventListener("click", function (event) {
//         var buttonclicked = event.target
//         buttonclicked.parentElement.parentElement.remove();
//         updatecartotal()
//     })
// }

// var addToCartbutton = document.getElementsByClassName("btn-danger")
// for (let index = 0; index < addToCartbutton.length; index++) {
//     var button = addToCartbutton[i];
//     button.addEventListener("click", addTocartClicked)

// }
// function addTocartClicked(event) {

//     var button = event.target
//     var shopitem = button.parentElement.parentElement;
//     var title = shopitem.getElementsByClassName("card-title")[0].innerText
//     var price = shopitem.getElementsByClassName("card-text")[0].innerText
//     var img = shopitem.getElementsByClassName("card-img-top")[0].src
//     console.log(price, title, img)
//     addItemtocart(price, title, img)
// }

// function addItemtocart(price, title, img) {
//     var cartROW = document.createElement("div")
//     cartROW.classList.add("cart-row")
//     var cartItems = document.getElementsByClassName("card-items")[0]
//     var cartrowcontent = `
//     <div class="cart-item cart-column ">
//     <img class="cart-item-image" src="images/bag1.jpeg" height="100" width="100">
//     </div>
//     <span class="cart-item-title">bag</span>
//     <span class="cart-price cart-column">Rs.1800</span>
//     <div class="cart-quantity cart-column">
//     <input type="number" class="cart-quantity-input" value="1">
//     <button class="btn-warning" type="button">Remove</button>
//     </div>
//     `
//     cartROW.innerHTML = cartrowcontent;
//     cartItems.appendChild(cartROW)
// }

// function updatecartotal() {
//     var cartitemcontainer = document.getElementsByClassName("card-items")[0]
//     var cartrows = cartitemcontainer.getElementsByClassName("cart-row")
//     for (var i = 0; i < cartrows.length; i++) {
//         var cartrow = cartrows[i]
//         var priceElement = cartrow.getElementsByClassName("cart-price")[0]
//         var quantityElement = cartrow.getElementsByClassName('cart-quantity-input')
//         [0]
//         var price = parseFloat( priceElement.innerText.replace('Rs.',''));
//         console.log(price)
//     }
// }
function animation() {
    
    // // e.setAttribute("data","top")
    // var a = document.getElementById("btn")
    // a.setAttribute("data-aos","flade-top")
    // e.setAttribute("data-aos","fade-up-left")
    alert("Your Order Has booked we will contact you soon!")
    
}

function swl(){
  var preloader = document.getElementById("loading")
  preloader.style.display="none";
}




