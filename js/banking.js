
// handle deposite event handler
document.getElementById('deposite-button').addEventListener('click',function () {
    // get the amount deposited
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeText);
    // console.log(depositeAmount);

    //update deposit total 
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeText = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);
    const newDepositeTotal = previousDepositeAmount+newDepositeAmount;
    depositeTotal.innerText = newDepositeTotal;
    // clear deposite input field
    depositeInput.value ="";

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal+newDepositeAmount;
    balanceTotal.innerText = newBalanceTotal;
});

// handle withdraw
document.getElementById('withdraw-button').addEventListener('click',function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText =withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
     const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
     withdrawTotal.innerText = newWithdrawTotal;

    //  update balance
      
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotal-newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    //  clear withdraw value
    withdrawInput.value="";
});
