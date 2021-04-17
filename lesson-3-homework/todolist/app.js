function rendtodo(todo) {
     list = document.querySelector("ul");
     checked = todo.checked ? "done" : "";
     node = document.createElement("li");
    node.innerHTML = `
    <span class="delete">&times;</span>
    <input type="checkbox">
    <span class="${checked}">${todo.input}</span>`;
    list.append(node);
}

function addtolist(input) {
    todo = {
        input,
        checked: false,
        id: Math.floor(Math.random()*10),
    };
    rendtodo(todo);
}

form = document.querySelector("form");
form.addEventListener('submit', e => {
    e.preventDefault();
    input = document.querySelector("input");
    input = input.value.trim();
    if (input !== "") {
        addtolist(input);
        input.value = "";
        input.focus();
    }
})



ul = document.querySelector("ul");
ul.addEventListener("click", e => {
    if (e.target.className === "delete") {
        e.target.parentNode.style.display = "none";
    }

    if (e.target.tagName === "INPUT") {
        if (e.target.nextElementSibling.className === "done") {
            e.target.nextElementSibling.className = "";
            console.log(e.target.nextElementSibling.className);
        } else {
            e.target.nextElementSibling.className = "done";
            console.log(e.target.nextElementSibling.className);
        }

    }
})

clear = document.querySelector("#clear");
clear.addEventListener("click", e => {
    let list = document.querySelector("ul");
    list.innerHTML = "";
})