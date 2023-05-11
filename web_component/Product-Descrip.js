class ProductDescrip extends HTMLElement {
    constructor() {
        super();
        const mykeyValues = window.location.search;
        const urlParams = new URLSearchParams(mykeyValues);
        this.param = urlParams.get('id').toString();
        //
    }
    #Render(product){
        this.innerHTML = `<article>
                            <nav class="product">
                                <ul class="product"><img src="${product.image}" alt=""></ul>
                                <ul class="information">
                                    <li class="Pname"><h3>${product.name}</h3></li>
                                    <li class="price">${product.price}</li>
                                    <li>Өнгө</li>
                                    <li class="Color"><input type="radio" name="color" id="button1" class="color" checked><input type="radio" name="color" id="button2" class="color"><input type="radio" name="color" id="button3" class="color"><input type="radio" name="color" id="button4" class="color"></li>
                                    <li class="oneline" id="one">
                                        <button id="buybtn">BUY</button>
                                        <button id="addcart"><i class="fa-solid fa-cart-plus"></i></button>
                                    </li>
                                    <li>
                                        <button id="more">ДЭЛГЭРЭНГҮЙ</button>
                                    </li>
                                </ul>
                            </nav>
                        </article>`
        }
    connectedCallback() {
        fetch('https://api.jsonbin.io/v3/b/64341dbaebd26539d0a83299')
            .then(res=>res.json())
            .then(data=>{
                const str = this.param;
                const regexp = /"([^"]*)"/;
                const match = str.match(regexp);
                const result = match[1];

                const products = data.record.product[0].consoles
                products.map(product=>{
                    if(product.id == result){
                        console.log(product)
                        this.#Render(product);
                    }
                })
            })
    }

    disconnectedCallback() {
        //
    }

    attributeChangedCallback(name, oldVal, newVal) {
        //
    }

    adoptedCallback() {
        //
    }

}

window.customElements.define('product-descrip', ProductDescrip);