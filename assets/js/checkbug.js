$(document).ready(function() {

    $("#btn2").click(function() {
        $("#myModal").modal();
    });

    function kiemTraTenDN() {
        let bien = $("#tenDN").val();
        let mauKT = /^[\w]{5,}$/i;
        if (bien.trim() == "") {
            $("#tbTenDN").html("Bắt buộc phải nhập")
            return false;
        }

        if (!mauKT.test(bien)) {
            $("#tbTenDN").html("Tên đăng nhập phải gồm các chữ cái hoặc số, ít nhất 5 ký tự");
            return false;
        }

        $("#tbTenDN").html("*")
        return true;
    }
    $("#tenDN").blur(kiemTraTenDN);


    function kiemTraMK() {
        let bien = $("#MK").val();
        let mauKT = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (bien.trim() == "") {
            $("#tbMK").html("Bắt buộc phải nhập")
            return false;
        }

        if (!mauKT.test(bien)) {
            $("#tbMK").html("Mật khẩu tối thiểu 8 ký tự, ít nhất một chữ cái và một số")
            return false;
        }

        $("#tbMK").html("*")
        return true;
    }
    $("#MK").blur(kiemTraMK);

    function kiemTraNLMK() {
        let bien = $("#NLMK").val();
        if (bien.trim() == "") {
            $("#tbNLMK").html("Bắt buộc phải nhập")
            return false;
        }

        if (document.getElementById('NLMK').value !=
            document.getElementById('MK').value) {
            $("#tbNLMK").html("phải giống mật khẩu")
            return false;
        } else {
            $("#tbNLMK").html("*")
            return true;
        }
    }
    $("#NLMK").blur(kiemTraNLMK);

    function kiemTraHoTen() {
        let bien = $("#Name").val();
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if (bien.trim() == "") {
            $("#tbName").html("Bắt buộc phải nhập")
            return false;
        }

        if (!mauKT.test(bien)) {
            $("#tbName").html(" Mỗi ký tự đầu viết hoa không sử dụng số, không dấu, ít nhất 2 từ");
            return false;
        }

        $("#tbName").html("*")
        return true;
    }
    $("#Name").blur(kiemTraHoTen);

    function kiemTraNgaySinh() {
        var ns = new Date(document.getElementById('NS').value);
        var today = new Date();
        if ($("#NS").val() == "") {
            $("#tbNS").html("Bắt buộc phải nhập")
            return false;
        }
        if (eval(today.getFullYear() - ns.getFullYear()) <= 10) {
            $("#tbNS").html("tuổi phải > 10")
            return false;
        } else {
            $("#tbNS").html("*")
            return true;
        }
    }
    $("#NS").blur(kiemTraNgaySinh);

    function kiemTraDiaChi() {
        var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#DC").val() == "") {
            $("#tbDC").html("Không đề trống");
            return false;
        }
        if (!mauKT.test($("#DC").val())) {
            $("#tbDC").html("Mỗi ký tự đầu viết hoa");
            return true;
        }
        $("#tbDC").html("*");
        return true;
    }
    $("#DC").blur(kiemTraDiaChi);

    function kiemTraSDT() {
        let bien = $("#SDT").val();
        // let mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        if (bien.trim() == "") {
            $("#tbSDT").html("Bắt buộc phải nhập")
            return false;
        }

        // if (!mauKT.test(bien)) {
        //     $("#tbSDT").html("Theo Dạng 0xxx-xxx-xxx trong đó x là số");
        //     return false;
        // }

        $("#tbSDT").html("*")
        return true;
    }
    $("#SDT").blur(kiemTraSDT);


    function kiemTraEmail() {
        let bien = $("#Email").val();
        let mauKT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
        if (bien.trim() == "") {
            $("#tbEmail").html("Bắt buộc phải nhập")
            return false;
        }

        if (!mauKT.test(bien)) {
            $("#tbEmail").html("sai định dạng");
            return false;
        }

        $("#tbEmail").html("*")
        return true;
    }
    $("#Email").blur(kiemTraEmail);

    $("#Save").click(function() {
        if (kiemTraTenDN() == true && kiemTraMK() == true && kiemTraNLMK() == true && kiemTraHoTen() == true && kiemTraNgaySinh() == true &&
            kiemTraSDT() == true && kiemTraEmail() == true) {
            alert("Đăng kí thành công");
            $("#myModal").modal("hide");
        } else

            alert("thông tin bạn nhập chưa chính xác");
    })
});
$(document).ready(function() {

    $("#thoat").click(function() {
        $("#myModal").modal("hide");
    })
});