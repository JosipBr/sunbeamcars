const special=document.getElementById("special");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("tracking-in-expand")
      } else {
        entry.target.classList.remove("tracking-in-expand")
      }
    })
  }, {threshold: 1}) 

  observer.observe(special);

  //navigation
  let observer2 = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            document.getElementById("a1").classList.remove("active");
            document.getElementById("a2").classList.remove("active");
            document.getElementById("a3").classList.remove("active");

            if (entry.target.id==="1") {
                document.getElementById("a1").classList.add("active"); 
            }

            if (entry.target.id==="2") {
                document.getElementById("a2").classList.add("active");
            }

            if (entry.target.id==="3") {
                document.getElementById("a3").classList.add("active");
            }
            console.log(entry.target.id);
        }
    };
}, { threshold: 1 }); 

const articles = document.getElementsByClassName("article");
for (const article of articles) {
    observer2.observe(article)
}