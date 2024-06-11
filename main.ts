import inquirer from "inquirer";

let todos: string[] = ["hunzala", "zafar mayo"];

async function creatTodo(todos: string[]) {

    do {

        let ans = await inquirer.prompt(
            {
                type: "list",
                message: "select an operation",
                name: "select",
                choices: ["add", "update", "view", "delete"]
            }
        )
        if (ans.select === "add") {
            let addTodo = await inquirer.prompt(
                {
                    type: "input",
                    message: "add item uh want...",
                    name: "todo",
                }
            );
            todos.push(addTodo.todo)
            console.log(todos)
        }
        if (ans.select === "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "select item for update",
                name: "todo",
                choices: todos.map(item => item)
            })
            let addTodo = await inquirer.prompt(
                {
                    type: "input",
                    message: "add item uh want...",
                    name: "todo",
                }
            );
            let newtodos = todos.filter(vel => vel !== updateTodo.todo)
            todos = [...newtodos, addTodo.todo]
            console.log(todos)
        }
        if (ans.select === "view") {
            console.log(todos)
        }
        if (ans.select === "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "select item for update",
                name: "todo",
                choices: todos.map(item => item),
            });
            let newtodos = todos.filter(vel => vel !== deleteTodo.todo);
            todos = [...newtodos];
            console.log(todos);
        }

    } while (true)



}

creatTodo(todos)
