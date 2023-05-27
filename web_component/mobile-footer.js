class MobileFooter extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    render(){
        this.innerHTML = `
        <style>
        footer{
            width: 100%;
            height: 10vh;
            background-color: white;
            display: flex;
            flex-direction:row;
            justify-content: space-around;
            align-items: center;
        }
        #Layer_1{
            width: 25px;
        }
        </style>
        <a href="" alt=""><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/home--v2.png" alt="home--v2"/></a>
        <img width="24" height="24" src="https://img.icons8.com/external-outline-agus-raharjo/64/external-playstation-electronic-outline-agus-raharjo.png" alt="external-playstation-electronic-outline-agus-raharjo"/>
        <img width="24" height="24" src="https://img.icons8.com/external-those-icons-fill-those-icons/24/external-headphone-music-audio-those-icons-fill-those-icons-1.png" alt="external-headphone-music-audio-those-icons-fill-those-icons-1"/>
        <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/controller.png" alt="controller"/>`
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