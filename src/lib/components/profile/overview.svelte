<script>
	import Avatar from "../avatar.svelte";
	import Card from "../cards/card.svelte";
	import Charges from "./charges.svelte";
    export let profileProps

</script>
 <div class="grid my-4 grid-cols-12">
        <div class="col-span-8">
        <Card height="20em">

    <div id="header" class="flex justify-between">
    <div id="profile" class="flex m-3 gap-6 items-center">

    <Avatar url={profileProps?.avatarUrl} />
    <div>
    <h1 class="font-medium text-lg text-primary">{`${profileProps?.firstName} ${profileProps?.lastName}`}</h1>
    <div class="flex gap-2 items-center my-1">
        <img src="experience_icon.svg" alt="experience" />
        <p class="text-primary">{profileProps?.profile?.yearsOfExperience} year of experience</p>
    </div>
    <div id="locale" class="flex gap-4 items-center">
        <div class="flex gap-2">
        <img src="location_icon.svg" alt="location" />
        <p class="text-gray"> {profileProps?.profile?.country}, GMT -7</p>
        </div>
        <div class="flex gap-2 items-center">
        <img src="globle.svg" alt="location" />
        {#if profileProps?.demographic?.mainLanguage
        && Array.isArray(profileProps?.demographic?.mainLanguage)}
        {#each profileProps?.demographic?.mainLanguage as language }
        <p class="text-gray">{language}</p>
        {/each}
         {:else if profileProps?.demographic?.mainLanguage}
        <p class="text-gray">{profileProps?.demographic?.mainLanguage}</p>
        {:else}
        {/if}

        </div>
    </div>
    </div>
    </div>
    <div class="w-[1.5em] cursor-pointer">
    <img sizes="100%" alt="love" src="love.svg">
    </div>

    </div>

    <div id="profile_description" class="m-2 p-2">
        <p class="text-primary font-light">
            {profileProps?.profile?.bio}
        </p>
    </div>
    <div id="grid" class="flex gap-4 p-2 m-2 items-center">
       {#if Array.isArray(profileProps?.profile.topAreas)}
    <div id="tag" class="rounded-[16px] bg-[#ECF2D5] p-2 px-4">

       <p class="text-primary">
        {Array.isArray(profileProps?.profile.topAreas) && profileProps?.profile.topAreas[0]}
       </p>

    </div>
    {/if}
    {#if Array.isArray(profileProps?.profile.topAreas)}
    <div id="tag" class="rounded-[16px] bg-[#ECF2D5] p-2 px-4">
       <p class="text-primary">
           +{Array.isArray(profileProps?.profile.topAreas) && profileProps?.profile.topAreas.length}
       </p>
    </div>
     {/if}
    <a href="/profile" class="text-blue cursor-pointer">View profile</a>
    </div>

        </Card>
</div>


        <div class="col-span-4">
        <div class="rounded-[16px] border border-[#F1F1F1] bg-white p-[32px] min:h-fit h-[20em] text-center shadow-md shadow-[rgba(0, 0, 0, 0.05)] my-2">
          <Charges />
        </div>
        </div>



</div>
