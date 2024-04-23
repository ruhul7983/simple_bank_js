var totalDeposit = 0;
function deposit() {
    const depositField = document.getElementById("deposit-amount");
    const depositValue = depositField.value;
    const deposit = parseInt(depositValue);

    if (isNaN(deposit) ) {
        alert("Enter Deposit Amount");
        return;
    } else {
        var balanceStr = document.getElementById("balance").innerText;

        var balance = parseInt(balanceStr);
        console.log(balance);
        totalDeposit = totalDeposit + deposit;
        balance = balance + deposit;
        document.getElementById("deposit").innerText = totalDeposit;
        document.getElementById("balance").innerText = balance;
        console.log(balance);
        depositField.value= '';
    }

}
var totalWithdraw = 0;
function withdraw() {
    const withdrawField = document.getElementById("withdraw-amount");
    const withdrawValue = withdrawField.value;
    var withdraw = parseInt(withdrawValue);
   
    if (isNaN(withdraw)) {
        alert("Enter amount");
        return;
    } else {
        var balanceStr = document.getElementById("balance").innerText;
        var balance = parseInt(balanceStr);
        console.log(balance);
        balance = balance - withdraw;
        totalWithdraw = totalWithdraw + withdraw;
        document.getElementById("withdraw").innerText = totalWithdraw;
        document.getElementById("balance").innerText = balance;
        console.log(balance);
        withdrawField.value = '';
    }
   
}