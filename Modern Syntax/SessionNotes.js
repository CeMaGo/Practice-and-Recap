export class MyClass {

    /** 
     * My Method
     * * Important informatin is highlighted
     * ! Deprecated method, do not use
     * ? Should this method be exposed in the public API?
     * TODO: refactor this method so that it conforms to the API
     * @param myParam The parameter for this method
     */

    public MyMethod(myParam: any):void {
        let myVar: number = 123;

        //* This is highlighted
        if (myVar > 0) {
            throw new TypeError(); //! This is an alert
        }

         //? This is a query
        let x =1; 

        //// this line of Code() = commentedOut;

        //TODO Creat some test cases
}
}



 // ! Destructuring Assignment :
 //? The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack
 //? values from arrays, or properties from objects, into distinct variables. Destructuring doesn't mutate
 //? the original array or object. 


const greekLetters = ["alpha","beta","gamma","delta"];

/**
 //? If we want to declare the values of greekLetters as distinct variables, accessing the might
 //? turn out to be quite tedious. 

// TODO Without Destructuring
//? commented out to avoid linting errors beautiful redlines
*/
// * const firstLetter =  greekLetters[0];
// * const secondLetter = greekLetters[1];
// * const thirdLetter = greekLetters[2];
// * const fourthLetter = greekLetters[3];
// firstLetter -> 'alpha'
// secondLetter -> 'beta'
// etc.

//TODO With Destructuring
// * const [firstLetter, secondLetter, thirdLetter, fourthLetter] = greekLetters;
// firstLetter -> 'alpha'
// secondLetter -> 'beta'
// etc.

//? The result of the two code snippets is the same destructuring array makes for more readable and concise code.

//? is you don't need or want the second and fourth value in our initial array geekLetters
//? there's an option to skip values during the process of destructuring.

// * const [firstLetter, , thirdLetter] = greekLetters;
//firstLetter -> 'alpha'
// thirdLetter -> 'gamma'

//? thirdLetter now contains the third value of greekLetters. The extra comma skips the value at
//? the respective position in greekLetters. The fourth value is ignored because the destructuring 
//? assignment ended.

//? Skipping values with extra commas can quickly become unreadable.
//? Imagine wanting to skip 5 values: const [a,,,,,,g] = x; General advice is to be mindful with this feature.

//TODO Destructuring Objects

const coachObject = {
    name: "Sam",
    mood: "great",
    skills: "amazing",
    score: 9999,
};

//? You can use destructuring assignment like this:

// * const {name, mood, skills, score} = coachObject;
// name -> 'Sam'
// mood -> 'great'
// etc.

//? Now you've got name, mood, skills, score available as distinct variables.

//? In contrast to array destructuring the variable names are not arbitrary and do not depend on the 
//? order. Here the names of the variables have to match the  keys of the object properties,

//? You can rename the variable while destructuring:

// * const { name: firstName } = coachObject;
// firstName -> 'Sam'
// name -> undefined

//? You can also set a default value of a property in case it does not exist:

//* const { isAdmin = true } = coachObject;
// isAdmin = true

// ! Rest and Spread Syntax

//? The rest and spread syntax looks deceptively similar. Both are identified by three dots: ... .
//? They do two different things though, depending in which context ... is used.

//TODO Rest Syntax (...)

//? The rests syntax allows you to say :"Put the rest into this variable" when using destructuring
//? assignment or declaring function parameters.

//TODO You can use it with arrays:

//* const greekLetters = ["alpha", "beta", "gamma", "delta"];
//* const [firtsLetter, ...allTheOtherLetters] = greekLetters;
// firstLetter -> 'alpha'
// allTheOtherLetters -> ["beta", "gamma", "delta"]

//? Or with objects:

//* const coachObject = {
//*    name: "Sam",
//*    mood: "great",
//*    skills: "amaying",
//*    score: 9999,
//* };

//* const { name, score, ...theRestOfTheCoachObject } = coachObject;
// name -> 'Sam'
// score -> 9999
// theRestOfTheCoachObject -> { mood: 'great', skills: 'amazing'}

//TODO And even with function parameters:

function logLetters(firstLetter, ...moreLetters) {
    console.log("the first letter is ", firstLetter);
    console.log("even more letters ", moreLetters);
}

logLetters("alpha", "beta", "gamma", "delta");
// logs: 
// the first letter is alpha
// even more letters (3) ['beta', 'gamma', 'delta'])

//TODO Spread Syntax (...)

//? The spread syntax allows you to say: "spread everything inside this variable into here" when
//? declaring array or object literals or calling functions.

//? It works like this with array literal declarations:

//* const greekLetters = ["alpha", "beta", "gamma", "delta"];
//* const moreGreelLetters = [...greekLetters, "epsilon", "zeta"];
// moreGreekLetters -> ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta']

//? You can spread two (or more) arrays into another array ...

