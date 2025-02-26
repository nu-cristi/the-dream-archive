<script lang="ts">

</script>
<div class="login-form-container">
  <h1 class="form-title">Enter the archive</h1>
  <form class="login-form" method="POST">
    <div class="input-container">
      <label for="username">Username:</label>
      <input
        type="text"
        name="username"
        required
      />
    </div>
    <div class="input-container">
      <label for="password">Password:</label>
      <input
        type="password"
        name="password"
        required
        autocomplete="current-password"
      />
    </div>
    <div class="buttons-container">
      <button type="submit">
        Enter
      </button>
      <button on:click|preventDefault>
        Hint
      </button>
    </div>
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
        /*width: calc(100vw - 40px);*/
        /*height: calc((100vw - 40px) * 0.5625);*/
        /*min-height: fit-content;*/
    }

    .form-title {
        padding-bottom: 10px;
        border-bottom: 1px solid gray;
    }

    .login-form {
        margin-top: 20px;
    }

    .input-container {
        margin-bottom: 10px;
    }


    button {
        border: 1px solid var(--black-color);
        padding: 0 15px;
    }
</style>
