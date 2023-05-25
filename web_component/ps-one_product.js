class PsOneProduct extends HTMLElement {
    constructor() {
        super();
        const image = this.getAttribute("image");
        const name = this.getAttribute("name");
        const price = this.getAttribute("price");
        this.id = this.getAttribute("id");
        this.type = this.getAttribute("type");
        //implementation
        this.innerHTML = `
        <article class="eachProd">
            <nav>
                <li><img src="${image}" alt="Product image"></li>
                <li class="name">${name}</li>
                <p class="price">Үнэ: ${price}$</p>
                <li class="oneline" id="one">
                    <button id="buybtn" type="button" area-label="buybutton">BUY</button>
                    <button role="button" id="addcart" type="button">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                </li>
            </nav>
        </article> 
        `
    }

    connectedCallback() {
        const url = 'http://127.0.0.1:5501/pages/product.html?';
        const searchParams = new URLSearchParams(this.id);
        searchParams.append('id',JSON.stringify(this.id));
        const searchParams2 = new URLSearchParams(this.type);
        searchParams2.append('type',JSON.stringify(this.type));
        this.queryString = searchParams.toString();
        this.queryString2 = searchParams2.toString();

        const thisElement = new CustomEvent("productAdd",{
            bubbles:true,
            composed:true,
            detail:{
                product:this
            }
        })
        this.children[0].children[0].children[3].children[1].addEventListener("click", (e) => {
            const myCart = document.querySelector("shopping-cart");
            myCart.AddToCart(this);
        });
        
        this.children[0].children[0].children[3].children[1].dispatchEvent(thisElement);
        
        this.children[0].children[0].children[3].children[0].addEventListener("click", () => {
            window.location.href = url + this.queryString+this.queryString2;
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

