class MobileFooter extends HTMLElement {
    constructor() {
        super();
        // this.attachShadow({mode:"open"})
        this.render();
    }
    render(){
        this.innerHTML = `
        <style>
        mobile-footer{
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 50px;
        }
        a img{
            box-shadow:    0 0 .2rem #fff,
            0 0 .2rem #fff,
            0 0 2rem #bc13fe,
            0 0 0.8rem #bc13fe,
            0 0 2.8rem #bc13fe,
            inset 0 0 1.3rem #bc13fe; 
        }
        </style>
        <a href="../index.html" alt="menu-icon"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/home--v2.png" alt="home--v2"/></a>
        <a href="../pages/console.html" alt="menu-icon"><img width="24" height="24" src="https://img.icons8.com/external-outline-agus-raharjo/64/external-playstation-electronic-outline-agus-raharjo.png" alt="external-playstation-electronic-outline-agus-raharjo"/></a>
        <a href="../pages/accessories.html" alt="menu-icon"><img width="24" height="24" src="https://img.icons8.com/external-those-icons-fill-those-icons/24/external-headphone-music-audio-those-icons-fill-those-icons-1.png" alt="external-headphone-music-audio-those-icons-fill-those-icons-1"/></a>
        <a href="../pages/games.html" alt="menu-icon"><img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/controller.png" alt="controller"/></a>`
    }
    connectedCallback() {
        
    }

    disconnectedCallback() {
        
    }

    attributeChangedCallback(name, oldVal, newVal) {
        
    }

    adoptedCallback() {
        
    }

}

window.customElements.define('mobile-footer', MobileFooter);