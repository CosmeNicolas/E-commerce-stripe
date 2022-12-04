// import KEYS from "./assets/Keys.js"
import slider from "./assets/carrusel.js"
import menuHelado from "./assets/Menu_Helado.js"


const d = document

d.addEventListener("DOMContentLoaded", (e) =>{
  menuHelado(".logo", ".panel")

})


slider()

// const $helados = document.getElementById('helados')
// const $template = document.getElementById('helado-template')
// const $fragment = document.createDocumentFragment();
// const options = {headers:{Authorization: `Bearer ${KEYS.secret}`}}


// let products, prices;

// Promise.all([
//   fetch("https://api.stripe.com/v1/products",options),
//   fetch("https://api.stripe.com/v1/prices",options)
// ])
// .then(responses => Promise.all(responses.map(res => res.json())))
// .then(json => {
 
//    products = json[0].data;
//    prices = json[1].data;

//    prices.forEach(el => {
//      let productData = products.filter(product => product.id === el.product);
   
//     $template.querySelector(".helado").setAttribute("data-price", el.id);
//     $template.querySelector("img").src= productData[0].images[0];
//     $template.querySelector("img").alt= productData[0].name;
//     $template.querySelector("figcaption").innerHTML = `${productData[0].name} ${el.currency.toUpperCase()} $${el.unit_amount_decimal.slice(0,-2)}.00`;
    

//     let $clone = document.importNode($template, true);
//     $fragment.appendChild($clone)
//   })
  
//   $helados.appendChild($fragment)
// })
// .catch(error => {
//   let mensaje = error.statuText || "Ocurrió un error";
//   $helados.innerHTML = `Error: ${error.status}: ${mensaje}`
// })


// document.addEventListener("click", e => {
//   if (e.target.matches(".helados *")) {
//         let priceId = e.target.parentElement.getAttribute("data-price");

//         Stripe(KEYS.public).redictToCheckout({
//             lineItems: [{
//             price: priceId,
//             quantity: 1
//           }],
//             mode: "subscription",
//             successUrl: "hhttp://127.0.0.1:5500/Componentes/success.html",
//             cancelUrl:"http://127.0.0.1:5500/Componentes/cancel.html",
//         })
//         .then(res =>{
//           if(res.error){
//             $helados.insertAdjacentElement("afterend",res.error.mensaje)
//           }
//         })
//       }
//     })
    
    