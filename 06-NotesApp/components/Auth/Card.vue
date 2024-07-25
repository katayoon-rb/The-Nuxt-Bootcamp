<script setup lang="ts">
  const authState = ref<"login" | "signup">("login");
  const authError = ref('')
  const input = reactive({ password: "", email: "" });
  const showConfirmEmailMessage = ref(false);
  const { signUp, signIn, signOut, user } = useAuth();
  const router = useRouter()

  const toggleAuthState = () => {
    if (authState.value === "login") authState.value = "signup";
    else authState.value = "login";
    authError.value = ''
  };

  const handleSubmit = async () => {
    try {
      if (authState.value === "login") {
        await signIn({ email: input.email, password: input.password });
        router.push("/profile")
      }
      else {
        await signUp({ email: input.email, password: input.password });
        showConfirmEmailMessage.value = true;
      }
      input.email = "";
      input.password = "";
    }
    catch (err: any) {
      authError.value = err.message
    }
  };
</script>


<template>
  <div class="wrapper">
    <div v-if="!showConfirmEmailMessage">
      <NCard class="card">
        <h3>{{ authState }}</h3>
        <div class="input-container">
          <input
            type="email"
            placeholder="Email"
            v-model="input.email"
          />
          <input
            type="password"
            placeholder="Password"
            v-model="input.password"
          />
        </div>
        <NButton class="button" @click="handleSubmit">
          Submit
        </NButton>
        <p class="error" v-if="authError">{{ authError }}</p>
        <p @click="toggleAuthState">
          {{
            authState === "login"
              ? "Don't have an account? Create one now"
              : "Already have an account? Go ahead an log in"
          }}
        </p>
      </NCard>
    </div>
    <div v-else>
      <h3>Check email for confirmation message</h3>
    </div>
  </div>
</template>


<style scoped>
  .wrapper {
    border: 0.1rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem;
    padding: 0 1rem;
  }

  .card {
    padding: 1rem;
    width: 25rem;
  }

  .card h3 {
    font-size: 1.75rem;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  .input-container {
    display: flex;
    flex-direction: column;
  }

  .input-container input {
    margin-bottom: 0.3rem;
    padding: 0.2rem;
    outline: none;

    border: 0.1rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem;
  }

  p {
    color: rgb(0, 102, 255);
    font-size: 0.7rem;
    cursor: pointer;
    text-align: center;
  }

  .button {
    display: block;
    cursor: pointer;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem;
    margin-top: 10px;
    text-align: center;
  }

  .error {
    color: red;
  }
</style>
