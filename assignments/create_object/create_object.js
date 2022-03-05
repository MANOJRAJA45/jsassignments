function CreateObject(arr) {
    // Write your code here
    let obj={};
    for(let i=0;i<arr.length;i+=2){
        if(!obj.hasOwnProperty(arr[i])){
            obj[arr[i]]=new Array();
            obj[arr[i]].push(arr[i+1]);
        }
        else{
            obj[arr[i]].push(arr[i+1]);
        }
    }
    return obj
}

module.exports = CreateObject;
