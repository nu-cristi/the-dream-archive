<script lang="ts">
  import { enhance } from '$app/forms';
  import { slide } from 'svelte/transition';
  import { onClickOutside } from '../../utils/hooks//onClickOutside';

  export let form;

  let showHint = false;
</script>

<svelte:head>
  <title>Enter the Archive</title>
</svelte:head>


<div class="center-content login-page-container">
  <div class="login-form-container">
    <h1 class="form-title">Enter the archive</h1>
    <form class="login-form" method="POST" use:enhance>
      <div class="input-container">
        <label for="username">Username:</label>
        <input
          id="username"
          type="text"
          name="username"
          required
          autocomplete="username"
        />
      </div>
      <div class="input-container">
        <label for="password">Password:</label>
        <input
          id="password"
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
        <button on:click|preventDefault={() => (showHint = !showHint)}>
          Hint
        </button>
        {#if showHint}
          <div
            class="hint-popup"
            use:onClickOutside={() => (showHint = false)}
            transition:slide
          >
            You can try "admin" and "password", it might be that easy
          </div>
        {/if}
      </div>
      {#if form?.message}
        <div class="form-status-message" transition:slide>
          {form?.message}
        </div>
      {/if}
    </form>
  </div>
</div>


<style>
    .login-page-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-image: url('/images/login_background.gif');
        background-size: cover;
        background-position: center;
    }

    .login-form-container {
        width: 380px;
        height: fit-content;
        background-color: var(--primary-color);
        padding: 20px;
        border-radius: 2px;
        margin: 0 30px;
        box-shadow: -15px 15px 1px var(--black-color);
        border: 1px solid var(--black-color);
    }

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

    input:-webkit-autofill {
        -webkit-text-fill-color: var(--black-color) !important;
        -webkit-box-shadow: 0 0 0 30px var(--primary-color) inset !important;
    }

    input:focus:active {
        box-shadow: inset 2px -2px 0 var(--black-color);
        transform: translate(-1px, -1px);
    }

    .form-status-message {
        display: inline-block;
        margin-top: 20px;
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
        position: relative;
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

    .hint-popup {
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 10px;
        padding: 12px;
        background-color: var(--primary-color);
        color: var(--black-color);
        border: 1px solid var(--black-color);
        border-radius: 2px;
        box-shadow: inset 1px -1px 0 var(--black-color);
        z-index: 10;
        width: max-content;
        max-width: 300px;
    }
</style>
