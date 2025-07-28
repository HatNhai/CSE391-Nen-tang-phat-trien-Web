// // Chờ trang tải xong
// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("contactForm");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault(); // Ngăn form tự reload

//     // Lấy giá trị các trường
//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const subject = document.getElementById("subject").value.trim();
//     const message = document.getElementById("message").value.trim();

//     // Kiểm tra rỗng
//     if (!name || !email || !subject || !message) {
//       alert("Vui lòng điền đầy đủ thông tin!");
//     } else {
//       alert("Cảm ơn bạn đã liên hệ!");
//       form.reset(); // Xóa nội dung form sau khi gửi
//     }
//   });
// });

 console.log("Chao mung den voi JS!");
 
   function xinChao(){
    let ten = document.getElementById("name").value.trim();
    alert("Xin chao " + ten + "!");
   }

 