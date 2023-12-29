<script>
      let menus = ['For Therapist', 'Who are we', 'How it works', 'Blog'];
      import Button from '$lib/components/buttons/button.svelte';

</script>

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
