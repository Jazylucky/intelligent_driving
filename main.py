entf = 0

def send():
    pass   


def on_forever():
    basic.pause(100)
    entf = callibot.entfernung(KEinheit.CM)



    if entf <= 7:
        callibot.motor_stop(KMotor.BEIDE, KStop.BREMSEN)

    if callibot.read_line_sensor(KSensor.LINKS, KSensorStatus.DUNKEL) or callibot.read_line_sensor(KSensor.RECHTS, KSensorStatus.DUNKEL):
        callibot.motor_stop(KMotor.BEIDE, KStop.BREMSEN)
        
    
        

    



    
basic.forever(on_forever)
