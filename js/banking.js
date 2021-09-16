function inputFiled(input) {
    //get the new deposit amount
    let newInput = document.getElementById(input);
    let newInputText = newInput.value;
    const newInputValue = parseInt(newInputText);
        
    //clear
    newInput.value = "";
    return newInputValue;
}

function totalTrasfer(prev, newInput) {
    const previous = document.getElementById(prev);
    const previousText = previous.innerText;
    const previousValue = parseInt(previousText);

    const newDepositeBalance = previousValue  +  newInput;
    const totalDeposit = previous.innerText = newDepositeBalance;
    return totalDeposit;

}

function totalBalance(newInput, addit) {
    const total = document.getElementById('total-amount')
    const totalText = total.innerText;
    let totalValue = parseInt(totalText);
    if(addit == true){
        total.innerText = totalValue + newInput;
    }
    else{
        total.innerText = totalValue - newInput;
    }
}

document.getElementById('diposit-btn').addEventListener('click', function () {
    newInputValue = inputFiled('deposit-input');    
    totalTrasfer('depo-amount', newInputValue);
    totalBalance(newInputValue, true);
    
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
        newWithdrawValue  = inputFiled('withdraw-input');
        totalTrasfer('with-amount', newWithdrawValue);
        totalBalance(newWithdrawValue, false);
    })