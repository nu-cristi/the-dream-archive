<script lang="ts">
  import LoginForm from '$lib/components/LoginForm.svelte';
</script>

<svelte:head>
  <title>Enter the Archive</title>
</svelte:head>


<div class="center-content login-page-container">
  <LoginForm />
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
</style>
