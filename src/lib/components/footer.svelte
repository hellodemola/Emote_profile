<script>
      let menus = ['For Therapist', 'Who are we', 'How it works', 'Blog'];
      import Button from '$lib/components/buttons/button.svelte';

</script>

<div id="footer" class="bg-[#BFD962] py-[2em] items-center">


<footer>
  <div class='p-4 px-[4em] lg:flex justify-between items-center bg-[#BFD962]'>
    <div id="logo" class="lg:text-center my-6 lg:my-0">
        <p class="lg:text-[2.407rem] font-normal text-primary lg:leading-[48.146px] uppercase tracking-wide text-md">emote</p>
        <p class="uppercase text-primary text-[1.384rem] font-bold lg:tracking-[4.429px] lg:leading-[30.091px]">care</p>
    </div>
    <div id="menu" class="lg:flex gap-4 lg:my-0">
    {#each menus as menu}
      <a href="/" class="font-normal text-primary text-[1.125rem] block">{menu}</a>
    {/each}
    </div>
    <div class="lg:flex hidden gap-5 items-center">
    <div id="button-nav">
    <Button
      label="Browse our Therapists"
      alt="users"
      link="users_white.svg"
      bgColor="#203136"
      color="white"
    />
    </div>
    <div id="login" class="flex gap-2 items-center my-2 lg:my-0 text-center lg:text-left">
      <p>Login</p>
    </div>
    </div>
  </div>
</footer>

<div id="credit" class="lg:flex justify-between my-[1em] lg:mt-[2em] px-[4em] pt-[2em]">
    <div class=" text-primary text-[1.125rem] font-light font-[inter]">
      <p class="lg:leading-[28px]">© 2023 emote Care. All rights reserved. </p>
      <p class="lg:leading-[28px]">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
    </div>
    <div id="social_media" class="flex gap items-center">
      <img src="telegram_icon.svg" alt="telegram" />
      <img src="twitter_icon.svg" alt="twitter" />
      <img src="linkedIn.svg" alt="linkedIn" />
    </div>
  </div>

</div>
