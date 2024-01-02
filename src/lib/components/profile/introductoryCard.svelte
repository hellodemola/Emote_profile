<script>
	import firstLettter from "$lib/helpers/firstLetter";
	import Avatar from "../avatar.svelte";
    import _allProfiles from "./sample";

</script>

<div class="lg:p-[32px] p-2 rounded-[16px] lg:border lg:border-[#F1F1F1] lg:bg-white h-fit lg:shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] lg:my-8 my-2">
  <p class="text-primary font-medium">30 second introduction videos</p>
  <div class="my-4" />
  <div id="avatar" class="flex lg:gap-[32px] gap-[16px] my-2 overflow-auto relative">
    <div id="" class="my-2 cursor-pointer">
      <div class="bg-[#BFD962] rounded-full lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] flex items-center justify-center">

        <img alt="refresh" width="30px" class="m-auto" src="refresh.svg" />

      </div>
      <p class="text-primary text-center mt-2">Refresh</p>
    </div>
    {#each _allProfiles as profile}
    <div class="my-2">
      <div>
      <Avatar url={profile?.avatarUrl} />
      </div>
      <div class="flex gap-2">
        <p class="text-primary text-center mt-2">{profile?.firstName}</p>
        <p class="text-primary text-center mt-2">{firstLettter(profile?.lastName)}</p>
      </div>

    </div>
    {/each}
    <div class="absolute right-0 cursor-pointer top-1/4">
      <img alt="overflow_icon" src="overviewIcon.svg" />
    </div>
  </div>
 </div>
