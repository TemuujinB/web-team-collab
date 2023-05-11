// class Product extends HTMLElement {
//     constructor() {
//         super();
//         this.#render();
//         const mykeyValues = window.location.search;
//         const urlParams = new URLSearchParams(mykeyValues);
//         this.param = urlParams.get('id');
//     }
//     #render(){
//         this.innerHTML = `<article>
//                             <nav class="product">
//                                 <ul class="product"><img src="${this.image}" alt=""></ul>
//                                 <ul class="information">
//                                     <li class="Pname"><h3>${this.name}</h3></li>
//                                     <li class="price">${this.price}</li>
//                                     <li>Өнгө</li>
//                                     <li class="Color"><input type="radio" name="color" id="button1" class="color" checked><input type="radio" name="color" id="button2" class="color"><input type="radio" name="color" id="button3" class="color"><input type="radio" name="color" id="button4" class="color"></li>
//                                     <li class="oneline" id="one">
//                                         <button id="buybtn">BUY</button>
//                                         <button id="addcart"><i class="fa-solid fa-cart-plus"></i></button>
//                                     </li>
//                                     <li>
//                                         <button id="more">ДЭЛГЭРЭНГҮЙ</button>
//                                     </li>
//                                 </ul>
//                             </nav>
//                         </article>`
//     }

//     connectedCallback() {
        
//         // this.children[0].children[0].children[1].children[5].addEventListener("click",()=>
//         // this.children[0].children[0].children[1].children[5].addEventListener("click", ()=>{
//         //     console.log("clicked");
//         // })
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
// fetch('https://api.jsonbin.io/v3/b/64341dbaebd26539d0a83299')
//     .then(response => response.json())
//     .then(data => {
//         if(this.id == )
//         const console_data = data.record.product[0].consoles.slice(0, 5).map(dt => new Store(dt));
//         const game_data = data.record.product[1].games.slice(0, 5).map(dt => new Store(dt));
//         const accessory_data = data.record.product[2].accessories.slice(0, 5).map(dt => new Store(dt));
//         const gameList = game_data.map(i => i.Render()).join('');
//         const consoleList = console_data.map(i => i.Render()).join('');
//         const accessoriesList = accessory_data.map(i => i.Render()).join('');
//         document.getElementById("games_list").innerHTML = gameList;  
//         document.getElementById("consoles_list").innerHTML = consoleList;
//         document.getElementById("accessories_list").innerHTML = accessoriesList;
// })

// window.customElements.define('comscope-product', Product);