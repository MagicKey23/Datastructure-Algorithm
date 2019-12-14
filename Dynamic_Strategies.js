/*Dynamic Programming:
Dynamic Programming is a design pattern used to solve a large problem by dividing it into smaller subproblems that are more manageable.
*/


/*Memoization
In particular, we 'll apply the memoization technique to recursive code.
Idea::every time we call a function with a particular argument, we expect to get the same result every time.


* the function is recursive
* the additional data structure used is typically an object(we refer to this as the memo!)
*/

//Example of memoization 

let memo = {}

function factorial(n) {
    // if we have calculated factorial(n) previously, fetch the stored result in memo
    if (n in memo) return memo[n];
    if (n === 1) return 1;

    // otherwise, we have not calculated factorial(n) previously, so calculate it now,
    // but store the result in case we need it again in the future
    memo[n] = n * factorial(n - 1);
    return memo[n]
}


function fastFib(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 1 || n === 2) return 1;

    memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
    return memo[n];
}


/*The Memoization Formula

    You'll find it most useful to draw out the visual tree first. 

    If you notice duplicate subtrees, time to memoize.

    1. Write the unoptimized, brute force recursion and make sure it works.
    
    2. Add the memo object as an additional arg to the
    function.The keys will represent unique arguments to the
    function, and their values will represent the results
    for those arguments.

    3. Add a base case condition to the function that returns the stored value if the function 's arg is in the memo.

    4. Before you return the result of the recursive case, store it in the memo as a value and make the function's arg it's key.
*/  



/*Tabulation
Tabulation is still to solve large problems efficiently by breaking them down into many subproblems.

There are two main features that comprise the Tabulation strategy:

the function is iterative and not recursive
the additional data structure used is typically an array(we refer to this as the table!)
*/


function tabulatedFib(n) {
    // create a blank array of length `n`
    let table = new Array(n);

    // seed the first two values
    table[0] = 0;
    table[1] = 1;

    // complete the table by moving from left to right,
    // following the fibonacci pattern
    for (let i = 2; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }

    return table[n];

}


//O(n) runtime and O(1) Space
function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let secondLast = 0
    let last = 1;

    for (let i = 2; i <= n; i++) {
        let temp = last;
        last = last + secondLast;
        secondLast = temp;
    }

    return last;


}

/*The Tabulation Formula

1. Create the table array based off of the size of the input
Note: this isn 't always straightforward if you have multiple args

2. Initialize some values in the table that "answer"
the trivially small subproblem
Note: usually this means initializing the first entry of the table
3. Iterate through the array and fill in remaining entries
Note: calculating the next entry should require using other entries of the table
4. Your final answer is the last entry in the table(usually)
*/



