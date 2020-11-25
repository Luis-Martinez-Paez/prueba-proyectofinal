input.onButtonPressed(Button.A, function () {
    music.ringTone(349)
    music.stopAllSounds()
    if (y1 == 3) {
        Score_1 += 3
        tecla_1.set(LedSpriteProperty.Y, 0)
        y1 = 0
    } else if (y1 == 2) {
        Score_1 += 1
        tecla_1.set(LedSpriteProperty.Y, 0)
        y1 = 0
    } else {
        tecla_1.set(LedSpriteProperty.Y, 0)
        y1 = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    if (input.lightLevel() < 50 && input.temperature() == -5) {
        if (y1 >= 4 || y2 <= 0) {
            basic.clearScreen()
            tecla_1.delete()
            tecla_2.delete()
            line1.delete()
            line2.delete()
            line3.delete()
            basic.showIcon(IconNames.No)
            basic.pause(200)
            basic.clearScreen()
            basic.showString("Gameover")
            basic.showString(" Final Score:")
            basic.showNumber(Score_1 + Score_2)
        } else {
            tecla_2.set(LedSpriteProperty.Y, 4)
            randomNumber1 = randint(1, 3)
            randomNumber2 = randint(1, 3)
            if (randomNumber1 == 1) {
                tecla_1.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
                y1 += 1
            } else if (randomNumber1 == 2) {
                tecla_1.change(LedSpriteProperty.Y, 1)
                basic.pause(700)
                y1 += 1
            } else {
                tecla_1.change(LedSpriteProperty.Y, 1)
                basic.pause(800)
                y1 += 1
            }
            if (randomNumber2 == 1) {
                tecla_2.change(LedSpriteProperty.Y, -1)
                basic.pause(500)
                y2 += -1
            } else if (randomNumber2 == 2) {
                tecla_2.change(LedSpriteProperty.Y, -1)
                basic.pause(700)
                y2 += -1
            } else {
                tecla_2.change(LedSpriteProperty.Y, -1)
                basic.pause(800)
                y2 += -1
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    music.ringTone(392)
    music.stopAllSounds()
    if (y2 == 3) {
        Score_2 += 3
        tecla_2.set(LedSpriteProperty.Y, 0)
        y2 = 0
    } else if (y2 == 2) {
        Score_2 += 1
        tecla_2.set(LedSpriteProperty.Y, 0)
        y2 = 0
    } else {
        tecla_1.set(LedSpriteProperty.Y, 0)
        y1 = 0
    }
})
let randomNumber2 = 0
let randomNumber1 = 0
let line3: game.LedSprite = null
let line2: game.LedSprite = null
let line1: game.LedSprite = null
let Score_2 = 0
let Score_1 = 0
let y1 = 0
let tecla_1: game.LedSprite = null
let y2 = 0
let tecla_2: game.LedSprite = null
tecla_2 = game.createSprite(3, y2)
tecla_1 = game.createSprite(1, y1)
y1 = 0
Score_1 = 0
y2 = 0
Score_2 = 0
let temperature = input.temperature()
let lightLevel = input.lightLevel()
basic.forever(function () {
    for (let y_line1 = 0; y_line1 <= 3; y_line1++) {
        line1 = game.createSprite(0, y_line1)
    }
    for (let y_line2 = 0; y_line2 <= 3; y_line2++) {
        line2 = game.createSprite(2, y_line2)
    }
    for (let y_line3 = 0; y_line3 <= 3; y_line3++) {
        line3 = game.createSprite(4, y_line3)
    }
    if (y1 >= 4 || y2 >= 4) {
        basic.clearScreen()
        tecla_1.delete()
        tecla_2.delete()
        line1.delete()
        line2.delete()
        line3.delete()
        basic.showIcon(IconNames.No)
        basic.pause(200)
        basic.clearScreen()
        basic.showString("Gameover")
        basic.showString(" Final Score:")
        basic.showNumber(Score_1 + Score_2)
    } else {
        randomNumber1 = randint(1, 3)
        randomNumber2 = randint(1, 3)
        if (randomNumber1 == 1) {
            tecla_1.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
            y1 += 1
        } else if (randomNumber1 == 2) {
            tecla_1.change(LedSpriteProperty.Y, 1)
            basic.pause(700)
            y1 += 1
        } else {
            tecla_1.change(LedSpriteProperty.Y, 1)
            basic.pause(800)
            y1 += 1
        }
        if (randomNumber2 == 1) {
            tecla_2.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
            y2 += 1
        } else if (randomNumber2 == 2) {
            tecla_2.change(LedSpriteProperty.Y, 1)
            basic.pause(700)
            y2 += 1
        } else {
            tecla_2.change(LedSpriteProperty.Y, 1)
            basic.pause(800)
            y2 += 1
        }
    }
})
