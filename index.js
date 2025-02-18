/* Swapping 2 variables value without using 3rd variable */
let a = 10
let b = 5

a = a + b; // এখন a = 15
b = a - b; // এখন b = 15 - 10 = 5
a = a - b; // এখন a = 15 - 5 = 10



/* Longest Common Substring (LCS) */
/* আমাদের দুটি স্ট্রিং দেওয়া আছে, এবং আমাদের কাজ হলো সর্বাধিক বড় সাবস্ট্রিং (Substring) খুঁজে বের করা, যা উভয় স্ট্রিং-এর অংশ। */
const longestCommonSubstringBruteForce = (s1, s2) => {
    let result = ''
    for (let i = 0; i < s1.length; i++) {
        for (let j = i; j < s1.length; j++) {
            const subStr = s1.substring(i, j + 1)
            if (s2.includes(subStr) && subStr.length > result.length) {
                result = subStr
            }
        }
    }
    return result
}



/*  LCM (Least Common Multiple) (লসাগু) */
const findLCM = (a, b) => {
    let max = Math.max(a, b)
    while (max <= a * b) {
        if (max % a === 0 && max % b === 0) return max // LCM পাওয়া গেছে
        max++
    }
}

/* HCF (Highest Common Factor) (গসাগু) */

const findHCF = (a, b) => {
    let min = Math.min(a, b)
    for (let i = min; i >= 1; i--) {
        if (a % i === 0 && b % i === 0) return i
    }
}

/* একটি সংখ্যা 2-এর কোনো power কিনা তা কিভাবে নির্ণয় করবো? */
const isPowerOfTwo = n => {
    if (n <= 0) return false

    while (n > 1) {
        if (n % 2 !== 0) return false
        n = n / 2
    }

    return true
}


/* Nth number of Fibonacci series */
const getNthFibonacci = (n) => {
    if (n < 2) return n
    return getNthFibonacci(n - 1) + getNthFibonacci(n - 2)
}


/* Fibonacci series */
const getFibonacciSeries = (n) => {
    if (n < 1) return [0]

    let prev = 0, current = 1
    const series = [prev, current]

    for (let i = 2; i < n; i++) {
        next = prev + current
        prev = current
        current = next
        series.push(next)
    }
    return series
}


/* Sum of Fibonacci series */
const sumOfFibonacci = (n) => {
    if (n < 1) return 0

    let prev = 0, current = 1
    let sum = prev + current

    for (let i = 2; i < n; i++) {
        next = prev + current
        sum += next
        prev = current
        current = next
    }
    return sum
}


/* SORTING an array */
const quickSort = (arr) => {
    if (arr.length < 2) return arr

    const pivot = arr[arr.length - 1] //last element
    const left = []
    const right = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i])
        else right.push(arr[i])
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}



/* FACTORIAL number finding */

const factorial = (n) => {
    let product = 1
    for (let i = 1; i <= n; i++) {
        product *= i
    }
    return product
}

const recursiveFactorial = n => {
    return n < 2 ? 1 : n * recursiveFactorial(n - 1)
}