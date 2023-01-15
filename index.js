let mySec= document.getElementById("second-Hand");
let myMin= document.getElementById("minutes-Hand");
let myHrs= document.getElementById("hour-Hand");

function clockHandRotation(){
    let currentDate= new Date;
    let sec=currentDate.getSeconds() *6;
    let min=currentDate.getMinutes() *6;
    let hrs=currentDate.getHours() *30;

    mySec.style.transform='rotate(' + sec + 'deg)';
    myMin.styles.transform='rotate(' +min + 'deg)';
    myHrs.styles.transform='rotate(' +hrs + 'deg)';

}
setInterval(clockHandRotation,1000)




// let mySecondsHand=document.getElementById("second-Hand");
// let myMinutesHand= document.getElementById("minute-Hand")
// let myHoursHand =document.getElementById("hour-Hand");

// function clockRotation(){
//    let currentDate= new Date();
//    let seconds= currentDate.getSeconds() *6;
//    let minutes=currentDate.getMinutes() *6;
//    let hours=currentDate.getHours() *30 + Math.round(minutes/12);

//    mySecondsHand.style.transform='rotate(' + seconds + 'deg)';
//    myMinutesHand.style.transform="rotate(" + minutes + "deg)";
//    myHoursHand.style.transform="rotate(" + hours + "deg)";

// }
// setInterval(clockRotation,100)
 




