class GetAllPro extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    render(product){
        return `<ps-one_product id="${product.id}" image="${product.image}"  name="${product.name}"  price="${product.price}"  type="${product.type}"></ps-one_product>`
    }

    connectedCallback() {
        fetch('https://api.jsonbin.io/v3/b/64341dbaebd26539d0a83299')
            .then(res=>res.json())
            .then(data=>{
                const products = data.record.product[1].games;
                const list = products.map(dt => this.render(dt)).join('');
                console.log("prod: ",products);
        })
    }

    disconnectedCallback() {
        
    }

    attributeChangedCallback(name, oldVal, newVal) {
        
    }

    adoptedCallback() {
        
    }

}

window.customElements.define('get-allpro', GetAllPro);