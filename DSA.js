// Question:
// Write a function that takes an array of numbers and returns the second largest number in the array.
// If the array has less than 2 unique numbers, return null.

function secondLargest(arr) {
    let unique = [...new Set(arr)];

    console.log('hello sir => ' + unique)

    if (unique.length < 2) return null;
    unique.sort((a, b) => b - a);
    return unique[1];
}

console.log(secondLargest([10, 5, 20, 20, 8])); // 10


console.log(secondLargest([3, 3, 3]));          // null


console.log(secondLargest([7]));                // null

// How it works:

// words.toLowerCase().split('') → converts the word into an array of characters.
// "sufiyan" → ["s","u","f","i","y","a","n"]

// Loop through each character with map.

// Check if the character is a vowel (a, e, i, o, u).

// If yes → add it to vowels string.

// Finally console.log(vowels).



console.log('======================================================================')


// Question 2:

// Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).
// Ignore case sensitivity.


function checksPalindrome(words) {
    let newReviceWords = words.split("").reverse().join("")

    if (newReviceWords === words) {
        console.log('palindrome')
    } else {
        console.log('not palindrome')
    }
}

checksPalindrome("sufiyan")
checksPalindrome('racecar')


console.log('====================================================================================================')


// ❓ Question 3
// Write a function that counts the number of vowels (a, e, i, o, u) in a given string.


function checksVowels(words) {
    let allWords = words.toLowerCase().split('')
    let vowels = ''

    allWords.map(ele => {
        if (ele == "a" || ele == "e" || ele == 'i' || ele == 'o' || ele == "u") {
            vowels += ele + " "
        }
    })

    console.log(vowels)
}

checksVowels('sufiyan')



console.log('=========================================================')

// ❓ Question 4
// Write a function that finds the longest word in a given sentence.


const logestWord = (words) => {
    let myWords = words.split(' ')

    let allLength = []

    myWords.map(ele => {
        allLength.push(ele.length)
    })

    let sortLength = allLength.sort((a, b) => b - a)

    myWords.map(ele => {
        if (ele.length == sortLength[0]) {
            console.log(ele)
        }
    })
}

logestWord('hello elephant')


console.log('======================================================')


// ❓ Question 5
// Write a function that returns the frequency of each character in a given string.
// 👉 मतलब: string के अंदर हर character कितनी बार आया है, वो count करके object में return करना है।


function charFrequency(words) {
    let obj = {}
    let newWords = words.split('')

    newWords.map(ele => {

        if (obj[ele] == undefined) {
            obj[ele] = 1
        } else {
            obj[ele] += 1
        }

    });
    console.log(obj)

}

charFrequency("hello world")

console.log('=====================================================')


let obj = {
    a: 2,
    b: 3
}

let keyname = 'c'

obj[keyname] = 5   // yeha pe agr obj me key ka nam age kisi variable ka vlaue ko bana hai to bracket me likhna padta hai 
console.log(obj.c)




