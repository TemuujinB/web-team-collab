class product extends HTMLElement{
    constructor(store){
        this.image = store.image;
        this.name = store.name;
        this.price = store.price;
        this.detail = store.detail;
        this.type = store.type;
        this.render();
    }
    render(){
        this.innerHTML = `<article>
                            <nav class="product">
                                <ul class="product"><img src="${this.image}" alt=""></ul>
                                <ul class="information">
                                    <li class="Pname"><h3>${this.name}</h3></li>
                                    <li class="price">${this.price}</li>
                                    <li>Өнгө</li>
                                    <li class="Color"><input type="radio" name="color" id="button1" class="color" checked><input type="radio" name="color" id="button2" class="color"><input type="radio" name="color" id="button3" class="color"><input type="radio" name="color" id="button4" class="color"></li>
                                    <li class="double"><button type="button" class="buy" id="buybtn">шууд авах</button><a href="" class="shopping"><i class="fa-solid fa-cart-shopping"></i></a></li>
                                    <li><button type="button" class="more">дэлгэрэнгүй</button></li>
                                </ul>
                            </nav>
                        </article>`
    }
}