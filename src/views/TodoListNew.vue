<template>
    <div container>
        <div id="todo-app">
            <div class="panel panel-default">
                <h2 class="text-center">Add Your Task</h2>
                &nbsp;
                <b-row class="justify-content-center">
                    <b-col cols="8">
                        <b-form-group>
                            <b-row>
                                <b-col cols="8">
                                    <b-form-input class="form-control" type="text" v-if="mode == 'add'" placeholder="Add your task" v-model="newTodo" @keyup.native.enter="addTodo()"></b-form-input>
                                    <b-form-input class="form-control" type="text" v-if="mode == 'edit'" v-model="form.todo" @keyup.native.enter="updateTodo()"></b-form-input>
                                </b-col>

                                <b-col cols="3">
                                    <b-button variant="success" v-if="mode == 'add'" @click="addTodo()">Add</b-button>
                                    <b-button variant="danger" v-if="mode == 'add'" @click="clearAll()">Clear All</b-button>
                                    <b-button variant="success" v-if="mode == 'edit'" @click="updateTodo()">Update</b-button>
                                    <b-button variant="outline-success" v-if="mode == 'edit'" @click="resetTodo()">Cancel</b-button>
                                </b-col>
                            </b-row>
                        </b-form-group>
                    </b-col>
                </b-row>
            </div>
            &nbsp;
            <div>
                <b-row class="justify-content-center">
                    <b-col cols="8">
                        <b-table :fields="fields" :items="todos">
                            <template slot="action" slot-scope="row">
                                <b-button size="sm" @click="editTodo(row.item)">^</b-button>
                                <span style="margin: 2px;"></span>
                                <b-button size="sm" @click="deleteTodo()">x</b-button>
                            </template>
                        </b-table>
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</template>

<script>
import TodoList from '../crud/todolist.js';

export default {
    name: 'todo-list-new',
    data() {
        return {
            todoList: new TodoList(),
            fields: [
                {key: "id", lable: "ID"},
                {key: "todo", lable: "Todo"},
                {key: "action", lable: "Action"}
            ],
            newTodo: "",
            todos: [],
            editedTodo: null,
            mode: "add",
            form: {
                id: null,
                todo: ""
            }
        }
    },

    mounted() {
        this.getTodos()
    },

    methods: {
        addTodo: function() {
            if (this.newTodo) {
                var addNewList = this.newTodo
                this.todoList.addTodo(addNewList)
                this.newTodo = ""
            } else {
                alert("Field cannot be empty")
            }
        },

        editTodo: function(todo) {
            this.mode = "edit" 
            this.form.id = todo.id
            this.form.todo = todo.todo
        },

        updateTodo: function() {
            this.mode = "add"
            var id = this.form.id
            //Ambil semua todo yang ada di localstorage
            var todos = JSON.parse(localStorage.getItem("todos"));
            
            //Find todo berdasarkan parameter id dan tampung di var todo
            var todo = todos.find(data=>data.id===id);

            //Ubah nilai todo berdasarkan nilai dari form
            todo.todo = this.form.todo;

            //Hapus todo yang ada di todos dengan parameter todo.id dan tampung di var todos untuk menyimapan perubahan
            todos = todos.filter(data=>data.id!==todo.id);
            
            //Push todo yang sudah di modif ke var todos
            todos.push(todo);

            //remove semua data todos yang ada di localstorage 
            localStorage.removeItem("todos");

            //Simpan todos yang baru di Localstorage
            localStorage.setItem("todos", JSON.stringify(todos))

            //Set todos yang baru ke state
            this.todos = todos
        },

        deleteTodo: function() {
            this.todoList.deleteTodo(this.todos)
        },

        clearAll: function() {
            this.todoList.clearAll()
        },

        resetTodo: function() {
            this.mode = "add"
            this.todoList.resetTodo()
        },

        getTodos: function() {
            this.todos = this.todoList.getTodos()
        }
    }
}
</script>
