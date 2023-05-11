class PsOneProduct extends HTMLElement {
    constructor() {
        super();

        const image = this.getAttribute("image");
        const name = this.getAttribute("name");
        const price = this.getAttribute("price");
        //implementation
        this.innerHTML = `
        <article class="eachProd">
            <nav>
                <li><img src="${image}" alt=""></li>
                <li class="name">${name}</li>
                <p class="price">Үнэ: ${price}</p>
                <li class="oneline" id="one">
                    <button id="buybtn">BUY</button>
                    <button role="button" id="addcart">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                </li>
            </nav>
        </article> 
        `
    }

    connectedCallback() {
        this.children[0].children[0].children[3].children[1].addEventListener("click", () =>{
            const myCart = document.querySelector("shopping-cart");
            myCart.AddToCart(this);
        })
        this.children[0].children[0].children[3].children[0].addEventListener("click", ()=>{
            console.log("window location",window.location);
        })
    }

    disconnectedCallback() {
        //implementation
    }

    attributeChangedCallback(name, oldVal, newVal) {
        //implementation
    }

    adoptedCallback() {
        //implementation
    }

}

window.customElements.define('ps-one_product', PsOneProduct);