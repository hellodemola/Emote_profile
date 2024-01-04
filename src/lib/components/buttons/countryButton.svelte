<script lang="ts">
	import SelectButton from './selectButton.svelte';
	import { countryStore } from '../../../routes/store';
	export let alt = 'United Kingdom';
	export let country = 'UK';
	export let countryCode = 'GB';
	let isSelected = false;
	export function handleSelect(country: string) {
		countryStore.update((value) => {
			if (!isSelected) {
				isSelected = true;
				return { ...value, country };
			} else {
				isSelected = false;
				return { ...value, country: '' };
			}
		});
	}
</script>

<button class="w-fit" on:click={() => handleSelect(country)}>
	<SelectButton>
		<img
			{alt}
			class="w-[1em]"
			src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}
		/>

		<p class="">{country}</p>
	</SelectButton>
</button>
