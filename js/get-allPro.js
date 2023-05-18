class GetAllPro{
    constructor(product) {
        // super();
        // this.section = document.createElement('section')
        // document.querySelector('get-allpro').appendChild(this.section)
        this.image = product.image;
        this.name = product.name;
        this.price = product.price;
        this.id = product.id;
        this.type = product.type;
        this.Render();
    }
    Render(){
        return `
         <ps-one_product id="${this.id}" image="${this.image}"  name="${this.name}"  price="${this.price}"  type="${this.type}"></ps-one_product>`
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
fetch('https://api.jsonbin.io/v3/b/64341dbaebd26539d0a83299')
            .then(res=>res.json())
            .then(data=>{
                const gameProducts = data.record.product[1].games;
                const accessoryProducts = data.record.product[2].accessories;
                const gameList = gameProducts.map(i=>new GetAllPro(i));
                const accessoryList = accessoryProducts.map(i=>new GetAllPro(i));
                const gameResult = gameList.map(i=>i.Render()).join('');
                const accessoryResult = accessoryList.map(i=>i.Render()).join('');
                // console.log(gameProducts);
                // console.log(accessoryProducts);
                // gameProducts.map(i=>this.Render(i));
                // console.log(gameProducts.map((product)=>));
                if(document.getElementById("games")!=null){
                    document.getElementById("games").innerHTML = gameResult;
                }
                if(document.getElementById("accessories")!=null){
                    document.getElementById("accessories").innerHTML = accessoryResult;
                }
        })

// window.customElements.define('get-allpro', GetAllPro);