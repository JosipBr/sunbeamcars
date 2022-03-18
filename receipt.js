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


//displaying the info from the previous page
const INFOOUTPUT =document.getElementById("infooutput");

INFOOUTPUT.innerHTML=
"<p>First name:<b> " + sessionStorage.getItem('namee') +
"</b></p><p>Last name:<b> " + sessionStorage.getItem('lastname') +
"</b></p><p>Address:<b> " + sessionStorage.getItem('address') +
"</b></p><p>Postal code and city:<b> " + sessionStorage.getItem('postal') + "<br><br>";