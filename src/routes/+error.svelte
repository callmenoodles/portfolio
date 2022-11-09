<script>
	import { page } from "$app/stores";
</script>

<div class="error-container">
	<h1>{$page.status}</h1>
	<p>{$page.error?.message}</p>
</div>

<style lang="scss">
	.error-container {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h1 {
			margin: 0;
			font-size: 4em;
		}

		p {
			margin: 0;
			font-size: em;
		}
	}
</style>