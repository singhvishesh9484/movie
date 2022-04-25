// Store the wallet amount to your local storage with key "amount"

document.querySelector("add_to_wallet").addEventListener("click",function(){
     
    let money=document.getElementById("amount").value;

    document.querySelector("#wallet").append(money);

    addmoney()

    localStorage.setItem("amount",JSON.stringyfy)


})
