function Start () {
    Start()
}
input.onButtonPressed(Button.A, function () {
    if (Tap == false) {
        Tap = true
        if (Game == true) {
            Gamer_A += 1
        } else {
            Gamer_A = Gamer_A - 1
        }
        Winner("A", Gamer_A)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Tap == false) {
        Tap = true
        if (Game == true) {
            Gamer_B += 1
        } else {
            Gamer_B = Gamer_B - 1
        }
        Winner("B", Gamer_B)
    }
})
function Winner (text: string, číslo: number) {
    basic.showString(text)
    basic.showNumber(číslo)
    if (číslo == 5) {
        basic.showString("Winner is: ")
        basic.showString(text)
    } else {
        basic.pause(1000)
        Tap = false
        Game = false
    }
}
let Game = false
let Tap = false
let Gamer_B = 0
let Gamer_A = 0
Gamer_A = 0
Gamer_B = 0
basic.showString("START")
basic.forever(function () {
    if (Tap == false && Game == false) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(randint(2000, 5000))
        if (Tap == false) {
            Game = true
            basic.clearScreen()
        }
    }
})
