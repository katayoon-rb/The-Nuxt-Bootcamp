<script setup lang="ts">
  const { supabase } = useSupabase()
  const { user } = useAuth()
  const notes = ref();

  if (process.client) {
    notes.value = await supabase
      .from('notes')
      .select()
      .eq('user_id', user.value.id)
  }
</script>


<template>
  <div class="container">
    <h3>My Notes</h3>
    <NotesForm />
    <div v-if="notes.data">
      <NCard
        :key="note.id"
        v-for="note in notes.data"
        class="noteCard"
      >
        <h2>{{ note.title }}</h2>
        <p>{{ note.note }}</p>
      </NCard>
    </div>
  </div>
</template>


<style scoped>
  .container {
    max-width: 50%;
    height: 90vh;
    margin: 0 auto;
    padding: 3rem 0;
  }
  h3 {
    font-size: 2rem;
  }
  .noteCard {
    display: block;
    padding: 1rem;
    margin-bottom: 1rem;
    border:.1rem solid rgba(0, 0, 0, .1);
  }
  .noteCard h2 {
    font-size: 1.4rem;
    font-weight: bold;
  }
</style>