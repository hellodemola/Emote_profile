<script>
      let menus = ['For Therapist', 'Who are we', 'How it works', 'Blog'];
      import Button from '$lib/components/buttons/button.svelte';

</script>

<div id="footer" class="bg-[#BFD962] py-[4em] items-center">


<footer>
  <div class='p-4 px-[4em] flex justify-between items-center bg-[#BFD962]'>
    <div id="logo" class="text-center">
        <p class="text-[1.127rem] font-normal">emote</p>
        <p class="uppercase text-[0.648rem] font-bold">care</p>
    </div>
    <div id="menu" class="flex gap-4">
    {#each menus as menu}
      <a href="#" class="font-normal text-[#000] text-[1rem]">{menu}</a>
    {/each}
    </div>
    <div class="flex gap-5 items-center">
    <div id="button-nav">
    <Button
      label="Browse our Therapists"
      alt="users"
      link="users_white.svg"
      bgColor="#203136"
      color="white"
    />
    </div>
    <div id="login" class="flex gap-2 items-center">
      <p>Login</p>
    </div>
    </div>
  </div>
</footer>

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
