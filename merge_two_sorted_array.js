function mergeTwoSortedArray(arr1, arr2) {
    if(arr1.length === 0) {
        return arr2;
    }
    if(arr2.length === 0) {
        return arr1;
    }

    let arr1Index = 0;
    let arr2Index = 0;

    const arr1Length = arr1.length;
    const arr2Length = arr2.length;

    const mergedArr = [];

    while(true) {

        if((arr1Index < arr1Length) && (arr2Index < arr2Length)) {
            if(arr1[arr1Index] < arr2[arr2Index]) {
                mergedArr.push(arr1[arr1Index]);
                arr1Index++;
            }
            else {
                mergedArr.push(arr2[arr2Index]);
                arr2Index++;
            }
        }
        else {
            if(arr1Index < arr1Length) {
                mergedArr.push(arr1[arr1Index]);
                arr1Index++;
            }
            else if (arr2Index < arr2Length) {
                mergedArr.push(arr2[arr2Index]);
                arr2Index++;
            }
            else {
                break;
            }
        }
    }

    console.log(mergedArr);

}

const arr1 = [0,3,4,31];
const arr2 = [1,2,3,4,5,6,7,8,9,10];

mergeTwoSortedArray(arr1, arr2);
