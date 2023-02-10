input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
input.onButtonPressed(Button.B, function () {
    Moisture = pins.analogReadPin(AnalogPin.P0)
    basic.showString("" + (Moisture))
})
let GraphMoisture = 0
let Moisture = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    Moisture = pins.analogReadPin(AnalogPin.P0)
    if (Moisture > 400) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    GraphMoisture = Math.map(Moisture, 750, 350, 0, 25)
    led.plotBarGraph(
    GraphMoisture,
    25
    )
    basic.pause(5000)
})
