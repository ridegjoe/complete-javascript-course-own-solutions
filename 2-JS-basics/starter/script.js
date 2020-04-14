/**********************************
* Variables and data types
*/

// console.log('Hello World!!!');

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);
0
var job;
console.log(job);

job = 'Teacher';
console.log(job);

// variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/

/**********************************
* Variable mutation and type correction
*/

/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried; // defining multiple variables
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old '
+ job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old '
+ job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/


/**********************************
* Basic operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder)


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/**********************************
* Operator presedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
//x = x * 2;
x *= 2;
console.log(x);

x += 10;
console.log(x);

// x = x + 1;
// x += 1;
x++;
console.log(x);
*/

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). 
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

/*****************************
* MY OWN SOLUTION OF CODING CHALLENGE 1
*/
/*
var massMark, heightMark, massJohn, heightJohn;
massMark = 78;
heightMark = 1.8;

massJohn = 90;
heightJohn = 1.75;

bmiMark = massMark/(heightMark^2);
bmiJohn = massJohn/(heightJohn^2);

hasMarkHigherBmiThanJohn = bmiMark > bmiJohn;

console.log('Mark mass: ' + massMark + ' height ' + heightMark + ' BMI ' + bmiMark);
console.log('John mass: ' + massJohn + ' height ' + heightJohn + ' BMI ' + bmiJohn);

console.log("Is Mark's BMI higher than John's? " + hasMarkHigherBmiThanJohn);
*/

/*****************************
* OFFICIAL SOLUTION OF CODING CHALLENGE 1
*/
/*
var massMark = 78; // kg
var heightMark = 1.69 // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\s?' + markHigherBMI);
*/

/*****************************
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}


var massMark = 78; // kg
var heightMark = 1.69 // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
// var markHigherBMI = BMIMark > BMIJohn;
// console.log('Is Mark\'s BMI higher than John\s?' + markHigherBMI);
*/


/*****************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 20;

if(age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >=13 && age < 20) { // between 13 and 20 >= 13 AND age < 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man');
}
*/

/*****************************
* The Ternary Operator and Switch Statements
*/
/*
var firstName = 'John';
age = 22;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/

/*
if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
*/

// Switch statement
/*
var job = 'instructor';
switch(job) {
    case 'teacher':
    case 'instructor':
            console.log(firstName + ' reaches kids how to code');
            break;
    case 'driver':
            console.log(firstName + ' drives an uber in Lisbon');
            break;
    case 'designer':
            console.log(firstName + ' designs beautiful websites');
            break;
    default:
        console.log(firstName + ' does something else')
}

age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
}
*/

/*****************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') {
    console.log('The 77 operator does type coercion!')
}
*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// My own solution
/*
var johnsTeamsScore1 = 89;
var johnsTeamsScore2 = 120;
var johnsTeamsScore3 = 103;

var mikesTeamsScore1 = 116;
var mikesTeamsScore2 = 94;
var mikesTeamsScore3 = 123;

var marysTeamsScore1 = 97;
var marysTeamsScore2 = 134;
var marysTeamsScore3 = 105;

var johnsTeamsAverage = (johnsTeamsScore1 + johnsTeamsScore2 + johnsTeamsScore3)/3;
var mikesTeamsAverage = (mikesTeamsScore1 + mikesTeamsScore2 + mikesTeamsScore3)/3;
var marysTeamsAverage = (marysTeamsScore1 + marysTeamsScore2 + marysTeamsScore3)/3;

console.log('John\'s team average score = ' + johnsTeamsAverage);
console.log('Mike\'s team average score = ' + mikesTeamsAverage);
console.log('Mary\'s team average score = ' + marysTeamsAverage);

if (johnsTeamsAverage > mikesTeamsAverage && johnsTeamsAverage > marysTeamsAverage) {
    console.log('John\'s team won!');
} else if (mikesTeamsAverage > johnsTeamsAverage && mikesTeamsAverage > marysTeamsAverage) {
    console.log('Mike\'s team won!');
} else if (marysTeamsAverage > mikesTeamsAverage && marysTeamsAverage > johnsTeamsAverage) {
    console.log('Mary\'s team won!');
} else {
    console.log('It\'s a draw!');
}
*/

// Official solution
/*
console.log('')
var scoreJohn = (89 + 120 +103) / 3;
var scoreMike = (119 +94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary)

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMike) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw.');
}

/*
if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreJohn < scoreMike) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw')
}
*/

/*****************************
* Functions
*/

/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0 ) {
        console.log(firstName + ' retires in ' + retirement + ' years.');  
    } else {
        console.log(firstName + ' is already retired.')
    }
}


yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/*****************************
* Function Statements and Expressions
*/
/*
// Function declaration
function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':1
            return firstName + ' designes beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/*****************************
* Arrays
*/
/*

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);

console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
console.log(names);

// names[5] = 'Mary';
names[names.length] = 'Mary';
console.log(names);

// Different data types
console.log('')
var john = ['John', 'Smith', 1990, 'designer', false];
console.log(john);

john.push('blue');
console.log(john);

john.unshift('Mr');
console.log(john);

john.pop();
console.log(john);

john.pop();
console.log(john);

john.shift();
console.log(john);

console.log(john.indexOf(1990));
console.log(john.indexOf(23));

var isDesigner =john.indexOf('designer') === -1 ? 'John is NOT a designer' 
    : 'John IS a designer';
console.log(isDesigner);

*/

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. 
The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 
20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, and 
10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/


/*
/*****************************
* CODING CHALLENGE 3 - MY OWN SOLUUTION (JOZSEF RIDEG)
*/
/*
console.log('');
console.log('');
console.log('');
console.log('CODING CHALLENGE 3 - MY OWN SOLUTION')
console.log('');

var bills = [124, 48, 268];
var finalBills = [0, 0, 0];

console.log(bills);
console.log(bills[0]);
console.log(bills[1]);
console.log(bills[2]);

function calculateFinalBills(actualBill) {
    if (0 <= actualBill && actualBill < 50) {
        console.log(actualBill);
        actualBill += actualBill * 0.2;
        console.log(actualBill);
        return actualBill;
    } else if (50 <= actualBill && actualBill < 200) {
        console.log(actualBill);
        actualBill += actualBill * 0.15;
        console.log(actualBill);
        return actualBill;
    } else if (200 <= actualBill) {
        console.log(actualBill);
        actualBill += actualBill * 0.10;
        console.log(actualBill);
        return actualBill;
    } else if (0> actualBill) {
        console.log(actualBill);
        console.log('Actual bill cannot be a negative sum');
        return 0;
    }    
}

console.log('');

finalBills[0] = calculateFinalBills(bills[0]);
finalBills[1] = calculateFinalBills(bills[1]);
finalBills[2] = calculateFinalBills(bills[2]);

console.log('');
console.log('original bills');
console.log(bills);
console.log('bills + tips');
console.log(finalBills);

*/
/*
Testing calculateBills() function with 

actualBill = 0;
calculateFinalBills(actualBill);
console.log('')

actualBill = 25;
calculateFinalBills(actualBill);
console.log('')

actualBill = 100;
calculateFinalBills(actualBill);
console.log('')

actualBill = 300;
calculateFinalBills(actualBill);
console.log('')

actualBill = -5;
calculateFinalBills(actualBill);
console.log('')
*/

/*
/*****************************
* CODING CHALLENGE 3 - "OFFICIAL" SOLUTION BY Jonas Schmedtmann
*/
/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    return percentage * bill;
}

// testing with different values
console.log(tipCalculator(100));
console.log(tipCalculator(300));
console.log(tipCalculator(10));

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
console.log(tips);

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);
*/

/*
/*****************************
* Objects and properties
*/

/*
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john);
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);
console.log(john.isMarried);

console.log('');
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/*
/*****************************
* Objects and properties
*/

// Object literal
/*
// V1
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        return 2018 - birthYear;
    }
};
console.log(john.calcAge(1990));

*/

/*
// V2
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        return 2018 - this.birthYear;
    }
};
console.log(john.calcAge());
*/

/*
// V3
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        return 2018 - this.birthYear;
    }
};

// var age = john.calcAge();
// john.age = age;

john.age = john.calcAge();
 
console.log(john);
*/

/*
/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

/*
// MY OWN SOLUTION (JOZSEF RIDEG)
var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 75,
    height: 1.73,
    calcBMI: function() {
       return this.mass/(this.height^2); 
    }
};
john.bmi = john.calcBMI();


var mark = {
    firstName: 'Mark',
    lastName: 'Griffin',
    mass: 105,
    height: 1.95,
    calcBMI: function() {
        return this.mass/(this.height^2); 
     }
};
mark.bmi = mark.calcBMI();

console.log(john);
console.log(mark);

if (john.bmi > mark.bmi) {
    console.log(john.firstName + ' ' + john.lastName + ' has a higher BMI: ' + john.bmi + ' as ' + mark.firstName + ' ' + mark.lastName + ' with ' + mark.bmi)
} else if (john.bmi < mark.bmi) {
    console.log(mark.firstName + ' ' + mark.lastName + ' has a higher BMI: ' + mark.bmi + ' as ' + john.firstName + ' ' + john.lastName + ' with ' + john.bmi)
} else {
    console.log(mark.firstName + ' ' + mark.lastName + ' has the same BMI: ' + mark.bmi + ' as ' + john.firstName + ' ' + john.lastName + ' with ' + john.bmi)
}

*/


// OFFICIAL SOLUTION
/*
var john = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miler',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

john.calcBMI();
mark.calcBMI();
*/

/*
console.log(john, mark);
if (john.bmi > mark.bmi) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}
*/


