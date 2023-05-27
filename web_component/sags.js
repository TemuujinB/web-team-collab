import html from "../js/utility.js";
class sags extends HTMLElement{
    constructor(){
        super();
        // const shadowroot = this.attachShadow({mode:"open"});
        this.products = JSON.parse(localStorage.getItem("myProducts")) || [];
        this.render();
    }
    /*<i class="fa-solid fa-cart-plus"></i>*/
    /*<?xml version="1.0" encoding="utf-8"?>
    <!-- Svg Vector Icons : http://www.onlinewebfonts.com/icon -->
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
    <g><path d="M374.2,759.4c-52.1,0-94.7,42.7-94.7,94.7c0,52.1,42.6,94.8,94.7,94.8c52.1,0,94.7-42.7,94.7-94.8C469,802,426.4,759.4,374.2,759.4z M371.8,896.7c-23.7,0-42.6-19.4-42.6-42.7c0-23.7,18.9-42.6,42.6-42.6s42.7,18.9,42.7,42.6C414.5,877.3,395.5,896.7,371.8,896.7z M705.8,759.4c-52.1,0-94.7,42.7-94.7,94.7c0,52.1,42.7,94.8,94.7,94.8c52.1,0,94.7-42.7,94.7-94.8C800.5,802,757.9,759.4,705.8,759.4z M703.4,896.7c-23.7,0-42.6-19.4-42.6-42.7c0-23.7,18.9-42.6,42.6-42.6c23.7,0,42.7,18.9,42.7,42.6C746.1,877.3,727.1,896.7,703.4,896.7z M819,527.2c1.4-2.3,171-426.3,171-426.3H283.8v39.8h621c0,0-112.2,332.6-125,353l-5.2,9.4c-8,14.7-10.9,19.9-38.8,19.9H313.1C223.6,236.4,176.2,51.2,176.2,51.2H98.1H10v43.6h117.9l176.2,569.3h477.5c11.8,0,18.9-14.7,18.9-26.9c0-12.3-6.1-19-18-19H350.1c0,0-9-18.9-18.5-49.2h411.6C792,569,805.7,550.9,819,527.2z"/></g>
    </svg> */
    render(){
        this.innerHTML= `<div class="count" id="count" style=" height: 15px;
        width: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
        border: 1px solid black;
        border-radius: 15px;
        position: sticky;
        bottom: 0;">${this.products.length}<div>`
    }
    get productCount() {
        return this.products.length;
    }
    AddToCart(myProduct) {
        this.products.push(myProduct);
        this.render();
        localStorage.setItem("product_len", this.products.length);
        localStorage.setItem('myProducts', JSON.stringify(this.products));
        
    }
    connectedCallBack(){
        this.render();
    }
}
window.customElements.define('shopping-cart', sags);