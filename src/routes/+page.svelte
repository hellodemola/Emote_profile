<script lang="ts">
  import Dropdown from "$lib/components/buttons/dropdown.svelte";
	import Filter from "$lib/components/filter/filter.svelte";
	import IntroductoryCard from "$lib/components/profile/introductoryCard.svelte";
  import Overview from "$lib/components/profile/overview.svelte";
  import _allProfiles from "$lib/components/profile/sample";
  import { countryStore } from "./store";

  // filter
  let filterElement = '';
  let filteredData:any = [];

  countryStore.subscribe((value) => {
    filterElement = value?.country;
    getFilterData();
  })

  function getFilterData () {
    if (filterElement){
      return filteredData = _allProfiles.filter((profile) => {
        return profile.demographic.location.toLowerCase().includes(filterElement.toLocaleLowerCase());
      })
    } else {
      return filteredData = [];
    }
  }


</script>


<div class="bg-[#f9f7f5] w-screen h-full lg:px-16 px-4 py-12">
<div class="grid-cols-6 lg:grid gap-6">

  <div class="col-span-4 mb-2">
  <div class="lg:flex gap-3 items-center justify-between 5px">
  <h1 class="font-medium text-[1.25rem] text-primary">Let’s discover your next therapist</h1>
  <div class="my-2 lg:my-0 grid grid-cols-2 gap-4 justify-between lg:block">
  <Dropdown label="Sort by" alt="dropdown" isArr />
  <div class="lg:hidden">
    <Dropdown label="Filter by" />
  </div>
  </div>
</div>
  {#if filteredData?.length > 0}
   <IntroductoryCard allProfiles={filteredData} />
  {#each filteredData as profile}
    <Overview profileProps={profile} />
  {/each}
  {:else if filterElement && filteredData.length === 0}
   No data found for "{filterElement}"
  {:else}
    <IntroductoryCard allProfiles={_allProfiles} />
  {#each _allProfiles as profile}
    <Overview profileProps={profile} />
  {/each}
  {/if}
</div>
<div class="col-span-2 hidden lg:block">
  <Filter />
</div>

</div>
</div>
