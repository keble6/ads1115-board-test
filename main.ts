function _2decPlaces (num: number, places: number) {
    a = 10 ** places
    b = Math.round(num * a)
    return b / a
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= Nloops; index++) {
        ADC0 = "ch 0 = " + _2decPlaces(ADS1115.readADC(0), 3)
    }
    for (let index = 0; index <= Nloops; index++) {
        ADC1 = "ch 1 = " + _2decPlaces(ADS1115.readADC(1), 3)
    }
    for (let index = 0; index <= Nloops; index++) {
        ADC2 = "ch 2 = " + _2decPlaces(ADS1115.readADC(2), 3)
    }
    for (let index = 0; index <= Nloops; index++) {
        ADC3 = "ch 3 = " + _2decPlaces(ADS1115.readADC(3), 3)
    }
    serial.writeLine(ADC0)
    serial.writeLine(ADC1)
    serial.writeLine(ADC2)
    serial.writeLine(ADC3)
})
let ADC3 = ""
let ADC2 = ""
let ADC1 = ""
let ADC0 = ""
let b = 0
let a = 0
let Nloops = 0
Nloops = 50
ADS1115.setADDR(72)
ADS1115.setFSR(FSR.V4)
