<script>
	export let label = '';
	export let alt = '';
	export let link = '';
	export let bgColor = '#BFD962';
	export let color = 'primary';
</script>

<button
	class={`lg:py-[10px] py-[5px] px-[28px] lg:px-[48px] rounded-full bg-[${bgColor}] text-${color} hover:bg-primary hover:text-[#fff] flex gap-3 w-fit lg:w-full justify-center group`}
>
	<img {alt} class="group-hover:invert" src={link} />
	<p class="font-normal">{label}</p>
</button>
