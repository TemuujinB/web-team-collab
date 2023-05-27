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
                                <ul class="product"><img src="${product.image}" alt="Product image"></ul>
                                <ul class="information">
                                    <li class="Pname"><h3>${product.name}</h3></li>
                                    <li class="price">Үнэ: ${product.price}</li>
                                    <li class="description">${product.detail}</li>
                                    <li class="oneline" id="one">
                                        <button id="buybtn" class="button1">BUY</button>
                                        <button id="addcart"><i class="fa-solid fa-cart-plus"></i></button>
                                    </li>
                                </ul>
                            </nav>
                        </article>`
        }
    similarRender(prod){
        return `<ps-one_product image="${prod.image}" name="${prod.name}" price="${prod.price}" id="${prod.id}" type="${prod.type}"></ps-one_product>`
    }
    connectedCallback() {
        // fetch('https://api.jsonbin.io/v3/b/64341dbaebd26539d0a83299')
        //     .then(res=>res.json())
        //     .then(data=>{
        //         const str = this.id;
        //         const str2 = this.type;
        //         const regexp = /"([^"]*)"/;
        //         const match = str.match(regexp);
        //         const match2 = str2.match(regexp);
        //         const resultId = match[1];
        //         const resultType = match2[1];
        //         console.log("type: ",resultId);
        //         console.log("type: ",resultType);
        //         let products;
        //         if(resultType == 'consoles'){
        //             products = data.record.product[0][resultType];
        //         }
        //         else if(resultType == 'accessories'){
        //             products = data.record.product[2][resultType];
        //         }
        //         else if(resultType == 'games'){
        //             products = data.record.product[1][resultType];
        //         } 
        //         products.map(product=>{
        //             if(product.id == resultId){
        //                 console.log(product)
        //                 this.#Render(product);
        //             }
        //         })
        //         const similarPro = products.slice(0, 3).map(dt => this.similarRender(dt)).join('');
        //         document.getElementById("likely").innerHTML = similarPro;
        //     })
        // console.log(this.children[0]);
        fetch('http://localhost:4000/api')
            .then(response => response.json())
            .then(data => {
                const str = this.id;
                const str2 = this.type;
                const regexp = /"([^"]*)"/;
                const match = str.match(regexp);
                const match2 = str2.match(regexp);
                const resultId = match[1];
                const resultType = match2[1];
                console.log("id: ",resultId);
                console.log("type: ",resultType);
                console.log(data);
                const similarList = [];
                data.map(dt=>{
                    if(dt.id == resultId){
                        this.#Render(dt)
                    }
                    if(dt.type==resultType){
                        similarList.push(dt);
                    }
                })
                const result = similarList.map(dt => this.similarRender(dt)).slice(0,3).join("");
                document.getElementById("likely").innerHTML = result;
            })
            .catch(error => {
                // Handle any errors that occur during the request
                console.error('Error:', error);
            });
    }

    disconnectedCallback() {
        //
    }

    attributeChangedCallback(name, oldVal, newVal) {
        // console.log(document.querySelector("nav"));
        
        switch(newVal){
            case "simple":
                // document.querySelector("nav").style.backgroundColor = "var(--similarPro_back)"; 
                break;
            case "light":
            //   document.querySelector("nav").style.backgroundColor = "var(--similarPro_back)";
              document.querySelector("nav").style.boxShadow = "0px 0px 20px #bc13fe";
                break;
        }
    }
    static get observedAttributes() {
        return ["color","theme"]
    }

    adoptedCallback() {
        //
    }

}

window.customElements.define('product-descrip', ProductDescrip);