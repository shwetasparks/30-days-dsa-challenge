function majority(arr) {
    let count = 0;
    let ele = null;

    // Loop to find potential majority element
    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            ele = arr[i];
            count = 1;
        } else if (arr[i] === ele) {
            count++;
        } else {
            count--;
        }
    }

    // Count occurrences of ele
    let countEle = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            countEle++;
        }
    }

    // Check if ele is a majority element
    if (countEle > Math.floor(arr.length / 2)) {
        return ele;
    } else {
        return "no majority element";
    }
}

let arr = [7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 5, 5, 5, 5];
let result = majority(arr);
console.log(result);
