import { defineStore } from 'pinia';

export const useTodosStore = defineStore('todos', {
	state: () => ({
	  todos: [] as IToDo[]
	}),
	actions: {
		async fetchTodos() {
			const data: IToDo[] = await $fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5');
			if (data) {
			  this.todos = data;
			}
		},
		ADD_TODO(todo:IToDo) {
			this.todos.push({
				id: 1,
				title: todo.title,
				completed: false
			});
		},
		REMOVE_TODO(todo:IToDo) {
			this.todos = this.todos.filter(t => t.id != todo.id);
		},
		TOGGLE_TODO(todo:IToDo) {
			todo.completed = !todo.completed;
		}
	},
  });