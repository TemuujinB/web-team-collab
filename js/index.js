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
fetch('http://localhost:4000/api')
        .then(res => res.json())
        .then(data =>{
            // console.log(data.record.product[0].consoles); 
            // const resData = data.record.product[0].consoles.slice(0,4).map(i => new Index(i));
            // const product = resData.map(i => i.Render()).join('');
            // document.getElementById("article-wrapper").innerHTML = product;
            const resData = data.map(dt=>new Index(dt)).map(i=>i.Render()).join('');
            document.getElementById("article-wrapper").innerHTML = resData;
        })