let hourAngle=0,minAngle=0,secAngle=0
let hourHand=document.getElementById("hour"),
 minHand=document.getElementById("min"),
 secHand=document.getElementById("sec")

function updateClock() {
    const secIncrement=6/60    
    const minIncrement=0.1/60    
    const hourIncrement=0.0083/60    

    hourAngle+=hourIncrement
    minAngle+=minIncrement
    secAngle+=secIncrement

    hourHand.style.transform=`rotate(${hourAngle}deg)`
    minHand.style.transform=`rotate(${minAngle}deg)`
    secHand.style.transform=`rotate(${secAngle}deg)`
    requestAnimationFrame(updateClock)
}

function initClock() {
    const time = new Date();
    const hour=time.getHours()%12
    const min=time.getMinutes()
    const sec=time.getSeconds()

    hourAngle=(hour*30)+(min*0.5)
    minAngle=(min*6)+(0.1*sec)
    secAngle=(sec*6)

    requestAnimationFrame(updateClock)
}

initClock()

let digitalClock=document.getElementById("digital")