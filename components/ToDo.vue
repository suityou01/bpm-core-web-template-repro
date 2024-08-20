<template>
	<div :class="`task ${todo.completed ? 'is-complete' : ''}`">
		<div class="content">{{ todo.title }}</div>
		<div class="buttons">
			<button @click="toggleDone">{{ todo.completed ? 'Undo' : 'Done' }}</button>
			<button @click="removeTask" class="delete">Delete</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	const todos = useTodosStore();
	const props = defineProps<{
  		todo: IToDo
	}>();
	
	const toggleDone = () => {
		todos.TOGGLE_TODO(props.todo);
	}

	const removeTask = () => {
		todos.REMOVE_TODO(props.todo);
	}
</script>
