const permutation = (n , r) => {
    let total = 1;
    for (let i = 1; i <= n; i++){
        total *= i;
    }
    for (let j = 1; j <= (n-r); j++){
        total /= j;
    }
    return total;
}





const combination = (n , r) => {
    let total = 1;
    for (let i = 1; i <= n; i++){
        total *= i;
    }
    for (let j = 1; j <= (n-r); j++){
        total /= j;
    }
    for (let k = 1; k <= r; k++){
        total /= k;
    }
    return total;
}

const multiPermutation = (n, r) => {
    let total = 1;
    for (let i = 1; i <= r; i++){
        total *= n;
    }
    return total;
}

const multiCombination = (n, r) => {
    return combination(n+r-1, r);
}


module.exports = {
    permutation,
    combination,
    multiCombination,
    multiPermutation
};