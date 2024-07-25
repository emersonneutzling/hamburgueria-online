const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");
const totalItems = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const closeModalBtn =document.getElementById("close-moldal-btn");
const cartCounter = document.getElementById("cart-count");
const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn");

//Abrir o Modal do carrinho
cartBtn.addEventListener("click", function(){
    cartModal.style.display = "flex"
});

//Fechar o Modal quando clicar fora
cartModal.addEventListener("click", function(event){
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
});

closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
});

menu.addEventListener("click", function(event){
    //console.log(event.target)
    let parentButton = event.target.closest(".add-to-cart-btn")
    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        
        //Adicionar no carrinho
    }
});
