<script>
  import Button from '$lib/components/buttons/button.svelte';
  let menus = ['For Therapist', 'Who are we', 'How it works', 'Blog'];
  let icons = [
    {label:'bell', url: 'bell.svg'},
    {label:'notification', url: 'message.svg'},
    {label:'avatar', url: 'avatar_small.svg'},
  ]
</script>

<nav>
  <div id="top_nav" class="text-center lg:flex justify-center gap-2 items-center h-[32px] border-t border-b border-t-[#DDDAD0] border-b-[#DDDAD0] bg-white hidden">
    <div>
    <p class="text-[0.458rem] font-normal">emote</p>
    <p class="uppercase text-[0.263rem] font-bold">care</p>
    </div>
    <h1 class="text-[0.75rem] font-normal font-[inter]">emoteCare</h1>
  </div>
  <div class='p-4 lg:px-[4em] flex justify-between items-center'>
    <a href="/" id="logo" class="text-center hover:text-blue">
        <span class="lg:text-[1.127rem] text-[0.813rem] font-normal block">emote</span>
        <span class="uppercase text-[0.438rem] lg:text-[0.648rem] font-bold block">care</span>
    </a>

    <!-- Icons for mobile screen -->
    <div class="flex cursor-pointer gap-3 lg:hidden">
    {#each icons as icon}
      <img alt={icon.label} class="" src={icon.url}/>
    {/each}
    </div>
    <!--End of comment for Icon for mobile screen-->

    <div id="menu" class="lg:flex hidden gap-4">
    {#each menus as menu}
      <a href={"#"} class="font-normal text-[#000] text-[1rem] hover:text-blue">{menu}</a>
    {/each}
    </div>

    <div class="hidden lg:flex gap-5 items-center">

    <div id="button-nav">
      <a href="/">
    <Button
      label="Browse our Therapists"
      alt="users"
      link="users.svg"
    />
    </a>
    </div>

    <div id="login" class="hidden lg:flex gap-2 items-center cursor-pointer">
    <img alt="user" class="" src="user.svg"/>
      <a href={'#'} class="">Login</a>
    </div>
    </div>

  </div>



</nav>
