
function merge(leftArr, rightArr) {
    let temp = [];
    console.log('splits2', leftArr, rightArr);
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            temp.push(leftArr.shift());
        } else {
            temp.push(rightArr.shift());
        }
    }

    return [...temp, ...leftArr, ...rightArr];
}


function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let middle = Math.floor(array.length / 2);
    console.log('middle', middle)
    let leftArr = array.slice(0, middle);
    let rightArr = array.slice(middle)
    console.log('splits', leftArr, rightArr);
    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    );
}


// const array = [7, 2, 10, 4, 3, 8, 6, 1, 5, 9, 11];
const array = [5, 1, 1, 2, 0, 0];
console.log(mergeSort(array))