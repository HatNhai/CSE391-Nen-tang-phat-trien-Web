$(document).ready(function(){
   
    const $name = $("#name");
    const $familyname =  $("#familyname");
    const $address =  $("#address");
    const $message =  $("#formMessage");

    $("#addBtn").on('click', function(){
        const name = $name.val().trim();
        const familyname = $familyname.val().trim();
        const address = $address.val().trim();

        const errorMessage = validateTransactionForm(name, familyname, address)
        
        if (errorMessage){
            $message.text(errorMessage);
            return;
        }
        $message.text("Thêm thành công!");
        $name.val("");
        $familyname.val("");
        $address.val("");
    });

    function validateTransactionForm(name, familyname, address){
        if (!name || !familyname || !address) {
            return 'Vui lòng điền đầy đủ tất cả các trường thông tin.';
        }

        if (name.length > 15) {
            return 'Tên khách hàng không được vượt quá 15 ký tự.';
        }

        if (familyname.length > 20) {
            return 'Họ đệm nhân viên không được vượt quá 20 ký tự.';
        }
        if (address.length > 50) {
            return 'Địa chỉ không được vượt quá 50 ký tự.';
        }

        return '';
    }
});
