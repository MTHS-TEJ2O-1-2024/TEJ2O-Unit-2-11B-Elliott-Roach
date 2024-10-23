/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott
 * Created on: oct 2024
 * This program generates two random numbers and compares them
*/
 
let randomeNumberOne: number =0
let randomeNumberTwo: number =0

//clean
basic.clearScreen()
randomeNumberOne = randint(0, 99)
randomeNumberTwo = randint(0, 99)
pause(1000)
basic.showIcon(IconNames.Happy)

//show number one
input.onButtonPressed(Button.A, function () {
    basic.showString('#1 :')
    basic.showNumber(randomeNumberOne)
    basic.showIcon(IconNames.Happy)
})

//show number two
input.onButtonPressed(Button.B, function () {
    basic.showString('#2 :')
    basic.showNumber(randomeNumberTwo)
    basic.showIcon(IconNames.Happy)
})

//compares number one and two
input.onGesture(Gesture.Shake, function () {

    if (randomeNumberOne < randomeNumberTwo) {
        basic.showNumber(randomeNumberOne)
        basic.showString('<')
        basic.showNumber(randomeNumberTwo)
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showNumber(randomeNumberOne)
        basic.showString('>')
        basic.showNumber(randomeNumberTwo)
        basic.showIcon(IconNames.Sad)
    }
})
