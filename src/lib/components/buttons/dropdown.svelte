<script>
	export let label = '';
	export let alt = '';
	export let link = '';
	export let isArr = false;
</script>

<button
	class="py-[8px] px-[24px] rounded-full bg-[#fff] text-primary flex gap-2 border border-[#DDDAD0] shadow shadow[0px_4px_4px_0px_rgba(0, 0, 0, 0.03)] lg:justify-between justify-center w-full lg:w-fit"
>
	<p class="text-[14px] lg:text-[16px]">{label}</p>
	{#if link}
		<img {alt} src={link} />
	{/if}
	{#if isArr}
		<img alt="arrow" src="arrow_down.svg" />
	{/if}
</button>
