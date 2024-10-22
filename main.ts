/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott
 * Created on: oct 2024
 * This program genrats two random numbers and compaers them
*/
 
let randomeNumberOne: number =0
let randomeNumberTwo: number =0

basic.clearScreen()
randomeNumberOne = randint(0, 99)
randomeNumberTwo = randint(0, 99)
pause(1000)
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    basic.showNumber(randomeNumberOne)
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    basic.showNumber(randomeNumberTwo)
    basic.showIcon(IconNames.Happy)
})

if (randomeNumberOne < randomeNumberTwo) {
    basic.showString('randomeNumberOne < randomeNumberTwo')
    basic.showIcon(IconNames.Happy)
}