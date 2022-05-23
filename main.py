entf = 0

def send():
    pass   


def on_forever():
    basic.pause(100)
    entf = callibot.entfernung(KEinheit.CM)



    if entf <= 7:
        callibot.motor_stop(KMotor.BEIDE, KStop.BREMSEN)

    elif callibot.read_line_sensor(KSensor.LINKS, KSensorStatus.DUNKEL) or callibot.read_line_sensor(KSensor.RECHTS, KSensorStatus.DUNKEL):
        callibot.motor_stop(KMotor.BEIDE, KStop.BREMSEN)
        
    else:
        callibot.motor(KMotor.BEIDE, KDir.VORWÄRTS, 50)
        

    



    
basic.forever(on_forever)
