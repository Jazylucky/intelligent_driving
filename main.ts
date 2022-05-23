let entf = 0
function send() {
    
}

basic.forever(function on_forever() {
    basic.pause(100)
    let entf = callibot.entfernung(KEinheit.cm)
    if (entf <= 10) {
        callibot.motor(KMotor.beide, KDir.rückwärts, 50)
    } else if (entf <= 20) {
        callibot.motorStop(KMotor.beide, KStop.Frei)
    } else if (callibot.readLineSensor(KSensor.links, KSensorStatus.dunkel) || callibot.readLineSensor(KSensor.rechts, KSensorStatus.dunkel)) {
        callibot.motorStop(KMotor.beide, KStop.Bremsen)
    } else {
        callibot.motor(KMotor.beide, KDir.vorwärts, 50)
    }
    
})
