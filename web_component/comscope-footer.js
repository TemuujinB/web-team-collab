class ComscopeFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML=    `
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

    connectedCallback() {
        //implementation
    }

    disconnectedCallback() {
        //implementation
    }

    attributeChangedCallback(name, oldVal, newVal) {
        //implementation
    }

    adoptedCallback() {
        //implementation
    }

}

window.customElements.define('comscope-footer', ComscopeFooter);