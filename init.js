const start = Date.now();
const ppms = 0.126839;
const lockdownStart = Date.parse('01 March 2020 00:12:00 PST')
var statsdisplay = "lockdown"

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function visit(){
        let end = Date.now();
        diff = end - start;
        number = ppms * diff;
        document.getElementById("websitelifeCost").innerHTML = numberWithCommas(number.toFixed(2));
        document.getElementById("tempCountNum").innerHTML = numberWithCommas(number.toFixed(2));
        diff = end - lockdownStart;
        number = ppms * diff;
        document.getElementById("totalCost").innerHTML = numberWithCommas(number.toFixed(2));
}

function backgroundChange(){
    document.getElementById("curtain").style.display = "none"
}

function maketext(){
    document.getElementById("tempCount").style.display = "none";
    document.getElementById("upper-text").classList.add("animateText2");
    document.getElementById("upper-text").style.display = "block";
    document.getElementById("lockdownLife").style.display = "none";
    document.getElementById("websiteLife").classList.add("animateText");
    document.getElementById("websiteLife").style.display = "block";
}

function toggleStats(){
    if(statsdisplay == "website"){
        document.getElementById("websiteLife").classList.add("animateText");
        document.getElementById("lockdownLife").style.display = "none";
        document.getElementById("websiteLife").style.display = "block";
        statsdisplay="lockdown"
    } else {
        document.getElementById("lockdownLife").classList.add("animateText");
        document.getElementById("lockdownLife").style.display = "block";
        document.getElementById("websiteLife").style.display = "none";
        statsdisplay="website"
    }
}

websiteTimeCost = setInterval(visit, 100);
setTimeout(() => {
    //clearInterval(websiteTimeCost)
    backgroundChange()
    maketext()
    setInterval(toggleStats, 5000)
}, 10100);