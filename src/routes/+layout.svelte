<script>
	import Footer from "$lib/components/footer.svelte";
import Nav from "$lib/components/nav.svelte";
  import "../app.css";
  import '@fontsource/inter/500.css';
  import '@fontsource/poppins/400.css';
  import '@fontsource/poppins/500.css';
  import '@fontsource/poppins/600.css';
  import '@fontsource/poppins/700.css';

</script>

<Nav/>
<slot />
<Footer/>

<style>
  :global(body) {
    font-family: 'Poppins', sans-serif;
    color: 'primary';
    font-weight: '500';
  }
</style>
