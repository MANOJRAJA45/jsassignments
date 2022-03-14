document.getElementById('completeditems').addEventListener('click' , Completed)
document.getElementById('pendingitems').addEventListener('click',Pending)
const output = document.getElementById('answer')
function Completed(){
    output.innerHTML=""
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
      return res.json()
    }).then((data)=>{
        data.forEach((item) => {
            if (item.completed==true){
                const li = document.createElement('li')
                li.textContent = item.title
                ans.appendChild(li)
            }
        });
    })
}
function Pending(){
    output.innerHTML=""
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
      return res.json()
    }).then((data)=>{
        data.forEach((item) => {
            if (item.completed==false){
                const li = document.createElement('li')
                li.textContent = item.title
                ans.appendChild(li)
            }
        });
    })
}