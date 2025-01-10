<script lang="ts">
	import LoginForm from '$lib/components/LoginForm.svelte';
</script>

<svelte:head>
	<title>Enter the Archive</title>
</svelte:head>


<div class="login-page-container">
	<LoginForm />
</div>


<style>
    .login-page-container {
        /* Position it to cover the viewport */
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;

        background-image: url('/images/login_background.gif');
        /* Set the background */
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        /* Ensure it stays behind content */
        z-index: -1;
    }
</style>
