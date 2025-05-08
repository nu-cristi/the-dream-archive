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
        border: 1px solid var(--black-color);
        padding: 0 12px 4px 12px;
        background-color: var(--primary-color);
        color: var(--black-color);
        border-radius: 2px;
        transition: all 0.2s ease;
    }

    input:focus {
        outline: none;
        box-shadow: inset 2px -2px 0 var(--black-color);
    }

    input:focus:active {
        box-shadow: inset 2px -2px 0 var(--black-color);
        transform: translate(-1px, -1px);
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

    .input-container {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .buttons-container {
        margin-top: 30px;
    }

    button {
        border: 1px solid var(--black-color);
        padding: 3px 15px;
        background-color: var(--primary-color);
        color: var(--black-color);
        box-shadow: inset 2px -2px 0 var(--black-color);
        border-radius: 1px;
        cursor: pointer;
        transition: all 0.2s ease;
    }


    button:hover {
        box-shadow: inset 1px -1px 0 var(--black-color);
        transform: translate(-1px, -1px);
    }

    button:active {
        box-shadow: inset 1px -1px 0 var(--black-color);
        transform: translate(1px, 1px);
    }

</style>
