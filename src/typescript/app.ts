///<reference path="./animal.d.ts"/>
///<reference path="./animals/dog.ts"/>

import dog = require('animals/dog');

var animal: IAnimal = new dog.Dog();
var eat: string = animal.eat();

document.write(eat);