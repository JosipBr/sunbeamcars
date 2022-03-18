const URL = window.location.search;
const URLDATA = new URLSearchParams(URL);

const retrieveddata=sessionStorage.getItem('goods');
const accessorieslist=JSON.parse(retrieveddata);

const OUTPUT=document.getElementById("output");
OUTPUT.innerHTML=
"<br><p>ALL INCLUSIVE: <br></p> <p>TOTAL: " + sessionStorage.getItem('total2') +" dkr.</p> incl.VAT" + "<br><br><b>" + sessionStorage.getItem('name')+"</b><br><p> Pickup date: " + sessionStorage.getItem('pickup') 
+ "</p><p>Return date: " + sessionStorage.getItem('returnday') +"</p><p>Rental days: " + sessionStorage.getItem('rentaldays')
+ "<br><br><p><b>Total car rental cost: " +sessionStorage.getItem('total') + " dkr.</b> <br>incl. VAT</p>"
+"<br><p><b>Accessories:</b></p>"

const OUTPUT2=document.getElementById("output2");
for(const accessory of accessorieslist){
    OUTPUT2.insertAdjacentHTML("beforeend", accessory +"<br>")
}

const OUTPUT3=document.getElementById("output3");
OUTPUT3.innerHTML=
"<br><p><b>Accessories total: " + sessionStorage.getItem('total3') + " dkr. </b><br>incl. VAT</p>";

//Storing input data in local storage
const form = document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    const NAME = document.getElementById("name").value;
    const ADDRESS = document.getElementById("streetname").value;
    const POSTALCODE = document.getElementById("postal").value;
    const LASTNAME = document.getElementById("lastname").value;
    const NUMBER = document.getElementById("number").value;

    sessionStorage.setItem("namee", NAME);
    sessionStorage.setItem("address", ADDRESS);
    sessionStorage.setItem("postalcode", POSTALCODE);
    sessionStorage.setItem("lastname", LASTNAME);
    sessionStorage.setItem("number", NUMBER);

    document.location.href = "receipt.html";
})
