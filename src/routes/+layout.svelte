<script>
  import '$lib/styles/base.css';
  import '$lib/styles/media-queries.css';
  import '$lib/styles/global.css';

  const { children } = $props();
</script>


<main>
  {@render children()}
</main>
