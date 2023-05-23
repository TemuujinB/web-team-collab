class ComponentAdvertising extends HTMLElement {
    constructor() {
        super();
        
    }
    #Render(Product){
        this.innerHTML = ``
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
        console.log(this.children[0]);
    }

    disconnectedCallback() {
        
    }

    attributeChangedCallback(name, oldVal, newVal) {
        
    }

    adoptedCallback() {
        
    }

}

window.customElements.define('component-advertising', ComponentAdvertising);