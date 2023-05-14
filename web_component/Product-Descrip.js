class ProductDescrip extends HTMLElement {
    constructor() {
        super();
        const mykeyValues = window.location.search;
        const urlParams = new URLSearchParams(mykeyValues);
        this.id = urlParams.get('id').toString();
        this.type = urlParams.get('type').toString();
        //
    }
    #Render(product){
        this.innerHTML = `<article>
                            <nav class="product">
                                <ul class="product"><img src="${product.image}" alt=""></ul>
                                <ul class="information">
                                    <li class="Pname"><h3>${product.name}</h3></li>
                                    <li class="price">${product.price}</li>
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
    similarRender(prod){
        return `<ps-one_product image="${prod.image}" name="${prod.name}" price="${prod.price}" id="${prod.id}" type="${prod.type}"></ps-one_product>`
    }
    connectedCallback() {
        fetch('https://api.jsonbin.io/v3/b/64341dbaebd26539d0a83299')
            .then(res=>res.json())
            .then(data=>{
                const str = this.id;
                const str2 = this.type;
                const regexp = /"([^"]*)"/;
                const match = str.match(regexp);
                const match2 = str2.match(regexp);
                const resultId = match[1];
                const resultType = match2[1];
                console.log("type: ",resultId);
                console.log("type: ",resultType);
                let products;
                if(resultType == 'consoles'){
                    products = data.record.product[0][resultType];
                }
                else if(resultType == 'accessories'){
                    products = data.record.product[2][resultType];
                }
                else if(resultType == 'games'){
                    products = data.record.product[1][resultType];
                } 
                products.map(product=>{
                    if(product.id == resultId){
                        console.log(product)
                        this.#Render(product);
                    }
                })
                const similarPro = products.slice(0, 3).map(dt => this.similarRender(dt)).join('');
                document.getElementById("likely").innerHTML = similarPro;
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