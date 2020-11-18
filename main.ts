input.onButtonPressed(Button.A, function () {
    if (y1 == 3) {
        Score += 3
        tecla_1.set(LedSpriteProperty.Y, 0)
        y1 = 0
    } else if (y1 == 2) {
        Score += 1
        tecla_1.set(LedSpriteProperty.Y, 0)
        y1 = 0
    } else {
        tecla_1.set(LedSpriteProperty.Y, 0)
        y1 = 0
    }
})
let y1 = 0
let tecla_1: game.LedSprite = null
tecla_1 = game.createSprite(1, y1)
y1 = 0
let Score = 0
basic.forever(function () {
    if (y1 >= 4) {
        tecla_1.delete()
        basic.showIcon(IconNames.No)
        basic.pause(200)
        basic.clearScreen()
        basic.showString("Gameover")
        basic.showString(" Final Score:")
        basic.showNumber(Score)
    } else {
        tecla_1.change(LedSpriteProperty.Y, 1)
        y1 += 1
        basic.pause(500)
    }
})
