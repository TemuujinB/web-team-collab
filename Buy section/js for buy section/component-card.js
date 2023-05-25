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
        // const idlist = []
        // idlist.push(list.map(i=>i.queryString));

        // console.log("id list:",idlist);
        // const str = idlist.toString();

        const regexp = /(\d+)/;
        // const match = idlist.map(i=>i.match(regexp));
        // console.log(match)

        const test = list.map(i=>i.queryString).map(i=>i.match(regexp))
        console.log("test:",test);
        

        // const resultId = match[1];

        fetch('http://localhost:4000/api')
            .then(response => response.json())
            .then(data => {
                data.map(dt=>{
                    if(dt.id == test){
                        console.log(dt.type);
                        this.render(dt)
                    }
                })
            })
            .catch(error => {
                // Handle any errors that occur during the request
                console.error('Error:', error);
            });
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