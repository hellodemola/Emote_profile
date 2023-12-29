<script>
      let menus = ['For Therapist', 'Who are we', 'How it works', 'Blog'];
      import Button from '$lib/components/buttons/button.svelte';

</script>

<nav>
  <div id="top_nav" class="text-center flex justify-center gap-2 items-center h-[32px] border-t border-b border-t-[#DDDAD0] border-b-[#DDDAD0] bg-[#fff]">
    <div>
    <p class="text-[0.458rem] font-normal">emote</p>
    <p class="uppercase text-[0.263rem] font-bold">care</p>
    </div>
    <h1 class="text-[0.75rem] font-normal font-[inter]">emoteCare</h1>
  </div>
  <div class='p-4 px-[4em] flex justify-between items-center'>
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
      link="users.svg"
    />
    </div>
    <div id="login" class="flex gap-2 items-center">
    <img alt="user" src="user.svg"/>
      <p>Login</p>
    </div>
    </div>
  </div>
</nav>
