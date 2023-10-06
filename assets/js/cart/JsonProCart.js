 // Mảng chứa các sản phẩm trong giỏ hàng
 const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

 // Hàm thêm sản phẩm vào giỏ hàng
 function addToCart(product, price, imageSrc) {
     // Thêm sản phẩm vào mảng cartItems
     cartItems.push({
         product,
         price,
         imageSrc
     });
     saveCartItems();
 }

 // Hàm lưu thông tin sản phẩm vào localStorage
 function saveCartItems() {
     localStorage.setItem("cartItems", JSON.stringify(cartItems));
 }