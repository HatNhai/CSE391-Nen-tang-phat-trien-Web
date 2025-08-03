$(document).ready(function(){
    $("#addEmployeeForm").submit(function (e){
        e.preventDefault();
        
        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const address = $("#address").val().trim();
        const phone = $("#phone").val().trim();
        const message = $("#formMessage");

        if (!name || !email || !address || !phone ){

            message.text("Vui lòng điền đầy đủ thông tin!");

            return;
        }

        const phoneRegex = /^0\d{9}$/;
        if (!phoneRegex.test(phone)) {
            message.text("Vui lòng điền đúng định dạng số điện thoại!");
            return; 
        }
    });
});