// Challenge 1 Part 1

document.querySelector("#subscribe").addEventListener("click", function() {
    if(this.checked){
        document.querySelector("#emailDiv").style.display = "block"; 
    }

    else{
        document.querySelector("#emailDiv").computedStyleMap.display = "none";
    }
})


// challenge 1 part 2

document.addEventListener("click", function() {
    let currentTime = new Date();
    alert("Current time:" + currentTime);
})



