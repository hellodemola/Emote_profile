<script>
	const identities = ['Female', 'Cisgender', 'Atheist', 'White'];
	const experises = ['Anxiety', 'Relationship Issues', 'Depression'];
	const theories = ['Evidence-based therapy', 'Client-centered Therapy'];
	const bioData =
		"I'm Romina, an experienced therapist dedicated to supporting individuals through life's challenges. With 19 years of expertise, I specialize in areas such as anxiety, depression, and relationship issues. My approach integrates evidence-based therapies with a client-centered focus, tailored to meet your unique needs. <br/> <br/> In our sessions, I provide a safe and non-judgmental space for you to explore your thoughts and emotions. Together, we'll work towards building resilience, enhancing coping skills, and achieving positive changes. <br/>  <br/>In our sessions, I provide a safe and non-judgmental space for you to explore your thoughts and emotions. Together, we'll work towards building resilience, enhancing coping skills, and achieving positive changes.";
</script>

<div
	class="p-[18px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] my-6"
>
	<h2 class="font-medium text-primary">My bio</h2>

	<p
		class="text-primary font-light lg:leading-[22.4px] text-[14px] lg:text-[1rem] my-4 line-clamp-3 md:line-clamp-none"
	>
		{@html bioData}
	</p>

	<div class=" flex gap-2 items-center lg:my-6">
		<h5 class="text-blue text-[14px] lg:text-[16px]">Read more</h5>
		<img src="arrow_down.svg" alt="arrow" />
	</div>

	<div class="flex text-[12px] lg:text-[1rem] my-2 lg:my-0 gap-2 lg:gap-4">
		{#each identities as identity}
			<div class="rounded-full bg-[#F1F1F1] w-fit lg:p-6 lg:py-3 p-2 cursor-pointer">
				<p class="text-primary">{identity}</p>
			</div>
		{/each}
	</div>

	<div class="border border-[#F1F1F1] lg:my-[3em] my-[1em]" />

	<div class="lg:my-[2em]">
		<h3 class="text-primary font-medium lg:text-[1.125rem]">Specialities and expertise</h3>
		<div class="flex text-[12px] lg:text-[1rem] my-2 lg:my-4 gap-2 lg:gap-4">
			{#each experises as expertise}
				<div class="rounded-full bg-[#F1F1F1] w-fit lg:p-6 lg:py-3 p-2 cursor-pointer">
					<p class="text-primary">{expertise}</p>
				</div>
			{/each}
		</div>
	</div>

	<div class="border border-[#F1F1F1] lg:my-[3em] my-[1em]" />

	<div class="my-[2em]">
		<div class="lg:flex justify-between">
			<h3 class="text-primary font-medium lg:text-[1.125rem]">Types of therapy</h3>
			<div>
				<div class="flex lg:gap-2 gap-1 items-center text-[14px]">
					<img alt="" class="w-[1em] lg:w-fit" src="play_gray.svg" />
					<p class="text-gray text-[12px] lg:text-[1rem]">What is types of therapy</p>
				</div>
			</div>
		</div>
		<div class="lg:flex gap-4 lg:my-[2em] my-[1em]">
			{#each theories as theory}
				<div class="rounded-full lg:bg-[#F1F1F1] w-fit lg:p-6 py-2 cursor-pointer underline">
					<p class="text-primary text-[12px] lg:text-[1rem]">{theory}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
