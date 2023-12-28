<script>
    export let hasIntroVideo = true
</script>

<div id="avatar" class="relative">
    <div class="w-[6em]">
    <img
    alt="user avatar"
    src="profile.png"
    width="100%"
    />
    </div>
    {#if hasIntroVideo }
    <div class="absolute bottom-0 right-0 ">
    <img alt="play video"
    src="play_icon.svg"
    width="100%"
    />
    </div>
    {/if}
</div>
