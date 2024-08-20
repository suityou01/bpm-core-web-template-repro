<template>
    <main>
        <h1>Todo Board</h1>
        <p>Create a list of todos</p>
        <div class="create-new">
        <input 
            type="text" 
            v-model="newTodo" 
            placeholder="Add a new todo" 
            @keypress.enter="addTodo"
        />
        <button @click="addTodo">Add</button>
    </div>
    <div class="tasks">
      <ToDo
        v-for="(todo, i) in todos"
        :key="i"
        :todo="todo" />
    </div>
    </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTodosStore } from '@/stores/todos'
const store = useTodosStore()
const { fetchTodos } = store
const { todos,} = storeToRefs(store)

await fetchTodos()

let newTodo: string = '';
  
const addTodo = () => {
  if (newTodo) {
    store.ADD_TODO({ 
      id: 0,
      title: newTodo,
      completed: false
    });
    newTodo = '';
  }
}
</script>