document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("addEmployeeForm");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const address = document.getElementById("address").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("formMessage");

        if (!name || !email || !address || !phone) {
        message.textContent = "Vui lòng điền đầy đủ thông tin.";
        return;
        }

        const phoneRegex = /^0\d{9}$/;
        if (!phoneRegex.test(phone)) {
        message.textContent = "Vui lòng nhập đúng định dạng số điện thoại (10 chữ số, bắt đầu bằng 0).";
        return;
        }
    });
});
