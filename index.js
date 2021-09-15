const billAmount=document.getElementById("bill-amount");
const cashGiven=document.getElementById("cash-given");

const errorMessage=document.getElementById("error-message");


const checkButton=document.getElementById("check-button");


const output=document.getElementById("output");

const noOfNotes=document.querySelectorAll(".no-of-note");
const availabeNotes=[2000, 500, 100, 50, 20, 10, 5, 2, 1];


 checkButton.addEventListener('click', function validateBillAndCashAmount() { 
    hideMessage();
    if(billAmount.value>0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned=cashGiven.value-billAmount.value;
            
            cashGiven.style.display="block";
            calculateBillAmount(amountToBeReturned);
        } else{
            showMessage("The cash provided should be atleast equal to the bill amount");
        }
} else{
    showMessage("Invalid Bill Amount");
    }
});

function calculateBillAmount(amountToBeReturned){
    for(let i =0;i<availabeNotes.length;i++){
        const numberOfNotes=Math.trunc(amountToBeReturned/availabeNotes[i]);
        amountToBeReturned%= availabeNotes[i];
        noOfNotes[i].innerText=numberOfNotes;
    }
    if(noOfNotes[i]==0){
noOfNotes.innerText="";
    }
    
}

function hideMessage() {
    errorMessage.style.display="none";
}

function showMessage(msg) {
  errorMessage.style.display="block";
   errorMessage.innerText=msg;

}