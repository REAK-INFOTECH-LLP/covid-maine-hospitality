const start = Date.now();
// For 4 billion
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
        document.getElementById("websitelifeCost6").innerHTML = numberWithCommas((number*1.5).toFixed(2)); 
        diff = end - lockdownStart;
        number = ppms * diff;
        document.getElementById("totalCost").innerHTML = numberWithCommas(number.toFixed(2));
        document.getElementById("totalCost6").innerHTML = numberWithCommas((number*1.5).toFixed(2));
}

function backgroundChange(){
    document.getElementById("curtain").style.display = "none"
}

function maketext(){
    document.getElementById("tempCount").style.display = "none";
    document.getElementById("title-text").style.display = "block";
    document.getElementById("upper-text").style.display = "block";
}

function toggleStats(){
    if(statsdisplay == "website"){
        document.getElementById("lockdownLife").style.display = "none";
        document.getElementById("websiteLife").style.display = "block";
        statsdisplay="lockdown"
    } else {
        document.getElementById("lockdownLife").style.display = "block";
        document.getElementById("websiteLife").style.display = "none";
        statsdisplay="website"
    }
}

function setPPS(){
    let tmp = ppms * 1000;
    document.getElementById("1").innerHTML = "$ "+tmp.toFixed(2)+" Per Second";
    tmp = ppms * 1000 * 60;
    document.getElementById("2").innerHTML = "$ "+tmp.toFixed(2)+" Per Minute"
    tmp = ppms * 1000 * 60 * 60;
    document.getElementById("3").innerHTML = "$ "+tmp.toFixed(2)+" Per Hour";
    tmp = ppms * 1000 * 60 * 60 * 24;
    document.getElementById("4").innerHTML = "$ "+tmp.toFixed(2)+" Per Day";

    tmp = ppms * 1000 * 1.5;
    document.getElementById("61").innerHTML = "$ "+tmp.toFixed(2)+" Per Second";
    tmp = ppms * 1000 * 60 * 1.5;
    document.getElementById("62").innerHTML = "$ "+tmp.toFixed(2)+" Per Minute"
    tmp = ppms * 1000 * 60 * 60 * 1.5;
    document.getElementById("63").innerHTML = "$ "+tmp.toFixed(2)+" Per Hour";
    tmp = ppms * 1000 * 60 * 60 * 24 * 1.5;
    document.getElementById("64").innerHTML = "$ "+tmp.toFixed(2)+" Per Day";
}
websiteTimeCost = setInterval(visit, 100);
setTimeout(() => {
    //clearInterval(websiteTimeCost)
    backgroundChange()
    maketext()
    setPPS();
}, 10100);