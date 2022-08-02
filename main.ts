let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = randint(5, 60)
    basic.showIcon(IconNames.Happy)
    while (0 < timer) {
        timer += -1
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Skull)
    music.playMelody("E B C5 A B G A F ", 120)
})
