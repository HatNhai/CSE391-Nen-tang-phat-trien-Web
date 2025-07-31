document.addEventListener("DOMContentLoaded", function () {
    const customerInput = document.getElementById("customer");
    const employeeInput = document.getElementById("employee");
    const amountInput = document.getElementById("amount");
    const message = document.getElementById("formMessage");
    const addBtn = document.getElementById("addTransactionBtn");

    addBtn.addEventListener("click", function () {
        const customer = customerInput.value.trim();
        const employee = employeeInput.value.trim();
        const amount = amountInput.value.trim();

        const errorMessage = validateTransactionForm(customer, employee, amount);

        if (errorMessage) {
        message.textContent = errorMessage;
        return;
        }

        message.textContent = "Thêm giao dịch thành công!";
        customerInput.value = "";
        employeeInput.value = "";
        amountInput.value = "";
    });
});

function validateTransactionForm(customer, employee, amount) {
  if (!customer || !employee || !amount) {
    return "Vui lòng điền đầy đủ tất cả các trường thông tin.";
  }

  if (customer.length > 30) {
    return "Tên khách hàng không được vượt quá 30 ký tự.";
  }

  if (employee.length > 30) {
    return "Tên nhân viên không được vượt quá 30 ký tự.";
  }

  return "";
}
