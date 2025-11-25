// // Question:
// // Write a function that takes an array of numbers and returns the second largest number in the array.
// // If the array has less than 2 unique numbers, return null.

// function secondLargest(arr) {
//     let unique = [...new Set(arr)];

//     console.log('hello sir => ' + unique)

//     if (unique.length < 2) return null;
//     unique.sort((a, b) => b - a);
//     return unique[1];
// }

// console.log(secondLargest([10, 5, 20, 20, 8])); // 10


// console.log(secondLargest([3, 3, 3]));          // null


// console.log(secondLargest([7]));                // null

// // How it works:

// // words.toLowerCase().split('') → converts the word into an array of characters.
// // "sufiyan" → ["s","u","f","i","y","a","n"]

// // Loop through each character with map.

// // Check if the character is a vowel (a, e, i, o, u).

// // If yes → add it to vowels string.

// // Finally console.log(vowels).



// console.log('======================================================================')


// // Question 2:

// // Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).
// // Ignore case sensitivity.


// function checksPalindrome(words) {
//     let newReviceWords = words.split("").reverse().join("")

//     if (newReviceWords === words) {
//         console.log('palindrome')
//     } else {
//         console.log('not palindrome')
//     }
// }

// checksPalindrome("sufiyan")
// checksPalindrome('racecar')


// console.log('====================================================================================================')


// // ❓ Question 3
// // Write a function that counts the number of vowels (a, e, i, o, u) in a given string.


// function checksVowels(words) {
//     let allWords = words.toLowerCase().split('')
//     let vowels = ''

//     allWords.map(ele => {
//         if (ele == "a" || ele == "e" || ele == 'i' || ele == 'o' || ele == "u") {
//             vowels += ele + " "
//         }
//     })

//     console.log(vowels)
// }

// checksVowels('sufiyan')



// console.log('=========================================================')

// // ❓ Question 4
// // Write a function that finds the longest word in a given sentence.


// const logestWord = (words) => {
//     let myWords = words.split(' ')

//     let allLength = []

//     myWords.map(ele => {
//         allLength.push(ele.length)
//     })

//     let sortLength = allLength.sort((a, b) => b - a)

//     myWords.map(ele => {
//         if (ele.length == sortLength[0]) {
//             console.log(ele)
//         }
//     })
// }

// logestWord('hello elephant')


// console.log('======================================================')


// // ❓ Question 5
// // Write a function that returns the frequency of each character in a given string.
// // 👉 मतलब: string के अंदर हर character कितनी बार आया है, वो count करके object में return करना है।


// function charFrequency(words) {
//     let obj = {}
//     let newWords = words.split('')

//     newWords.map(ele => {

//         if (obj[ele] == undefined) {
//             obj[ele] = 1
//         } else {
//             obj[ele] += 1
//         }

//     });
//     console.log(obj)

// }

// charFrequency("hello world")

// console.log('=====================================================')


// let obj = {
//     a: 2,
//     b: 3
// }

// let keyname = 'c'

// obj[keyname] = 5   // yeha pe agr obj me key ka nam age kisi variable ka vlaue ko bana hai to bracket me likhna padta hai 
// console.log(obj.c)




// console.log('========================================================')

// // ❓ Question 6
// // Write a function that takes an array of numbers and returns a new array with only the unique numbers (duplicates हटाकर)।

// function removeDuplicates(arr) {
//     let newArray = [... new Set(arr)]

//     return newArray
// }



// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// // [1, 2, 3, 4, 5]


// const removeDuplicates1 = (arr) => {
//     let newArray = []

//     for (let num of arr) {
//         if (!newArray.includes(num)) {
//             newArray.push(num)
//         }
//     }
//     return newArray
// }


// console.log(removeDuplicates1([10, 10, 20, 30, 30, 40]));
// // [10, 20, 30, 40]



// console.log('================================7====================================')

