input.onButtonPressed(Button.A, function () {
    SILENT = true
})
input.onButtonPressed(Button.B, function () {
    SILENT = false
})
let SILENT = false
radio.setGroup(1)
let ALARM = 0
pins.digitalWritePin(DigitalPin.P0, 1)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        ALARM = 0
    } else {
        ALARM = 1
    }
    radio.sendNumber(ALARM)
})
