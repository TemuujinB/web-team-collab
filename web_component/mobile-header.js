class MobileHeader extends HTMLElement {
    constructor() {
        super();
        // this.attachShadow({mode:"open"})
        this.render();
    }
    render(){
        this.innerHTML = `
        <style>
        @import url('../css/root.css');

        header{
            display:flex;
            justify-content:space-around;
        }
        .mobileHeader{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items:center;
        }
        .mobileHeader img{
            width: 35px;
        }
        </style>
        <nav class="mobileHeader">
            <ul><img src="../img/logo.png" alt="logo"></ul>
            <ul><a href="index.html">COMSCOPE</a></ul>
            <ul><i class="fa-solid fa-cart-shopping"></i></ul>
            <ul><shopping-cart></shopping-cart></ul>
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