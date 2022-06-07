// 1
// function getTimer() {
//     invertId = setInterval(()=>{
//         p_timer.innerText += "timer  "
//     }, 4000);
// }
// getTimer()

// 2
// function getcounter() {
//     invertId = setInterval(()=>{
//         p_counter.innerText += "counter  "
//     }, 6000);
// }
// getcounter()

// var loveInvertId;
// function loveProgram(){
//     loveInvertId = setInterval(()=>{
//         love_txt.innerText += "i love timers  "
//     }, 5000)
// }
// loveProgram()

// function stopLove(){
//     clearInterval(loveInvertId)
// }

// // 4-לא טוב
// var counter = 0;
// var studentNameId;

// function getStudentName(){
//     var classNamesArr = ["Telly","Mally","Dali","Dani"]
//         studentNameId = setInterval(()=>{
//             student_name_txt.innerText += classNamesArr[counter++]
//     }, 4000)
// }
// getStudentName()

// function clearStudentName(){
//     clearInterval(studentNameId)
// }

5
// function getEcsactTime(){
//     timeId = setInterval(()=>{
//         var currentHour = new Date()
//         document.getElementById("now_time").innerText += 
//         currentHour.getHours()+ " : " +currentHour.getMinutes()+ " : " +currentHour.getSeconds()+ "\n"
//     }, 1000)
// }
// getEcsactTime()

// 6
var minutesDownId;
var minuetsCountDown = 0
function timeDown(){
    var userTime = document.getElementById("minutes_num").value
    minutesDownId = setInterval(()=>{
        if(minuetsCountDown<userTime){
            time_down_p.innerText = userTime-- +"\n"
            minuetsCountDown++
        }}, 1000)
}

// פתרון שונה
// function min () {
//     var minute = min_input.value -1;
//     var sec = 59;
//     setInterval(function() {
//         if (minute<0){
//             return text5.innerHTML= "0:00"
//         }
//     text5.innerHTML = minute + " : " + sec;
//       sec--;
//       if (sec == 00) {
//         sec=59
//         minute --
//       }
//     }, 1000);
//   }

var timerId ;
function startRunning(){
    timerId = setInterval(()=>{
        timeDown()
    }, 1000);
}

function stopRunning(){
    clearInterval(timerId);
}

function complexBtn(){
    if(timerId == null){
        startRunning()
        btn_start_end.innerText = "STOP";
    }
    else{
        stopRunning();
        btn_start_end.innerText = "RUN";
        btn_start_end.style.backgroundcolor = "orange";
        timerId = null
    }
}

function alarmClock(){
    var userSetTime = document.getElementById("alarm_clock").value
    var nowTime = new Date()
    var userSetTimeHour = parseInt( userSetTime.substr(0,3))
    var userSetTimeMinutes =parseInt (userSetTime.substr(3,5))
    var globalHour =nowTime.getHours()
    var globalMinute =nowTime.getMinutes()
    var remainTime = Math.abs((userSetTimeHour-globalHour))+" : "+Math.abs((userSetTimeMinutes-globalMinute))

    if(userSetTimeMinutes == 00){
        userSetTimeMinutes = 60
        remainTime = Math.abs(userSetTimeMinutes - globalMinute)
    }
    if(globalHour<userSetTimeHour){
        remainTime = Math.abs(userSetTimeMinutes-globalMinute)
    }

    document.getElementById("time_left").innerText = remainTime
}
