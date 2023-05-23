class ComponentCard extends HTMLElement {
    constructor() {
        super();
        //implementation
    }

    connectedCallback() {
        localStorage.getItem("myProducts");
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

window.customElements.define('component-card', ComponentCard);