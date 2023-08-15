document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newTotalAmountString = depositField.value;
    const newTotalAmount = parseFloat(newTotalAmountString);
    depositField.value ='';
    if(isNaN(newTotalAmount)){
        alert('please provide a number')
        return;
    }


    const depositTotal = document.getElementById('deposit-total');
    const previousAmountString = depositTotal.innerText;
    const previousAmount = parseFloat(previousAmountString);

    const currentTotalAmount = previousAmount + newTotalAmount;

    depositTotal.innerText = currentTotalAmount;




    const totalBalance = document.getElementById('total-balance');
    const totalAmountBalanceString = totalBalance.innerText;
    const totalAmountBalance =parseFloat(totalAmountBalanceString);

    const currentTotalAmountBalance = totalAmountBalance + newTotalAmount;

    totalBalance.innerText = currentTotalAmountBalance;

 


})