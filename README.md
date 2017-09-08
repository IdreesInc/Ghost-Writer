## About Ghost-Writer
### A simple TypeScript program that simulates a user writing out a message, complete with pausing and backspacing.
![](https://media.giphy.com/media/XIqCQx02E1U9W/giphy-downsized.gif)

### Some examples:
In this repository, you can see two examples utilizing the method. [Click here](http://apps.introcs.com/idrees/ps00-card/) to see the letter to mum example, and [click here](http://apps.introcs.com/idrees/letter/) to see the UTA welcome letter in action!

## How it works

Ghost-Writer uses a custom "scripting language" to write out a letter dynamically. Using emojis, you can command the writer to pause for a few seconds, backspace, write a new line, and stop. Pretty simple stuff really.

## How to use it

To use Ghost-Writer, change the script to anything you would like to write, making sure to follow the documentation below. Note that every emoji command must be followed with a "space" (Ex. "🆕 " or "⬅️9 ").

### Documentation:
| Emoji Command  | Description   |
| :--------------: |:-------------:|
|🆕                | Creates a new line, which can be backspaced if need be |
|⬅️[number]        | Backspaces by the specified amount, though has a limit of 9 characters. If you need to backspace more, just add another command, but be aware that backspacing an emoji character can sometimes take more than one "backspace" to complete (blame unicode) |
|⏸[number]        | Pauses the writing for the specified number of "ticks." Note that ticks are slightly random, and depend on the update rate. Once again, number is limited to 0-9. |
|🛑                | Stops the program from updating and clearing, and runs the callback |

### Scripts for each example:
[**Letter to Mum**](http://apps.introcs.com/idrees/ps00-card/): 
```
"Hello world⬅️5 mum!⏸1 🆕 It has been a while⬅️7 forever since I last showed you a program.⏸1 🆕 Well youre⬅️2 're luck has just run out!🆕 My COMP110 UTA professor⬅️9  boss⬅️4  Kris⬅️4 ⏸4 ⬅️9 ⬅️8 Someone has required me to make you a card as my first assignment.⏸3 🆕 I don't know why either.🆕 Either way I just had to ⬅️7 wanted to say hi, and that I can't wait to come home so that I can do my laundry⬅️6 ⬅️7  see you again!🆕 Love you always, and see you soon! ⏸1 ♥⏸1 ♥⏸1 ♥🛑"
```

[**UTA Welcome Letter**](http://apps.introcs.com/idrees/letter/):
```
"Hello world⬅️5 mates!⏸1 🆕 My name is Idrees Hassan, and I will be your personal COMP110 UTA this semester!🆕 I am a nerd⬅️4 Computer Science major from Cary NC, and I started programming in middle school when I tried and failed⬅️9 ⬅️1 to make a game. 🆕 As it turns out, I am rather shi⬅️3 bad at making games, but not that bad at programming, so I decided to stick with it and found myself a passion I never would have expected to enjoy.🆕 Whether you find a new passion or a new headache, I will be here to help you through every step of the way! 🆕 Throughout the semester, if you have any questions or find any particular concepts rather stupid⬅️6 annoying, feel free to reach out to me! If your questions are more in-depth, why not come in to office hours! 🆕 We will be in room SN008 to help you with any problems you may have, whether it be conceptual, practical, or anything in between! 🆕 And should your question be particularly quick or simple, you can just go to http://comp110.com/my and click on the \"Message Your Team\" button! We will try to answer your email ASAP and do our very best to help you! 🆕 I can't wait to get to know you this semester, and I hope I can help make your COMP110 experience as great as it can be! 🆕 Best Regards, 🆕 Idrees 'The Greatest'⬅️9 ⬅️5 Hassan🛑"
```
