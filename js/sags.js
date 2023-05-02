class sags extends HTMLElement{
    constructor(){
        super();
        this.products = [];
        this.render()
        this.innerHTML = `  <div class = "sags">
                                1
                            </div>
                            <div>${this.products.length}</div>`
    }
    get productCount() {
        return this.products.length;
    }
    AddToCart(myProduct) {
        this.products.push(myProduct);
        this.#Render();
    }
    connectedCallBack(){

    }
}
window.customElements.define('sags', sags);