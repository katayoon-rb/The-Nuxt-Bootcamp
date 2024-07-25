<script setup lang="ts">
  const { supabase } = useSupabase()
  const { user } = useAuth()
  const notesInput = reactive({ title: '', note: '' });

  const handleSubmit = async () => {
    if (!notesInput.title || !notesInput.note) return;
    await supabase.from('notes').insert({
      title: notesInput.title,
      note: notesInput.note,
      user_id: user.value.id
    })
    notesInput.title = ''
    notesInput.note = ''
  }
</script>


<template>
  <NCard class="card">
    <input placeholder="My title" v-model="notesInput.title" />
    <textarea placeholder="My note" v-model="notesInput.note"></textarea>
    <NButton class="button" @click="handleSubmit">Save Note</NButton>
  </NCard>
</template>


<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
  }
  input, textarea {
    border:.1rem solid rgba(0, 0, 0, .1);
    border-radius: .5rem;
    margin-bottom: .5rem;
    padding: .4rem;
  }
  .button {
    cursor: pointer;
    border:.1rem solid rgba(255, 255, 255, 0.1);
    padding: .5rem;
    text-align: center;
  }
</style>