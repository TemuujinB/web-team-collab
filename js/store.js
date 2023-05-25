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

// const { access } = require("fs");

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
        return `<ps-one_product image="${this.image}" name="${this.name}" price="${this.price}" id="${this.id}" type="${this.type}"></ps-one_product>`
    }
}

fetch('http://localhost:4000/api')
    .then(response => response.json())
    .then(data => {
        console.log("ogogdol: ", data);
        const consoles = [];
        const accessories = [];
        const games = [];
        data.map(dy=>{
            if(dy.type == 'consoles'){
                consoles.push(dy)
            }else if(dy.type == 'accessories')
                accessories.push(dy)
            else if(dy.type == 'games')
                games.push(dy)
        document.getElementById("consoles_list").innerHTML =  consoles.map(dt=> new Store(dt)).map(i=>i.Render()).slice(0,5).join(""); 
        document.getElementById("accessories_list").innerHTML =  accessories.map(dt=> new Store(dt)).map(i=>i.Render()).slice(0,5).join(""); 
        document.getElementById("games_list").innerHTML =  games.map(dt=> new Store(dt)).map(i=>i.Render()).slice(0,5).join(""); 
        
        })
})