function mainTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
     if (seconds < 10) {
        seconds = `0${seconds}`;
    }
 
    if (hours >= 6 && hours < 12) {
        $('.hiContainer').text('Добрий ранок!')
    } else if (hours >= 12 && hours < 18) {
        $('.hiContainer').text('Добрий день!')
    } else if (hours >= 18 && hours < 22) {
        $('.hiContainer').text('Добрий вечір!')
    } else {
        $('.hiContainer').text('Доброї ночі!')
    }

    $('#firstMain').text(hours);
    $('#secondMain').text(minutes);
    $('#thirtMain').text(seconds);

}
setInterval(mainTime, 1000);
mainTime();

let changeNum = 10

let miliS_StopWatch = 0
let secondStopWatch = 0
let minuteStopWatch = 0
let hourStopWatch = 0
function stopwatch(){
    miliS_StopWatch++

    if(secondStopWatch.toString().length === 1){
        secondStopWatch = `0${secondStopWatch}`
    }
    if(minuteStopWatch.toString().length === 1){
        minuteStopWatch = `0${minuteStopWatch}`
    }
    if(hourStopWatch.toString().length === 1){
        hourStopWatch = `0${hourStopWatch}`
    }

    if(miliS_StopWatch >= 100){
        miliS_StopWatch = 0
        secondStopWatch++
    } else if(secondStopWatch >= 60){
        secondStopWatch = 0
        minuteStopWatch++
    } else if(minuteStopWatch >= 100){
        minuteStopWatch = 0
        hourStopWatch++
    }

    $('#firstStopWatch').text(hourStopWatch)
    $('#secondStopWatch').text(minuteStopWatch)
    $('#thirtStopWatch').text(secondStopWatch)
    $('#fourStopWatch').text(miliS_StopWatch)
}
let intervalId = setInterval(stopwatch, changeNum);
stopwatch()


let chLet = true
clearInterval(intervalId);
changeNum = Infinity;
$('#firstStopWatch').text('00')
$('#secondStopWatch').text('00')
$('#thirtStopWatch').text('00')
$('#fourStopWatch').text('00')
chLet = false
$('#startStopWatch').click(function() {
    if(chLet == true){
        clearInterval(intervalId);
        changeNum = Infinity;
        chLet = false
        $('#startStopWatch').html('<i class="fa-solid fa-pause"></i>')
    } else {
        changeNum = 10; 
        intervalId = setInterval(stopwatch, changeNum); 
        chLet = true
        $('#startStopWatch').html('<i class="fa-solid fa-play"></i>')
    }
});
$('#resetStopWatch').click(function() {
    miliS_StopWatch = 0
    secondStopWatch = 0
    minuteStopWatch = 0
    hourStopWatch = 0

    clearInterval(intervalId);
    changeNum = Infinity;
    chLet = false
    
    $('#firstStopWatch').text('00')
    $('#secondStopWatch').text('00')
    $('#thirtStopWatch').text('00')
    $('#fourStopWatch').text('00')
})

$('#toMain').click(function() {
    $('.mainTime').css('display', 'flex')
    $('.stopWatchTime').css('display', 'none')
})
$('#toStopWatch').click(function() {
    $('.mainTime').css('display', 'none')
    $('.stopWatchTime').css('display', 'flex')
})