function _2decPlaces (num: number, places: number) {
    a = 10 ** places
    b = Math.round(num * a)
    return b / a
}
input.onButtonPressed(Button.A, function () {
    serial.writeLine("ch 0 = " + _2decPlaces(ADS1115.readADC(0), 3))
    basic.pause(1000)
    serial.writeLine("ch 1 = " + _2decPlaces(ADS1115.readADC(1), 3))
    basic.pause(1000)
    serial.writeLine("ch 2 = " + _2decPlaces(ADS1115.readADC(2), 3))
    basic.pause(1000)
    serial.writeLine("ch 3 = " + _2decPlaces(ADS1115.readADC(3), 3))
})
let b = 0
let a = 0
ADS1115.setADDR(72)
ADS1115.setFSR(FSR.V4)
