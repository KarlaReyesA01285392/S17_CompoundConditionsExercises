let Celsius = 0
let Farenheit = 0
basic.forever(function () {
    Celsius = input.temperature()
    Farenheit = Celsius * 1.8 + 32
    if (Farenheit >= -22 && Farenheit <= 14) {
        basic.showString("Stay at home, there is heavy snow.")
        basic.showIcon(IconNames.No)
    } else if (Farenheit >= 15 && Farenheit <= 23) {
        basic.showString("Go for your skis and have fun!")
        basic.showIcon(IconNames.Yes)
    } else if (Farenheit >= 24 && Farenheit <= 32) {
        basic.showString("Warning! You can only ski in the highest parts.")
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else if (Farenheit >= 33) {
        basic.showString("Sorry, it is not ski season.")
        basic.showIcon(IconNames.Sad)
    } else {
    	
    }
})