// We can use calcBMI() directly, which will return the bmi itself.
// No need to write these codes in separate lines,
// You have to call john.calcBMI() and mark.calcBMI() only once!
// It the second and third part of the condition they are already calculated
// and returned!

/*
if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}
*/


/*
/*****************************
* Loops and iteration
*/

/*
for (var i = 0; i <= 20; i += 2) {
    console.log(i);
}
*/

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
// ...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

console.log('');

// For loop
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

console.log('');

// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}
*/

// continue and break statements
/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

console.log('');

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}
*/

// mini challenge: iterating in the reverse direction
// Looping backward - my own solution
/*
console.log('');
console.log(john.length)
console.log('');

for (var i = (john.length-1); i >= 0; i--) {
    console.log(john[i]);
}

console.log('');
// Looping backward - official solution
for (var i = john.length - 1; i >= 0; i--){
    console.log(john[i]);
}
*/

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 
20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, and 
10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). 
HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. 
The bills were $77, $375, $110, and $45.
Mark likes to tip 
20% of the bill when the bill is less than $100, 
10% when the bill is between $100 and $300, and 
25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. 
    HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0).
    After you have the sum of the array, divide it by the number of elements in it 
    (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
i
GOOD LUCK 😀
*/

var johnBills = {
    bills: [124, 48, 268, 180, 42],  // an array within the object, containing the bills
    calcTip: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (0 < this.bills[i] && this.bills[i] < 50) {
                this.tips.push(this.bills[i] * 0.2);
                this.finalBills.push(this.bills[i] + this.tips[i]);
                console.log('bill = ' + this.bills[i] + ' tip = ' + this.tips[i] + ' final bill = ' + this.finalBills[i]);
            } else if (50 <= this.bills[i] && this.bills[i] < 200) {
                this.tips.push(this.bills[i] * 0.15);
                this.finalBills.push(this.bills[i] + this.tips[i]);
                console.log('bill = ' + this.bills[i] + ' tip = ' + this.tips[i] + ' final bill = ' + this.finalBills[i]);
            } else if (200 <= this.bills[i] ) {
                this.tips.push(this.bills[i] * 0.10);
                this.finalBills.push(this.bills[i] + this.tips[i]);
                console.log('bill = ' + this.bills[i] + ' tip = ' + this.tips[i] + ' final bill = ' + this.finalBills[i]);
            } else {
                console.log(this.bills[i] +' is out of valid range');
            }
     
        }  
    },
    tips: [],
    finalBills: []
};

console.log('');
console.log(johnBills);

console.log('');
console.log(johnBills.bills);
console.log(johnBills.tips);
console.log(johnBills.finalBills);

console.log('calling johnBills.calcTip() method');
johnBills.calcTip();
console.log(johnBills.bills);
console.log(johnBills.tips);
console.log(johnBills.finalBills);

var markBills = {
    bills: [77, 375, 110, 45],  // an array within the object, containing the bills
    calcTip: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (0 < this.bills[i] && this.bills[i] < 100) {
                this.tips.push(this.bills[i] * 0.2);
                this.finalBills.push(this.bills[i] + this.tips[i]);
                console.log('bill = ' + this.bills[i] + ' tip = ' + this.tips[i] + ' final bill = ' + this.finalBills[i]);
            } else if (100 <= this.bills[i] && this.bills[i] < 300) {
                this.tips.push(this.bills[i] * 0.10);
                this.finalBills.push(this.bills[i] + this.tips[i]);
                console.log('bill = ' + this.bills[i] + ' tip = ' + this.tips[i] + ' final bill = ' + this.finalBills[i]);
            } else if (300 <= this.bills[i] ) {
                this.tips.push(this.bills[i] * 0.25);
                this.finalBills.push(this.bills[i] + this.tips[i]);
                console.log('bill = ' + this.bills[i] + ' tip = ' + this.tips[i] + ' final bill = ' + this.finalBills[i]);
            } else {
                console.log(this.bills[i] +' is out of valid range');
            }
        }    
    },
    tips: [],
    finalBills: []
};

console.log('');
console.log(markBills.bills);
console.log(markBills.tips);
console.log(markBills.finalBills);
console.log(markBills);
console.log('calling markBills.calcTip() method');
markBills.calcTip();
console.log(markBills.bills);
console.log(markBills.tips);
console.log(markBills.finalBills);
console.log(markBills);



function averageTipCalculator(billName) {
    sum = 0,
    averageTip = 0;
    tips= billName.tips;
    for (var i = 0; i < this.tips.length; i++) {
        console.log(this.tips[i]);
        this.sum += this.tips[i];
        console.log(this.sum);
    }
    console.log(this.sum);
    this.averageTip = this.sum / tips.length;
    console.log(' average tip is: ' + averageTip);
}

console.log('');
console.log('');
console.log('');
averageTipCalculator(johnBills);
console.log('');
averageTipCalculator(markBills);