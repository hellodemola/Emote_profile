<script>
	import FilterHeader from "./filterHeader.svelte";

</script>
  <div id="appointmentType" class="my-6">
      <FilterHeader heading="Price (£ GBP)" />
      <div id="options" class="flex gap-2">
      <div class="border flex-1 border-[#F1F1F1] rounded-[8px] bg-white shadow shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] items-center p-2 justify-between flex text-primary">
        <p class="text-gray">min</p>
        <p>20</p>
      </div>

      <div class="border flex-1 border-[#F1F1F1] rounded-[8px] bg-white shadow shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] items-center p-2 justify-between flex text-primary">
        <p class="text-gray">max</p>
        <p>200</p>
      </div>

      </div>
      <div class="slidecontainer my-6 w-full">
  <input type="range" min="1" max="100" value="50" class="w-full bg-[#BFD962] border border-[#BFD962]" id="myRange">
</div>
    </div>
