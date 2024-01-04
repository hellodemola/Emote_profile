<script>
	import FilterHeader from './filterHeader.svelte';
</script>

<div>
	<FilterHeader isMb={false} heading="Appointment Type" />
	<div id="options" class="flex flex-col gap-[16px] my-2 justify-center">
		<label>
			<input
				type="checkbox"
				class="mr-2 w-[20px] h-[20px] rounded-full border border-[#D0D5DD] bg-[#FFF]"
			/>
			15-min free consultation (coming soon)
		</label>

		<label>
			<input
				type="checkbox"
				class="mr-2 w-[20px] h-[20px] rounded-full border border-[#D0D5DD] bg-[#FFF]"
			/>
			Individual 50-min session
		</label>
	</div>
</div>
