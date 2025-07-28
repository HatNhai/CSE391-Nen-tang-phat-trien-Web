let table;
let stt = 1;
let selectedRow = null;

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("addStudentForm");
    table = document.getElementById("studentTable");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const maSV = document.getElementById("masv").value.trim();
        const hoTen = document.getElementById("hoten").value.trim();
        const email = document.getElementById("email").value.trim();
        const ngaySinh = document.getElementById("ngaysinh").value;
        const gioiTinh = document.querySelector('input[name="gioitinh"]:checked')?.value || "";
        const ghiChu = document.getElementById("ghichu").value.trim();

        if (!validateData(maSV, hoTen, email)) return;

        if (selectedRow) {
            updateStudent(maSV, hoTen, email, gioiTinh, ngaySinh, ghiChu);
        } else {
            addStudent(maSV, hoTen, email, gioiTinh, ngaySinh, ghiChu);
            message();
        }

        form.reset();
    });
});

function addStudent(maSV, hoTen, email, gioiTinh, ngaySinh, ghiChu) {
    const newRow = table.insertRow();
    newRow.insertCell(0).innerText = stt++;
    newRow.insertCell(1).innerText = maSV;
    newRow.insertCell(2).innerText = hoTen;
    newRow.insertCell(3).innerText = email;
    newRow.insertCell(4).innerText = gioiTinh;
    newRow.insertCell(5).innerText = ngaySinh;

    const actionCell = newRow.insertCell(6);
    actionCell.innerHTML = `
        <button class="btn btn-warning btn-sm" onclick="editStudent(this)">Sửa</button>
        <button class="btn btn-danger btn-sm" onclick="deleteStudent(this)">Xoá</button>
    `;
    newRow.insertCell(7).innerText = ghiChu;
}

function editStudent(btn) {
    selectedRow = btn.parentElement.parentElement;

    document.getElementById("masv").value = selectedRow.cells[1].innerText;
    document.getElementById("hoten").value = selectedRow.cells[2].innerText;
    document.getElementById("email").value = selectedRow.cells[3].innerText;
    document.getElementById("ngaysinh").value = selectedRow.cells[5].innerText;
    document.getElementById("ghichu").value = selectedRow.cells[7].innerText;

    const gioiTinh = selectedRow.cells[4].innerText;
    document.querySelector(`input[name="gioitinh"][value="${gioiTinh}"]`).checked = true;

    document.getElementById("submit").innerText = "Cập nhật";
}

function updateStudent(maSV, hoTen, email, gioiTinh, ngaySinh, ghiChu) {
    selectedRow.cells[1].innerText = maSV;
    selectedRow.cells[2].innerText = hoTen;
    selectedRow.cells[3].innerText = email;
    selectedRow.cells[4].innerText = gioiTinh;
    selectedRow.cells[5].innerText = ngaySinh;
    selectedRow.cells[7].innerText = ghiChu;

    alert("Cập nhật sinh viên thành công!");

    selectedRow = null;
    document.getElementById("submit").innerText = "Thêm sinh viên";
}

function deleteStudent(button) {
    if (confirm("Bạn có chắc muốn xoá không?")) {
        const row = button.closest("tr");
        row.remove();

        // Cập nhật lại STT
        const rows = document.querySelectorAll("#studentTable tr");
        stt = 1;
        rows.forEach((row, index) => {
            if (index === 0) return;
            row.cells[0].innerText = stt++;
        });

        alert("Xoá sinh viên thành công!");
    }
}

function validateData(maSV, hoTen, email) {
    if (maSV.trim() == "" || hoTen.trim() == "") {
        alert("Vui lòng không để trống!");
        return false;
    }
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Email không hợp lệ!");
        return false;
    }
    return true;
}

function message() {
    document.getElementById("message").innerText = "Thêm sinh viên thành công!";
    setTimeout(() => {
        document.getElementById("message").innerText = "";
    }, 3000);
}
