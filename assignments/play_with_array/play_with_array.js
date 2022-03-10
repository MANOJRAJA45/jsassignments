function getEven(arr) {
    let narr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            narr.push(arr[i]);
        }
    }
    return narr
}
function multiplyByN(arr, n) {
    let manoj=[];
    for(let i=0;i<arr.length;i++){
        let x=arr[i]*n;
        manoj.push(x);
        }
    
    return manoj
}
function removeNthElement(arr, n) {
    arr.splice(n,1)
    return arr
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}