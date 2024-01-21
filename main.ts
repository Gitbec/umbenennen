bluetooth.startUartService()
basic.showString("ho!")
basic.forever(function () {
    basic.showString("" + (input.lightLevel()))
    bluetooth.uartWriteNumber(input.lightLevel())
})
