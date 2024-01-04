<script lang="ts">
	import Avatar from '../avatar.svelte';
	import Card from '../cards/card.svelte';
	import Charges from './charges.svelte';
	export let profileProps: any;
</script>

<div class="lg:grid my-4 grid-cols-12">
	<div class="col-span-8">
		<Card>
			<div id="header" class="flex justify-between">
				<div id="profile" class="lg:flex m-3 gap-6 items-center">
					<div class="flex lg:block gap-4 items-center mb-4 lg:mb-0">
						<Avatar url={profileProps?.avatarUrl} />
						<h1 class="font-medium text-lg text-primary lg:hidden">
							{`${profileProps?.firstName} ${profileProps?.lastName}`}
						</h1>
					</div>
					<div>
						<h1 class="font-medium text-lg text-primary hidden lg:block">
							{`${profileProps?.firstName} ${profileProps?.lastName}`}
						</h1>
						<div class="flex gap-2 items-center my-1">
							<img src="experience_icon.svg" alt="experience" />
							<p class="text-primary text-[12px] lg:text-[1rem]">
								{profileProps?.profile?.yearsOfExperience} year of experience
							</p>
						</div>
						<div id="locale" class="flex my-1 lg:my-0 lg:gap-4 gap-2 items-center">
							<div class="flex lg:gap-2 gap-1 items-center">
								<img src="location_icon.svg" alt="location" />
								<p class="text-gray text-[12px] lg:text-[14px]">
									{profileProps?.demographic?.location}, GMT -7
								</p>
							</div>
							<div class="flex lg:gap-2 gap-1 items-center">
								<img src="globle.svg" alt="location" />
								{#if profileProps?.demographic?.mainLanguage && Array.isArray(profileProps?.demographic?.mainLanguage)}
									{#each profileProps?.demographic?.mainLanguage as language}
										<p class="text-gray text-[12px] lg:text-[14px]">{language}</p>
									{/each}
								{:else if profileProps?.demographic?.mainLanguage}
									<p class="text-gray text-[12px] lg:text-[14px]">
										{profileProps?.demographic?.mainLanguage}
									</p>
								{:else}{/if}
							</div>
						</div>
					</div>
				</div>

				<div class="w-[1.5em] cursor-pointer">
					<img sizes="100%" alt="love" src="love.svg" />
				</div>
			</div>

			<div id="profile_description" class="lg:m-2 p-2">
				<p class="text-primary text-[14px] lg:text-[1rem] font-light line-clamp-2">
					{profileProps?.profile?.bio}
				</p>
			</div>
			<div id="grid" class="lg:flex gap-4 p-2 lg:m-2 items-center">
				<div class="flex gap-2 items-center">
					{#if Array.isArray(profileProps?.profile.therapyAreas)}
						<div
							id="tag"
							class="rounded-[16px] lg:bg-[#ECF2D5] font-light p-2 px-4 w-fit my-2 lg:my-0 bg-[#F1F1F1]"
						>
							<p class="text-primary text-[12px] lg:text-[1rem]">
								{Array.isArray(profileProps?.profile.therapyAreas) &&
									profileProps?.profile.therapyAreas[0]}
							</p>
						</div>
					{/if}
					{#if Array.isArray(profileProps?.profile.therapyAreas)}
						<div
							id="tag"
							class="rounded-[16px] lg:bg-[#ECF2D5] p-2 px-4 w-fit my-2 lg:my-0 bg-[#F1F1F1]"
						>
							<p class="text-primary text-[12px] lg:text-[1rem]">
								+{Array.isArray(profileProps?.profile.therapyAreas) &&
									profileProps?.profile.therapyAreas.length}
							</p>
						</div>
					{/if}
				</div>
				<a href="/profile" class="text-blue cursor-pointer m-2 lg:m-0 text-[14px] lg:text-[1rem]"
					>View profile</a
				>
			</div>
			<div class="m-2 my-0 lg:hidden">
				<Charges />
			</div>
		</Card>
	</div>

	<div class="col-span-4 hidden lg:block">
		<div
			class="rounded-[16px] border border-[#F1F1F1] bg-white p-[32px] min:h-fit h-[20em] text-center shadow-md shadow-[rgba(0, 0, 0, 0.05)] my-2 flex flex-row justify-center items-center"
		>
			<Charges />
		</div>
	</div>
</div>
