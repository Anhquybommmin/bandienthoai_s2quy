window.addEventListener('DOMContentLoaded', function() {
    var head = document.querySelector("#head");
    var footer = document.querySelector("#footer");
    var footer_end = document.querySelector(".footer-end");
    console.log(head);
    head.innerHTML = `
    <div id="header">
    <div class="img-logo">
        <a href="">
            <img src="./public/img/Smart.png" alt="">
        </a>
    </div>
    <div class="form">
        <input type="text" placeholder="Tìm kiếm">
        <i class="fa-solid fa-magnifying-glass search"></i>
    </div>

    <button class="button">
        <i class="fa-solid fa-truck-moving truck"></i>
        <span>Tra cứu đơn hàng</span>
    </button>

    <div class="icon">
        <div class="icon1">
            <i class="fa-solid fa-cart-shopping cart"></i>
            <span><a href="./HTML/cart.html">Giỏ Hàng</a></span>
        </div>
        <div class="icon2" style=>
            <i class="far fa-user user" aria-hidden="true"></i>
            <span><a href="./HTML/TrangDN.html">Tài khoản</a></span>
        </div>
    </div>
</div>

<div id="sub-header">
    <ul class="nav">
        <li class="hide"><a href="./index.html">Trang chủ</a></li>

        <li class="hide">
            <a href="./HTML/iphoneproduct.html">Iphone</a>
        </li>

        <li class="hide"><a href="./HTML/samsungproduct.html">Samsung</a>
        </li>

        <li class="hide"><a href="./HTML/googlepixelproduct.html">Google Pixel</a>
        </li>

        <li class="hide"><a href="./HTML/oppoproduct.html">Oppo</a>
        </li>

        <li class="hide"><a href="">Phụ kiện</a>
            <i class="fa-solid fa-angle-down icon"></i>
            <ul class="sub-nav ">
                <li><a href="./HTML/sacduphong.html">Sạc dự phòng</a></li>
                <li><a href="./HTML/SacCap.html">Sạc, cáp</a></li> <br>
                <li><a href="./HTML/OpLung.html">Ốp lưng</a></li>
            </ul>
        </li>
    </ul>
    <div class="menu-nav">
        <a href="#">
            <i class="fa-solid fa-bars"></i>
        </a>
    </div>
</div>
    `;
    footer.innerHTML = ` <div class="footer1 ">
                <h2>Thông tin liên lạc</h2>
                <p class="phone">036 244 9211 - 036 920 0219</p>
                <p class="email">moblieworld.com</p>
                <p class="email">moblieworld@gmail.com</p>
            </div>

            <div class="footer2">
                <h2>Hệ thống cửa hàng</h2>
                <p class="adrees"> Khu phố 3, Thị trấn Vân Canh, Vân Canh, Bình Định</p>
                <p class="adrees"> 12 Nguyễn Văn Bảo, F4, Gò Vấp, TPHCM</p>
                <p class="adrees"> 08 Tự Lập, Phường 4, Tân Bình, Hồ Chí Minh</p>
                <p class="adrees"> 10A1, Ngõ 49 Linh Lang, Ba Đình, Hà Nội </p>

            </div>
            <div class="footer3">
                <h2>Đăng ký</h2>
                <input type="text" placeholder="Nhập email của bạn">
                <button>Gửi</button>
            </div>
            <div class="footer4">
                <h2>Hướng dẫn mua </h2>
                <span>Cách thức mua hàng</span>
                <span>Chính sách thu hồi hàng hóa</span>
                <span>Chính sách bảo hành</span>
            </div>
    `;
    footer_end.innerHTML = `
    <div class="rules"> </div>
    <p>Copyright © 2023 MOBILEWORLD | All rights reserved | Trụ sở chính số 20, Nguyễn Văn Bảo, Gò Vấp, TP.HCM | Thực hiện bởi nhóm 12_IUH</p>
    <div class="icons">
        <a href=""><i class="fab fa-instagram" aria-hidden="true"></i></a>
        <a href=""><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
        <a href=""><i class="fab fa-youtube" aria-hidden="true"></i></a>
    </div>
    `;

})