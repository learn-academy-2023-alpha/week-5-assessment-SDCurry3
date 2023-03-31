// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// input: string
// output: string with a coded message
// Pseudo: create a variable containing an object that has the cipher we need, then make a function that takes the input and runs it through .map with the cipher-object, swapping any letter it finds with the corresponding number.

describe ("l33tsp34k0r", () => {
    it("takes in a string and returns a string with a coded message.", () => {
        expect(l337sp34k0r(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(l337sp34k0r(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(l337sp34k0r(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
});


const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// [error 1:]  FAIL  ./code-challenges.test.js
//   ● Test suite failed to run
//   ReferenceError: define is not defined   ***whoops, should be 'describe'***

//[error 2:]   expect(received).toEqual(expected) // deep equality

    // Expected: "Lackadaisical"
    // Received: "L4ck4d41s1c4l"   ***Fed it the wrong output :/***
// b) Create the function that makes the test pass.

//[error 3:  Expected: "G0bbl3dyg00k", Received: "Gobbl3dygook"]  ***this one's annoying. I cannot figure out a way to do this without turning 0 into a string, but since that's not what the prompt is asking for I feel like it's incorrect. but i'm out of time on this one so oh well...***

const enigma = {a: 4, e: 3, i: 1, o: '0'}  //***I'm guessing that since 0 is a 'falsey' value, it messes with the output of .map***
const l337sp34k0r = (input) =>{
    let output = [...input].map(a => enigma[a.toLowerCase()] || a).join("")
    return output
}

//  ***so many ways to do this one! I decided to go with .map because I still need the practice with it, but you could also do something similar with a switch statement or the .replace method. .replace in particular seems like a good idea here, where you could do something like:
const example = (input) => {
    const output = input.replace(/[aeiou]/gi, function (match) {
      return enigma[match.toLowerCase()] || match
    })
    return output
  }
// I personally like this replace method more since I find it easier to read. simply searches for the letters in the regular expression, and swaps em with the matching value in enigma, OR just spits it back out of it doesn't find a match.***

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// input: an array of words and a single letter
// output: an array of all the words containing that particular letter
// pseudo: Create a function that runs .filter through the given array, utilizing .includes to find instances of the letter provided.

// a) Create a test with expects statement using the variable provided.
describe ("harvestSeason", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
        expect(harvestSeason(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(harvestSeason(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
});
const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

const harvestSeason = (inputArray, letter) => {
    return inputArray.filter(bucket => bucket.toLowerCase().includes(letter))
}

//  ***It seems like everytime I get a question that calls for .map, one right before or after will need .filter. Pretty simple here, pretty much exactly as outlined in the pseudocode. I love it when I don't have to write a novella's worth of javascript code to get something to work.***

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// input: an array of 5 numbers
// output: Boolean
// pseudo: May be able to check with an if/else statement, kinda stumped on this one...

// a) Create a test with expect statements using the variable provided.
describe("dealer", () => {
    it("Takes in an array of 5 numbers and determines whether or not the array is a 'full house'.", () => {
        expect(dealer(hand1)).toEqual(true)
        expect(dealer(hand2)).toEqual(false)
        expect(dealer(hand3)).toEqual(false)
        expect(dealer(hand4)).toEqual(true)
    })
})

// INSTANTLY went to the sandbox on this one, got it running before testing.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]  
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true



const dealer = (showdown) => {
    const tripleDouble = new Set(showdown)
        if (tripleDouble.size !== 2){
            return false
        }
        let double = false
        let triple = false
        for (const num of tripleDouble) {
            const count = showdown.filter(n => n === num).length
            if (count === 2) {
                double = true
            } else if (count === 3) {
                triple = true
            }else {
                return false
            }
        }
        return triple && double
}

// ***So about that novella...feels like I made a Rube Goldberg machine for this one.***

// Definitely went over an hour getting this to work. Our funky dealer friend up there takes the hand and creates a Set object out of the unique values with tripleDouble. since a full house is 3 of one number and 2 of another, the set should have 2 values in it. if tripleDouble doesn't have 2 entries in it, then it gives us false. We then make some extra placeholder variables, one for the pair(double), one for three of a kind(triple). then it counts the amount of each value it finds with that filter combo-d into .length. if it finds two of something, double is updated to true. then if it finds 3 of something else triple is set to true. the final step is to return wether or not BOTH double and triple are giving us the green light. I'm tired now.