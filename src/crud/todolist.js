export default class TodoList {
    constructor() {
        this.id = 1
        this.todos = []
        this.newTodo = ""
        this.form = {
            todo: ""
        }
    }

    getId() {
        return this.id++
    }

    getTodos() {
        return this.todos
    }

    getNewTodo() {
        return this.newTodo
    }

    addTodo(text) {
        this.todos.push({
            id: this.getId(),
            todo: text
        })
        localStorage.setItem("todos", JSON.stringify(this.getTodos()))
    }

    updateTodo(text) {
        this.todos({
            todo: text
        })
    }

    deleteTodo(todo) {
        var index = this.todos.indexOf(todo)
        this.todos.splice(index, 1)
        this.todos = todo
    }

    clearAll() {
        var arr = this.todos
        for (var i = arr.length; i > 0; i--) {
            arr.pop()
            localStorage.setItem("todos", JSON.stringify(this.todos))
        }
    }
}