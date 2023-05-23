class ComponentCard extends HTMLElement {
    constructor() {
        super();
        //implementation
    }

    render(product){
        this.innerHTML=`
        <div class="border ">
            <img src="${product.image}" alt="" style="width: 150px; height: 150px; float: left;" class="mr-4">
            <h2>${product.name}</h2>
            <h2>${product.price}</h2s>
        </div>`
    }

    connectedCallback() {
        const myProducts = localStorage.getItem("myProducts");
        console.log(myProducts);
        const list = JSON.parse(myProducts);
        const idlist = list.map(i=>i.queryString);
        console.log(idlist);
        const str = idlist.toString();

        const regexp = /"([^"]*)"/;
        const match = str.match(regexp);
        console.log(match)
        // const resultId = match[1];

        // fetch('https://api.jsonbin.io/v3/b/64341dbaebd26539d0a83299')
        //     .then(response => response.json())
        //     .then(data => {
        //         const str = this.id;
        //         const str2 = this.type;
        //         const regexp = /"([^"]*)"/;
        //         const match = str.match(regexp);
        //         const match2 = str2.match(regexp);
        //         const resultId = match[1];
        //         const resultType = match2[1];
        //         console.log("id: ",resultId);
        //         console.log("type: ",resultType);
        //         console.log(data);
        //         data.map(dt=>{
        //             if(dt.type == resultId){
        //                 console.log(dt.type);
        //                 this.#Render(dt)
        //             }
        //         })
        //     })
        //     .catch(error => {
        //         // Handle any errors that occur during the request
        //         console.error('Error:', error);
        //     });
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