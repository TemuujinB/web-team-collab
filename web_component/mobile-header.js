class MobileHeader extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    render(){
        this.innerHTML = `
        <nav class="mobileHeader">
            <ul><img src="../img/logo.png" alt="logo"></ul>
            <ul><a href="index.html">COMSCOPE</a></ul>
        </nav>
        `
    }
    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
        
    }

    attributeChangedCallback(name, oldVal, newVal) {
        
    }

    adoptedCallback() {
        
    }

}

window.customElements.define('mobile-header', MobileHeader);