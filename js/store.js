// fetch('product.json')
//     .then(response => response.json())
//     .then(data=>{
//         console.log(data);
//         const products = data.products;
//         products.map(product=>{
//             console.log(product);
//             const eachProduct = document.createElement('article');
//             eachProduct.innerHTML =`
//                 <nav class="product">
//                 <ul class="product"><img src="${product.image}" alt=""></ul>
//                 <ul class="information">
//                     <li class="Pname"><h3>${pr}</h3></li>
//                     <li class="price">$499.99</li>
//                     <li><b>Storage:</b>825GB</li>
//                     <li>Өнгө</li>
//                     <li class="Color"><input type="radio" name="color" id="button1" class="color" checked><input type="radio" name="color" id="button2" class="color"><input type="radio" name="color" id="button3" class="color"><input type="radio" name="color" id="button4" class="color"></li>
//                     <li class="double"><button type="button" class="buy">шууд авах</button><a href="" class="shopping"><i class="fa-solid fa-cart-shopping"></i></a></li>
//                     <li><button type="button" class="more">дэлгэрэнгүй</button></li>
//                 </ul>
//                 </nav>
//                 `
//             document.getElementById('').appendChild(eachProduct);
//         })
//     })
//     .catch(error=>console.log(error));

class Product{

    constructor(product){
        this.image = product.image;
        this.name = product.name;
        this.price = product.price;
        this.type = product.type;
        
    }

    Render(){
        return `<article class="eachProd">
            <nav>
                <li><img src="${this.image}" alt=""></li>
                <li class="name">${this.name}</li>
                <li class="oneline">
                    <p class="price">${this.price}</p>
                    <button id="buybtn">BUY</button>
                </li>
            </nav>
        </article> `
    }
}

fetch('https://api.jsonbin.io/v3/b/64341dbaebd26539d0a83299')
    .then(response => response.json())
    .then(data => {
        console.log("ogogdol: ", data);
        const console_data = data.record.product[0].consoles.slice(0, 5).map(dt => new Product(dt));
        const game_data = data.record.product[1].games.slice(0, 5).map(dt => new Product(dt));
        const accessory_data = data.record.product[2].accessories.slice(0, 5).map(dt => new Product(dt));
        const gameList = game_data.map(i => i.Render()).join('');
        const consoleList = console_data.map(i => i.Render()).join('');
        const accessoriesList = accessory_data.map(i => i.Render()).join('');
        document.getElementById("games_list").innerHTML = gameList;  
        document.getElementById("consoles_list").innerHTML = consoleList;
        document.getElementById("accessories_list").innerHTML = accessoriesList;
})