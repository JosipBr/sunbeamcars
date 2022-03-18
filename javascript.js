function validDates(arrivaldate, departuredate){
    const arrival=new Date(arrivaldate);
    const departure=new Date(departuredate);
    if(arrival>departure){
        return false;
    }
    else{
    return true;}
}

function calcRentalDays(arrivaldate,departuredate){
    const arrival=new Date(arrivaldate);
    const departure=new Date(departuredate);
    const timediff=departure.getTime()-arrival.getTime();
    const diffindays=timediff / (1000 * 3600 * 24) + 1;
    return diffindays;
}

function calcRentalCost(days,priceperday){
    const price1=495+days*100+days*priceperday;
    const price2=price1*0.25;
    const price=price1+price2;
    return price;
}



const output = document.getElementById("output");
const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // Don't reload page, thank you!{
    
    const arrivaldate = document.getElementById("arrivaldate");
    const departuredate = document.getElementById("departuredate");
    const personinput = document.getElementById("range").value;
    const suitcaseinput = document.getElementById("inputo").value;
    const error = document.getElementById("error");

    output.innerHTML = ""; // Removing old search results
    let template = "";
    error.innerHTML="";

    const validdate =validDates(arrivaldate.value, departuredate.value);

    
    

    if(validdate){
    for (const member of memberlist) {

        const rentaldays=calcRentalDays(arrivaldate.value, departuredate.value);
        //adding items to storage
        

        const total=calcRentalCost(rentaldays, member.supplement);
        

        if(member.person>=personinput && member.suitcase>=suitcaseinput){
           
            template = `
            <section class="cars">
                <img src="${member.image}" alt="car" class="image">
                <div class="name">
                    ${member.name}
                </div>
                <section class="inf">
                    Category: ${member.category} <br> Person: ${member.person}<br> Suitcase: ${member.suitcase}
                </section>
                <section class="buy">
                    ${total} DKK <br>
                    <a href="accessories.html?name=${member.name}&rentalcost=${total}&rentaldays=${rentaldays}&pickup=${arrivaldate.value}&returnday=${departuredate.value}">Book Now</a>
                </section>
            </section>`;

            output.insertAdjacentHTML("beforeend", template);
        
            

           
            
        }
            

            

           
                
        
    }}

    else{
        error.innerHTML = " The day of departure must be later than the day of arrival";
    }
    
});





