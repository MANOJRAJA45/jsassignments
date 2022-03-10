let buttoon = document.querySelector("button");
let id = 0;
buttoon.addEventListener("click", function (e)
{
    let todolist = document.querySelector('div.todos');
    let input = document.querySelector('input');
    let paragraph = document.createElement("p");
    paragraph.innerHTML = input.value;
    paragraph.setAttribute("key", id);
    todolist.appendChild(paragraph)
    input.value = ""
    id+= 1;
    document.querySelector(`p[key="${id-1}"]`).addEventListener("click", function(e)
    {
        let todolist = document.querySelector('div.todos');
        todolist.removeChild(this);
    })
});