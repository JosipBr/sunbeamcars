let memberlist = []; // IMPORTANT!! global variable with let

fetch("https://josipbr.github.io/LIST/list.json")
.then(function (data) {
    return data.json();
})
.then(function (post) {
    memberlist = post.memberlist; // Setting global variable equal json list (array)
})
.catch(function (error) {
    const errordiv = document.getElementById("error");
    errordiv.innerHTML = "Service is not available";
})