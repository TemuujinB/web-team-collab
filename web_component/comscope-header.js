class ComscopeHeader extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    render(){
        this.innerHTML = `
        <nav class="left">
            <ul><img src="../img/logo.png"></ul>
            <ul><a href="index.html">COMSCOPE</a></ul>
        </nav>
        <nav class="middle">
            <ul>
                <li><a href="./store.html">STORE</a></li>
                <li><a href="./console.html">CONSOLE</a></li>
                <li><a href="./accessories.html">ACCESSORIES</a></li>
                <li><a href="./games.html">GAMES</a></li>
            </ul>
        </nav>
        <nav class="right">
            <ul>
                <li>
                    <a href="../Buy section/Html for buy section/Cart2.html"><i class="fa-solid fa-cart-shopping"></i></a>
                    <shopping-cart></shopping-cart>
                </li>
                <li><i class="fa-solid fa-user"></i></li>
            </ul>
        </nav>
        `
    }

    connectedCallBack(){
        this.render();
    }

   
    disconnectedCallback() {
    
    }

    attributeChangedCallback(name, oldVal, newVal) {
    
    }

    adoptedCallback() {
    
    }

}

window.customElements.define('comscope-header', ComscopeHeader);
