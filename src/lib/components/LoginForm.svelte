<script lang="ts">


</script>

<div class="login-container">
	<form class="login-form">
		<h1>Login</h1>

		<div class="form-group">
			<label for="email">Email</label>
			<input
				type="email"
				id="email"
				required
				autocomplete="email"
			/>
		</div>

		<div class="form-group">
			<label for="password">Password</label>
			<input
				type="password"
				id="password"
				required
				autocomplete="current-password"
			/>
		</div>

		<button type="submit">
			login
		</button>

		<div class="links">
			<a href="/forgot-password">Forgot Password?</a>
			<a href="/register">Create Account</a>
		</div>
	</form>
</div>

<style>
    .login-container {
        display: inline-block;
        border: 1px solid cadetblue;
    }
</style>