// // ❓ Question 7
// // Write a function that finds the missing number in an array of integers from 1 to n.
// // Array में सिर्फ एक number missing होगा।

// function findMissing(arr) {

//     let findMissingNumber = 0
//     let sortArray = arr.sort((a, b) => b - a)

//     let newArray = new Array(sortArray[0]).fill(' ')

//     newArray.map((_, ind) => {
//         if (!arr.includes(ind + 1)) {
//             findMissingNumber = ind + 1
//         }
//     })

//     return findMissingNumber


// }

// console.log(findMissing([1, 2, 4, 5]))


// console.log('==================================8==================================================')


// // ❓ Question 8
// // Write a function that takes an array of numbers and reverses the array without using the built-in .reverse() method.

// function reverseArray(arr) {
//     let arrLength = arr.length
//     let newArray = []


//     for (let i = 1; i <= arrLength; i++) {
//         newArray.push(arr[arrLength - i])
//     }

//     return newArray

// }




// console.log(reverseArray([1, 2, 3, 4, 5]));
// // [5, 4, 3, 2, 1]



// function reverseArray1(arr) {
//     let end = arr.length - 1
//     let start = 0

//     while (start < end) {

//         let temp = arr[start]

//         arr[start] = arr[end]

//         arr[end] = temp


//         start++
//         end--

//     }

//     return arr

// }



// console.log(reverseArray1([10, 20, 30]));
// // [30, 20, 10]




// console.log('=========================================9=========================================')

// // ye abhi pura advnace nhi hai 
// const isPalindrome = (words) => {
//     let WordsRemoveSapce = words.replace(/ /g, "")
//     let newWords = WordsRemoveSapce.toLowerCase().split('').reverse()
//     let reverseWords = ''

//     newWords.forEach(element => {
//         reverseWords += element
//     });


//     if (reverseWords === words.toLowerCase().replace(/ /g, "")) {
//         return 'true'
//     } else {
//         return 'false'
//     }

// }


// console.log(isPalindrome("madam"));          // true
// console.log(isPalindrome("racecar"));        // true
// console.log(isPalindrome("hello"));          // false
// console.log(isPalindrome("A man a plan a canal Panama")); // true



// console.log('============================================10============================================')



// // ❓ Question 10
// // Write a function that returns the factorial of a given number.
// // 👉 Factorial ka matlab:
// // 5! = 5 × 4 × 3 × 2 × 1 = 120
// // 0! = 1 (definition ke hisaab se)




// const factorial =(num)=>{
//     let allNum = '1'
//     for(let i=num ; i>=1 ; i--){
//         allNum *= i 
//     }

//     if(num<=1){
//         return 1
//     }
//     else{
//         return eval(allNum)
//     }



// }



// console.log(factorial(5)); // 120
// console.log(factorial(0)); // 1
// console.log(factorial(1)); // 1
// console.log(factorial(6)); // 720
// console.log(factorial(7)); // 5040




// console.log('====================================11=========================================')

// // ❓ Question 11
// // Write a function that returns the Fibonacci sequence up to n terms.
// // 👉 Fibonacci sequence ka matlab:
// // Pehle do numbers hote hain 0, 1
// // Uske baad har number = (pichle 2 numbers ka sum)



// const fibonacci = (n) => {
//     if (n <= 0) return []
//     if (n <= 1) return [0]
//     if (n == 2) return [0, 1]

//     let series = [0, 1];

//     for (let i = 2; i < n; i++) {
//         let next = series[i - 1] + series[i - 2]

//         series.push(next)
//     }

//     return series

// }


// console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
// console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
// console.log(fibonacci(1)); // [0]
// console.log(fibonacci(2)); // [0, 1]



// console.log('===========================12=========================================')


// // ❓ Question 12
// // Write a function that checks whether a given number is prime or not.
// // 👉 Prime number = वो number जो सिर्फ 1 और खुद से divide हो (जैसे 2, 3, 5, 7, 11…).
// // 👉 Example:
// // isPrime(7) → true
// // isPrime(10) → false



