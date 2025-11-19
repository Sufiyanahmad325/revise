
const secondLargest = (arr) => {
    if (arr.lenght > 2) return null

    let a = arr.sort((a, b) => a - b)

    let b = [...new Set(a)]

    console.log(b[1])

}

// secondLargest([4,2,6,7,2])



const checksPalindrome = (word) => {
    const a = word.split('').reverse().join('')

    let ans = a == word ? true : false
    console.log(ans)
}

// checksPalindrome('hello')
// checksPalindrome('racecar')



const checksVowels = (words) => {
    const alfabate = [
        'a', 'e', 'i', 'o', 'u'
    ];
    let FindedAlfabate = ''


    words.split('').forEach(element => {
        if (alfabate.includes(element)) {
            FindedAlfabate += element
        }
    });

    console.log(FindedAlfabate)
}

// checksVowels('sufiyan')




const checksVowels2 = (words) => {

    let FindedAlfabate = ''

    words.split('').forEach(element => {
        if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u") {
            FindedAlfabate += element
        }
    });

    console.log(FindedAlfabate)
}

// checksVowels2('sufiyan')



const logestWord = (sentance) => {
    let logestWord = ""

    let a = sentance.split(' ')

    if (a.lenght > 1) logestWord += a[0]



    a.forEach(ele => {
        if (logestWord.length < ele.length) {
            logestWord = ele
        }
    })


    console.log(logestWord)

}

// logestWord('hello elephante to you ')


const logestWord2 = (sentance) => {
    let a = sentance.split(' ')
    let ok = a.sort((a, b) => b.length - a.length)
    console.log(ok[0])
}


// logestWord2('hello elephante to you')



const charFrequency = (sentance) => {
    let obj = {}
    let alfabate = sentance.split('')

    alfabate.forEach((ele) => {
        // if(ele == '') return

        if (!obj[ele]) {
            obj[ele] = 1
        } else {
            obj[ele] += 1
        }
    })

    console.log(obj)

}

// charFrequency('hello sir')






const removeDuplicates = (arr) => {
    let a = [...new Set(arr)]
    console.log(a)
}

// removeDuplicates([5,7,8,9,6,8,3,2,6])


const removeDuplicates2 = (arr) => {
    let newArray = []

    arr.forEach((ele => {
        if (!newArray.includes(ele)) {
            newArray.push(ele)
        }
    }))

    console.log(newArray)
}

// removeDuplicates2([5,7,8,9,6,8,3,2,6])



const findMissing = (arr) => {
    let a = arr.sort((a, b) => b - a)
    console.log(a)

    let missing = []

    for (let i = 1; i < a[0]; i++) {
        if (!arr.includes(i)) {
            missing.push(i)
        }
    }

    console.log(missing)
}

// findMissing([1, 2, 4, 5 ,10])



const reverseArray = (arr) => {

    let newArray = []

    arr.forEach(ele => {
        newArray.unshift(ele)
    })

    console.log(newArray)
}

// reverseArray([2, 5, 2, 6, 7, 2, 1])



const reverseArray2 = (arr) => {
    start = 0
    end = arr.length - 1

    while (start < end) {

        let temp = arr[start]


        arr[start] = arr[end]
        arr[end] = temp

        start++
        end--
    }

    console.log(arr)
}

// reverseArray2([2,5,6,7,4])




const isPalindrome = (data) => {

    let a = data.toLowerCase().split(' ').join('')

    let b = a.split('').reverse().join("")

    return b == a ? true : false



}
// console.log(isPalindrome("madam"));          // true
// console.log(isPalindrome("racecar"));        // true
// console.log(isPalindrome("hello"));          // false
// console.log(isPalindrome("A man a plan a canal Panama")); // true




const factorial = (num) => {
    let total = 1

    for (let i = 1; i <= num; i++) {
        total *= i
    }

    return total
}

// console.log(factorial(2))




const fibonacci = (num) => {
    if (num <= 0) return []
    if (num <= 1) return [0]
    if (num == 2) return [0, 1]


    let series = [0, 1];

    for (let i = 2; i < num; i++) {
        let next = series[i - 1] + series[i - 2]

        series.push(next)
    }

    console.log(series)
}

fibonacci(5)



const isPrime = (num) => {
    if (num == 0 || num == 1) return false

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    }

    return true
}

let a = isPrime(5)
// console.log(a)



const isPrimeNumber = (arr) => {
    let allPrimeNumber = []
    arr.forEach(num => {
        let a = isPrime(num)
        if (a) {
            allPrimeNumber.push(num)
        }
    });

    console.log(allPrimeNumber)
}


isPrimeNumber([2, 3, 5, 7, 11, 13, 17, 19])




const secondSmallest = (arr) => {
    let a = [...new Set(arr)]
    console.log(a)
    let b = a.sort((a, b) => a - b)
    return b[1]
}

// console.log(secondSmallest([10, 5, 20, 20, 8]))



const gcd = (num1, num2) => {
    let num = 0
    if (num1 < num2) {
        num = num1
    } else {
        num = 2
    }

    let gretestnumber = 0

    for (let i = 1; i < num; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            gretestnumber = i
        }
    }
    console.log(gretestnumber)
}

// gcd(60, 90)




const reverseEachWord = (sentance) => {

    let done = []

    let a = sentance.split(' ')

    a.forEach(ele => {
        let a = ele.split('').reverse().join('')

        done.push(a)
    });

    console.log(...done)
} 

// reverseEachWord("hello sir")




const reverseEachWord2 = (sentance) => {
    let a = sentance.split(' ')
    let newSentace = ''
    a.forEach(ele => {
        let b = ele.split('').reverse().join("")
        newSentace = newSentace.length == 0 ? newSentace + b : newSentace + " " + b
        console.log(b)
    }) 
    console.log(newSentace)  
}


// reverseEachWord2('hello sir')



const myReverse=(data)=>{
    let a = data.split('').reverse().join('')

    console.log(a)
}

// myReverse('hello sir')
// myReverse('javaScript')
