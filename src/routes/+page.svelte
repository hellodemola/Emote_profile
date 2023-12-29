<script>
	import Avatar from "$lib/components/avatar.svelte";
import Dropdown from "$lib/components/buttons/dropdown.svelte";
	import Footer from "$lib/components/footer.svelte";
  import Overview from "$lib/components/profile/overview.svelte";
  import _allProfiles from "$lib/components/profile/sample";
</script>


<div class="bg-[#f9f7f5] w-screen h-full p-12">
<div class="grid-cols-6 grid gap-6">
  <div class="col-span-4">
  <div class="flex gap-3 items-center justify-between 5px">
  <h1 class="font-medium text-[1.25rem] text-primary">Let’s discover your next therapist</h1>
  <Dropdown
    label="Sort by: Year of experience"
    bgColor="#fff"
    alt="dropdown"
    link="dropdown_icon.svg"
    isArr
  />
</div>

 <div class="p-[20px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] my-4">
  <p class="text-primary font-medium">30 second introduction videos</p>
  <div id="avatar" class="flex gap-4 my-2 items-baseline">
    <div id="" class="my-2 cursor-pointer">
      <div class="bg-[#BFD962] p-4 rounded-full">
        <img alt="refresh" width="100%" src="refresh.svg" />
      </div>
      <p class="text-primary text-center mt-2">Refresh</p>
    </div>
    {#each _allProfiles as profile}
    <div class="w-[5em]">
      <div class="w-[4em]">
      <Avatar width="100em" url={profile?.avatarUrl} />
      </div>
      <p class="text-primary text-center mt-2">{profile?.firstName} S.</p>
    </div>
    {/each}
  </div>
 </div>


  {#each _allProfiles as profile}
        <Overview profileProps={profile} />
  {/each}

</div>

<div class="w-[100%] col-span-2">
    <div class="flex justify-between items-baseline w-full">
      <Dropdown
    label="Filter by"
    bgColor="#fff"
  />
  <h2>Clear all</h2>
    </div>

    <div class="p-[20px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] my-4">
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
<div id="footer" class="bg-[#BFD962] py-[4em] items-center">
  <Footer />
  <div id="credit" class="flex justify-between my-[1em] mt-[2em] px-[4em] pt-[4em]">
    <div class=" text-primary text-[1rem]">
      <p>© 2023 emote Care. All rights reserved. </p>
      <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
    </div>
    <div id="social_media" class="flex gap items-center">
      <img src="telegram_icon.svg" alt="telegram" />
      <img src="twitter_icon.svg" alt="twitter" />
      <img src="linkedIn.svg" alt="linkedIn" />
    </div>
  </div>

</div>
