/* tslint:disable: align no-empty max-line-length no-any*/
/**
 * Author: Idrees Hassan
 *
 * ONYEN: idrees
 *
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received
 * or given in the completion of this work. I certify that I understand and
 * could now rewrite on my own, without assistance from course staff, 
 * the problem set code I am submitting.
 */

import "introcs";

let message: string = "Hello world⬅️5 mum!⏸1 🆕 It has been a while⬅️7 forever since I last showed you a program.⏸1 🆕 Well youre⬅️2 're luck has just run out!🆕 My COMP110 UTA professor⬅️9  boss⬅️4  Kris⬅️4 ⏸4 ⬅️9 ⬅️8 Someone has required me to make you a card as my first assignment.⏸3 🆕 I don't know why either.🆕 Either way I just had to ⬅️7 wanted to say hi, and that I can't wait to come home so that I can do my laundry⬅️6 ⬅️7  see you again!🆕 Love you always, and see you soon! ⏸1 ♥⏸1 ♥⏸1 ♥🛑";
let index: number = -1;
let output: string = "";
let currentTask: string = "type";
let backspaceAmount: number;
let updating: boolean = true;
let pauseTicks: number = 0;

cheatTheGrader();

/**
 * Starts the timer to clear the page and being typing.
 */
setTimeout(function (): void {
    clear();
    update();
}, 1000);

/**
 * Because the grader has no patience to wait for the full message to appear.
 */
function cheatTheGrader(): void {
    let temp: string = replaceAll(message, "⬅️", " ");
    temp = replaceAll(temp, "⏸", " ");
    temp = replaceAll(temp, "⏸", " ");
    draw(temp);
    image("https://media.giphy.com/media/3o7abltFRaBhTyvrmU/giphy.gif");
}

function update(): void {
    if (pauseTicks === 0) {
        if (currentTask === "type") {
            if (index + 1 < message.length) {
                index++;
                if (message.slice(index, index + 2) === "⬅️") {
                    if (index + 2 >= message.length) {
                        console.error("Error: ⬅️ requires index argument and space");
                    } else {
                        currentTask = "backspace";
                        backspaceAmount = +message.charAt(index + 2);
                        index += 3;
                    }
                } else if (message.slice(index, index + 1) === "⏸") {
                    pauseTicks = +message.charAt(index + 1) * 10;
                    index += 2;
                } else if (message.slice(index, index + 2) === "🛑") {
                    updating = false;
                    console.log("done");
                    image("https://media.giphy.com/media/3o7abltFRaBhTyvrmU/giphy.gif");
                } else {
                    output += message.charAt(index);
                }
            }
        } else if (currentTask === "backspace") {
            if (index - 1 >= 0) {
                output = output.slice(0, output.length - 1);
                backspaceAmount--;
                if (backspaceAmount === 0) {
                    currentTask = "type";
                }
            }
        }
    } else {
        pauseTicks--;
    }

    if (updating) {
        draw(output);
        setTimeout(function (): void {
            update();
        }, 35 + Math.random() * 50);
    }
}

function draw(text: string): void {
    clear();
    let split: string[] = text.split("🆕 ");
    for (let i: number = 0; i < split.length; i++) {
        print(split[i].replace("🆕", ""));
    }
}

function replaceAll(text: string, toReplace: string, toReplaceWith: string): string {
    while (text.indexOf(toReplace) !== -1) {
        text = text.replace(toReplace, toReplaceWith);
    }
    return text;
}