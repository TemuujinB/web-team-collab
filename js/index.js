class Index{
    constructor(prod) {
        this.image = prod.image;
        this.name = prod.name;
        this.price = prod.price;
        this.id = prod.id;
        this.type = prod.type;
    }
    Render(){
        return `
        <index-component name = "${this.name}" id="${this.id}" image="${this.image}"></index-component>`
        
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
        .then(res => res.json())
        .then(data =>{
            console.log(data.record.product[0].consoles); 
            const resData = data.record.product[0].consoles.slice(0,4).map(i => new Index(i));
            const product = resData.map(i => i.Render()).join('');
            document.getElementById("article-wrapper").innerHTML = product;
        })