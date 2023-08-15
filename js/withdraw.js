document.getElementById('Withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newAmountString = withdrawField.value;
    const newAmount = parseFloat(newAmountString);

    withdrawField.value='';

    if(isNaN(newAmount)){
        alert('please provide a number')
        return;

    }
 

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousTotalString = withdrawTotal.innerText;
    const previousTotal = parseFloat(previousTotalString);
   
    

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceAmountString = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceAmountString);

    if(newAmount>totalBalanceAmount){
        alert('Ato tk nai apnar kasa');
        return;

    }
    const currentTotal = previousTotal + newAmount;
    withdrawTotal.innerText = currentTotal;


   

    const currentTotalBalance = totalBalanceAmount - newAmount;
    totalBalance.innerText = currentTotalBalance;

   




})