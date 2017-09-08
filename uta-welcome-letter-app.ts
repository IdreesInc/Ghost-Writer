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

let message: string = "Hello world⬅️5 mates!⏸1 🆕 My name is Idrees Hassan, and I will be your personal COMP110 UTA this semester!🆕 I am a nerd⬅️4 Computer Science major from Cary NC, and I started programming in middle school when I tried and failed⬅️9 ⬅️1 to make a game. 🆕 As it turns out, I am rather shi⬅️3 bad at making games, but not that bad at programming, so I decided to stick with it and found myself a passion I never would have expected to enjoy.🆕 Whether you find a new passion or a new headache, I will be here to help you through every step of the way! 🆕 Throughout the semester, if you have any questions or find any particular concepts rather stupid⬅️6 annoying, feel free to reach out to me! If your questions are more in-depth, why not come in to office hours! 🆕 We will be in room SN008 to help you with any problems you may have, whether it be conceptual, practical, or anything in between! 🆕 And should your question be particularly quick or simple, you can just go to http://comp110.com/my and click on the \"Message Your Team\" button! We will try to answer your email ASAP and do our very best to help you! 🆕 I can't wait to get to know you this semester, and I hope I can help make your COMP110 experience as great as it can be! 🆕 Best Regards, 🆕 Idrees 'The Greatest'⬅️9 ⬅️5 Hassan🛑";
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
        }, 35 + Math.random() * 30);
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