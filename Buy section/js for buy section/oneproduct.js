class OneProduct extends HTMLElement {
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
            <div class="border">
                <img src="/img/accessory-1.webp" alt="" style="width: 150px; height: 150px; float: left;" class="mr-4">
                <h2>Playstation 5</h2>
                <p>Багтаамж : 825GB</p>
                <p>Тоо ширхэг : 1</p>
                <h2>$499</h2s>
            </div>
            <hr class="my-4 bg-dark" style="height: 1px;">
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

        this.children[0].children[0].children[3].children[1].addEventListener("click", () =>{
            const myCart = document.querySelector("shopping-cart");
            myCart.AddToCart(this);
        })
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

window.customElements.define('oneproduct', OneProduct);

