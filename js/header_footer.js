class headerTemplate extends HTMLElement{
    connectedCallBack(){
        this.parentNode.innerHTML = `
        <nav class="left">
            <ul><img src="../img/logo.png"></ul>
            <ul><a href="index.html">COMSCOPE</a></ul>
        </nav>
        <nav class="middle">
            <ul>
                <li><a href="./pages/store.html">STORE</a></li>
                <li><a href="./pages/console.html">CONSOLE</a></li>
                <li><a href="./pages/accessories.html">ACCESSORIES</a></li>
                <li><a href="./pages/games.html">GAMES</a></li>
            </ul>
        </nav>
        <nav class="right">
            <ul>
                <li>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <sags></sags>
                </li>
                <li><i class="fa-solid fa-user"></i></li>
            </ul>
        </nav>
        `
    }
}
customElements.define("comscope-header",headerTemplate);
class footerTemplate extends HTMLElement{
    connectedCallBack(){
        `
        <nav>
            <ul>
                <li>
                    <h3>Тусламж</h3>
                </li>
                <li><a>Дэлгүүрийн байршил</a></li>
                <li><a>Захиалга хийх заавар</a></li>
                <li><a>Төлбөр буцаах хүсэлт</a></li>
                <li><a>Асуулт хариулт</a></li>
            </ul>

            <ul>
                <li>
                    <h3>Үйлчилгээ</h3>
                </li>
                <li><a>Нууцлал хамгаалалт</a></li>
                <li><a>Үйлчилгээний нөхцөл</a></li>
                <li><a>Төлбөрийн нөхцөл</a></li>
                <li><a>Хүргэлт</a></li>
                <li><a>Онлайн линзингийн үйлчилгээ</a></li>
            </ul>
            <nav class="add_num">
                <ul>
                    <li>
                        <h3>Хаяг</h3>
                    </li>
                    <li><p>УБ, Баянбүрд, Компьютер молл, 2020 тоот</p></li>
                </ul>

                <ul>
                    <li>
                        <h3>Холбоо барих</h3>
                    </li>
                    <li><p>Утас: [+976] 88776655</p></li>
                    <li><p>Имэйл: example@gmail.com</p></li>
                </ul>
            </nav>
            <ul>
                <li>
                    <h3>Биднийг дагаарай</h3>
                </li>
                <ul class="icon">
                    <li><i class="fa-brands fa-facebook-f"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                </ul>
            </ul>
        </nav>
        <hr>
        <nav>
            <p>2023 © Зохиогчийн эрхийн хуулиар хамгаалагдав.</p>
            <p>Хөгжүүлсэн SET</p>
        </nav>
        `
    }
}
customElements.define("comscope-footer",footerTemplate);