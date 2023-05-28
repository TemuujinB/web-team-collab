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
            align-items: center;
        }
        .mobileHeader{
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: row;
            align-items:center;
        }
        .mobileHeader img{
            width: 35px;
        }
        nav ul{
            margin-left: 20px;
            margin-right: 20px;
        }
        </style>
        <nav class="mobileHeader">
            <ul><img src="../img/logo.png" alt="logo"></ul>
            <ul><a href="../pages/store.html">COMSCOPE</a></ul>
            <ul><a href="../Buy section/Cart2.html" alt="shopping"><i class="fa-solid fa-cart-shopping"></i></a><shopping-cart></shopping-cart></ul>
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