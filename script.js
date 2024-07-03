$(document).ready(function() {

$("#burger").click(function() { 
    $("#nav_list > :not(:first-child)").toggle("show");
});




let scrlchilds = document.querySelectorAll(".card");
for (let i =0; i<scrlchilds.length; i++){
    const num = (i+1);
    scrlchilds[i].style.background = `url("images/d${num}.avif")`;
    scrlchilds[i].style.backgroundRepeat = "no-repeat";
}

});



