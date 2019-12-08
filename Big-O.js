/* O notation speed
1. The function should be defined in terms of the size of the input(s).
2. A smaller Big-O function is more desirable than a larger one. Intuitively, we want our algorithms to use the minimal amount of time and memory possible.
3. Big-O describes the worst case scenario, also known as the upper-bound. We prepare our algorithm for the worst-case, because the best-case is a luxury we can't guarantee.
4. A Big-O function should be simplified to show only it's most dominant mathematical term.

Notion Speed Fast to Slow

O(n!)
O(k^n) .... O(k^n-1)
O(n^k)
O (n log n)
O(n)
O(log(n))
O(1)

*/

//O(100)
function linearO(n){
    for(let i = 0; n < 100; i++){
        //...
    }
}

//O(n)

function linearOn(n){
    for(let i = 0; i < n;i++){
        //....
    }
}

//O(n^2)

function linearOn(n) {
    for (let i = 0; i < n; i++) {
        //....
        for (let j = 0; j < n; j++) {
            //....
        }
    }
}

//O(log n)

function logN(n){
    if (n <=1 ) return;
    logN(n/2);
}

// O(nlogn)

function nLogn(n){
    if(n <= 1) return;
    for (let i = 0; i < n; i++) {
        //....
    }  

    logN(n / 2);
}

// O(2^n)
function exp_2n(n){
    if(n === 1) return;
    exponential_2n(n-1);
    exponential_2n(n-1);
}

//Exponential - O(3^n)
function exponential_3n(n){
    if (n===0)return;
    exponential_3n(n-1);
    exponential_3n(n - 1);
    exponential_3n(n - 1);
}

// Factorial-O (n!)

function factorial(n){
    if(n===1) return;
    for(let i = 1; i <= n; i++){
        factorial(n-1);
    }
}




