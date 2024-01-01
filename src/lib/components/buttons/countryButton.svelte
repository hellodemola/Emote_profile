<script>
	import SelectButton from "./selectButton.svelte";

    export let alt = "United Kingdom";
    export let country = 'UK';
    export let countryCode = 'GB';
</script>

<SelectButton>
<img
alt={alt}
class="w-[1em]"
src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}/>

<p class="">{country}</p>
</SelectButton>
