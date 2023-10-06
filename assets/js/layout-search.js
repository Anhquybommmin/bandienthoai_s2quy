const searchIcon = document.getElementById("open-search");
const searchInput = document.getElementById("search-nav");
const header = document.getElementById("header");

// Kiểm tra nếu là điện thoại trước khi thêm lắng nghe sự kiện
if (window.innerWidth <= 768) { // Điều chỉnh số liệu phù hợp với kích thước màn hình điện thoại
    searchIcon.addEventListener("click", () => {
        // Toggle trạng thái của input

        searchInput.classList.toggle("hidden");


        // Nếu input đang hiển thị, trượt nó xuống
        if (!searchInput.classList.contains("hidden")) {
            const scrollDistance = searchInput.getBoundingClientRect().bottom - window.innerHeight + 100;
            window.scrollBy({
                top: scrollDistance,
                behavior: "smooth"
            });


            header.style.height = "120px";

            // Đặt margin-top cho input để nó nằm dưới header
            searchInput.style.marginTop = "70px";
            searchInput.style.width = "600px";
            searchInput.style.position = "relative";
            searchInput.style.top = "0px";
            searchInput.style.left = "10px";
            searchInput.style.right = "10px";

        } else {
            // Khi ẩn input, đặt lại margin-top cho header và input

            header.style.height = "80px";

        }
    });
} else {
    const scrollDistance = searchInput.getBoundingClientRect().bottom - window.innerHeight + 0;
    window.scrollBy({
        top: scrollDistance,
        behavior: "smooth"
    });
    header.style.height = "80px";
}