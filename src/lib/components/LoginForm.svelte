<script lang="ts">

  const handleSubmit = (event: SubmitEvent) => {
    console.log(event);
  };

</script>

<div class="login-form-container">
  <h1 class="form-title">Enter the archive</h1>
  <form class="login-form" method="POST" on:submit|preventDefault={handleSubmit}>
    <div>
      <label for="username">Username:</label>
      <input
        type="text"
        id="username"
        required
      />
    </div>
    <div>
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        required
        autocomplete="current-password"
      />
    </div>
    <button type="submit">
      Enter
    </button>
  </form>
</div>

<style>
    input {

    }

    .login-form-container {
        background-color: var(--primary-color);
        padding: 20px;
        border-radius: 2px;
        margin: 0 30px;
        box-shadow: -15px 15px 1px var(--black-color);
        border: 1px solid var(--black-color);
    }

    .form-title {
        padding-bottom: 10px;
        border-bottom: 1px solid gray;
    }

    .login-form {
        margin-top: 20px;
    }
</style>
