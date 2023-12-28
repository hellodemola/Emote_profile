<script>
	import Charges from "$lib/components/profile/charges.svelte";
import Overview from "$lib/components/profile/overview.svelte";

</script>
<div class="p-12 grid-cols-6 grid bg-[#f9f7f5] w-screen h-screen">
    <div class="grid grid-cols-12 col-span-4 grid-rows-1 grid-flow-col h-fit">
        <div class="col-span-8">
        <Overview />
        </div>
        <div class="rounded-[16px] border border-[#F1F1F1] bg-white p-[32px] text-center col-span-4 items-center flex flex-col justify-center">
          <Charges />
        </div>
    </div>
</div>
