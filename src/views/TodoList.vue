<template>
    <div id="todo-list">
        <b-container fluid>
            <div>
                <!-- title -->
                <b-row class="justify-content-center">
                    <b-col offset-md>
                        <h3>Small todo list app</h3>
                        <hr>
                    </b-col>
                </b-row>

                <!-- field for adding todo -->
                <b-row class="justify-content-center">
                    <b-col offset-md>
                        <b-form inline style="background-color: #eee; padding: 20px">
                            <b-form-input id="input-todo" type="text" placeholder="New Task" v-if="mode == 'add'" v-model="newTodo" @keyup.native.enter="addTodo()" style="width: 500px" />

                            <b-form-input id="input-todo" type="text" v-if="mode == 'edit'" v-model="todos.name" @keyup.native.enter="addTodo()" style="width: 500px" />
                            
                            <b-button id="btn-add" variant="success" v-if="mode == 'add'" @click="addTodo()">
                                <font-awesome-icon icon="plus" /> Add
                            </b-button>

                            <b-button variant="danger" v-if="mode == 'add'" @click="clearAll()">Clear All</b-button>
                            <b-button id="btn-update" variant="danger" v-if="mode == 'edit'" @click="updateTodo()">Update</b-button>
                            <b-button variant="outline-success" v-if="mode == 'edit'" @click="reset()">Cancel</b-button>
                        </b-form>
                    </b-col>
                </b-row>

                <!-- list of todo -->
                <b-row class="justify-content-center">
                    <b-col offset-md>
                        <ul>
                            <li id="list-data" v-for="todo in todos" :key="todo">
                                <!-- Todo list -->
                                <label>{{ todo.todo }}</label>
                                
                                <!-- Edit button -->
                                <span style="padding-left: 20px"></span>
                                <b-button @click="editTodo(todo)" size="sm" title="Edit">^</b-button>
                                
                                <!-- Delete button -->
                                <span style="padding-left: 5px"></span>
                                <b-button @click="deleteTodo()" size="sm" title="Delete">x</b-button>
                            </li>
                        </ul>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </div>
</template>

<script>
import TodoList from '../crud/todolist.js';

export default {
    name: 'todo-list',
    data() {
        return {
            todoList: new TodoList(),
            newTodo: "",
            todos: [],
            mode: "add"
        }
    },

    mounted() {
        this.getTodos()
    },

    methods: {
        addTodo: function() {
            if (this.newTodo) {
                var taskList = this.newTodo
                this.todoList.addTodo(taskList)
                this.newTodo = ""
            } else {
                alert("Field cannot be empty")
            }
        },

        editTodo: function(todo) {
            this.mode = "edit"
            this.todoList.editTodo(this.todos.id)

        },
        updateTodo: function() {
            
        },

        deleteTodo: function() {
            this.todoList.deleteTodo(this.todos, )
        },

        clearAll: function() {
            this.todoList.clearAll()
        },

        reset: function() {
            this.mode = "add"
            localStorage.setItem("todos")
        },

        getTodos: function() {
            this.todos = this.todoList.getTodos()
            console.log(this.todos);
        }
    }
}
</script>

<style scoped>
@import url('../statics/css/todolist.css');
</style>