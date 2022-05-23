let entf = 0
function send() {
    
}

basic.forever(function on_forever() {
    basic.pause(100)
    let entf = callibot.entfernung(KEinheit.cm)
    if (entf <= 7) {
        callibot.motorStop(KMotor.beide, KStop.Bremsen)
    } else if (callibot.readLineSensor(KSensor.links, KSensorStatus.dunkel) || callibot.readLineSensor(KSensor.rechts, KSensorStatus.dunkel)) {
        callibot.motorStop(KMotor.beide, KStop.Bremsen)
    } else {
        callibot.motor(KMotor.beide, KDir.vorwärts, 50)
    }
    
})
