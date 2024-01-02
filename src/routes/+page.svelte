<script>
	import CountryButton from "$lib/components/buttons/countryButton.svelte";
  import Dropdown from "$lib/components/buttons/dropdown.svelte";
	import SelectButton from "$lib/components/buttons/selectButton.svelte";
	import Search from "$lib/components/input/search.svelte";
	import IntroductoryCard from "$lib/components/profile/introductoryCard.svelte";
  import Overview from "$lib/components/profile/overview.svelte";
  import _allProfiles from "$lib/components/profile/sample";

  const countries = [
    { label: 'UK', countryCode: 'GB', alt: 'united kindgom' },
    { label: 'Spain', countryCode: 'ES', alt: 'united kindgom' },
    { label: 'USA', countryCode: 'US', alt: 'united kindgom' },
    { label: 'Australia', countryCode: 'AU', alt: 'united kindgom' },
    { label: 'Canada', countryCode: 'CA', alt: 'united kindgom' },
  ];

  let languages = [
    { id: 0, lang: 'English' },
    { id: 1, lang: 'Mandarin' },
    { id: 0, lang: 'French' },
    { id: 0, lang: 'Italian' },
    { id: 0, lang: 'Punjabi' },
    { id: 0, lang: 'Russian' },
    { id: 0, lang: 'Spanish' },
    { id: 0, lang: 'German' },
  ]
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

    <div class="p-[24px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] my-8 hidden lg:block">
    <div id="appointmentType">
      <div id="header" class="flex justify-between item">
        <h1 class="text-primary font-medium mb-2">Appointment Type</h1>
        <img src="arrow_down.svg" alt="dropdown" />
      </div>
      <div id="options" class="flex flex-col gap-[16px] my-2 justify-center">
        <label>
        <input type="checkbox" class="mr-2 w-[20px] h-[20px] rounded-full border border-[#D0D5DD] bg-[#FFF]"  />
        15-min free consultation (coming soon)
      </label>

      <label>
        <input type="checkbox" class="mr-2 w-[20px] h-[20px] rounded-full border border-[#D0D5DD] bg-[#FFF]"  />
        Individual 50-min session
      </label>
      </div>
    </div>

     <div id="appointmentType" class="my-6">
      <div id="header" class="flex justify-between item mb-4">
        <h1 class="text-primary font-medium">Price (£ GBP)</h1>
        <img src="arrow_down.svg" alt="dropdown" />
      </div>
      <div id="options" class="flex gap-2">
      <div class="border flex-1 border-[#F1F1F1] rounded-[8px] bg-white shadow shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] items-center p-2 justify-between flex text-primary">
        <p class="text-gray">min</p>
        <p>20</p>
      </div>

      <div class="border flex-1 border-[#F1F1F1] rounded-[8px] bg-white shadow shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] items-center p-2 justify-between flex text-primary">
        <p class="text-gray">max</p>
        <p>200</p>
      </div>

      </div>
      <div class="slidecontainer my-6 w-full">
  <input type="range" min="1" max="100" value="50" class="w-full bg-[#BFD962] border border-[#BFD962]" id="myRange">
</div>
    </div>


    <div id="appointmentType" class="my-6">
      <div id="header" class="flex justify-between item mb-4">
        <h1 class="text-primary font-medium">Year of experience</h1>
        <img src="arrow_down.svg" alt="dropdown" />
      </div>
      <div id="options" class="flex gap-2">
      <div class="border flex-1 border-[#F1F1F1] rounded-[8px] bg-white shadow shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] items-center p-2 justify-between flex text-primary">
        <p class="text-gray">min</p>
        <p>3</p>
      </div>

      <div class="border flex-1 border-[#F1F1F1] rounded-[8px] bg-white shadow shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] items-center p-2 justify-between flex text-primary">
        <p class="text-gray">max</p>
        <p>25</p>
      </div>

      </div>
      <div class="slidecontainer my-6 w-full">
  <input type="range" min="1" max="100" value="50" class="w-full bg-[#BFD962] border border-[#BFD962]" id="myRange">
</div>
    </div>

    <div id="appointmentType" class="my-6">
      <div id="header" class="flex justify-between item mb-4">
        <h1 class="text-primary font-medium">Sex</h1>
        <img src="arrow_down.svg" alt="dropdown" />
      </div>
      <Search />
    </div>

    <div id="appointmentType" class="my-6">
      <div id="header" class="flex justify-between item mb-2">
        <h1 class="text-primary font-medium">What do you need help with?</h1>
        <img src="arrow_down.svg" alt="dropdown" />
      </div>
      <Search />
    </div>

    <div id="appointmentType" class="my-6">
      <div id="header" class="flex justify-between item mb-2">
        <h1 class="text-primary font-medium">Therapist type</h1>
        <img src="arrow_down.svg" alt="dropdown" />
      </div>
      <Search />
    </div>

     <div id="appointmentType" class="my-6">
      <div id="header" class="flex justify-between item mb-4">

        <h1 class="text-primary font-medium">Country of residence</h1>
        <img src="arrow_down.svg" alt="dropdown" />


      </div>
      <div class="grid grid-cols-3 gap-4">
        {#each countries as country(country.label)}
        <CountryButton countryCode={country.countryCode} country={country.label}   />
        {/each}
        </div>

    </div>


       <div id="appointmentType" class="my-6">
      <div id="header" class="flex justify-between item mb-4">
        <h1 class="text-primary font-medium">Language</h1>
        <img src="arrow_down.svg" alt="dropdown" />
      </div>
      <div class="grid grid-cols-3 gap-4">
        {#each languages as language}
        <SelectButton>
         {language.lang}
        </SelectButton>
        {/each}
        </div>
    </div>


  </div>

  </div>



</div>

</div>
