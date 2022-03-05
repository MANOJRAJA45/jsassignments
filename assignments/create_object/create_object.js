function CreateObject(arr) {
    // Write your code here
    let obj={};
    let value=[];
    let key=[];
    for(let i=0;i<arr.length;i++){
        if(i%2==1){
            value.push(arr[i]);
        }else{
            key.push(arr[i]);
        }
    }
    key.forEach((key,i)=>obj[key]=value[i])
    return obj
}

module.exports = CreateObject;