// function isPrime(num) {

//     if (num == 0 || num == 1) return false

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false
//         }

//     }

//     return true
// }

// console.log(isPrime(3))



// console.log('============================13============================================')

// // ❓ Question 13
// // Write a function that finds all prime numbers up to a given number n.
// // 👉 मतलब अगर n = 20 है, तो function ko return करना चाहिए:
// // [2, 3, 5, 7, 11, 13, 17, 19]

// const isPrimeNumber = (num) => {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false
//         }
//     }
//     return true
// }


// function getPrimes(num) {
//     if (num <= 1) return false;

//     let primeNumber = []
//     for (let i = 2; i < num; i++) {
//         if (isPrimeNumber(i)) {
//             primeNumber.push(i)
//         }
//     }
//     return primeNumber
// }


// console.log(getPrimes(10));
// // [2, 3, 5, 7]

// console.log(getPrimes(20));
// // [2, 3, 5, 7, 11, 13, 17, 19]





// console.log('===========================14=========================================')

// // ❓ Question 14 (New & Easy)

// // Problem:
// // Write a function that takes an array of numbers and returns the second smallest number.
// // Agar array me 2 unique numbers se kam hai, return null.

// function secondSmallest(arr) {
//     let myArray = [... new Set(arr)]

//     if (myArray.length <= 1) {
//         // console.log('there is not two unique number in array')
//         return null
//     }

//     let sortNumber = myArray.sort((a, b) => a - b)

//     return sortNumber[1]
// }

// console.log(secondSmallest([10, 5, 20, 20, 8]))  // Output → 8
// console.log(secondSmallest([3, 3, 3]))          // Output → null
// console.log(secondSmallest([7]))                // Output → null



// console.log('============================15===============================')


// // ❓ Question 15

// // Write a function that finds the GCD (Greatest Common Divisor) of two numbers.
// // 👉 GCD मतलब दो numbers को divide करने वाला सबसे बड़ा number।
// // Example:
// // gcd(12, 18) → 6   // क्योंकि 6 ही सबसे बड़ा number है जो 12 और 18 दोनों को divide करता है
// // gcd(7, 13)  → 1   // क्योंकि 7 और 13 co-prime हैं (उनका कोई बड़ा common divisor नहीं है)



// function gcd(num1, num2) {

//     let bignum = 0
//     if (num1 > num2) {
//         bignum = num1
//     } else {
//         bignum = num2
//     }


//     let highest = 0

//     for (let i = 1; i < bignum; i++) {
//         if (num1 % i == 0 && num2 % i == 0) {
//             highest = i
//         }
//     }

//     console.log(highest)
// }

// gcd(12, 18)
// gcd(7, 13)
// gcd(12, 500)



// console.log('================================16=======================================')


// // ❓ Question 16 (Updated)

// // Write a function that reverses the words in a given sentence, but keeps the order of words the same.
// // 👉 मतलब har ek word
// // "Hello world" → "olleH dlrow"

// // "A man a plan" → "A nam a nalp"

// function reverseEachWord(words) {
//     let newWords = words.split(' ')

//     let makeWord = ''

//     newWords.map(ele => {
//         let myLetter = ''
//         let a = ele.split('').reverse()
//         a.map(latter => {
//             myLetter += latter
//         })
//         makeWord += myLetter + ' '

//     })
//     console.log(makeWord.trim())
// }

// reverseEachWord("hello sir")

// console.log('=================================17============================================')


// // ❓ Question 17
// // Write a function that reverses the entire string (sentence).
// // 👉 Matlab pura sentence ulta ho jana chahiye (spaces bhi reverse order me aayenge).
// // Example:
// // "Hello sir" → "ris olleH"
// // "JavaScript" → "tpircSavaJ"


