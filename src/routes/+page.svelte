<script>
  import Avatar from "$lib/components/avatar.svelte";
  import Dropdown from "$lib/components/buttons/dropdown.svelte";
	import Card from "$lib/components/cards/card.svelte";
	import IntroductoryCard from "$lib/components/profile/introductoryCard.svelte";
  import Overview from "$lib/components/profile/overview.svelte";
  import _allProfiles from "$lib/components/profile/sample";
</script>


<div class="bg-[#f9f7f5] w-screen h-full lg:px-16 px-4 py-12">
<div class="grid-cols-6 lg:grid gap-6">

  <div class="col-span-4 mb-2">
  <div class="lg:flex gap-3 items-center justify-between 5px">
  <h1 class="font-medium text-[1.25rem] text-primary">Let’s discover your next therapist</h1>
  <div class="my-2 lg:my-0 grid grid-cols-2 gap-4 justify-between lg:block">
  <Dropdown
    label="Sort by"
    alt="dropdown"
    isArr
  />
  <div class="lg:hidden">
  <Dropdown label="Filter by" />
  </div>
  </div>
</div>

  <IntroductoryCard />
  {#each _allProfiles as profile}
        <Overview profileProps={profile} />
  {/each}

</div>

<div class="w-[100%] col-span-2">
    <div class="flex justify-between items-baseline w-full">
    <Dropdown label="Filter by" />
  <h2>Clear all</h2>
    </div>

    <div class="p-[20px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] my-8 hidden lg:block">
    <div id="appointmentType">
      <div id="header" class="flex justify-between item">
        <h1 class="text-primary font-medium">Appointment Type</h1>
        <img src="arrow_down.svg" alt="dropdown" />
      </div>
      <div id="options" class="flex flex-col gap-2 my-2">
        <label>
        <input type="checkbox"  />
        15-min free consultation (coming soon)
      </label>

      <label>
        <input type="checkbox"  />
        Individual 50-min session
      </label>
      </div>
    </div>

     <div id="appointmentType" class="my-6">
      <div id="header" class="flex justify-between item">
        <h1 class="text-primary font-medium">Price (£ GBP)</h1>
        <img src="arrow_down.svg" alt="dropdown" />
      </div>
      <div id="options" class="flex gap-2 my-2">
        <label>
        <input type="text" class="border border-[#F1F1F1] rounded-[8px] bg-white shadow shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] p-2"  />

      </label>

      <label>
        <input type="text" class="border border-[#F1F1F1] rounded-[8px] bg-white shadow shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] p-2"  />

      </label>
      </div>
    </div>


    <div id="appointmentType" class="my-6">
      <div id="header" class="flex justify-between item">
        <h1 class="text-primary font-medium">Year of experience</h1>
        <img src="arrow_down.svg" alt="dropdown" />
      </div>
      <div id="options" class="flex gap-2 my-2">
        <label>
        <input type="text" class="border border-[#F1F1F1] rounded-[8px] bg-white shadow shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] p-2"  />

      </label>

      <label>
        <input type="text" class="border border-[#F1F1F1] rounded-[8px] bg-white shadow shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] p-2"  />

      </label>
      </div>
    </div>

    <div id="appointmentType" class="my-6">
      <div id="header" class="flex justify-between item">
        <h1 class="text-primary font-medium">Sex</h1>
        <img src="arrow_down.svg" alt="dropdown" />
      </div>
      <div id="options" class="w-full">
        <label>
        <input type="text" class="border border-[#F1F1F1] rounded-[8px] bg-white shadow shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] p-2 w-full" placeholder="Search"  />

      </label>


      </div>
    </div>

    <div id="appointmentType" class="my-6">
      <div id="header" class="flex justify-between item">
        <h1 class="text-primary font-medium">What do you need help with?</h1>
        <img src="arrow_down.svg" alt="dropdown" />
      </div>
      <div id="options" class="w-full">
        <label>
        <input type="text" class="border border-[#F1F1F1] rounded-[8px] bg-white shadow shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] p-2 w-full" placeholder="Search"  />

      </label>


      </div>
    </div>

    <div id="appointmentType" class="my-6">
      <div id="header" class="flex justify-between item">
        <h1 class="text-primary font-medium">Therapist type</h1>
        <img src="arrow_down.svg" alt="dropdown" />
      </div>
      <div id="options" class="w-full">
        <label>
        <input type="text" class="border border-[#F1F1F1] rounded-[8px] bg-white shadow shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] p-2 w-full" placeholder="Search"  />

      </label>


      </div>
    </div>

     <div id="appointmentType" class="my-6">
      <div id="header" class="flex justify-between item">
        <h1 class="text-primary font-medium">Country of residence</h1>
        <img src="arrow_down.svg" alt="dropdown" />
      </div>
      <div id="options" class="w-full">
        <label>
        <input type="text" class="border border-[#F1F1F1] rounded-[8px] bg-white shadow shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] p-2 w-full" placeholder="Search"  />

      </label>


      </div>
    </div>


       <div id="appointmentType" class="my-6">
      <div id="header" class="flex justify-between item">
        <h1 class="text-primary font-medium">Language</h1>
        <img src="arrow_down.svg" alt="dropdown" />
      </div>
      <div id="options" class="w-full">
        <label>
        <input type="text" class="border border-[#F1F1F1] rounded-[8px] bg-white shadow shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] p-2 w-full" placeholder="Search"  />

      </label>


      </div>
    </div>


  </div>

  </div>



</div>

</div>
