<script setup lang="ts">
  const input = ref("");
  const { todos, addTodo, updateTodo, deleteTodo } = useTodos();

  const handleClick = () => {
    addTodo(input.value);
    input.value = "";
  };
</script>


<template>
  <div class="container">
    <NCard class="cards">
      <h1>My Todos</h1>
      <div class="add-todo">
        <input placeholder="Add a new todo..." v-model="input" />
        <NButton class="button" @click="handleClick">
          Add
        </NButton>
      </div>
      <NCard
        @click="() => updateTodo(todo.id)"
        class="card"
        v-for="todo in todos"
        :key="todo.id"
      >
        <h4 :class="todo.completed ? 'complete' : null">
          {{ todo.item }}
        </h4>
        <p @click="() => deleteTodo(todo.id)">
          x
        </p>
      </NCard>
    </NCard>
  </div>
</template>


<style scoped>
  .container {
    padding: 2rem;
    margin: 0 auto;
    max-width: 50%;
  }

  .cards {
    padding: 2rem;
  }

  input {
    outline: none;
    border: 2px solid #403d4c;
    padding: .5rem .75rem;
  }

  .button {
    cursor: pointer;
    border: 2px solid #403d4c;
    padding: .5rem 2rem;
  }

  .add-todo {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .card {
    padding: .5rem;
    margin-top: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }

  .complete {
    text-decoration: line-through;
  }
</style>