// function myReverse(words) {
//     let reverseArray = words.split('').reverse()
//     let a = reverseArray.join('')
//     console.log(a)
// }

// myReverse("hello sir")



// console.log('==================================18===========================================')

// // ❓ Question 18
// // Write a function that checks if two strings are anagrams of each other.
// // 👉 Anagram = dono strings me SAME letters hone chahiye, bas order alag ho sakta hai.
// // Example:
// // "listen" & "silent" → true
// // "hello" & "world"  → false


// function areAnagrams(str1 , str2){
//     let a = str1.toLowerCase().split('').sort().join('');
//     let b = str2.toLowerCase().split('').sort().join('');

//     return a == b ? true :false 
// }

// console.log(areAnagrams("hello", "world"));    // false
// console.log(areAnagrams("listen", "silent"));  // true
// console.log(areAnagrams("race", "care"));      // true


// // 2nd answer abhi isme or sudhar kiya ja sakte wayse answer sahi aarha hai 

// function areAnagrams1(str1, str2) {
//     let a = str1.split('')
//     let b = str2.split('')

//     if(a.length != b.length) return false

//     let hello = []

//     a.map((ele, ind) => {
//         if (!b.includes(ele)) {
//             hello.push(false)
//         }
//     })

//     if (hello.includes(false)) {
//         return false
//     } else {
//         return true
//     }

// }

// console.log(areAnagrams1("hello", "world"));    // false
// console.log(areAnagrams1("listen", "silent"));  // true
// console.log(areAnagrams1("race", "care"));      // true





// console.log('==============================19======================================')

// // ❓ Question 19
// // Write a function that counts the vowels in a given string.
// // 👉 Vowels = a, e, i, o, u (chhote aur bade dono).
// // Example:
// // countVowels("hello") → 2   // 'e' and 'o'
// // countVowels("Javascript") → 3   // 'a', 'a', 'i'
// // countVowels("BCDFG") → 0



// function countVowels(words){
//         let a = words.split('')

//         let vowel = ''

//         a.map(ele=>{
//             if(ele == 'a' || ele=='e' || ele=="i" || ele=="o" || ele=="u" || ele=="A" ||ele=="E" ||ele=="I" ||ele=="O" ||ele=="U" ){
//                 vowel+=ele
//             }
//         })

//         console.log(vowel.length)

// }
// countVowels("Javascript")
// countVowels("hello")




// console.log('=================================20======================================')


// // ❓ Question 20

// // Write a function that removes all duplicate elements from an array.
// // 👉 Matlab ek array diya gaya hai, usme se unique elements bachaane hain.

// function removeDuplicates (arr){
//         let a = [... new Set(arr)]
//         console.log(a)
// }


// removeDuplicates([1, 2, 2, 3, 4, 4, 5])          //→ [1, 2, 3, 4, 5]  
// removeDuplicates(["a", "b", "a", "c", "b"])       // → ["a", "b", "c"]


console.log('=================================21======================================')

// ❓ Question 21

// English:
// Write a function that checks whether a given string is a pangram or not.
// 👉 Pangram = A sentence that contains every letter of the English alphabet at least once.

// Hindi:
// ऐसा function लिखो जो चेक करे कि कोई string pangram है या नहीं।
// 👉 Pangram = वो sentence जिसमें English alphabet के सारे अक्षर (a–z) कम से कम एक बार आए हों।

// Example:
// "The quick brown fox jumps over the lazy dog" → true
// "Hello world" → false

const pangram = (str) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    let a = str.toLowerCase().split(' ').join('')

    let b = [... new Set(a.split('').sort())].join('')

    return alphabet == b


}

// console.log(pangram("Pack my box with five dozen liquor jugs")) // true
// console.log(pangram("The quick brown fox jumps over the lazy do")) // false



console.log('=================================22======================================')

// ❓ Question 22

// English:
// Write a function that finds the first non-repeating character in a given string.
// 👉 Example: "programming" → 'p'
// 👉 Example: "aabbccde" → 'd'

