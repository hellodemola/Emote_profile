<script>
    export let hasIntroVideo = true
    export let url = ""
    export let width = '80px'
</script>

<div id="avatar" style:width={width} class="relative w-fit">
    <div class="">
    <img
    alt="user avatar"
    src={url}
    width="100%"
    class="rounded-full"
    />
    </div>
    {#if hasIntroVideo }
    <div class="absolute bottom-0 right-0 cursor-pointer">
    <img alt="play video"
    src="play_icon.svg"
    width="100%"
    />
    </div>
    {/if}
</div>
