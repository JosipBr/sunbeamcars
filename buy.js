const URL = window.location.search;
const URLDATA = new URLSearchParams(URL);

const OUTPUT = document.getElementById("output");

OUTPUT.innerHTML= URLDATA.get('name') + "<br>" + "Pick up date: " + URLDATA.get('pickup') + "<br>Return date: " + URLDATA.get('returnday') + "<br>Rental days: " + URLDATA.get('rentaldays') + "<br><br>Car rental cost: " + URLDATA.get('rentalcost') + "kr. inl. VAT";

let total=URLDATA.get('rentalcost');
let total2=0.00;
let total3=0.00;
showTotal();

//calculating the total value
function calculateTotal(checkbox, itemprice){
    if (checkbox.checked === true) { 
        total = Math.abs(total + parseFloat(itemprice));
        total2=Math.abs(total + parseFloat(itemprice));
        total3=Math.abs(total3 + parseFloat(itemprice));
    } else { 
        total = Math.abs(total - parseFloat(itemprice));
        total2= Math.abs(total - parseFloat(itemprice));
        total3=Math.abs(total - parseFloat(itemprice));
    }
    showTotal();
    sessionStorage.setItem("total",total);
    sessionStorage.setItem("total2",total2);
    sessionStorage.setItem("total3",total3);
}

//displaying the total value
function showTotal() {
    const output = document.getElementById("totaloutput");
    output.innerText = `All inclusive 
    TOTAL: ${total.toLocaleString("da-DK", {style: "currency", currency: "DKK"})}`;
}





const form=document.getElementById("form");
const checkboxess = document.getElementsByClassName("slist");//list of checkboxes


form.addEventListener("submit",function(e){
    e.preventDefault();
            let accessorieslist = []; 
            for (const checkbox of checkboxess) {
                if (checkbox.checked === true) { 
                    accessorieslist.push(checkbox.dataset.item + "(dkr. " + checkbox.value + ")"); 
                }
            }

            sessionStorage.setItem("goods", JSON.stringify(accessorieslist));
            sessionStorage.setItem("name", URLDATA.get('name'));
            sessionStorage.setItem("pickup", URLDATA.get('pickup'));
            sessionStorage.setItem("returnday", URLDATA.get('returnday'));
            sessionStorage.setItem("rentaldays", URLDATA.get('rentaldays'));
    
    window.location.href="information.html";

});