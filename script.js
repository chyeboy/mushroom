var button = document.getElementById("clickme"),
    count = 0;
button.onclick = function () {
    count += 1;
    button.innerHTML = "Click me: " + count;

    
    if (count < 10) {
        document.getElementById("demo").style.width = "300px";
    } 
    else if(count < 20) {
        document.getElementById("demo").style.width = "400px";
    }
    else if(count < 30) {
        document.getElementById("demo").style.width = "500px";
    }
    else if(count < 40) {
        document.getElementById("demo").style.width = "600px";
    }
};