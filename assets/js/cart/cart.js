const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

function renderCart() {
    const cartTable = document.getElementById("cart-items");
    cartTable.innerHTML = "";

    let totalPrice = 0;

    cartItems.forEach((item, index) => {
        const row = cartTable.insertRow(index);

        const cellImage = row.insertCell(0);
        cellImage.innerHTML = `<img src="${item.imageSrc}" alt="${item.product}" width="50">`;

        const cellProduct = row.insertCell(1);
        cellProduct.textContent = item.product;

        const cellPrice = row.insertCell(2);
        cellPrice.textContent = item.price;

        const cellQuantity = row.insertCell(3);
        if (item.quantity === undefined) {
            item.quantity = 1; // Đặt số lượng mặc định là 1 nếu không có số lượng
        }
        cellQuantity.innerHTML = `
            <button style="margin:0; width:8px;" onclick="changeQuantity(${index}, -1)">-</button>
            <span style="margin-top:-30px;" class="quantity">${item.quantity}</span>
            <button style="padding-left:; width:8px;" onclick="changeQuantity(${index}, 1)">+</button>
           
          
        `;

        const totalItemPrice = parseFloat(item.price) * item.quantity;
        const cellTotalPrice = row.insertCell(4);
        cellTotalPrice.textContent = totalItemPrice;

        const cellDelete = row.insertCell(5);
        cellDelete.innerHTML = `<i class="fas fa-trash" style="color: red;" onclick="deleteCartItem(event)"></i>`;

        totalPrice += totalItemPrice;
    });

    const checkoutButton = document.querySelector(".checkout button");
    checkoutButton.textContent = `Checkout (Total: $${totalPrice.toFixed(2)})`;
}

// ... (các hàm khác)


function changeQuantity(index, change) {
    const quantityElement = document.querySelectorAll('.quantity')[index];
    const row = quantityElement.closest("tr");
    const rowIndex = row.rowIndex - 1;

    const cartItem = cartItems[rowIndex];
    cartItem.quantity += change;
    if (cartItem.quantity < 1) {
        cartItem.quantity = 1; // Ensure quantity is not less than 1
    }

    quantityElement.textContent = cartItem.quantity;
    saveCartItems();
    renderCart();
}

function deleteCartItem(event) {
    const row = event.target.closest("tr");
    const rowIndex = row.rowIndex - 1;

    cartItems.splice(rowIndex, 1);
    saveCartItems();
    renderCart();
}

function saveCartItems() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

document.addEventListener("DOMContentLoaded", function() {
    renderCart();
});

function checkout() {
    alert("thanh toan thanh cong!");
}