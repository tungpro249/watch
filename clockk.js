function clock(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var secsion = "AM";

    if(h > 12) {
        h = h;
        secsion = "PM";
    }

    h = (h < 10) ? "0" +h : h;
    m = (m < 10) ? "0" +m : m;
    s = (s < 10) ? "0" +s : s;

    var time = h + ":" + m +":" + s + " " + secsion;

    document.getElementById('clock-h').innerText = time;
    document.getElementById('clock-h').textContent = time;

    setTimeout(clock, 1000);

}

clock();