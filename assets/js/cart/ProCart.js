document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".btn-cart"); // Lấy tất cả các nút cart

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            const productContainer = event.target.closest(".list_products"); // Lấy phần tử chứa thông tin sản phẩm
            const product = productContainer.querySelector("#name-cart").textContent;
            const price = productContainer.querySelector("#price-cart").textContent;
            const imageSrc = productContainer.querySelector("#img-cart").getAttribute("src");

            addToCart(product, price, imageSrc);
            alert("Đã thêm vào giỏ hàng");
        });
    });
});