//* const redColors = ["crimson", "pink", "purple"];
//* const blueColors = ["navy", "teal", "sky"];
//* const mixedColors = [...redColors, ...blueColors];
// mixedColors -> ['crimson', 'pink', 'purple', 'navy', 'teal', 'sky']; 

//? ...and it matters where respectively you spread one array into another:

const cats = ["cat", "cat", "cat"];
const dogs = ["dog", "dog", "dog"];

const catsAndDogs = [...cats, ...dogs]
// catsAndDogs -> ['cat', 'cat', 'cat', 'dog', 'dog', 'dog']

const dogsAndCats = [...dogs, ...cats]
// dogsAndCats = ['dog', 'dog', 'dog', 'cat', 'cat', 'cat']

const catBetweenBirds = ["bird", ...cats, "bird"];
// catsBetweenBirds -> ['bird', 'cat', 'cat', 'cat', 'bird']

//? Here is how the spread syntax works with object declarations: 

const circle = { radius: 5, shape: "circle" };

const greenCircle = { ...circle, color: "green"};
//greenCircle -> { radius: 5, shape: 'circle', color: 'green'}

//? Notice that the order os the spread operation matters because you override properties:

//* const circle = { radius: 5, shape: "circle"};

//* lagerCircle = { ...circle, radius: 20};
// largerCircle -> { radius: 20, shape: 'circle'}

//* notALargeCircle = { radius: 20, ...circle };
// notALargeCircle -> { radius: 5, shape: 'Circle' }

//? The spread syntax is very helpful for creating a shallow copy of array and objects:

//* const book = {title: "Ulysses", author: " James Joyce" };
//* const shallowCopyOfBook = { ...book };
//* shallowCopyOfBook.year = "1920"

// book -> { title: 'Ulysses', author: 'James Joyce'};
// shallowCopyOfBook -> { title: 'Ulysses', author: 'James Joyce', year: '1920'};

//* const greekLetters = ["alpha", "beta", "gamma", "delta", "epsilon", "zeta"];
//* const sortedGreekLetters = [..greekLetters].sort((a,b) => a.localCompare(b));
// this is an alternative to greekLetters.slice() which also creates a shallow copy

// greekLetters -> ['alpha', 'beta', 'gamma', 'epsilon', 'zeta'];
// sortedGreekLetters -> ['alpha', 'beta', 'delta', 'epsilon', 'gamma', 'zeta']

//? You can also use the spread syntax when calling functions:

//* const numbers = [4534, 3411, 2455, 4952];
//* const smallestNumber = Math.min(...numbers);
// smallestNumber = 2455

//! Optional Chaining

//? The optional chaining operator ?. is like chaining operator . , except that instead of throwing
//? an error is a reference is nullish (null or undefined), the expression 'short-circuits' with a value of
//? undefined. This is useful when you're not sure if a property, method or index exists or if
//? something is callable.  

function feedCats(cats) {
    return cats.forEach((cat)=> console.log(cat, "says meow");)
}

feedCats(["Garfield", "Tom", "Grumpy Cat"]);
// logs:
// Garfield says meow
// Tom says meow
// Grumpy Cat says meow

feedCats();
// throws:
// Uncaught TypeError : Cannot read properties of undefined ( reading 'forEach')

function feedCats(cats) {
    return cats?.forEach((cat) => console.log(cat, "says meooow"));
}

feedCats();
// logs nothing, but also doesn't throw an Error

//? The ?. short-circuits the expression and evaluates the return statement to undefined. This way 
//? the error is avoided without the need to explicitly use if statements or ternaries to check the values.

//? Optional chaining is useful when targeting a property in an object with a deeply nested structure.

const person = {
    name: "Sam",
    skills: [
        {
            name: "HTML",
            level: 9999,
            category: {
                name: "coding",
            },
        },
        {
            name: "Agile",
            level: 1337,
            category: {
                name: "projects",
            },
        },
    ],
};

console.log(person.skills[1].category.name);
// log: projects

console.log(person.skills[2].level);
// throws: Uncaught TypError: Cannot read properties of undefined (reading 'level')

console.log(person.skills?.[2]?.level);
//logs: undefined

console.log(person.skills[0].partner.name);
// throws: Uncaught TypeError: Cannot read properties of undefined (reading 'name')

console.log(person.skills[0].partner?.name);
// logs: undefined

//! Nullish Coalescing

//? The nullish coalescing operator ?? is a logical operator that returns its right-hand side operand
//? when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

const chocolate = true;

function chocolateCheck() {
    return chocolate ?? "No chocolate :( ";
}

const result = chocolateCheck();

//? In this example, our function would return 'No Chocolate :( ', seeing as how the value of
//? chocolate is undefined. The same would happen is we declare this variable chocolate with 
//? the value null.

//? Written as acd n if/else statement, the code would look like this:

//* const chocolate = true;

//* function chocolateCheck() {
//*    if (chocolate === null || chocolate === undefined) {
//*     return "no chocolate :( "
//*    }
//*   return true; 
//* }

//* const result = chocolateCheck();