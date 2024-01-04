<script>
	export let hasIntroVideo = true;
	export let url = '';
	export let width = '80px';
</script>

<div id="avatar" class="relative lg:w-[80px] w-[60px]">
	<div class="">
		<img alt="user avatar" src={url} width="100%" class="rounded-full" />
	</div>
	{#if hasIntroVideo}
		<div class="absolute bottom-0 right-0 cursor-pointer">
			<img alt="play video" src="play_icon.svg" class="lg:w-[100%] w-[1em]" />
		</div>
	{/if}
</div>
