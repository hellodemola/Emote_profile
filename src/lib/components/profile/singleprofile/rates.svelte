<script>
	const rates = [
		{ age: 'FREE', time: '15-min consultation', price: '£0', isAvaliable: true },
		{ age: '18+', time: 'Adults/18+ Individual 50-min session', price: '£64', isAvaliable: true },
		{ age: '16-18', time: 'Young adults (16-18)', price: '£80', isAvaliable: true }
	];
</script>

<div
	class="p-[18px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] my-[2em]"
>
	<div class="flex justify-between items-center my-2">
		<h2 class="text-primary text-[18px] font-medium">Rates</h2>
		<p class="text-gray text-normal">GBP £</p>
	</div>
	{#each rates as rate}
		<div class="flex justify-between my-6">
			<div class="w-full grid grid-cols-6">
				<div class="w-full col-span-1 hidden lg:block">
					<div class="bg-primary rounded-full w-fit p-4 py-2 text-white">
						<p>{rate.age}</p>
					</div>
				</div>
				<div class="col-span-5">
					<p class="lg:text-[1rem] text-[14px] font-light">{rate.time}</p>
				</div>
			</div>
			<p class="lg:text-[1rem] text-[14px]">{rate.price}</p>
		</div>
	{/each}
</div>
