<script>
	import choseColor from '$lib/helpers/chooseColor';

	let rating = [
		{ title: 'Heartfelt Harmony', score: '500+' },
		{ title: 'Empathy Explorer', score: '10' },
		{ title: 'Soulful Connection', score: '100' },
		{ title: 'Inspiration Instigator', score: '250' },
		{ title: 'Caring Catalyst', score: '500+' },
		{ title: 'Mindful Maestro', score: '10' },
		{ title: 'Healing Artisan', score: '100' },
		{ title: 'Joyful Guidepost', score: '250' },
		{ title: 'Gratitude Guru', score: '500+' },
		{ title: 'Resilience Maestro', score: '10' },
		{ title: 'Mindful Muse', score: '100' },
		{ title: 'Soulful Symphony', score: '250' },
		{ title: 'Vulnerability Virtuoso', score: '500+' },
		{ title: 'Mind-Map Maestro', score: '10' },
		{ title: 'Energetic Empath', score: '100' },
		{ title: 'Authenticity Architect', score: '250' }
	];
</script>

<div
	class="p-[18px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] my-6"
>
	<h3 class="text-primary font-medium lg:text-[1.125rem] my-4">Ratings</h3>
	<div class="lg:grid grid-cols-4 flex overflow-auto gap-4">
		{#each rating as rate}
			<div class="rounded w-full">
				<div class="w-full">
					<div class="w-full my-5 flex justify-center">
						<div class="relative">
							<div
								style:border={`5px solid ${choseColor(rate.score)?.bgColor}`}
								class="rounded-full lg:w-[7em] lg:h-[7em] w-[52.283px] h-[52.283px] border-[5px]"
							/>
							<div
								style:background={choseColor(rate.score)?.bgColor}
								class="rounded-full lg:h-[2.5em] lg:w-[2.5em] lg:p-3 p-1 b-3 b-[#fff] flex items-center justify-center absolute bottom-0 right-0"
							>
								<p
									style:color={choseColor(rate.score)?.textColor}
									class="lg:text-[12px] text-[8px]"
								>
									{rate.score}
								</p>
							</div>
						</div>
					</div>
					<p class="font-medium text-primary lg:text-[1rem] text-[12px] text-center">
						{rate.title}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
