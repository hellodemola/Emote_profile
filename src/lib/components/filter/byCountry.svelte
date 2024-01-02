<script>
	import CountryButton from "../buttons/countryButton.svelte";
	import FilterHeader from "./filterHeader.svelte";
    const countries = [
    { label: 'UK', countryCode: 'GB', alt: 'united kindgom' },
    { label: 'Spain', countryCode: 'ES', alt: 'united kindgom' },
    { label: 'USA', countryCode: 'US', alt: 'united kindgom' },
    { label: 'Australia', countryCode: 'AU', alt: 'united kindgom' },
    { label: 'Canada', countryCode: 'CA', alt: 'united kindgom' },
  ];
</script>

<div id="appointmentType" class="my-6">
    <FilterHeader heading="Country of residence" />
    <div class="grid grid-cols-3 gap-4">
    {#each countries as country(country.label)}
    <CountryButton countryCode={country.countryCode} country={country.label}   />
    {/each}
    </div>
</div>
