// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.

//refreshes date everytime funtion is ran
let rightNow = new Date();

function minutesSinceMidnight(time){
    let midnight = new Date;
    midnight.setHours(0,0,0,0);
    return ((time.getHours() - midnight.getHours())*60) + (time.getMinutes()-midnight.getMinutes());
}

console.log(minutesSinceMidnight(rightNow));