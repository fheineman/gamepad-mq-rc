let motorR = 0
let motorL = 0
let joyV = 0
let joyH = 0
let directionR = 0
let directionL = 0
let directionB = 0
let directionF = 0
radio.setGroup(1)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) > 550) {
        directionF = 1
        directionB = 0
    } else if (pins.analogReadPin(AnalogPin.P2) < 450) {
        directionF = 0
        directionB = 1
    } else {
        directionF = 0
        directionB = 0
    }
    if (pins.analogReadPin(AnalogPin.P1) < 450) {
        directionL = 1
        directionR = 0
    } else if (pins.analogReadPin(AnalogPin.P1) > 550) {
        directionL = 0
        directionR = 1
    } else {
        directionL = 0
        directionR = 0
    }
})
basic.forever(function () {
    joyH = pins.analogReadPin(AnalogPin.P1)
    joyV = pins.analogReadPin(AnalogPin.P2)
    if (joyH < 460) {
        motorL = 0 - 460
        motorR = joyH * -1
    } else if (false && (0 > 400 && pins.analogReadPin(AnalogPin.P1) < 600)) {
    	
    } else if (false && (0 > 400 && pins.analogReadPin(AnalogPin.P2) < 600)) {
    	
    } else if (pins.analogReadPin(AnalogPin.P1) > 550 && (pins.analogReadPin(AnalogPin.P2) > 400 && pins.analogReadPin(AnalogPin.P2) < 600)) {
    	
    } else {
    	
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("Up")
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("Down")
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        radio.sendString("LEDG")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        radio.sendString("LEDY")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        radio.sendString("LEDR")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        radio.sendString("LEDB")
    } else if (input.buttonIsPressed(Button.AB)) {
        radio.sendString("LEDW")
    }
})
basic.forever(function () {
    radio.sendValue("F", pins.analogReadPin(AnalogPin.P2))
    radio.sendValue("B", pins.analogReadPin(AnalogPin.P2))
    radio.sendValue("L", pins.analogReadPin(AnalogPin.P1))
    radio.sendValue("R", pins.analogReadPin(AnalogPin.P1))
    radio.sendString("S")
})
