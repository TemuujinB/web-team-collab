class IndexComponent extends HTMLElement {
    constructor() {
        super();
        this.name = this.getAttribute("name");
        this.id = this.getAttribute("id");
        this.image = this.getAttribute("image");
        this.Render();
    }
    Render(){
        this.innerHTML = `
                            <article class="primary-articles">
                                <h2>${this.name}</h2>
                                <div>
                                    <a href="./pages/product.html">Buy ></a>
                                    <a href="./pages/advertising.html">Learn More ></a>
                                </div>
                                <img src="${this.image}" alt="prod img">
                            </article>
    </div>`
    }
    connectedCallback() {
        // document.querySelector("secondary-aticles").style.backgroundImage = "url('${this.image}')";
        // document.querySelector("secondary-aticles").style.backgroundPosition = "center";
        // document.querySelector("secondary-aticles").style.backgroundRepeat = "no-repeat";
        // document.querySelector("secondary-aticles").style.backgroundSize = "cover";
        // document.querySelector("secondary-aticles").style.position = "relative";
    }

    disconnectedCallback() {
        
    }

    attributeChangedCallback(name, oldVal, newVal) {
        
    }

    adoptedCallback() {
        
    }

}

window.customElements.define('index-component', IndexComponent);