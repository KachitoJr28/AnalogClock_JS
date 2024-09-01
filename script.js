
// currentTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
// console.log(currentTime)


function rotateHands(hourAngle,minAngle,secAngle) {
    let hourHand=document.getElementById("hour")
    hourHand.style.transform=`rotate(${hourAngle}deg)`

    let minHand=document.getElementById("min")
    minHand.style.transform=`rotate(${minAngle}deg)`

    let secHand=document.getElementById("sec")
    secHand.style.transform=`rotate(${secAngle}deg)`

}

function updateClock() {
    const time = new Date();
    const hour=time.getHours()
    const min=time.getMinutes()
    const sec=time.getSeconds()

    const hourAngle=(hour*30)+(min*0.5)
    const minAngle=(min*6)+(0.1*sec)
    const secAngle=(sec*6)

    rotateHands(hourAngle,minAngle,secAngle)
}

setInterval(updateClock, 1000);
// updateClock()

let digitalClock=document.getElementById("digital")