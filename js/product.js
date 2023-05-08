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
class similarPro extends HTMLElement{
    constructor(productl){
        this.type = productl.type;
        this.image = productl.image;
        this.name = productl.name;
        this.detail = productl.detail;
        this.innerHTML = `
            <ul>
                <li><img src="${this.image}" alt="img3"></li>
                <li class="Pname">${this.name}</li>
                <li class="description">${this.detail}</li>
                <li><button type="button" class="more">дэлгэрэнгүй</button></li>
            </ul>
        `
    }
}
fetch('https://api.jsonbin.io/v3/b/64341dbaebd26539d0a83299')
.then(Response => Response.json)
.then(data =>{
    console.log("data: ",data);
    if(this.type == "consoles"){
        const similar = data.record.product[0].consoles.slice(0,3).map(dy=>new similarPro(dy));
    }else if(this.type == "games"){
        const similar = data.record.product[1].games.slice(0,3).map(dy=>new similarPro(dy));
    }else{
        const similar = data.record.product[2].accessories.slice(0,3).map(dy=>new similarPro(dy));
    }
    console.log("similar: ", similar);
    const similarProList = similar.map(i => i.Render()).join('');
    document.getElementById("likely").innerHTML = similarProList;
})