/*
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

// The find() method returns the value of the array element that passes a test (provided by a function).
// The method executes the function once for each element present in the array:
// If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
// Otherwise it returns undefined

const nonDivisibleSubset = (k, s) => {
    if(k === 1) {
        return 1;
    }
    let maxSubsetLength = 0;
    
    if(s.find((value) => value % k === 0) != undefined) {
        maxSubsetLength++;
    } 
    if(k % 2 === 0){
        maxSubsetLength = s.find((value) => value % k === k / 2) != undefined ? maxSubsetLength + 1 : maxSubsetLength;
    } 
    for(let i = 1; i < k / 2; i++) {
        maxSubsetLength += Math.max(
            s.filter((value) => value % k === i).length,
            s.filter((value) => value % k === k - i).length
        );
    }
    console.log(maxSubsetLength);
    return maxSubsetLength;
}
