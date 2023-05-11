// // fetch('product.json')
// //     .then(response => response.json())
// //     .then(data=>{
// //         console.log(data);
// //         const products = data.products;
// //         products.map(product=>{
// //             console.log(product);
// //             const eachProduct = document.createElement('article');
// //             eachProduct.innerHTML =`
// //                 <nav class="product">
// //                 <ul class="product"><img src="${product.image}" alt=""></ul>
// //                 <ul class="information">
// //                     <li class="Pname"><h3>${pr}</h3></li>
// //                     <li class="price">$499.99</li>
// //                     <li><b>Storage:</b>825GB</li>
// //                     <li>Өнгө</li>
// //                     <li class="Color"><input type="radio" name="color" id="button1" class="color" checked><input type="radio" name="color" id="button2" class="color"><input type="radio" name="color" id="button3" class="color"><input type="radio" name="color" id="button4" class="color"></li>
// //                     <li class="double"><button type="button" class="buy">шууд авах</button><a href="" class="shopping"><i class="fa-solid fa-cart-shopping"></i></a></li>
// //                     <li><button type="button" class="more">дэлгэрэнгүй</button></li>
// //                 </ul>
// //                 </nav>
// //                 `
// //             document.getElementById('').appendChild(eachProduct);
// //         })
// //     })
// //     .catch(error=>console.log(error));

class Store {

    constructor(product){
        this.image = product.image;
        this.name = product.name;
        this.price = product.price;
        this.type = product.type;
        this.id = product.id;
        this.Render();
    }

    Render(){
        // return `<article class="eachProd">
        //     <nav>
        //         <li><img src="${this.image}" alt=""></li>
        //         <li class="name">${this.name}</li>
        //         <p class="price">Үнэ: ${this.price}</p>
        //         <li class="oneline" id="one">
        //             <button id="buybtn">BUY</button>
        //             <button role="button" id="addcart">
        //                 <i class="fa-solid fa-cart-plus"></i>
        //             </button>
        //         </li>
        //     </nav>
        // </article> `
        return `<ps-one_product image="${this.image}" name="${this.name}" price="${this.price}" id="${this.id}"></ps-one_product>`

    

        // const btn = document.getElementById('addcart')
        // btn.addEventListener('click', ()=>{
        //     console.log('hello')
        // })

    }
    // connectedCallback() {

    //     console.log("duudah");
    //     console.log(this.children[0].children[0].children[3].children[1]);

    //     this.children[0].children[0].children[3].children[1].addEventListener("click", ()=>{
    //         console.log("daragdlaa");
    //     })
    //     // console.log('clicked');
    //     this.querySelector("button").addEventListener("click", () => {
    //         const myCart = document.querySelector("sags");
    //         console.log('clicked');
    //         myCart.AddToCart(this);
    //     })
    //     // this.querySelector("buybtn").addEventListener("click", ()=>{
    //     //     const myProd = new product(this);
    //     //     console.log("myProd: ",myProd);
    //     // })
    // }
}

fetch('https://api.jsonbin.io/v3/b/64341dbaebd26539d0a83299')
    .then(response => response.json())
    .then(data => {
        console.log("ogogdol: ", data);
        const console_data = data.record.product[0].consoles.slice(0, 5).map(dt => new Store(dt));
        const game_data = data.record.product[1].games.slice(0, 5).map(dt => new Store(dt));
        const accessory_data = data.record.product[2].accessories.slice(0, 5).map(dt => new Store(dt));
        const gameList = game_data.map(i => i.Render()).join('');
        const consoleList = console_data.map(i => i.Render()).join('');
        const accessoriesList = accessory_data.map(i => i.Render()).join('');
        document.getElementById("games_list").innerHTML = gameList;  
        document.getElementById("consoles_list").innerHTML = consoleList;
        document.getElementById("accessories_list").innerHTML = accessoriesList;
})


// class Store extends HTMLElement {
//     constructor() {
//         super();
//         this.attachShadow({mode: "open"})
//         //implementation
//     }
//     #Render(product){
//         this.shadowRoot.innerHTML = `
//             <div>
//                 <p>hello</p>
//             </div>
//         `
//     }

//     connectedCallback() {
//         fetch('https://api.jsonbin.io/v3/b/64341dbaebd26539d0a83299')
//             .then(res = res.json())
//             .then(data=>{
//                 console.log(data)
//             })
//     }

//     disconnectedCallback() {
//         //implementation
//     }

//     attributeChangedCallback(name, oldVal, newVal) {
//         //implementation
//     }

//     adoptedCallback() {
//         //implementation
//     }

// }

// window.customElements.define('each-product', Store);