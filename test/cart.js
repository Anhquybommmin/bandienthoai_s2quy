// Lấy modal-card và các phần tử liên quan
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
const cartItemsList = document.getElementById('cartItems');
const checkoutBtn = document.getElementById('checkoutBtn');

// Mở modal
function openModalCard(callback, cartItems) {
    modal.style.display = 'block';

    // Hiển thị danh sách sản phẩm trong giỏ hàng
    cartItemsList.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
      <img src="${item.image}" alt="Product" class="product-image">
      <span>${item.name}</span>
      <span>${item.price} đ</span>
      <span>Số lượng: ${item.quantity}</span>
    `;
        cartItemsList.appendChild(li);
    });

    // Sử dụng callback khi click vào nút "Thanh toán"
    checkoutBtn.addEventListener('click', () => {
        callback();
        closeModalCard();
    });
}

// Đóng modal
function closeModalCard() {
    modal.style.display = 'none';
}

// Lắng nghe sự kiện click vào nút đóng để đóng modal
closeBtn.addEventListener('click', closeModalCard);