// Hindi:
// ऐसा function लिखो जो किसी string में पहला ऐसा character ढूंढे जो दुबारा repeat न हो।
// 👉 Example: "programming" → 'p'
// 👉 Example: "aabbccde" → 'd'



function nonRepeat(str) {
    let a = str.toLowerCase().split('')
    let obj = {}
    a.map(ele => {
        if (!obj[ele]) {
            obj[ele] = 1
        }
        else {
            obj[ele] += 1
        }
    })

    let AllKeys = Object.keys(obj)

    let repeatFirstWord = AllKeys.find(key => obj[key] == 1)

    console.log(repeatFirstWord)

}


// nonRepeat("programming")
// nonRepeat("aabbccde")
// nonRepeat("swiss");







console.log('=================================23======================================')

// ❓ Question 23

// English:
// Write a function that returns the count of vowels in a given string.
// 👉 Example: "hello world" → 3
// 👉 Example: "programming" → 3

// Hindi:
// ऐसा function लिखो जो किसी string में vowels (a, e, i, o, u) की गिनती (count) बताये।
// 👉 Example: "hello world" → 3
// 👉 Example: "programming" → 3


let vowels = (str) => {
    let a = str.split(' ').join('').split('')
    let count = 0

    for (let ele of a) {
        if (ele == 'a' || ele == 'e' || ele == "i" || ele == "o" || ele == "u" || ele == "A" || ele == "E" || ele == "I" || ele == "O" || ele == "U") {
            count += 1
        }
    }

    console.log(count)
}

// vowels("hello worlds")





console.log('=================================24======================================')

// ❓ Question 24

// English:
// Write a function that finds the longest word in a given sentence.
// 👉 Example: "I love programming" → "programming"
// 👉 Example: "JavaScript is fun" → "JavaScript"

// Hindi:
// ऐसा function लिखो जो किसी sentence में सबसे लंबा word (शब्द) ढूंढे।
// 👉 Example: "I love programming" → "programming"
// 👉 Example: "JavaScript is fun" → "JavaScript"

const longestWord = (str) => {

    let a = str.split(' ')

    let longest = ''

    a.map(ele => {
        if (longest.length < ele.length) {
            longest = ele
        }
    })

    return longest

}

// console.log(longestWord("I love programming"))





console.log('=================================25======================================')

// ❓ Question 25

// English:
// Write a function to group words that are anagrams of each other from a given list.
// 👉 Example: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]

// Hindi:
// ऐसा function लिखो जो दिए गए words की list में से anagrams (जिनके letters same हों) 
// को group करके return करे।
// 👉 Example: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]


function groupAnagrams(arr) {
    const obj = {};
    for (let ele of arr) {
        const sorted = ele.split("").sort().join("");
        if (!obj[sorted]) {
            obj[sorted] = [ele]
        }
        else {
            obj[sorted].push(ele)
        }
    }
    const groupArray = Object.values(obj);
    return groupArray
}


// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));




console.log('=================================25======================================')

// ❓ Question 25

// English:
// Write a function that rotates an array by k steps to the right.
// 👉 Example: [1,2,3,4,5,6,7], k = 3 → [5,6,7,1,2,3,4]

// Hindi:
// ऐसा function लिखो जो किसी array को k steps से right side में rotate करे।
// 👉 Example: [1,2,3,4,5,6,7], k = 3 → [5,6,7,1,2,3,4]


function rotateArray(arr, k) {
    let sliceArray = arr.slice(0, arr.length - k)

    let rotatePart = arr.slice(-k)
    return [...rotatePart, ...sliceArray]


}
// console.log(rotateArray([1,2,3,4,5,6,7,3], 3)); // [5,6,7,1,2,3,4]



console.log('=================================26======================================')

// ❓ Question 26

