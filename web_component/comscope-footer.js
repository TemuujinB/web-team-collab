class ComscopeFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"});
        let template;
        template=    `
        <style> 
            @import url('../css/root.css');
            svg{
                width:40px;
                margin:7px;
            }
            a{
                text-decoration: none;
                color: var(--text_color);
            }
            ul{
                list-style: none;
                padding: 0;
                margin: 0;
            }
            footer{
                background-color: var(--footer_background);
                width: 100%;
            } 
            footer i{
                width: 5vh;
                height: 5vh;
            }
            .fa-brands, .fab {
                font-weight: 400;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            footer nav{
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
            .add_num{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }
            .icon{
                display: flex;
                align-items: center;
                justify-content: space-around;
            }
            
        </style>
        <footer>
        <nav>
            <ul>
                <li>
                    <h3>Тусламж</h3>
                </li>
                <li><a href="#">Дэлгүүрийн байршил</a></li>
                <li><a href="#">Захиалга хийх заавар</a></li>
                <li><a href="#">Төлбөр буцаах хүсэлт</a></li>
                <li><a href="#">Асуулт хариулт</a></li>
            </ul>

            <ul>
                <li>
                    <h3>Үйлчилгээ</h3>
                </li>
                <li><a href="#">Нууцлал хамгаалалт</a></li>
                <li><a href="#">Үйлчилгээний нөхцөл</a></li>
                <li><a href="#">Төлбөрийн нөхцөл</a></li>
                <li><a href="#">Хүргэлт</a></li>
                <li><a href="#">Онлайн линзингийн үйлчилгээ</a></li>
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
                    <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M512,256c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z" style="fill:#1877f2;fill-rule:nonzero;"/><path d="M355.65,330l11.35,-74l-71,0l0,-48.022c0,-20.245 9.917,-39.978 41.719,-39.978l32.281,0l0,-63c0,0 -29.297,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.89c13.033,2.045 26.392,3.11 40,3.11c13.608,0 26.966,-1.065 40,-3.11l0,-178.89l59.65,0Z" style="fill:#fff;fill-rule:nonzero;"/></g></svg>
                    <?xml version="1.0" ?><svg id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
                        .st0{fill:url(#SVGID_1_);}
                        .st1{fill:#FFFFFF;}
                    </style><g><linearGradient gradientTransform="matrix(16.0027 -27.7174 27.7174 16.0027 -878.9595 -482.2268)" gradientUnits="userSpaceOnUse" id="SVGID_1_" x1="-1.206969e-06" x2="1" y1="32" y2="32"><stop offset="0" style="stop-color:#FEC053"/><stop offset="0.327" style="stop-color:#F2203E"/><stop offset="0.648" style="stop-color:#B729A8"/><stop offset="1" style="stop-color:#5342D6"/></linearGradient><path class="st0" d="M16,0L16,0c8.8,0,16,7.2,16,16c0,8.8-7.2,16-16,16C7.2,32,0,24.8,0,16C0,7.2,7.2,0,16,0z"/><path class="st1" d="M20.7,6h-9.5C8.3,6,6,8.4,6,11.4v9.2c0,2.9,2.3,5.3,5.3,5.4h9.5c2.9,0,5.3-2.4,5.3-5.4v-9.2   C26,8.4,23.7,6,20.7,6z M24.2,20.5c0,2-1.6,3.7-3.7,3.7h-9.1c-2,0-3.7-1.7-3.6-3.7v-9c0-2,1.6-3.7,3.6-3.7h9.1c2,0,3.7,1.7,3.7,3.7   V20.5z"/><path class="st1" d="M16,10.9c-2.8-0.1-5.2,2.2-5.2,5c-0.1,2.8,2.2,5.2,5,5.2s5.2-2.2,5.2-5l0-0.1C21.1,13.2,18.8,10.9,16,10.9z    M16,19.3c-1.8,0-3.3-1.4-3.4-3.2c0-1.8,1.4-3.3,3.2-3.4s3.3,1.4,3.4,3.2l0,0.1C19.3,17.8,17.8,19.3,16,19.3z"/><path class="st1" d="M21.3,9.4c0.6,0,1.1,0.5,1.1,1.2s-0.5,1.2-1.1,1.2s-1.1-0.5-1.1-1.2S20.7,9.4,21.3,9.4z"/></g></svg>
                    <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 48 48" id="Layer_1" version="1.1" viewBox="0 0 48 48" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="24" cy="24" fill="#1CB7EB" r="24"/><g><g><path d="M36.8,15.4c-0.9,0.5-2,0.8-3,0.9c1.1-0.7,1.9-1.8,2.3-3.1c-1,0.6-2.1,1.1-3.4,1.4c-1-1.1-2.3-1.8-3.8-1.8    c-2.9,0-5.3,2.5-5.3,5.7c0,0.4,0,0.9,0.1,1.3c-4.4-0.2-8.3-2.5-10.9-5.9c-0.5,0.8-0.7,1.8-0.7,2.9c0,2,0.9,3.7,2.3,4.7    c-0.9,0-1.7-0.3-2.4-0.7c0,0,0,0.1,0,0.1c0,2.7,1.8,5,4.2,5.6c-0.4,0.1-0.9,0.2-1.4,0.2c-0.3,0-0.7,0-1-0.1    c0.7,2.3,2.6,3.9,4.9,3.9c-1.8,1.5-4.1,2.4-6.5,2.4c-0.4,0-0.8,0-1.3-0.1c2.3,1.6,5.1,2.6,8.1,2.6c9.7,0,15-8.6,15-16.1    c0-0.2,0-0.5,0-0.7C35.2,17.6,36.1,16.6,36.8,15.4z" fill="#FFFFFF"/></g></g></svg>
                </ul>
            </ul>
        </nav>
        <hr>
        <nav>
            <p>2023 © Зохиогчийн эрхийн хуулиар хамгаалагдав.</p>
            <p>Хөгжүүлсэн SET</p>
        </nav>
        </footer>
        `
        this.shadowRoot.innerHTML= template;
    }
// <li><i class="fa-brands fa-facebook-f"></i></li>
// <li><i class="fa-brands fa-instagram"></i></li>
// <li><i class="fa-brands fa-twitter"></i></li>
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