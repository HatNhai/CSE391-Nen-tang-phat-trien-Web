$(document).ready(function(){
   
    const $customerInput = $("#customer");
    const $employeeInput =  $("#employee");
    const $amountInput =  $("#amount");
    const $message =  $("#formMessage");

    $("#addTransactionBtn").on('click', function(){
        const customer = $customerInput.val().trim();
        const employee = $employeeInput.val().trim();
        const amount = $amountInput.val().trim();

        const errorMessage = validateTransactionForm(customer, employee, amount)
        
        if (errorMessage){
            $message.text(errorMessage);
            return;
        }
        $message.text("Thêm giao dịch thành công!");
        $customerInput.val("");
        $employeeInput.val("");
        $amountInput.val("");
    });

    function validateTransactionForm(customer, employee, amount){
        if (!customer || !employee || !amount) {
            return 'Vui lòng điền đầy đủ tất cả các trường thông tin.';
        }

        if (customer.length > 30) {
            return 'Tên khách hàng không được vượt quá 30 ký tự.';
        }

        if (employee.length > 30) {
            return 'Tên nhân viên không được vượt quá 30 ký tự.';
        }

        return '';
    }
});