// English:
// Write a function that finds the majority element in an array.
// 👉 Majority element = the element that appears more than ⌊n/2⌋ times in the array.

// Hindi:
// ऐसा function लिखो जो किसी array में majority element निकाले।
// 👉 Majority element = वो element जो n/2 बार से ज़्यादा बार आता हो।

// Example:
// [3,3,4,2,3,3,5] → 3
// [2,2,1,1,1,2,2] → 2



const majority = (arr) => {
    let obj = {}

    arr.map((ele) => {
        if (!obj[ele]) {
            obj[ele] = 1
        } else {
            obj[ele] += 1
        }
    })

    let allkeys = Object.keys(obj)
    let allNum = 0



    for (let key of allkeys) {
        if (obj[key] > allNum) {
            allNum = key
        }
    }
    console.log('repeated number ', allNum)
}


majority([2, 2, 1, 1, 1, 2, 2])



console.log('=================================27======================================')

// ❓ Question 27

// English:
// Write a function to find the longest common prefix among an array of strings.
// 👉 Example: ["flower","flow","flight"] → "fl"

// Hindi:
// ऐसा function लिखो जो दिए गए strings की list में longest common prefix निकाले।
// 👉 Example: ["flower","flow","flight"] → "fl"



const longestCommonPrefix = (strs) => {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {

        while (strs[i].indexOf(prefix) !== 0) {
            // prefix को छोटा करते जाओ
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
};

// ✅ Test Cases
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // ""
// console.log(longestCommonPrefix(["interview", "internet", "internal"])); // "inte"



console.log('===============================================28==================================')

const palindrome = (str) => {
    let a = str.split("").reverse().join('')
    return a == str
}


// console.log(palindrome('racecar'))



console.log('=================================29======================================')

// ❓ Question 29

// English:
// Write a function to find the intersection of two arrays (common elements).
// 👉 Example: [1,2,2,1] and [2,2] → [2,2]

// Hindi:
// ऐसा function लिखो जो दो arrays में से common elements (जो दोनों में हों) निकाले।
// 👉 Example: [1,2,2,1] और [2,2] → [2,2]



const commonElement = (arr1, arr2) => {

    let secondArr = [...arr2]

    let common = []

    for (let num of arr1) {
        if (secondArr.includes(num)) {
            common.push(num)

            secondArr.splice(arr2.indexOf(num) - 1)
        }
    }

    return common
}
// console.log(commonElement([1, 2, 2, 3], [2, 2, 4]))


console.log('=================================30======================================')

// ❓ Question 30

// English:
// Write a function to move all zeros in an array to the end 
// while maintaining the order of non-zero elements.
// 👉 Example: [0,1,0,3,12] → [1,3,12,0,0]

// Hindi:
// ऐसा function लिखो जो array में सारे 0 को end में move करे,
// और non-zero elements की order same रखे।
// 👉 Example: [0,1,0,3,12] → [1,3,12,0,0]



const moveZeroes = (arr) => {
    let notZero = arr.filter(ele => ele != 0)
    let allZero = arr.filter(ele => ele == 0)

    return console.log([...notZero, ...allZero])

}

// moveZeroes([0, 1, 0, 3, 12]) // [1,3,12,0,0]




console.log('=================================31======================================')

// ❓ Question 31

// English:
// Write a function to find the single number in an array where every element 
// appears twice except for one unique element.
// 👉 Example: [4,1,2,1,2] → 4

// Hindi:
// ऐसा function लिखो जो ऐसे array में से unique number ढूँढे 
// जहाँ बाकी सारे numbers 2 बार आए हों, लेकिन एक number सिर्फ 1 बार आता है।
// 👉 Example: [4,1,2,1,2] → 4




function findSingleNumber(arr) {
    let obj = {}

    arr.map(ele => {
        if (!obj[ele]) {
            obj[ele] = 1
        } else {
            obj[ele] += 1
        }
    })
    let allkeys = Object.keys(obj)

    let singleValue = []

    for (let key of allkeys) {
        if (obj[key] === 1) {
            singleValue.push(Number(key))
        }
    }
    return console.log(singleValue)
}

// findSingleNumber([1, 2, 3, 3, 2])





console.log('=================================31======================================')

// ❓ Question 31

// English:
// Write a function to move all zeros in an array to the end while maintaining the order of non-zero elements.
// 👉 Example: [0,1,0,3,12] → [1,3,12,0,0]

// Hindi:
// ऐसा function लिखो जो किसी array में सभी zeros को end में ले जाए 
// 👉 Example: [0,1,0,3,12] → [1,3,12,0,0]



function moveZerosToEnd(arr) {
    let sortedArr = arr.sort((a, b) => a - b)

    let allNonZero = sortedArr.filter(ele => ele !== 0)
    let zero = sortedArr.filter(ele => ele === 0)

    return console.log(...allNonZero, ...zero)
}

// moveZerosToEnd([0,1,0,3,12])
// moveZerosToEnd([0,5,0,2,1])



console.log('==============================32======================================')

// ❓ Question 32

// English:
// Write a function that flattens a nested array (convert multi-dimensional array into a single array).
// 👉 Example: [1, [2, [3, 4]], 5] → [1, 2, 3, 4, 5]

// Hindi:
// ऐसा function लिखो जो nested array को flatten करे (multi-dimensional array को single array में बदल दे).
// 👉 Example: [1, [2, [3, 4]], 5] → [1, 2, 3, 4, 5]

function flattenArray(arr) {
    let myArr = [];

    const finding=(arr)=>{
        arr.map(ele=>{
            if(Array.isArray(ele)){
                finding(ele)
            }else{
                myArr.push(ele)
            }
        })
       }

    finding(arr);

    return myArr;
}

const originalArray = [1, [2, [3, 4]], 5];
// console.log(flattenArray(originalArray)); // Output: [1, 2, 3, 4, 5]





console.log('==============================33======================================')

// ❓ Question 33

// English:
// Write a function to reverse each word in a given sentence while keeping the word order same.
// 👉 Example: "Hello World" → "olleH dlroW"

// Hindi:
// ऐसा function लिखो जो दिए गए sentence के हर word को reverse करे,
// लेकिन words का order same रहे।
// 👉 Example: "Hello World" → "olleH dlroW"

function reverseWords(sentence) {
    let newSentence = ''
    let a = sentence.split(' ')

    a.map(ele=>{
        let b = ele.split('').reverse().join('')
        newSentence += b +' '
    })

    console.log(newSentence.trim())
}

// reverseWords('hello sir ')


console.log('==============================34======================================')

// ❓ Question 34

// English:
// Write a function to check if a number is a palindrome.
// A palindrome number reads the same forward and backward.
// 👉 Example: 121 → true, 123 → false

// Hindi:
// ऐसा function लिखो जो check करे कि दिया गया number palindrome है या नहीं।
// 👉 Example: 121 → true, 123 → false

function isPalindromeNumber(num) {
        let a = num.toString().split('').reverse().join('')
    console.log(a)
        return console.log(num === Number(a))
}

// isPalindromeNumber(121)
// isPalindromeNumber(123)



console.log('==============================34======================================')

// ❓ Question 34

// English:
// Write a function to reverse an integer.
// 👉 Example: 123 → 321 ,  -456 → -654

// Hindi:
// ऐसा function लिखो जो किसी integer को reverse करे।
// 👉 Example: 123 → 321 ,  -456 → -654

function reverseInteger(num) {

        let result = ''

        if(num > 1 ){
          a =   num.toString().split('').reverse().join('')
          result= a
        }else{
            let b = num.toString().split('').slice(1).reverse().join('')
            result = "-" + b
        }

        console.log(Number(result))
 }
 

// reverseInteger(1214)
// reverseInteger(-121)



